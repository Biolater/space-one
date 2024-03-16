import { RefObject } from "react";

type MessageModalType = {
  isModalOpen: boolean;
  modalRef: RefObject<HTMLDivElement>;
};



const AddMessageModal = ({ isModalOpen, modalRef }: MessageModalType) => {
  
  return (
    <div ref={modalRef}  className={`messageModal transition-all duration-300 fixed top-0 modal-overlay w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center ${isModalOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}  `}>
      <div className="container px-4 mx-auto">
        <div className="messageModal__container min-w-full min-h-[200px] bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};  

export default AddMessageModal;
