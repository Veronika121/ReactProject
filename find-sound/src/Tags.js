import { Link } from 'react-router-dom';

const Tags = ({ tagsArr }) => {
  return (
    <div>
      {tagsArr.length > 0 &&
        tagsArr.map((tag, index) => {
          return (
            <Link className="tags" key={index} to={`/tags/${tag}`}>
              <span>
                <span className="tag">{tag}</span>
                &thinsp;
              </span>
            </Link>
          );
        })}
    </div>
  );
};
export default Tags;
