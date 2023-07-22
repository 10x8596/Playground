import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // simple div element
import { Navbar, HomePage, GridBox, Component1, Component2, Component3 } from "./components";
import { alpha } from "@mui/system";

const App = () => {
  const cards = [
    { id: 1, title: "Card 1", component: Component1 },
    { id: 2, title: "Card 2", component: Component2 },
    { id: 3, title: "Card 3", component: Component3 },
    // ... add more cards here ...
  ];
  // wrap entire app with BrowserRouter
  // path of root route
  // if we go to forward slash video and then some random sequence of alphanumerical characters
  // we will be routed to a specific video's page
  // whole page background color is set to #000
  return (
    <Router>
      <Box sx={{ background: "teal" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage cards={cards} />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
