import ReactQueryClientProvider from '@/contexts/ReactQueryClient';

import ReactRouterProvider from './contexts/ReactRouter';

function App() {
  return (
    <ReactQueryClientProvider>
      <ReactRouterProvider />
    </ReactQueryClientProvider>
  );
}

export default App;
