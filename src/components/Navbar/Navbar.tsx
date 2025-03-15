<<<<<<< HEAD
// src/components/Navbar.tsx
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../services/tokenService';
import { getUserById } from '../../services/userService';
import UserContext from '../../context/userContext';


const Navbar: React.FC = () => {
  const { user, setUser } = useContext(UserContext) || {};

  // קבלת הטוקן מה-sessionStorage
  let token = sessionStorage.getItem("token");

  // פיענוח הטוקן אם קיים
  let decodedToken = token ? decodeToken(token) : null;

  useEffect(() => {
    // אם יש טוקן תקין, קרוא ל-API לקבלת המידע של המשתמש
    if (decodedToken?._id && setUser) {
      getUserById(decodedToken._id)
        .then((res) => {
          setUser(res.data);  // עדכון ה-state של המשתמש
        })
        .catch((err) => console.log(err));
    }
  }, [decodedToken, setUser]);  

  const handleLogout = () => {
    sessionStorage.removeItem("token");  // הסרת הטוקן מה-sessionStorage
    setUser(null);  // איפוס המשתמש
  };

  const capitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#007bff' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-between w-100">
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/my-cards">My Cards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/favourites">Favourites</Link>
            </li>
            <li className="nav-item">
              <input
                type="text"
                className="form-control w-auto ms-3"
                placeholder="Search"
                aria-label="Search"
                style={{ maxWidth: '150px' }}
              />
            </li>
            <li className="nav-item d-flex align-items-center">
              {user && user.image?.url && (
                <img
                  src={user.image.url}
                  alt="Profile"
                  className="rounded-circle"
                  width="30"
                  height="30"
                  style={{ marginRight: '10px' }}
                />
              )}
              <span className="nav-link text-white fs-4 fw-bold">Profile</span>
            </li>

            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-4 fw-bold" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-4 fw-bold" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li className="nav-item d-flex align-items-center">
                <div className="nav-link text-white fs-4 fw-bold">
                  <p style={{ marginBottom: 0 }}>
                    Welcome, {capitalizeName(user.name.first)} {capitalizeName(user.name.last)} 
                    <button onClick={handleLogout}>Logout</button>
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
=======
// src/components/Navbar.tsx
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../services/tokenService';
import { getUserById } from '../../services/userService';
import UserContext from '../../context/userContext';


const Navbar: React.FC = () => {
  const { user, setUser } = useContext(UserContext) || {};

  // קבלת הטוקן מה-sessionStorage
  let token = sessionStorage.getItem("token");

  // פיענוח הטוקן אם קיים
  let decodedToken = token ? decodeToken(token) : null;

  useEffect(() => {
    // אם יש טוקן תקין, קרוא ל-API לקבלת המידע של המשתמש
    if (decodedToken?._id && setUser) {
      getUserById(decodedToken._id)
        .then((res) => {
          setUser(res.data);  // עדכון ה-state של המשתמש
        })
        .catch((err) => console.log(err));
    }
  }, [decodedToken, setUser]);  

  const handleLogout = () => {
    sessionStorage.removeItem("token");  // הסרת הטוקן מה-sessionStorage
    setUser(null);  // איפוס המשתמש
  };

  const capitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#007bff' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-between w-100">
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/my-cards">My Cards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-4 fw-bold" to="/favourites">Favourites</Link>
            </li>
            <li className="nav-item">
              <input
                type="text"
                className="form-control w-auto ms-3"
                placeholder="Search"
                aria-label="Search"
                style={{ maxWidth: '150px' }}
              />
            </li>
            <li className="nav-item d-flex align-items-center">
              {user && user.image?.url && (
                <img
                  src={user.image.url}
                  alt="Profile"
                  className="rounded-circle"
                  width="30"
                  height="30"
                  style={{ marginRight: '10px' }}
                />
              )}
              <span className="nav-link text-white fs-4 fw-bold">Profile</span>
            </li>

            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-4 fw-bold" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-4 fw-bold" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li className="nav-item d-flex align-items-center">
                <div className="nav-link text-white fs-4 fw-bold">
                  <p style={{ marginBottom: 0 }}>
                    Welcome, {capitalizeName(user.name.first)} {capitalizeName(user.name.last)} 
                    <button onClick={handleLogout}>Logout</button>
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
