import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

function Description() {
  const [text, { isDone }] = useTypewriter({
    words: [
      "> Hello World...\n I'm Jac Royston Rees, A Full-Stack developer currently working at Vodafone UK with a First Class Honours in Computer Science from Swansea University. I have experience across a range of technologies including TypeScript, React, Java, Spring, SQL, Azure etc. Feel free to stick around and take a look at some of my work.",
    ],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (isDone) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [isDone]);

  return (
    <div className="w-[100%] max-w-4xl mx-auto h-[400px] md:h-[250px] lg:h-[300px] my-4 lg:my-8 bg-gray-900 rounded-xl shadow-lg relative">
      <div className="relative flex items-center justify-center p-2 bg-gray-800 rounded-t-lg shadow-xl">
        <div className="absolute left-4 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-white flex items-center sm:text-xl">
          <FolderOpenOutlinedIcon
            className="h-4 w-4 hover:text-gray-400 cursor-pointer mr-1 hidden sm:block"
            onClick={() => window.open("https://github.com/jacroyrees", "_blank")}
          />
          Jac Royston Rees
          <span className="hidden md:inline"> - Full Stack Engineer</span>
        </span>
      </div>
      <div className="p-2 lg:p-4 text-white font-mono min-h-[200px]">
        <p>{text}_</p>
        {showButtons && (
          <div className="relative mt-6 bottom-0 left-0 right-0 mb-2  space-x-4 flex items-center justify-center">
            <button className="px-4 py-2 border-2 border-dashed border-white text-white font-mono hover:bg-gray-700 active:bg-gray-800">
              &gt; View Work
            </button>
            <button className="px-4 py-2 border-2 border-dashed border-white text-white font-mono hover:bg-gray-700 active:bg-gray-800">
              &gt; View Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;