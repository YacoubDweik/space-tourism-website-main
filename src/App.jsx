// You can use HashRouter instead of BrowserRouter to solve Github problems
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import RouterParam from "./pages/RouterParam";
import NotFound from "./pages/NotFound";

const base = import.meta.env.BASE_URL; // to get the base name

function App() {
  const { data, isPending, error } = useFetch(`assets/db/data.json`);
  return (
    // this basename is just to solve static GitHub problems
    <BrowserRouter basename="/space-tourism-website-main/">
      <Header />
      <main className="main">
        <h1 className="sr-only">Space tourism - Lets's travel to space</h1>
        <Routes>
          <Route index element={<Home />} />
          {/* Loaders fetch data first then render the component, but the easier way is just like this: */}
          <Route path="/destination" element={<Destination destinations={data && data.destinations} />} />
          <Route path="/crew" element={<Crew crew={data && data.crew} />} />
          <Route path="/technology" element={<Technology technology={data && data.technology} />} />
          <Route path="/app/:param" element={<RouterParam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
