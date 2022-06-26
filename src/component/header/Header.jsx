import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../image/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
// import { changeMode } from "../../Redux/Actions/DarkModeAction";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SearchForm from "../searchForm/SearchForm";
// import uk from '../../image/uk.png'

const Header = () => {
  const [bgColor, setBgColor] = useState("");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      setBgColor("active-header");
    } else {
      setBgColor("");
    }
  });

  const dispatch = useDispatch();
  const myColor = useSelector((state) => state.colorReducer);
  const mode = useSelector((state) => state.darkMode);
  return (
    <div id="mode" className={mode.colorMode !== "#fff" ? "active" : ""}>
      <div className={`header ${bgColor}`}>
        <div className="containn">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img className="img-fluid" src={logoimg} alt="" />
              </Link>
            </div>
            <div style={{ background: `${myColor.reng}` }} className="navmenu">
              <ul className="d-flex list-unstyled">
                {/* <li>
                  <Link to="#">
                    <button
                      className="btn btn-dark"
                      onClick={() => dispatch(changeMode("#000"))}
                    >
                      Dark
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(changeMode("#fff"))}
                    >
                      Shine
                    </button>
                  </Link>
                </li> */}
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  Pages
                  <ArrowDropDownIcon />
                </li>
                <li className="category-menu">
                  Categories
                  <ArrowDropDownIcon />
                  <div className="drop-cat">
                    <ul className="list-unstyled m-0 p-0">
                      <li>Development</li>
                      <li>Finance&&Accounting</li>
                      <li>IT && Software</li>
                      <li>Office Productivy</li>
                      <li>Photography</li>
                      <li>Math & Science</li>
                      <li>
                        <Link to="/instructors">Instructors</Link>
                      </li>
                      <li>Marketing</li>
                      <li className="none">Health & Fitness</li>
                    </ul>
                  </div>
                </li>
                <li>
                  Mega Menu
                  <ArrowDropDownIcon />
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                {/* <li className="choose-lang">
                  En
                  <div className="drop-lang">
                    <ul className="list-unstyled p-0 m-0">
                      <li>RU</li>
                      <li>AZ</li>
                      <li>Francis</li>
                      <li className="none">Italiano</li>
                    </ul>
                  </div>
            
         
                </li> */}
                
                <li className="">
                  <SearchForm/>
                </li>
                <li>
                  <Link to="/cart">
                    <ShoppingCartCheckoutIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
