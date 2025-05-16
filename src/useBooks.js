import { useState, useEffect } from "react";

function useBooks(query) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const url = "https://openlibrary.org/search.json?q=";
      const headers = new Headers({
        "User-Agent": "Test/1.0 (olojedechristopher24@gmail.com)",
      });
      const controller = new AbortController();
      const options = {
        method: "GET",
        headers: headers,
        signal: controller.signal,
      };

      async function fetchBooks() {
        try {
          const res = await fetch(url + query, options);

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
    [query]
  );
}
