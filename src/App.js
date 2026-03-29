/* import logo from './logo.png';
import Home from "./pages/Home"
import Partner from "./pages/Partner"
import Free from "./pages/Free"
import Error from "./pages/Error"
import Blog from "./pages/Blog"
import { ProviderBlogArticle } from './components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom" */

import Home from "./pages/Home"
import HabitRabitPrivacyPolicy from "./pages/HabitRabitPrivacyPolicy"
import ReadAiPrivacyPolicy from "./pages/ReadAiPrivacyPolicy"
import Apps from "./pages/Apps"
import Error from "./pages/Error"
import Blog from "./pages/Blog"
import { ProviderBlogArticle } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/habit-rabbit-privacy-policy" element={<HabitRabitPrivacyPolicy />} />
        <Route path="/read-ai-privacy-policy" element={<ReadAiPrivacyPolicy />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="provider" element={<ProviderBlogArticle />} />
      </Routes >
    </Router>
  );
}

export default App;