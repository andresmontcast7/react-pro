import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { LazyPage } from "../lazy-load/pages/LazyPage";
import { LazyPage2 } from "../lazy-load/pages/LazyPage2";
import { LazyPage3 } from "../lazy-load/pages/LazyPage3";
import logo from "../logo.svg";

export const Navegation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo"></img>
            <ul>
              <li>
                <NavLink className={({isActive}) => isActive ? 'nav-active': ''}  to="/lazy1">Lazy 1</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? 'nav-active': ''} to="/lazy2">Lazy 2</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? 'nav-active': ''} to="/lazy3">Lazy 3</NavLink>
              </li>
            </ul>
          </nav>
     <Routes>
        
        <Route path="lazy1" element={<LazyPage></LazyPage>} />
        <Route path="lazy2" element={<LazyPage2></LazyPage2>} />
        <Route path="lazy3" element={<LazyPage3></LazyPage3>} />
        <Route path="/*" element={<Navigate to="/lazy1" replace></Navigate>} />
      </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
