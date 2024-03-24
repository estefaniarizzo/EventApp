import React from 'react';
import { useAppContext } from './AppContext';

const StateViewer = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Estado Actual:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default StateViewer;
