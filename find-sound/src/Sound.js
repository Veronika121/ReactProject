import { Link } from 'react-router-dom';
const Sound = ({ soundData }) => {
  return (
    <div className="sound">
      <div className="left">
        <h3>{soundData.name}</h3>

        <audio controls preload="metadata">
          <source src={soundData.previews['preview-hq-mp3']} type="audio/mp3" />
          <source src={soundData.previews['preview-hq-ogg']} type="audio/ogg" />
        </audio>
      </div>
      <div className="right">
        <div>
          {soundData.tags.length > 0 &&
            soundData.tags.map((tag) => {
              return (
                <span key={tag}>
                  <span className="tag">{tag}</span>
                  &thinsp;
                </span>
              );
            })}
        </div>
        <Link to={`/${soundData.id}`}>
          <p style={{ marginBottom: '10px' }}>
            <button>more info...</button>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Sound;
