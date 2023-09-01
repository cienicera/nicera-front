"use client";

import { useState, useEffect, useRef } from 'react';
import Navigation from './component/navbar';


export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const blobRef = useRef(null);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    const animateBlob = () => {
      const blob = blobRef.current;
      if (blob) {
        setTimeout(() => {
          blob.style.left = `${mousePosition.x}px`;
          blob.style.top = `${mousePosition.y}px`;
        }, 100);
      }
    };

    useEffect(() => {
      animateBlob();
    }, [mousePosition]);

    const changeText = (event) => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iteration = 0;
      const target = event.currentTarget;

      const interval = setInterval(() => {
        target.innerText = target.dataset.value
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
      
        if(iteration >= target.dataset.value.length){ 
          clearInterval(interval);
        }
      
        iteration += 1 / 3;
      }, 30);
    };

  return (
    <>
    
    <div className="root min-h-screen w-screen items-center relative z-10 b bg-black  grid " onMouseMove={handleMouseMove}  >
    
      <div className='w-screen h-screen absolute z-0  flex justify-center items-center overflow-hidden'>
      
      <video
            src='/show_strk.mov'
            loop
            muted
            autoPlay
            playsInline
            className="scale-150 absolute object-cover   h-max "
            title="Background Video"
          ></video>
        
        {/* <div className='hidden xl:block' ref={blobRef} id="blob"></div> */}
      </div>
      <div className='w-screen h-screen backdrop-blur-xl absolute z-2'></div>
      <div className='h-full grid items-center'>
        <div className='h-90 font-extralight text-4xl lg:text-7xl grid grid-rows-3 items-center justify-items-center overflow-hidden'>
                    <h1 className='text-white font-black' data-value="HISTOIRE" onMouseOver={changeText}>
                    HISTORIA
                    </h1>
                    <h1 className='text-white text-stroke' data-value="CORPS" onMouseOver={changeText}>
                    CORPUS
                    </h1>
                    <h1 className='text-white font-black' data-value="MEMOIRE" onMouseOver={changeText}>
                    MEMORIA
                    </h1>
                   
                </div>
                </div>

        </div>

        </>
  );
};

