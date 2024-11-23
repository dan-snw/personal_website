import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

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
      <h3 className={show2 ? 'show' : ''}>I work as a software engineer at <a href="https://www.fundapps.co/">FundApps</a>, a SaaS company offering automated compliance monitoring services to financial institutions.</h3>
      <h3 className={show3 ? 'show' : ''}>Outside of my job I enjoy spending my time on the squash court, the football pitch, and around the board game table.</h3>
      <h3 className={show4 ? 'show' : ''}>To find out more, take a look at <NavLink to='/aboutMe'>About Me</NavLink>.</h3>
    </div>
  )
}

export default Welcome;
