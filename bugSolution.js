```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="details" element={<AboutDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/about/details">Go to About Details</Link>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function AboutDetails(){
  return(
    <div>
      <h1>About Details</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
export default App;
```