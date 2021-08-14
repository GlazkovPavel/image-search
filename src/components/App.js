import React from "react";
import api from "../utils/api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import {Route} from "react-router-dom";
import Photo from "./Photo";


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
        <Route path="/" exact>
          <Main data={data}
                handleSubmit={handleSubmit}
                setQuery={setQuery}
                onSearch={onSearch}
                query={query}/>
        </Route>
        <Route path="/photos/:id" exact>
          <Photo photos={data} />
        </Route>

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
