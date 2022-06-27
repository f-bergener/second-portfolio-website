import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { AnimatePresence, motion } from 'framer-motion';

const Home: NextPage = () => {
  const string = 'Hello my name is FreddieI like to build stuff';
  const [isCursorRendered, setIsCursorRendered] = useState(false);
  const [stringIdx, setStringIdx] = useState(0);
  const [array, setArray] = useState<string[]>([]);
  const [isArrowRendered, setIsArrowRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCursorRendered(!isCursorRendered);
    }, 600);
  }, [isCursorRendered]);

  useEffect(() => {
    setTimeout(() => {
      if (stringIdx < string.length) {
        const arrayCopy = structuredClone(array);
        const char = string[stringIdx] === ' ' ? '\u00a0' : string[stringIdx];
        arrayCopy.push(char);
        setArray(arrayCopy);
        setStringIdx(stringIdx + 1);
      }
    }, 120);
  }, [stringIdx]);

  useEffect(() => {
    if (stringIdx === string.length - 1) {
      setIsArrowRendered(true);
    }
  }, [stringIdx]);

  return (
    <div className='flex flex-col items-center w-screen h-screen bg-charcoal relative'>
      <div className='w-[69rem] mt-20 flex flex-wrap justify-start items-center text-middle-blue text-8xl'>
        {array.map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
        <div
          className={`w-[3rem] h-[4.8rem] ml-[0.4rem] bg-middle-blue ${
            isCursorRendered ? 'visible' : 'invisible'
          }`}
        ></div>
      </div>
      <div
        className={`${
          isArrowRendered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000 text-middle-blue absolute top-[88%]`}
      ></div>
    </div>
  );
};

export default Home;
