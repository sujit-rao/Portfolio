import React, { useState, useEffect } from 'react';


function ChangingWords() {
  const [words, setWords] = useState(["Hello", "Hola", "Bonjour", "Hi", "Salut", "Namaste", "Konnichiwa", "Olá", "Annyeonghaseyo", "Hallo"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change text every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className=" relative mt-5">
      <span className=" md:text-7xl text-4xl font-semibold text-wheat-600 ">
        {words[index]}
      </span>
    </div>
  );
}

export default ChangingWords;
