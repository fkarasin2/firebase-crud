
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
