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
            <h3 className="text-center my-4">We Have {course.length} Courses, More courses are coming soon!</h3>
            {
                course.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;