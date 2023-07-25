import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Portfolio from "./portfolio";
import Tuiter from "./tuiter";
import { BrowserRouter, HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
   return (
      <HashRouter>
         <div className="container">
            <Routes>
               <Route path="/" element={<Navigate to="/portfolio/profile" />} />
               <Route path="/portfolio/*" element={<Portfolio />} />
            </Routes>
         </div>
      </HashRouter>
   );
}
export default App;
