import { useState, createContext } from 'react';
export const SoundsContext = createContext();

export const SoundsProvider = (props) => {
  const [soundsData, setSoundsData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SoundsContext.Provider
      value={{
        soundsValues: [soundsData, setSoundsData],
        searchWordValues: [searchWord, setSearchWord],
        errorValues: [err, setErr],
        loadingValues: [isLoading, setIsLoading],
      }}
    >
      {props.children}
    </SoundsContext.Provider>
  );
};
