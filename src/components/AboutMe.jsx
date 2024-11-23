import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
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
      <h1 className={show1 ? 'show' : ''}>I find programming really fun...</h1>
      <h3 className={show2 ? 'show' : ''}>That's what I increasingly came to realise while completing a PhD in Political Sociology, and then working as a data scientist for the Labour Party.</h3>
      <h3 className={show3 ? 'show' : ''}>My day-to-day involved writing R code to analysis data, but I found the code itself more interesting than the results of the analysis.</h3>
      <h3 className={show4 ? 'show' : ''}>I therefore spent a lot of my free time working on side projects that involved learning Java, React, and C#.</h3>
      <h3 className={show5 ? 'show' : ''}>You can check out some of these projects on <a href="https://github.com/dan-snw">GitHub</a> - the front end ones have live demo links in the README files.</h3>
    </div>
  )
}

export default AboutMe;
