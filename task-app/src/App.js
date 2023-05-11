import './App.scss';
import Routes from "./pages/Routes"
import AuthContextProvider from './context/AuthContext';

function App() {
  console.log(process.env.NODE_ENV)
  return (
    <AuthContextProvider>
    
    <Routes />
    </AuthContextProvider>
  );
}

export default App;
