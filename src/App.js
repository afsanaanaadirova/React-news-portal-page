import Home from "./container/Home";
import NewInner from "./container/NewsInner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:category/:title" element={<NewInner />} />
      </Routes>
    </div>
  );
}

export default App;
