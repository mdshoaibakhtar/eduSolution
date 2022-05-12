import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Contact from './Components/Contact';
import About from './Components/About';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Check from './Components/Check';

function App() {
  return (
    <>
        < Router>
          <Navbar />
            <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/Contact' element={<Contact />} />
                  <Route exact path='/About' element={<About />} />
                  <Route exact path='/Cards' element={<Cards />} />
                  <Route exact path='/LogIn' element={<LogIn />} />
                  <Route exact path='/SignUp' element={<SignUp />} />
            </Routes>
        </Router>
        {/* <Check/> */}
    </>
  );
}

export default App;
