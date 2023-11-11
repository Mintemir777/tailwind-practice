import { useState, useEffect } from "react";
export default function Home() {
  const library = require("./images/wallpaperflare.com_wallpaper.jpg");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate: string[] = [
    "history comes alive",
    "learn more about history",
    "you can explore the world of rare books",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div
      className="bg-blue-950 min-h-screen flex bg-cover bg-center"
      style={{ backgroundImage: `url(${library})` }}
    >
      <div className="flex-1 px-8 py-20">
        <h1 className="text-6xl text-white font-extrabold">
          Welcome to our website, where{" "}
          <span className="text-orange-500">{text}</span>!
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <div
          className="rounded-full overflow-hidden h-full"
          style={{ filter: "brightness(10%)" }}
        >
        </div>
      </div>
    </div>
  );
}
