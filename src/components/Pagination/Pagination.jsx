import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import { useParams } from "react-router-dom";
import style from "./Pagination.module.css";

const Pagination = ({ onClose }) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const { pageNum } = useParams();
  const currentPage = parseInt(pageNum, 10) || 1;

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, [page]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPageRange = (currentPage) => {
    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      start = 1;
      end = 5;
    }

    return Array.from({ length: 5 }, (_, i) => start + i);
  };

  const pageRange = getPageRange(currentPage);

  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
      <nav className={style.navcointeiner}>
        {page > 1 && (
          <Link
            to={`/home/page/${page - 1}`}
            className={style.commonPageClass}
            onClick={() => {
              setPage(page - 1);
              scrollToTop();
            }}
          >
            {"<"}
          </Link>
        )}
        {pageRange.map((pageNum) => (
          <Link
            key={pageNum}
            to={`/home/page/${pageNum}`}
            className={`${style.commonPageClass} ${
              pageNum === currentPage ? style.activePage : ""
            }`}
            onClick={() => {
              setPage(pageNum);
              scrollToTop();
            }}
          >
            {pageNum}
          </Link>
        ))}
        {characters.length === 20 && (
          <Link
            to={`/home/page/${page + 1}`}
            className={style.commonPageClass}
            onClick={() => {
              setPage(page + 1);
              scrollToTop();
            }}
          >
            {">"}
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
