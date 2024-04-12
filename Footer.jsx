import { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervallId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervallId);
    };
  }, []);

  function activateClock() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `Tid: ${theZeroStart(hours)}:${theZeroStart(minutes)}:${theZeroStart(
      seconds
    )}`;
  }

  function theZeroStart(number) {
    return number < 10 ? "0" + number : "" + number;
  }

  return (
    <>
      <footer className="footer">
        <h4>Mail: sebastian.bjelkstam@gmail.com</h4>
        <span>{activateClock()}</span>
      </footer>
    </>
  );
}
export default Footer;
