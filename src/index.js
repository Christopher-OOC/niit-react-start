import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const users = [
  {
    id: 1,
    name: "John Doe",
    dateOf: "2000-12-3",
    image: "https://i.pravatar.cc/4566?u=9876",
    origin: "Nigeria",
    phoneNumber: "+2349023244556",
  },
  {
    id: 2,
    name: "Phillip Cool",
    dateOf: "2005-8-13",
    image: "https://i.pravatar.cc/4566?u=56799",
    origin: "England",
    phoneNumber: "+29023244556",
  },
  {
    id: 3,
    name: "Ramesh Ravi",
    dateOf: "2003-3-27",
    image: "https://i.pravatar.cc/4566?u=45678",
    origin: "India",
    phoneNumber: "+803244556",
  },
  {
    id: 4,
    name: "Martins Orel",
    dateOf: "2005-8-13",
    image: "https://i.pravatar.cc/4566?u=97699",
    origin: "Scotland",
    phoneNumber: "+290098567856",
  },
  {
    id: 3,
    name: "Zhou Shi",
    dateOf: "2010-3-4",
    image: "https://i.pravatar.cc/4566?u=64678",
    origin: "China",
    phoneNumber: "+803244556",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Brand />
      <NavLinks />
    </div>
  );
}

function Brand() {
  return (
    <div className="brand__container">
      <img className="brand__logo" src="logo192.png" alt="logo" />
      <span>React</span>
    </div>
  );
}

function NavLinks() {
  return (
    <ul className="nav__container">
      <li className="nav__item">Home</li>
      <li className="nav__item">Products</li>
      <li className="nav__item">About Us</li>
    </ul>
  );
}

function Main() {
  return (
    <div className="main">
      <ul className="user__container">
        {users.map((user) => (
          <User user={user} school={"school"} />
        ))}
      </ul>
    </div>
  );
}

function User({ user }) {
  return (
    <li className="user">
      <img className="user__image" src={user.image} alt="user-image" />
      <h4>ID: {user.id}</h4>
      <p>Name: {user.name}</p>
      <p>Date of Birth: {user.dateOf}</p>
      <p>
        Origin: {user.origin}{" "}
        {user.origin === "Nigeria" && (
          <span style={{ backgroundColor: "green" }}>Idan</span>
        )}
      </p>
      <p>Phone Number: {user.phoneNumber}</p>
    </li>
  );
}

function Footer() {
  return (
    <table className="footer">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john@com</td>
        </tr>
      </tbody>
    </table>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
