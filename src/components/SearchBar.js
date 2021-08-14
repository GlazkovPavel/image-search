import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function SearchBar(props){
  return(
      <form className="input" onSubmit={props.handleSubmit}>
        <Input
            value={props.query}
            onChange={(e) => {
              props.setQuery(e.target.value);
            }}
        />

        <Button
            onSearch={props.onSearch}
        />

      </form>
  )
}
export default SearchBar;