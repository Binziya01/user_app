import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/users/:userId" element={<UserDetails/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
