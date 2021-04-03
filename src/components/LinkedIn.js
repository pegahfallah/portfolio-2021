import React, { useState, useMemo, useCallback } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/lf30_editor_bplzppe0.json";

const buttonStyle = {
  display: "inline-block",
  margin: "10px auto",
  marginRight: "10px",
  border: "none",
  color: "white",
  backgroundColor: "#647DFF",
  borderRadius: "2px",
  fontSize: "15px",
};

const defaultOptions = {
  hover: true,

  autoplay: true,
  loop: false,

  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function LinkedIn() {
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const handlePlay = useCallback(() => {
    setIsStopped(false);
    setIsPaused(false);
  }, []);

  const handleStop = useCallback(() => {
    setIsStopped(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  //   return useMemo(() => {
  return (
    <div className="controlled">
      <Lottie
        options={defaultOptions}
        height={30}
        width={30}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
  //   }, [isStopped, isPaused, handleStop, handlePlay, handlePause]);
}

export default LinkedIn;
