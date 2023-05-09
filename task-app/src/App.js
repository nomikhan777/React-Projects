import './App.scss';
import Routes from "./pages/Routes"
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    
    <Routes />
    </AuthContextProvider>
  );
}

export default App;
