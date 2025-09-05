import { Link, Outlet } from "react-router-dom";

export default function App(){
  return (
    <>
      <div className="header"><div className="container"><h1>Proyecto 5 · React + Express</h1></div></div>
      <div className="container">
        <nav className="nav">
          <Link to="/">inicio</Link>
          <Link to="/panel">panel</Link>
          <Link to="/contacto">contacto</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
