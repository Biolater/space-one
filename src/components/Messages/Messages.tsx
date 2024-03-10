import MessageCard from "../MessageCard/MessageCard";
import { faker } from "@faker-js/faker";
type Messages = {
  id: number;
  username: string;
  avatar: string;
  message: string;
  time: Date;
};
const Messages = () => {
  const generateMessages = (numMessages: number) => {
    const messages: Messages[] = [];
    for (let i = 0; i < numMessages; i++) {
      messages.push({
        id: i,
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        message: faker.lorem.sentence(),
        time: faker.date.recent(),
      });
    }
    return messages;
  };
  console.log(generateMessages(5)); 
  return (
    <div className="messages md:ps-[90px]">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl text-white font-semibold mb-4">Messages</h1>
        <div className="grid gap-6">
          {generateMessages(25).map((message: Messages) => (
            <MessageCard
              key={message.id}  
              message={message.message}
              avatar={message.avatar}
              time={message.time}
              username={message.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
