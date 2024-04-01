import { RefObject, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

type MessageModalType = {
  isModalOpen: boolean;
  modalRef: RefObject<HTMLDivElement>;
};

const AddMessageModal = ({ isModalOpen, modalRef }: MessageModalType) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const db = getFirestore(); // Initialize Firestore
  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  const handleMessageAdd = async () => {
    if (message.length === 0 || !user) return; // Validation
    setIsLoading(true);
    try {
      const messageCollectionRef = collection(db, "messages");
      await addDoc(messageCollectionRef, {
        message: message,
        username: user.displayName,
        uid: user?.uid,
        userAvatar:
          user?.photoURL ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        createdAt: serverTimestamp(),
      });
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={modalRef}
      className={`messageModal md:ps-[90px]  transition-all duration-300 fixed top-0 modal-overlay w-full h-screen bg-[rgba(0,0,0,0.6)] flex items-center justify-center ${
        isModalOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }  `}
    >
      <div className="container md:max-w-[600px] px-4 mx-auto">
        <div className="messageModal__container flex flex-col justify-center items-center min-w-full  p-3 bg-[#fff] rounded-2xl">
          <p className="mb-2 font-semibold text-xl">What is on your mind ?</p>
          <input
            type="text"
            value={message}
            onChange={(event) => handleMessage(event)}
            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="large-input"
          />
          {message.length > 0 && (
            <button
              onClick={handleMessageAdd}
              type="button"
              className="py-3 mt-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMessageModal;
