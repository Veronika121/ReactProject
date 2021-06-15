import { Link } from 'react-router-dom';
import Tags from './Tags';
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
        <Tags tagsArr={soundData.tags} />

        <Link to={`/${soundData.id}`}>
          <button>more info...</button>
        </Link>
      </div>
    </div>
  );
};
export default Sound;
