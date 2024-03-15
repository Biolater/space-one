type MessageModalType = {
  isModalOpen: boolean;
};

const AddMessageModal = ({ isModalOpen }: MessageModalType) => {
  return (
    <>
      {isModalOpen && (
        <div className="messageModal fixed top-0 modal-overlay w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="container px-4 mx-auto">
            <div className="messageModal__container min-w-full min-h-[200px] bg-white rounded-2xl"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMessageModal;
