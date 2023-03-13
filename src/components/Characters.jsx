/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useQuery } from 'react-query';
import Buttons from './Buttons';
import Character from './Character';

function App() {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(['characcters', page], fetchCharacters, { keepPreviousData: true });
  if (status === 'loading') {
    return (
      <>
        <h1 className="text-5xl">Loading...</h1>
        <Buttons nextDisabled={!data?.info.next} page={page} setPage={setPage} />
      </>
    );
  }
  if (status === 'error') {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div className="p-5 md:grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
        {data.results.map((o) => (
          <Character character={o} key={o.id} />
        ))}
      </div>
      <Buttons nextDisabled={isPreviousData && !data?.info.next} page={page} setPage={setPage} />
    </>
  );
}

export default App;
