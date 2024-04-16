import { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState(new Date());
  const [myTime, setMyTime] = useState(new Date());
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

  function zeroBegining(number) {
    return number < 10 ? "0" + number : "" + number;
  }

  function activateDate() {
    let year = myTime.getFullYear();
    let month = myTime.getMonth() + 1;
    let day = myTime.getDate();
    return `${zeroBegining(year)}-${zeroBegining(month)}-${zeroBegining(day)}`;
  }

  return (
    <>
      <footer className="footer">
        <h4>Mail: sebastian.bjelkstam@gmail.com</h4>

        <span>
          {activateDate()} & {activateClock()}
        </span>
      </footer>
    </>
  );
}
export default Footer;
