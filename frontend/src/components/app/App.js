import './App.css';
import NavBar from '../navbar/NavBar.js';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../user/SignUpForm';
import CreatePostForm from '../createpost/CreatePostForm';
import Feed from '../feed/Feed';
import LandingPage from '../landingpage/LandingPage';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

import UserProfile from '../UserProfile/userProfile';

const App = () => {
  const navigate = useNavigate();

  return (
      <>
    <Routes>
      <Route path='/posts' element={<Feed navigate={navigate} />} />
      <Route path='/login' element={<LoginForm navigate={navigate} />} />
      <Route path='/signup' element={<SignUpForm navigate={navigate} />} />
      <Route path='/profile' element={<UserProfile navigate={navigate} />} />
      <Route path='/createpost' element={<CreatePostForm navigate={navigate} />} />
          <Route path='/' element={<LandingPage navigate={ useNavigate() }/>} />    </Routes>
      </>
    );
};

export default App;
