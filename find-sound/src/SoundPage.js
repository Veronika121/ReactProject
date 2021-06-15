import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SoundsContext } from './SoundsContext';

const SoundPage = () => {
  const { soundId } = useParams();
  const [soundInfo, setSoundInfo] = useState(null);
  const [err, setErr] = useContext(SoundsContext).errorValues;
  const [isLoading, setIsLoading] = useContext(SoundsContext).loadingValues;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://freesound.org/apiv2/sounds/${soundId}/?token=${process.env.REACT_APP_FREESOUND_API_KEY}`,
    )
      .then((response) => {
        if (response.ok) {
          setErr('');
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        if (data) {
          setSoundInfo(data);
          setIsLoading(false);
        } else throw new Error('No extra information');
      })
      .catch((error) => {
        setErr(error.message);
      });
  }, []);
  let soundEl;
  if (soundInfo) {
    soundEl = (
      <div className="sound-page">
        <h2>{soundInfo.name}</h2>

        <div>
          <audio controls preload="auto">
            <source
              src={soundInfo.previews['preview-hq-mp3']}
              type="audio/mp3"
            />
            <source
              src={soundInfo.previews['preview-hq-ogg']}
              type="audio/ogg"
            />
            <p>
              Your browser doesn't support HTML5 audio. Here is a
              <a href={soundInfo.previews['preview-hq-mp3']}>
                link to the audio
              </a>{' '}
              instead.
            </p>
          </audio>
        </div>
        <p className="description">{soundInfo.description}</p>

        <div className="info">
          <div className="left">
            <p>
              <span>Author:</span> {soundInfo.username}
            </p>

            <p>
              <span>Rating:</span> {Math.floor(soundInfo.avg_rating)} from 5
            </p>
          </div>
          <div className="middle">
            <p>
              <span>Type:</span> {soundInfo.type}
            </p>
            <p>
              <span>Samplerate:</span> {soundInfo.samplerate} Hz
            </p>
            <p>
              <span>Bitdepth:</span> {soundInfo.bitdepth} bit
            </p>
            <p>
              <span>Channels:</span> {soundInfo.channels}
            </p>
          </div>
          <div className="right">
            {soundInfo.tags.length > 0 &&
              soundInfo.tags.map((tag) => {
                return (
                  <span key={tag}>
                    <span className="tag">{tag}</span>
                    &thinsp;
                  </span>
                );
              })}
          </div>
        </div>
        <div className="goback">
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    );
  } else {
    soundEl = (
      <div>
        {err && <h3>{err}</h3>}{' '}
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
  return <div>{isLoading ? <div>Loading...</div> : <div>{soundEl}</div>}</div>;
};
export default SoundPage;
