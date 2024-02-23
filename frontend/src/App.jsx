import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstra.css';
import  {Navbar}  from 'react-bootstrap';
import Container from 'react-bootstrap';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Navbar bg="primary">
      <Container>
        <link to={"/"} className="navbar-brand text-white">
          Laravel react start
        </link>
      </Container>
    </Navbar>
      <Container className='mt-5'>
        <Row>
          <Col md={'12'}>
            <Routes>
              <Route exact path="/" element={<ProductList/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
   </Router>
  )
}

export default App
