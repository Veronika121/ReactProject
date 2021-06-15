import SoundsList from './SoundsList';
import SearchSound from './SearchSound';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SoundsContext } from './SoundsContext';

function Home() {
  const [searchWord, setSearchWord] =
    useContext(SoundsContext).searchWordValues;
  const { tag } = useParams();
  tag && setSearchWord(tag);

  return (
    <div>
      <SearchSound />
      <SoundsList />
    </div>
  );
}
export default Home;
