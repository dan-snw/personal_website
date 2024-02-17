import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow1(true);
    }, 500);
    const timeout2 = setTimeout(() => {
      setShow2(true);
    }, 1500);
    const timeout3 = setTimeout(() => {
      setShow3(true);
    }, 2500);
    const timeout4 = setTimeout(() => {
      setShow4(true);
    }, 3500);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []); // Empty dependency array ensures this effect runs only once on compone
  return (
    <div>
      <h1 className={show1 ? 'show' : ''}>Hi, I'm Dan.</h1>
      <h3 className={show2 ? 'show' : ''}>I work as a data scientist for the Labour party, a job I started in September 2023 after completing a PhD in Political Sociology.</h3>
      <h3 className={show3 ? 'show' : ''}>Alongside my PhD I taught myself to an advanced level in R, and also picked up a proficient knowledge of C#, Java, Javascript, and other languages along the way just for fun.</h3>
      <h3 className={show4 ? 'show' : ''}>I am passionate about programming - the problem solving, the systems thinking, and the learning process itself, have kept me invested these last five years, and I'll keep improving into the future.</h3>
    </div>
  )
}

export default Welcome;
