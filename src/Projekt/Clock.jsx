import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervallId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervallId);
    };
  });

  function activateClock() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${theZeroStart(hours)}:${theZeroStart(minutes)}:${theZeroStart(
      seconds
    )}`;
  }

  function theZeroStart(number) {
    return number < 10 ? "0" + number : "" + number;
  }
  return (
    <>
      <div className="theClock">
        <div className="backClock">
          <span className="clockTime">{activateClock()}</span>
        </div>
      </div>
    </>
  );
}

export default Clock;
