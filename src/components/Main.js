import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

function Main({query, handleSubmit, data, setQuery, onSearch}) {
  return(
  <div>
    <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} handleSubmit={handleSubmit} />
    <ul className="card">
      {data?.map((card) => (
          <Card
              key={card.id}
              id={card.id}
              imgSrc={card.urls.regular}
              title={`${card.user.name}: ${card.description}`}
              alt={card.description}
          />
      ))}
    </ul>
  </div>
  );

}

export default Main;