"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Errorrr", error);

  return (
    <>
      <div>An Unexpected Error Has Occured </div>
      <button
        className="btn"
        onClick={() => {
          reset();
        }}
      >
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
