import React, { useState } from "react";
import PokemonList from "./components/pokemon/PokemonList";
import Pagination from "./components/pagination/Pagination";
import PokemonDetail from "./components/pokemon/PokemonDetail";

const App = (props) => {
  const [page, setPage] = useState(1);
  const [offset, setOffSet] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [url, setUrl] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setShowHome(true);
          setShowDetail(false);
        }}
      >
        HOME
      </button>
      {showHome && (
        <div>
          <PokemonList
            setUrl={(value) => {
              console.log("URL" + value);
              setUrl(value);
            }}
            setShowHome={(value) => setShowHome(value)}
            setShowDetail={(value) => setShowDetail(value)}
            offset={offset}
          />
          <Pagination
            page={page}
            setOffSet={(value) => setOffSet(value)}
            setPage={(value) => setPage(value)}
          />
        </div>
      )}
      {showDetail && (
        <div>
          <PokemonDetail url={url} />
        </div>
      )}
    </div>
  );
};

export default App;
