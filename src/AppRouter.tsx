import { Routes, Route } from "react-router-dom";

import * as URLS from "./constants/urls";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={URLS.INDEX} element={<AboutMe />} />
      <Route path={URLS.ABOUT} element={<AboutMe />} />
      <Route path={URLS.EXPERIENCE} element={<Experience />} />
      <Route path={URLS.CONTACT} element={<Contact />} />
      <Route path={URLS.PRIVACY_POLICY} element={<Policy />} />
    </Routes>
  );
};

export default AppRouter;
