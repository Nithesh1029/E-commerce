import Header from './components/header/Header';
import Home from './Home/Home';
import AppProvider from './context/AppContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <AppProvider>

      <Header />

      <Home />

      <ToastContainer
    position="top-right"
    autoClose={2000}
/>

    </AppProvider>
  );
}

export default App;