import React from 'react';
import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);

    return (
        <div>
            <h2 className="text-center mt-4">Language Course at Affordable Price</h2>
            <div className="">
                {
                    course.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <h5 className="mt-5 text-center text-primary">More course are coming soon!</h5>
        </div>
    );
};

export default Courses;