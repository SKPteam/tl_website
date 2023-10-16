import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width < 100) {
      const timer = setInterval(() => {
        setWidth((prevWidth) => {
          const newWidth = prevWidth + 1;
          return newWidth <= 100 ? newWidth : 100;
        });
      }, 40);

      return () => {
        clearInterval(timer);
      };
    }
  }, [width]);

  return (
    <div className="fixed h-screen w-screen bg-white flex">
      <div className='m-auto'>
        <Image src='/assets/logo/logo.svg' width={160} height={160} alt='logo' className='mx-auto mb-5 animate-pulse' />
        <div className="w-72 bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#388D4E] h-1.5 transition-all ease-in-out duration-200 rounded-full"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
