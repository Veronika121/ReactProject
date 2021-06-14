import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SoundPage() {
  const { soundId } = useParams();
  const [soundInfo, setSoundInfo] = useState(null);
  let [err, setErr] = useState('');

  useEffect(() => {
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
          console.log(data);
          setSoundInfo(data);
        } else throw new Error('No extra information');
      })
      .catch((error) => {
        setErr(() => error.message);
      });
  }, []);
  let name;
  let previewMp3;
  let previewOgg;

  if (soundInfo) {
    name = soundInfo.name;
    previewMp3 = soundInfo.previews['preview-hq-mp3'];
    previewOgg = soundInfo.previews['preview-hq-ogg'];
  }

  return (
    <div>
      <h3>{err}</h3>
      <h3>{name}</h3>
      {previewMp3 && (
        <div>
          <audio controls preload="auto">
            <source src={previewMp3} type="audio/mp3" />
            <source src={previewOgg} type="audio/ogg" />
            <p>
              Your browser doesn't support HTML5 audio. Here is a
              <a href={previewMp3}>link to the audio</a> instead.
            </p>
          </audio>
        </div>
      )}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
export default SoundPage;
