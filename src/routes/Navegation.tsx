import { Suspense } from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navegation = () => {
  const rutas = routes;

  return (
   
      <Suspense fallback={<span>Loading...</span>}> {/* Mientras esta  cargando le dice a react que espere que haga algo */}
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo"></img>
              <ul>
                {rutas.map((routes) => {
                  return (
                    <li key={routes.name}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-active" : ""
                        }
                        to={routes.to}
                      >
                      
                        {routes.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Routes>
              {routes.map((routes) => {
                return (
                  <Route
                    key={routes.path}
                    path={routes.path}
                    element={<routes.Component></routes.Component>}
                  />
                );
              })}

              {/* <Route path="lazy1" element={<LazyPage></LazyPage>} />
        <Route path="lazy2" element={<LazyPage2></LazyPage2>} />
        <Route path="lazy3" element={<LazyPage3></LazyPage3>} /> */}
              {/* <Route
                path="/*"
                element={<Navigate to="/lazy1" replace></Navigate>}
              /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
  );
};
