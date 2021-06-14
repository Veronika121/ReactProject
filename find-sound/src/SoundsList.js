import { useContext } from 'react';
import { SoundsContext } from './SoundsContext';
import Sound from './Sound';
function SoundsList() {
  const [soundsData, setSoundsData] = useContext(SoundsContext);

  return (
    <div className="sounds-list">
      {soundsData.length > 0 &&
        soundsData.map((sound) => {
          return (
            <div className="sound-wrap" key={sound.id}>
              <Sound soundData={sound} />
            </div>
          );
        })}
    </div>
  );
}
export default SoundsList;
