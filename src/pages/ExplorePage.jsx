import { Checkbox, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { BASE_URL } from "../Link/config";
import axios from "axios";
import FormGroup from "@mui/material/node/FormGroup";
import FormControlLabel from "@mui/material/node/FormControlLabel";
function valueText(value) {
  return `${value}AZN`;
}

const ExplorePage = () => {
  const [price, setVPrice] = React.useState([20, 3000]);
  const [sortBy, setSortBy] = useState(2);
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState([]);

  const getInstructors = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/instructotr/getInstructers`
    );
    // setInstructors(data);
    console.log(data);
  };

  const getCourse =  async()=>{
   const {data}=await axios.get(`${BASE_URL}/api/course/filter/""/1/${price[0]}/${price[1]}/`)
  }
  useEffect(() => {
    getInstructors();
  }, []);

  const checkedInstructor = (e) => {
    if (e.target.checked) {
      const instId = Number(e.target.value);
      setSelectedInstructor((i) => [...i, instId]);
    }
    e.target.value();
  };
  const handleChange = (event, newValue) => {
    setVPrice(newValue);
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-3">
          <div className="explore-left">
            <div className="filter-item">
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="form-control"
              >
                <option value={2}>New</option>
                <option value={1}>price to increase</option>
                <option value={0}>price to decrease</option>
              </select>
            </div>
          </div>
          <div className="filter-item">
            <Slider
              getAriaLabel={() => "Temperature range"}
              max={3000}
              value={price}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valueText}
            />
          </div>
          <div className="rating">
            <Rating name="size-large" defaultValue={2} size="large" />
          </div>
          <div className="filter-item my-5">
            {/* <select className="form-control">
              <option disabled={true} value="">
                Abdulla
              </option>
              <option value="">Amin</option>
            </select> */}

            {/* {instructors?.map((ins) => (
              <FormGroup>
                <FormControlLabel
                  conntrol={<Checkbox defaultChecked />}
                  label={`${ins.fullname}`}
                />
              </FormGroup>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExplorePage;
