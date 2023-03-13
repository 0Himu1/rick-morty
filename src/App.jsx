import { QueryClient, QueryClientProvider } from 'react-query';
import Characters from './components/Characters';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black text-gray-100 p-5">
        <h1 className="text-6xl text-center font-bold mb-14">Rick & Morty</h1>
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;
