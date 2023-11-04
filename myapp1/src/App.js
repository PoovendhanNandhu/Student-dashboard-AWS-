
import Login from '../src/components/login/login_signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws_src/aws-exports';
import Dashboard from './components/main/main';

Amplify.configure(awsconfig);


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />  {/* Default route */}
      </Routes>
    </Router>
  );
}
