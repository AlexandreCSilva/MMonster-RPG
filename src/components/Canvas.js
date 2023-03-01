import React, { createRef, useContext, useEffect } from 'react';
import { CanvasContext } from '../context/Canvas';

export function Canvas({ children }) {
  const ref = createRef();
  const { setRenderingContext } = useContext(CanvasContext);

  useEffect(() => {
    const context = ref.current.getContext('2d');

    context.canvas.width = 1024;
    context.canvas.height = 576;

    setRenderingContext(context);
  }, []);

  return (
    <canvas ref={ref}>
      {children}
    </canvas>
  );
};
