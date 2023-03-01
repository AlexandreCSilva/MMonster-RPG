import React, { createRef, useEffect, useState } from 'react';
import { createContext } from 'react';

const CanvasContext = createContext();

function CanvasProvider({ children }) {
  const ref = createRef();
  const [renderingContext, setRenderingContext] = useState();
  useEffect(() => {
    const context = ref.current.getContext('2d');
    context.canvas.width = window.screen.availWidth;
    context.canvas.height = window.screen.availHeight;

    context.fillStyle = 'black';
    context.fillRect(0, 0, window.screen.width, window.screen.height);

    setRenderingContext(context);
  }, []);

  return (
    <CanvasContext.Provider value={renderingContext}>
      <canvas ref={ref}>
        {children}
      </canvas>
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };
