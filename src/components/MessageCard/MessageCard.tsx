import { Link } from "react-router-dom";

type Message = {
  username: string;
  avatar: string;
  message: string;
  time: Date;
};

const MessageCard = ({ message, avatar, time, username }: Message) => {
  return (
    <div className="message-item p-3 text-white">
      <div className="flex items-center gap-4">
        <Link to={`/profile/${username}`}>
          <img
            src={avatar}
            alt="avatar"
            className="w-12 object-cover h-12 rounded-full"
          />
        </Link>
        <div>
          <h2 className="font-semibold">{username}</h2>
          <p className="text-gray-500">{time.toDateString()}</p>
        </div>
      </div>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default MessageCard;
