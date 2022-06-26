import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home3.scss'
// import course1 from '../../image/course-1-img.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { GetPopCourses } from '../../Redux/Actions/CourseActions'
// import course2 from '../../image/course-2-img.jpg'
// import course3 from '../../image/course-3-img.jpg'
// import course4 from '../../image/course-4-img.jpg'
const Home3 = () => {
  const courses = useSelector(state => state.coursesPopular)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetPopCourses())
  }, [dispatch])
  console.log(courses)
  return (
    <section className='home-3'>
      <div className="container">
        <div className="title-sec">
          <div className="d-flex justify-content-between">
            <div className="texts">
              <h3>Most Popular Courses</h3>
              <p>Aliquam a augue suscipit, luctus neque purus ipsum ne que dolor primis libero <br />
                tempus, blandit posuere and ligula varius magna a porta</p>
            </div>
            <div className="view-courses mt-5">
              <button>
                <Link to="/about">
                  View All courses
                </Link>

              </button>
            </div>
          </div>

        </div>
        <div className="row">
          {courses.course?.map(pro => (
            <div className="col=lg-6 col-md-3 col-sm-12" key={pro.id}>
              <Link to={`/course/${pro.id}`}>
                
                <div className="course-box">
                  <img className='img-fluid' src={pro.photoUrl} alt="" />

                  <div className="course-text">
                    <p className='tags'>
                      <span className='tt'>Language</span>
                      <span className='tt'>English</span>
                    </p>
                    <h5>{pro.name}</h5>
                    <div className="rating-course">
                      <span>Rating ({pro.rating})</span>
                    </div>
                    {pro.discount !== 0 && pro.discount != null && (
                      <span className='price-c'>
                        <text>Price</text><br />
                        <span className='old-price'>${pro.price}</span>
                        ${pro.price - pro.discount}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

            </div>
          ))}


        </div>
      </div>
    </section>
  )
}

export default Home3