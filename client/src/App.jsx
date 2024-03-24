import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home/Home'; // Import the Home component
import Profile from './components/Pages/Profile'; // Import the Profile component


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState('home');

  const delayedSetPage = (newPage) => {
    setTimeout(() => {
      setPage(newPage);
    }, 500); // Delay of 1 second (1000 milliseconds)
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
        case 'Post':
        return <Post />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="text-center">
        <Container>
          <Navbar.Brand>ArtHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => delayedSetPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => delayedSetPage('profile')}>Profile</Nav.Link>
            <Nav.Link onClick={() => delayedSetPage('Post')}>Create a Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {renderPage()} {/* Render the current page based on the state */}
      
      <footer>
        {/* Add your footer content here */}
      </footer>
    </>
  );
}

export default App;