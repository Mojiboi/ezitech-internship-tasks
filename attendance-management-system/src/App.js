import './App.css';
import './index.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/nav/navbar';

// src/App.js
import { Routes, Route } from 'react-router-dom';
// import AccessAttendance from './components/AccessAttendance';
import ViewAttendance from './components/pages/ViewAttendance';
// import RequestLeave from './components/RequestLeave';
// import Login from './components/Login';
// import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/access-attendance" element={<AccessAttendance />} />
        <Route path="/request-leave" element={<RequestLeave />} /> */}
        <Route path="/view-attendance" element={<ViewAttendance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

