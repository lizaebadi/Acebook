import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import CreatePostForm from '../createpost/CreatePostForm'
import Feed from '../feed/Feed'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

import UserProfile from '../UserProfile/userProfile';

const App = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='/posts' element={<Feed navigate={navigate} />} />
      <Route path='/login' element={<LoginForm navigate={navigate} />} />
      <Route path='/signup' element={<SignUpForm navigate={navigate} />} />
      <Route path='/profile' element={<UserProfile navigate={navigate} />} />
      <Route path='/createpost' element={<CreatePostForm navigate={navigate} />} />
    </Routes>
    );
}

export default App;
