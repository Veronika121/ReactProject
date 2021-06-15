import { useContext } from 'react';
import { SoundsContext } from './SoundsContext';
import Sound from './Sound';

const SoundsList = () => {
  const [soundsData, setSoundsData] = useContext(SoundsContext).soundsValues;
  const [isLoading, setIsLoading] = useContext(SoundsContext).loadingValues;

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="sounds-list">
          {soundsData.length > 0 &&
            soundsData.map((sound) => {
              return (
                <div key={sound.id}>
                  <Sound soundData={sound} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default SoundsList;
