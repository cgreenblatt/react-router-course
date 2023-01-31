import React, { useEffect, useState } from 'react';

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShow(true), wait);
    return () => {
      window.clearTimeout(timeoutId);
    };
  });

  return show ? children : null;
}

export default function Loading() {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  );
}
