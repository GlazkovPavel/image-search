import React from "react";
import api from "../utils/api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import Photo from "./Photo";
import {createPages} from "../utils/pagesCreator";
import {Pagination} from "./Pagination";
import {PageNotFound} from "./PageNotFound";
import {Loader} from "./Loader";

function App() {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState();
  const [pagesCount, setPagesCount] = React.useState();
  const [loader, setLoader] = React.useState(false);
  const pages = [];

  React.useEffect(() =>{
    showLoader(true)
    api.getRandom()
        .then((data) => {
          setData(data)
        })
        .catch(err => console.error(err))
        .finally(() => {
          showLoader(false);
        })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  }

  const onSearch = () => {
    setPage(1);
    showLoader(true)
    api
        .search(query)
        .then((data) => {
          setData(data.results);
          setPagesCount(data.total_pages)
        })
        .catch((err) => {console.log(err)})
        .finally(() => {
          showLoader(false);
        })
  };

  React.useEffect(() => {
    showLoader(true)
    api
        .search(query, page)
        .then((data) => {
          setData(data.results);
          setPagesCount(data.total_pages)

        })
        .catch((err) => {console.log(err)})
        .finally(() => {
          showLoader(false);
        })

  }, [page])

  function showLoader(item){
    setLoader(item)
  }

  createPages(pages, pagesCount, page);

  return (
      <div className="page">
        <Header />
        <Switch>
        <Route path="/" exact>
          <Main data={data}
                handleSubmit={handleSubmit}
                setQuery={setQuery}
                onSearch={onSearch}
                query={query}/>
          < Pagination
              pages = {pages}
              page = {page}
              setPage = {setPage}
          />
        </Route>
        <Route path="/photos/:id" exact>
          <Photo showLoader={showLoader} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
        </Switch>
        <Footer />
        <Loader isLoader={loader}/>
      </div>
  );
}
export default App;
