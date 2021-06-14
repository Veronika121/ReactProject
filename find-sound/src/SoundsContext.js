import { useState, createContext } from 'react';
export const SoundsContext = createContext();

export function SoundsProvider(props) {
  const [soundsData, setSoundsData] = useState([]);
  return (
    <SoundsContext.Provider value={[soundsData, setSoundsData]}>
      {props.children}
    </SoundsContext.Provider>
  );
}
