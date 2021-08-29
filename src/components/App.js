import React from "react";
import api from "../utils/api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import {Route} from "react-router-dom";
import Photo from "./Photo";
import {createPages} from "../utils/pagesCreator";

function App() {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState();
  const [item, setItem] = React.useState();
  const [pagesCount, setPagesCount] = React.useState()
  const pages = [];

  React.useEffect(() =>{
    api.getRandom()
        .then((data) => {
          setData(data)
        })
        .catch(err => console.error(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  }

  const onSearch = () => {
    setPage(1);

    api
        .search(query)
        .then((data) => {
          setData(data.results);
          setItem(data);
          setPagesCount(data.total_pages)
        })
        .catch(() => {});
  };

  React.useEffect(() => {
    api
        .search(query, page)
        .then((data) => {
          setData(data.results);
          setItem(data);
          setPagesCount(data.total_pages)

        })
        .catch(() => {});
  }, [page]);



  createPages(pages, pagesCount, page);


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
          <Photo photos={item} />
        </Route>

        <div className="pagination">
          {pages.map((pageId, index) => <span
              key={index}
              className={page === pageId ? "pagination__current-page" : "pagination__page"}
              onClick={() => setPage(pageId)}>{pageId}</span>)}
        </div>
        <Footer />
      </div>
  );
}
export default App;
