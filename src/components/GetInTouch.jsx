import React, { useState, useEffect } from 'react';
const GetInTouch = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

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
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []); // Empty dependency array ensures this effect runs only once on compone
  return (
    <div>
      <h1 className={show1 ? 'show' : ''}>I'd love to hear from you!</h1>
      <h3 className={show2 ? 'show' : ''}>You can email me at <a href="mailto:danjsnow@outlook.com">danjsnow@outlook.com.</a></h3>
      <h3 className={show3 ? 'show' : ''}>Or else find me on <a href="https://www.linkedin.com/in/dan-snow-60363a299">LinkedIn.</a></h3>
    </div>
  )
}

export default GetInTouch;
