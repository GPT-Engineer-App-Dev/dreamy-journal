import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ColorModeProvider, CSSReset } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  return (
    <Router>
      <CSSReset />
      <ColorModeProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </ColorModeProvider>
    </Router>
  );
}

export default App;
