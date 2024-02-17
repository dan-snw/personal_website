import React, { useState, useEffect } from 'react';
const GetInTouch = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow1(true);
    }, 500);
    const timeout2 = setTimeout(() => {
      setShow2(true);
    }, 1500);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []); // Empty dependency array ensures this effect runs only once on compone
  return (
    <div>
      <h1 className={show1 ? 'show' : ''}>I'd love to hear from you!</h1>
      <h3 className={show2 ? 'show' : ''}>If you'd like to get in touch about an upcoming opportunity, or if you just want to reach out, then you can <a href="mailto:danjsnow@outlook.com">email me</a> or shoot me a message on <a href="https://www.linkedin.com/in/dan-snow-60363a299">LinkedIn.</a></h3>
    </div>
  )
}

export default GetInTouch;
