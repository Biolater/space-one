import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";

export default function ProfilePage() {
  const { username } = useParams();
  type user = {
    bio: string;
    email: string;
    name: string;
    uid: string;
    password: string; // Consider not storing password in clear text
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
  }, [username]);

  return (
    <div>
      {userData ? (
        <div className="container px-4 mx-auto py-6 text-center"> 
          {/* Display user data */}
          <div className="profileImg">
            
          </div>
          <h1 className="text-3xl font-semibold text-white text-center">{userData.name}</h1> 
          <p>{userData.bio}</p>
          {/* etc. */}
        </div>
      ) : (
        <p>Loading...</p>
      )} 
    </div>
  );
}
