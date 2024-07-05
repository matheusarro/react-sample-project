import QueryContext from './contexts/Query/QueryContext';
import RouterContext from './contexts/Router/RouterContext';

function App() {
  return (
    <QueryContext>
      <RouterContext />
    </QueryContext>
  );
}

export default App;
