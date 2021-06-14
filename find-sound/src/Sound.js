import { Link } from 'react-router-dom';
function Sound({ soundData }) {
  console.log('tag', soundData.tags);
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
              console.log(tag);
              return (
                <>
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                  &thinsp;
                </>
              );
            })}
        </div>
        <Link to={`/${soundData.id}`}>
          <p style={{ marginBottom: '10px' }}>
            <b>more info...</b>
          </p>
        </Link>
      </div>
    </div>
  );
}
export default Sound;
