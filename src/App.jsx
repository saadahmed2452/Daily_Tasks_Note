
import "./styles/App.css"
import Header from "./components/Header"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
        <Header/>
        <Home/>


      
    </div>
  )
}

export default App












































// import Header from "./components/Header";
// import "./styles/App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import for Router
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {
//   return (  // You need to return the JSX from this component
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />  {/* Home route */}
//         <Route path="/About" element={<About />} />  {/* About route with a different path */}
//         <Route path="/Contact" element ={<Contact />} />
//         <Route path= "*" element = {<div>404 Page NOt found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
