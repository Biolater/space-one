// Import the necessary functions and types
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

// Import the Firebase app, auth, and db
// @ts-expect-error expected
import { auth, db, colRef } from "../../firebase";
import { FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";
import imageTypes from "../../utils/imageTypes";
import FailToastMessage from "../Dashboard/FailToastMessage";

type ChangeDetails = {
  profilePhoto: File | null;
  displayName: string;
  bio: string;
};

export function BackgroundBeamsDemo() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [userNameIsEditing, setUserNameIsEditing] = useState<boolean>(false);
  const [bioIsEditing, setBioIsEditing] = useState<boolean>(false);
  const [nameFail, setNameFail] = useState<boolean>(false);
  const [bioFail, setBioFail] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [changeDetails, setChangeDetails] = useState<ChangeDetails>({
    profilePhoto: null,
    displayName: "",
    bio: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (imageTypes.includes(e.target.files[0].type)) {
        setChangeDetails({
          ...changeDetails,
          profilePhoto: e.target.files[0],
        });
      } else {
        setError("Please select an image file");
      }
    }
  };

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeDetails({
      ...changeDetails,
      displayName: e.target.value,
    });
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeDetails({ ...changeDetails, bio: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (changeDetails.displayName.trim().length > 0) {
      setError("");
      const auth = getAuth();
      if (auth.currentUser) {
        try {
          const userDocRef = doc(db, "users", user?.uid);
          await updateDoc(userDocRef, {
            name: changeDetails.displayName,
          });
        } catch (err: any) {
          setError(err.message);
        }
        updateProfile(auth.currentUser, {
          ...user,
          displayName: changeDetails.displayName,
        })
          .then(() => {
            setUserNameIsEditing(false);
            setMessage("Account updated successfully");
            setError("Account updated successfully");
            setTimeout(() => {
              setMessage("");
            }, 2200);
            setUser({
              ...user,
              displayName: changeDetails.displayName,
            });
            setChangeDetails({
              profilePhoto: null,
              displayName: "",
              bio: "",
            });
          })
          .catch((error) => {
            setError(error.message);
          });
      }
    } else {
      setError("Please enter a name");
      setNameFail((prev) => !prev);
    }
    if (changeDetails.profilePhoto) {
      setLoading(true);
      setError("");
      const storage = getStorage();
      const storageRef = ref(
        storage,
        "profilePictures/" + changeDetails.profilePhoto.name
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        changeDetails.profilePhoto
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          setError(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const auth = getAuth();
            if (auth.currentUser) {
              updateProfile(auth.currentUser, {
                ...user,
                photoURL: downloadURL,
              })
                .then(() => {
                  const firestore = getFirestore();
                  const userDocRef = doc(firestore, "users", user?.uid);
                  updateDoc(userDocRef, {
                    displayImage: downloadURL,
                  });
                })
                .then(() => {
                  setMessage("Account updated successfully");
                  setError("Account updated successfully");
                  setLoading(false);
                  setUser({
                    ...user,
                    photoURL: downloadURL,
                  });
                  setChangeDetails({
                    profilePhoto: null,
                    displayName: "",
                    bio: "",
                  });
                })
                .catch((error) => {
                  setError(error.message);
                });
            }
          });
        }
      );
    }
  };

  const handleBioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (changeDetails.bio.trim().length < 1) {
      setError("Please enter a bio");
      setBioFail((prev) => !prev);
    } else {
      const userDocRef = doc(db, "users", user?.uid);
      try {
        await updateDoc(userDocRef, {
          bio: changeDetails.bio,
        });
        setBio(changeDetails.bio);
        setMessage("Bio updated successfully");
        setError("Bio updated successfully");
        setBioIsEditing(false);
        setChangeDetails({
          ...changeDetails,
          bio: "",
        });
      } catch (error) {
        console.error("Error updating bio:", error);
        setError("Error updating bio."); // Set error state
      }
    }
  };

  const fetchBio = async () => {
    const userDocRef = doc(db, "users", user?.uid);
    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        return docSnap.data().bio;
      } else {
        return "bio does not exist";
      }
    } catch (error) {
      console.error("Error fetching bio:", error);
    }
  };

  useEffect(() => {
    const getBio = async () => {
      if (user) {
        try {
          const bio = await fetchBio();
          setBio(bio);
        } catch (error) {
          console.error("Error fetching bio:", error);
          setError("Error fetching bio."); // Set error state
        } finally {
          setLoading(false); // Stop loading state regardless
        }
      }
    };

    getBio();
  }, [user]);

  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="rays flex items-center justify-center"></div>
        </div>
      )}
      {!loading && (
        <div className="h-screen bg-primary relative flex flex-col items-center justify-start antialiased">
          <div className="max-w-2xl z-10 relative flex flex-col items-center gap-4 mx-auto px-4 py-8">
            <FailToastMessage
              message={error}
              success={message.length > 0}
              messageName={nameFail}
              bioAlert={bioFail}
            />
            <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-primary font-bold">
              My Profile
            </h1>
            <div className="profile__photo relative">
              {user && (
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleSubmit}
                >
                  <FaEdit className="absolute cursor-pointer bottom-0 right-0 text-2xl transition-opacity text-white opacity-0" />
                  <input
                    type="file"
                    className="absolute w-36 h-6 opacity-0  bottom-0 right-0 cursor-pointer"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                </form>
              )}
              <img
                className="rounded-full max-w-24 w-24 h-24 object-cover"
                src={
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
                }
                alt="profile photo"
              />
            </div>
            {userNameIsEditing ? (
              <div className="changeName flex items-center gap-3">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handleDisplayNameChange(e)}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                ></input>
                <button
                  onClick={() => {
                    setUserNameIsEditing(false);
                    setChangeDetails({
                      ...changeDetails,
                      displayName: "",
                    });
                  }}
                  type="button"
                  className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <p className="text-white relative text-xl font-bold">
                {user && user.displayName}
                <span
                  onClick={() => setUserNameIsEditing(true)}
                  className="absolute text-base -right-10 top-1/2 -translate-y-1/2 mt-[1px] cursor-pointer text-[#777]"
                >
                  Edit
                </span>
              </p>
            )}
            {bioIsEditing ? (
              <div className="changeBio flex items-center gap-3">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handleBioChange(e)}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your bio"
                ></input>
                {changeDetails.bio.length > 0 && (
                  <button
                    onClick={(e) => handleBioSubmit(e)}
                    type="button"
                    className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Save
                  </button>
                )}
                <button
                  onClick={() => {
                    setBioIsEditing(false);
                    setChangeDetails({
                      ...changeDetails,
                      bio: "",
                    });
                  }}
                  type="button"
                  className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <p className="text-white relative text-xl font-bold">
                {user && bio}
                <span
                  onClick={() => setBioIsEditing(true)}
                  className="absolute text-base -right-10 top-1/2 -translate-y-1/2 mt-[1px] cursor-pointer text-[#777]"
                >
                  Edit
                </span>
              </p>
            )}

            {(changeDetails.profilePhoto ||
              changeDetails.displayName.length > 0) && (
              <button
                onClick={(e) => handleSubmit(e)}
                className="h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Save Changes
              </button>
            )}
          </div>
          <BackgroundBeams />
        </div>
      )}
    </div>
  );
}

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
    "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
    "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
    "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
    "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
    "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
    "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
    "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
    "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
    "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
    "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
    "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
    "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
    "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
    "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
    "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
    "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
    "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
    "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
    "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
    "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
    "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
    "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
    "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
    "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
    "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
    "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
    "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
    "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
  ];
  return (
    <div
      className={cn(
        "absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className=" z-0 h-full w-full pointer-events-none absolute "
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 31359C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              x1="100%"
              x2="100%"
              y1="100%"
              y2="100%"
              key={`gradient-${index}`}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
