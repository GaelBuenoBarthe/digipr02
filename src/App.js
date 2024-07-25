import { Route, Link, Routes } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Med Mùs</li>
    </ul>
  </div>
);

const Cities = () => (
  <div>
    <ul>
      <li>Paris</li>
      <li>Tokyo</li>
      <li>New York</li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/airports" className="text-white hover:text-gray-300">Aéroports</Link>
          </li>
          <li>
            <Link to="/cities" className="text-white hover:text-gray-300">Villes</Link>
          </li>
        </ul>
      </nav>
    <div className="p-4">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/airports" Component={Airport} />
        <Route path="/cities" Component={Cities} />
      </Routes>
    </div>
  </div>
  );
}

export default App;