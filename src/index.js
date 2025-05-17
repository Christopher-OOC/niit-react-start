import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useBooks } from "./useBooks";
import Calculator from "./Calculator";

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
  const [search, setSearch] = useState("ja");
  const { books, isLoading, error } = useBooks(search);

  function searchBooks(query) {
    setSearch(query);
  }

  return (
    <div className="main">
      <div style={{ margin: "3rem 0" }}>
        {isLoading && <p>Loading {isLoading}</p>}
        <form>
          <label style={{ margin: "0 3rem" }}>Search</label>
          <input
            type="text"
            value={search}
            onChange={(e) => searchBooks(e.target.value)}
          />
        </form>
      </div>

      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <ul className="user__container">
          {books.map((book) => (
            <Book book={book} key={book.title + book.first_publish_year} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Book({ book }) {
  return (
    <li className="user">
      {/* <img className="user__image" src={user.image} alt="user-image" /> */}
      {/* <h4>ID: {user.id}</h4> */}
      <p>Author Name: {book.author_name ? book.author_name[0] : "unknown"}</p>
      <p>Book Title: {book.title}</p>
      <p>first_publish_year: {book.first_publish_year}</p>
      {/* <p>Language: {book.language[0]}</p> */}
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
    {/* <App /> */}
    <Calculator />
  </React.StrictMode>
);
