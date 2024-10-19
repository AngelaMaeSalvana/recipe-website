import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { auth } from './firebase';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import './transitions.css'

const App = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
            <Route path="/" element={<Landing />} /> 
            <Route path="/dashboard" element={user ? <Dashboard /> : <Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
