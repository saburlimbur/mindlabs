import React from "react";
import Countdown from "react-countdown";
import { toast } from "react-hot-toast";

function CountdownTimer() {
  const renderCountdown = ({ minutes, seconds, completed }) => {
    if (completed) {
      toast.error("Time's up!", {
        icon: "⏰",
        duration: 4000,
      });
      return null;
    } else {
      const m = String(minutes).padStart(2, "0"); // menit
      const s = String(seconds).padStart(2, "0"); // detik
      return (
        <span>
          {m}:{s}
        </span>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 15 * 60 * 1000} // 15 menit
      renderer={renderCountdown}
    />
  );
}

export default CountdownTimer;
