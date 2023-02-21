import React from "react";
import { ToastContainer, Slide } from "react-toastify";

export const FeedbackContainer = (): React.ReactElement => {
  return (
    <ToastContainer
      closeOnClick={false}
      closeButton={false}
      className="bottom-0 w-screen p-0 rounded-none"
      bodyClassName="w-screen p-0 rounded-none"
      toastClassName="w-screen mb-0 p-0 rounded-none"
      transition={Slide}
      position="bottom-center"
      hideProgressBar={true}
      pauseOnHover={true}
      draggable={true}
      limit={1}
    />
  );
};
