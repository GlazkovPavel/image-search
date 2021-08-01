import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function SearchBar(props){
  return(
      <div className="input">
        <Input
            value={props.query}
            onChange={(e) => {
              props.setQuery(e.target.value);
            }}
        />

        <Button
            onSearch={props.onSearch}
        />

      </div>
  )
}
export default SearchBar;