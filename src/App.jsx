import { Helmet } from "react-helmet";
import { RoutesMaster } from "./Routes/Routes";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/swiper/modules/navigation.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RoutesMaster.map((Routes) => (
            <Route
              path={Routes.Path}
              element={
                <>
                  <Helmet>
                    <title>{Routes.Title}</title>
                  </Helmet>
                  {Routes.Component}
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
