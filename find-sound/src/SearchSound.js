import { useState, useRef, useContext } from 'react';
import { SoundsContext } from './SoundsContext';
function SearchSound() {
  const [soundsData, setSoundsData] = useContext(SoundsContext);
  let soundRef = useRef();
  let [err, setErr] = useState('');

  function getSound(soundName) {
    fetch(
      `https://freesound.org/apiv2/search/text/?query=${soundName}&fields=id,name,tags,previews,description,created,license,username&token=${process.env.REACT_APP_FREESOUND_API_KEY}`,
    )
      .then((response) => {
        if (response.ok) {
          setErr('');
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        console.log('data.results: ', data.results);
        if (data.results.length > 0) {
          setSoundsData(data.results);
        } else throw new Error('This sound is not found.');
      })
      .catch((error) => {
        setErr(() => error.message);
      });
  }

  return (
    <div className="search">
      <h2>Find the sound</h2>
      <h3>{err}</h3>
      <input ref={soundRef} type="text" placeholder="Search Sound" />
      <button
        onClick={() => {
          getSound(soundRef.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}
export default SearchSound;
