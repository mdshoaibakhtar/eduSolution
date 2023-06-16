import './css/App.css';
import Home from './Components/Home';
import Course from './Components/Course';
import Contact from './Components/Contact';
import About from './Components/About';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CourseState from './context/course/CourseState';
import Profile from './Components/Profile';
import DetailedCourse from './Components/DetailedCourse';
import Form from './Components/Form';

function App() {
  return (
    <>
      <CourseState>
        < Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Course' element={<Course />} />
            <Route exact path='/LogIn' element={<LogIn />} />
            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/Profile' element={<Profile />} />
            <Route exact path='/DetailedCourse' element={<DetailedCourse />} />
            <Route exact path='/Form' element={<Form />} />
          </Routes>
        </Router>
      </CourseState>
    </>
  );
}

export default App;
