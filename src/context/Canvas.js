import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const CanvasContext = createContext();

function CanvasProvider({ children }) {
  const [renderingContext, setRenderingContext] = useState();
  
  return (
    <CanvasContext.Provider value={{ renderingContext, setRenderingContext }}>
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };
