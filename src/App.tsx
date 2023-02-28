import RouteComponent from './Routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
