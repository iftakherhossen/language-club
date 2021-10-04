import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Container>
                <h1 className="text-center mt-4">About Us</h1>
                <p className="mx-5 px-3 fs-5 fw-bold text-center">
                    <small>Language clubs is an Institute where like-minded language learners can meet up online or in-person. Members can all be learning the same language or even studying different languages. The main point is that they work together to further their language educations. We provide best education. You can get 3 free class to know our quality and systems. We had 5 Instructors for each course. We have a AC classroom and a energetic environment. We helps the students to improve their writing abilities, as it is another important part of language and communication. Students are taught about the grammar, sentence formation, vocabulary, and expression when writing reports and articles. If they can't finish the course on time they can restart it again. We have 2 Brunch. We teach online and offline. So you can choose what you need. If you wanna <Link className="text-decoration-none" to="/contact">Contact</Link> with us visit our office or social media. For <Link className="text-decoration-none" to="/admission">Admission</Link> you can visit office or you can registration in online.</small>
                </p>
            </Container>
        </div>
    );
};

export default About;