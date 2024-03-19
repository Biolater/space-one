import MessageCard from "../MessageCard/MessageCard";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore"; 
type Messages = {
  id: number;
  username: string;
  avatar: string;
  message: string;
  time: Date;
};


const Messages = () => {
  return (
    <div className="messages md:ps-[90px]">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl text-white font-semibold mb-4">Messages</h1>
        <div className="grid gap-6">

        </div>
      </div>
    </div>
  );
};

export default Messages;
