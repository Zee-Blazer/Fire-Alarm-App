
import './App.css';

// React router dom and routing
import { RouterProvider } from 'react-router-dom';

// Router component
import { router } from './routing';

function App() {
  return (
      <RouterProvider router={ router } />
  );
}

export default App;
