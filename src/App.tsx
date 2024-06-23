import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Teams from './components/teams';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Teams />
    </QueryClientProvider>
  );
}

export default App;
