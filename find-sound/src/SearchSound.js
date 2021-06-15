import { useRef, useContext, useEffect } from 'react';
import { SoundsContext } from './SoundsContext';

function SearchSound() {
  const [soundsData, setSoundsData] = useContext(SoundsContext).soundsValues;
  const [searchWord, setSearchWord] =
    useContext(SoundsContext).searchWordValues;
  const soundRef = useRef();
  const [err, setErr] = useContext(SoundsContext).errorValues;
  const [isLoading, setIsLoading] = useContext(SoundsContext).loadingValues;

  useEffect(() => {
    searchWord &&
      fetch(
        `https://freesound.org/apiv2/search/text/?query=${searchWord}&fields=id,name,tags,previews,description,created,license,username&token=${process.env.REACT_APP_FREESOUND_API_KEY}`,
      )
        .then((response) => {
          if (response.ok) {
            setErr('');
            return response.json();
          } else throw new Error(response.statusText);
        })
        .then((data) => {
          if (data.results.length > 0) {
            setSoundsData(data.results);
            setIsLoading(false);
          } else throw new Error('This sound is not found.');
        })
        .catch((error) => {
          setErr(error.message);
        });
  }, [searchWord]);

  return (
    <div className="search">
      <h1>Find the sound</h1>
      {err && <h3>{err}</h3>}
      <input
        ref={soundRef}
        type="text"
        placeholder="Search Sound"
        defaultValue={searchWord ? searchWord : undefined}
      />
      <button
        onClick={() => {
          setIsLoading(true);
          setSearchWord(soundRef.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}
export default SearchSound;
