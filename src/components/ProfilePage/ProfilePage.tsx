import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

export default function ProfilePage() {
  const { username } = useParams();
  type user = {
    bio: string;
    email: string;
    name: string;
    uid: string;
    password: string;
    displayImage: string;
  };

  const [userData, setUserData] = useState<user | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      const db = getFirestore();
      const usersRef = collection(db, "users"); // Reference the collection
      const q = query(usersRef, where("name", "==", username));

      try {
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("User not found");
        } else {
          // Assuming one matching user
          const userDoc = querySnapshot.docs[0];
          setUserData(userDoc.data() as user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [username, userData]);

  return (
    <div>
      {userData ? (
        <div className="container px-4 mx-auto py-6 text-center">
          {/* Display user data */}
          <div className="profileImg w-[100px] mx-auto h-[100px]">
            <img
              className="max-w-full rounded-full max-h-full w-full object-cover h-full"
              src={userData?.displayImage}
              alt="Profile"
            />
          </div>
          <h1 className="text-3xl font-semibold text-white text-center">
            {userData.name}
          </h1>
          <p className="text-lg text-white">{userData.bio}</p>
          {/* etc. */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
