import { useEffect, useState } from "react";
import MessageCard from "../MessageCard/MessageCard";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

type Message = {
  // Modified "Messages" to "Message"
  id: string; // Firestore uses strings for document IDs
  username: string;
  userAvatar: string;
  message: string;
  createdAt: Date; // Assuming your 'createdAt' field stores Date objects
};

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Initialize messages state

  useEffect(() => {
    const fetchMessages = async () => {
      const db = getFirestore();
      const messagesRef = collection(db, "messages");
      const orderedQuery = query(messagesRef, orderBy("createdAt"));

      // Initial Fetch
      const initialSnapshot = await getDocs(orderedQuery);
      const initialMessages = initialSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        username: doc.data().username,
        userAvatar: doc.data().userAvatar,
        message: doc.data().message,
      }));
      setMessages(initialMessages);

      const unsubscribe = onSnapshot(orderedQuery, (querySnapshot) => {
        const updatedMessages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate(),
          username: doc.data().username,
          userAvatar: doc.data().userAvatar,
          message: doc.data().message,
        }));
        setMessages(updatedMessages);
      });

      return () => unsubscribe();
    };

    fetchMessages();
  }, []);

  return (
    <div className="messages md:ps-[90px] max-h-[calc(100vh-56px)] md:max-h-[100%] overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl text-white font-semibold mb-4">Messages</h1>
        <div className="grid gap-6">
          {messages.map((message: Message) => (
            <MessageCard
              key={message.id}
              time={message?.createdAt} // Pass the actual createdAt
              username={message?.username}
              message={message?.message}
              avatar={message?.userAvatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
