
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GridLayout from './components/grid';

import NavbarLayout from './components/shared/Navbar';
function App() {
  return (
    <div>
      <NavbarLayout />
      <Container>
        <GridLayout />
      </Container>
    </div>
  );
}

export default App;
