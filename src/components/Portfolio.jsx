import React, { useState, useEffect } from 'react';
const Portfolio = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

    useEffect(() => {
      const timeout1 = setTimeout(() => {
        setShow1(true);
      }, 0);
      const timeout2 = setTimeout(() => {
        setShow2(true);
      }, 500);
      const timeout3 = setTimeout(() => {
        setShow3(true);
      }, 1000);
      const timeout4 = setTimeout(() => {
        setShow4(true);
      }, 1500);
      const timeout5 = setTimeout(() => {
        setShow5(true);
      }, 2000);
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
      };
    }, []); // Empty dependency array ensures this effect runs only once on compone
  return (
    <div>
      <h1 className={show1 ? 'show' : ''}>I am passionate about programming.</h1>
      <h3 className={show2 ? 'show' : ''}>Alongside my full-time job as a data scientist, I spend my spare time improving my software engineering skills.</h3>
      <h3 className={show3 ? 'show' : ''}>I completed a number of projects from the <a href="https://www.theodinproject.com">Odin Project</a> course on web development, like making a <a href="https://dansnow.co.uk/calculator/">calculator app</a> and designing a simple online <a href="https://dansnow.co.uk/etchasketch/">etch-a-sketch.</a></h3>
      <h3 className={show4 ? 'show' : ''}>Most years I enjoy the Advent of Code challenges, which are useful for getting up to scratch in a new language, as well as being fun. The later problems can become a bit time consuming though - I once spent a full four days trying to solve Day 14...</h3>
      <h3 className={show5 ? 'show' : ''}>You can check out all of my public projects on <a href="https://github.com/Dan2796">GitHub</a>- the front end ones have live demo links in the README files.</h3>
    </div>
  )
}

export default Portfolio;
