import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../../Redux/Actions/CartActions'
import { GetOneCourse } from '../../../Redux/Actions/CourseActions'
import './detail2.scss'

const Detail2 = ({id}) => {
    console.log(id)
    const {course} = useSelector(state => state.courseById)
    const dispatch = useDispatch()
    const quantity=course.count
    useEffect(() => {
        dispatch(GetOneCourse(id))
    }, [dispatch,id])
    return (
        <section className='detail-2'>
            { course && 
                <div className="col-lg-12"> 
                    <div className="course-d">
                        <img className='img-fluid' src={course.photoUrl} alt=""/> 
                        {course.discount !== 0 && course.discount != null && (
                            <div className="course-data-price">
                                Price:
                                {course.price-course.discount} $
                                <br />
                                <span className='old-price'><del> {course.price} $</del></span>
                                <p>16 days left at this price</p>
                            </div>
                        )}

                        <div className="course-data-link">
                            <a href="link" className='btn'>Start Course Now</a>
                            <button onClick={()=>dispatch(AddToCart(course.id,1))} href="link" className='btnw'>Add To Cart</button>
                        </div>
                        <div className="course-data-list">
                            <span>This Course Includes</span>
                            <p>English, German, Italian and 7 more</p>
                            <p>3 hours on-demand video</p>
                            <p>12 downloadable resources</p>
                            <p>Full lifetime access</p> 
                            <p>Access on mobile and TV</p>
                            <p>Certificate of Completion</p>
                        </div>
                    </div>
                </div>
}
        </section>
    )
}

export default Detail2