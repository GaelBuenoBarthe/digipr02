import { Route, Link, Routes,} from "react-router-dom";
import CompClient from "./composants/CompClient";

const Home = () => (
  <div className="flex items-center justify-center">
    <h1>Home</h1>
  </div>
);

const Airport = () => (
  <div className="flex items-center justify-center">
    <ul className="text-center">
      <li>Charles De Gaulle</li>
      <li>Narita</li>
      <li>JFK</li>
    </ul>
  </div>
);

const Cities = () => (
  <div className="flex items-center justify-center">
    <ul className="text-center">
      <li>Paris</li>
      <li>Tokyo</li>
      <li>New York</li>
    </ul>
  </div>
);

const Courses = ({match}) => (
  <div className="flex flex-col items-center justify-center">
    <ul className="flex space-x-4 text-center">
      <li><Link to ="/cos/techno" className="text-blue-500 hover:underline">Technologique</Link></li>
      <li><Link to ="/cos/bio" className="text-blue-500 hover:underline">Biologique</Link></li>
      <li><Link to ="/cos/meca" className="text-blue-500 hover:underline">Mecanique</Link></li>
    </ul>
    <Routes>
      <Route path="techno" element={<div className="mt-4">C'est technologique</div>} exact/>
      <Route path="bio" element={<div className="mt-4">C'est biologique</div>} exact/>
      <Route path="meca" element={<div className="mt-4">C'est mécanique</div>} exact/>
    </Routes>
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
            <Link to="/cos" className="text-white hover:text-gray-300">Courses</Link>
          </li>
          <li>
            <Link to="/airports" className="text-white hover:text-gray-300">Aéroports</Link>
          </li>
          <li>
            <Link to="/cities" className="text-white hover:text-gray-300">Villes</Link>
          </li>
          <li>
            <Link to="/client" className="text-white hover:text-gray-300">Client</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element ={<Home/>} exact/>
          <Route path="/airports" element ={<div className="text-center"><b><u>Aéroports</u></b><Airport/></div>} />
          <Route path="/cos/*" element ={<div className="text-center"><b><u>Courses</u></b><Courses/></div>} />
          <Route path="/cities" element ={<div className="text-center"><b><u>Villes</u></b><Cities/></div>} />
          <Route path="/client" element={<div className="text-center"><b><u>Saisir un client</u></b><CompClient /></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;