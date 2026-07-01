import { Route,  Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateNotePage />} />
      <Route path="/update" element={<NoteDetailsPage />} />
    </Routes>
  )
}

export default App;