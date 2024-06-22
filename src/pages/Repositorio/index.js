import React from "react";

const Repositorio = ({ match }) => {
  return (
    <h1 style={{color: '#FFF'}}>
      {decodeURIComponent(match.params.repositorio)}
    </h1>
  );
};

export default Repositorio
