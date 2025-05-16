import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const url = "https://openlibrary.org/search.json?q=";
const headers = new Headers({
  "User-Agent": "Test/1.0 (olojedechristopher24@gmail.com)",
});

function Main() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("ja");

  useEffect(
    function () {
      const controller = new AbortController();
      const options = {
        method: "GET",
        headers: headers,
        signal: controller.signal,
      };

      async function fetchBooks() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(url + search, options);

          if (!res.ok) {
            console.log("error");
            throw new Error("Error occurs!");
          }

          const data = await res.json();
          console.log(data);
          setBooks(data.docs);
          setError("");
          setIsLoading(false);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.log(error.name);
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchBooks();

      return () => controller.abort();
    },
    [search]
  );

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
    <App />
  </React.StrictMode>
);
