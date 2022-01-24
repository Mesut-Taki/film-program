import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { IoIosUndo } from "react-icons/io";

const DetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="conteiner-button">
        <button className="return-button" onClick={returnBack}>
          <IoIosUndo /> &nbsp; Geri
        </button>
      </div>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default DetailPage;
