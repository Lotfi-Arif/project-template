import React from "react";
import { toast } from "react-toastify";

import { Button } from "../Button";

// import { DiscussButton } from "./DiscussButton";
// import { ReportButton } from "./ReportButton";

interface IProps {
  title: string;
  subtitle?: string;
  type: "success" | "error";
  disableFeedback?: boolean;
  onNext?: () => void;
}

export const Feedback = ({
  title,
  subtitle,
  type,
  disableFeedback = false,
  onNext,
}: IProps): React.ReactElement => {
  const dismiss = (): void => {
    if (onNext) {
      onNext();
    }
    toast.dismiss(1);
  };

  return (
    <div
      className={`w-full flex flex-col md:flex-row py-8 pb-12 px-4 md:px-20 lg:px-44 justify-between items-center cursor-default ${
        type === "success" ? "bg-success-bg" : "bg-error-bg"
      }`}
    >
      <div className="flex flex-col w-full md:flex-row">
        <img
          src={
            type === "success"
              ? "/feedback/check.svg"
              : "/feedback/cross.svg"
          }
          alt={type}
          className="hidden w-20 h-20 mr-4 md:block"
        />
        <div className="flex flex-row justify-center w-full h-20 md:flex-col">
          <div className="flex flex-col w-full">
            <p
              className={`font-extrabold text-2xl font-sans ${
                type === "success" ? "text-success-text" : "text-error-text"
              }`}
            >
              {title}
            </p>
            <p
              className={`text-lg font-sans mb-4 ${
                type === "success" ? "text-success-text" : "text-error-text"
              }`}
            >
              {subtitle}
            </p>
          </div>
          {disableFeedback ? null : (
            <div className="flex flex-row">
              {/* <ReportButton type={type} />
              <DiscussButton type={type} /> */}
            </div>
          )}
        </div>
      </div>
      <Button
        variant={type === "success" ? "green" : "danger"}
        onClick={dismiss}
        className="w-full md:w-max"
      >
        Continue
      </Button>
    </div>
  );
};
