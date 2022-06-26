import { Input } from "@chakra-ui/react";
import Search2Icon from "@chakra-ui/icon";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Link/config";
import "./search.scss";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  const [courses, setCourses] = useState([]);

  const getMyCourse = useCallback(async () => {
    if (term !== "") {
      const { data } = await axios.post(
        `${BASE_URL}api/course/filter`, {q:term}, {
          headers: {
            "Content-Type": "application/json-patch+json",
          },
        }
      );
      setCourses(data.courses);
    } else {
      setCourses([]);
    }
  }, [term]);
  useEffect(() => {
    getMyCourse();
  }, [getMyCourse]);
  console.log(courses);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    inputRef.current.addEventListener("focus", () => {
      resultRef.current.classList.add("active");
    });

    inputRef.current.addEventListener("focusout", () => {
      setTimeout(()=>{
        resultRef.current.classList.remove("active");
      },200)
    });
  }, []);
  return (
    <div>
      <div class="input input-group mb-3 d-flex">
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="search..."
        aria-describedby="basic-addon2"
        onChange={(e) => setTerm(e.target.value)}
      />
      <span className="input-group-text btn-dark" id="basic-addon2">
        <SearchIcon sx={{ color: "#fff" }} />
      </span>
        <div className="dropped-result">
          <ul className="ul">
            {courses?.map((c) => (
              <li>
                <Link to={`/course/${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
