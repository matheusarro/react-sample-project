import ReactQueryClientProvider from '@/contexts/ReactQueryClient';
import Home from '@/pages/Home/Home';

function App() {
  return (
    <ReactQueryClientProvider>
      <Home />
    </ReactQueryClientProvider>
  );
}

export default App;
