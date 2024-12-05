// pages/index.tsx
import { useEffect, useState } from "react";
//@ts-ignore
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [countdown, setCountdown] = useState<number>(10);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  useEffect(() => {
    Aos.init({
      easing: "linear",
      duration: 500,
    });
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
    window.ConfettiPage.play();
  };

  return (
    <div className="h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      <div className="mt-8 grid grid-cols-3 gap-4">
        <img
          data-aos="fade-up"
          data-aos-delay={1000}
          src="/anisha1.jpg"
          alt="Photo 1"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={1200}
          src="/anisha2.jpg"
          alt="Photo 2"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={1300}
          src="/anisha3.jpg"
          alt="Photo 3"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-6xl font-extrabold animate-pulse">
        Happy Birthday, Anisha!
      </h1>
      {countdown > 0 && (
        <p className="mt-4 text-xl">
          Countdown: {countdown}s until the celebration!
        </p>
      )}

      <button
        onClick={handleAudioPlay}
        className="mt-6 bg-yellow-400 text-black py-2 px-4 rounded-xl hover:bg-yellow-500 transition duration-300"
      >
        Celebrate
      </button>
      <audio autoPlay>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
