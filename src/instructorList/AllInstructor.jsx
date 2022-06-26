import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetInstructors } from '../Redux/Actions/InstructersActions'
import './instructor.scss'

const AllInstructor = ({data}) => {
    const { instructors } = useSelector(state => state.allInstructers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetInstructors())
    }, [dispatch])
    console.log(instructors)
    return (
        <div className='red'>
            <div className="row">
                { instructors &&
                instructors?.map(inst => (
                    <div className="col-lg-4 col-md-6" key={inst.id}>
                        <div className="profile-image">
                            <img className='img-fluid' src={inst.profilImage} alt=""/>
                        </div>
                        <Link to={`/Instcourse/${inst.id}`}>  
                            <div className="text-info"> 
                                <h3>{inst.fullname}</h3>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default AllInstructor