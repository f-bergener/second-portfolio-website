import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const string =
    'Hello\u00a0my\u00a0name\u00a0is\u00a0FreddieI\u00a0like\u00a0to\u00a0build\u00a0stuff';
  const [isCursorRendered, setIsCursorRendered] = useState(false);
  const [stringIdx, setStringIdx] = useState(0);
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsCursorRendered(!isCursorRendered);
    }, 600);
  }, [isCursorRendered]);

  useEffect(() => {
    setTimeout(() => {
      if (stringIdx < string.length) {
        const arrayCopy = structuredClone(array);
        arrayCopy.push(string[stringIdx]);
        setArray(arrayCopy);
        setStringIdx(stringIdx + 1);
      }
    }, 120);
  }, [stringIdx]);

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex justify-center items-center w-4/5 h-40 border-2 border-black'>
        <div className='h-4 w-[11.5rem] flex flex-wrap items-center'>
          {array.map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
          <div
            className={`w-2 ml-[0.1rem] h-full bg-black ${
              isCursorRendered ? 'visible' : 'invisible'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
