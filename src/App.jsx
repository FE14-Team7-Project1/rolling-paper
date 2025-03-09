import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalFonts } from './assets/fonts';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
