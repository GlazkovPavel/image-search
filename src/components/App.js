import React from "react";
import api from "../utils/api";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";


function App() {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  }

  const onSearch = () => {
    setPage(1);

    api
        .search(query)
        .then((data) => {
          setData(data);
        })
        .catch(() => {});
  };

  React.useEffect(() => {
    api
        .search(query, page)
        .then((data) => {
          setData(data);
        })
        .catch(() => {});
  }, [page]);
  return (
      <div className="page">
        <Header />
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} handleSubmit={handleSubmit} />
        <ul className="card">
          {data?.results.map((card) => (
              <Card
                  key={card.id}
                  imgSrc={card.urls.regular}
                  title={`${card.user.name}: ${card.description}`}
                  alt={card.description}
              />
          ))}
        </ul>

        <ul>
          {!!data &&
          new Array(data.total_pages).fill(null).map((_, index) => (
              <button
                  key={index}
                  className={`pagination__item ${
                      index + 1 === page ? "active" : ""
                  }`}
                  onClick={() => {
                    setPage(index + 1);
                  }}
              >
                {index + 1}
              </button>
          ))}
        </ul>
        <Footer />
      </div>
  );
}
export default App;
