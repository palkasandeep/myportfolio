import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import text from "../../public/textutilities.png"
import nodejs from "../../public/node.png";
import tictac from "../../public/tictac.png";
import fitness from "../../public/fitness.jfif"
import ch from "../../public/chc.jpg";

function PortFolio() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 bg-neutral-600">
          {/* Tic Tac Toe */}
          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center items-center">
            <img
              src={tictac}
              className="w-[180px] h-[180px] p-1 border-[2px]"
              alt="Tic Tac Toe"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">Tic Tac Toe</div>
              <p className="px-2 text-fuchsia-950">
                JavaScript, HTML, and CSS
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <a
                href="https://tictac-psi.vercel.app/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                DEMO
              </a>
              <a
                href="https://github.com/palkasandeep/Tictac"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Express */}
          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center items-center">
            <img
              src={fitness}
              className="w-[180px] h-[180px] p-1 border-[2px]"
              alt="Express"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">Fitness app</div>
              <p className="px-2 text-fuchsia-950">
                Reactsjs,redux,tailwind,materialui,rapidapi
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              {/* Links */}
              <a
                href="https://quiet-faun-7936f6.netlify.app/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                DEMO
              </a>
              <a
                href="https://github.com/palkasandeep/Gymwebsite"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* ReactJS */}
          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center items-center">
            <img
              src={text}
              className="w-[180px] h-[180px] p-1 border-[2px]"
              alt="ReactJS"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">Text-utilities</div>
              <p className="px-2 text-fuchsia-950">
                JavaScript, HTML, and CSS,Reactjs 
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
            <a
                href="https://palkasandeep.github.io/Nadi-Text/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                DEMO
              </a>
              <a
                href="https://github.com/palkasandeep/Nadi-Text"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* NodeJS */}
          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center items-center">
            <img
              src={ch}
              className="w-[180px] h-[180px] p-1 border-[2px]"
              alt="NodeJS"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">Color-background</div>
              <p className="px-2 text-fuchsia-950">
                JavaScript, HTML, and CSS
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              {/* Links */}
              <a
                href="https://color-change-ashen.vercel.app/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                DEMO
              </a>
              <a
                href="https://github.com/palkasandeep/Color-change-"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PortFolio;
