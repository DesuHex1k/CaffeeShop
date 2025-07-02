import React from 'react';
import './page.css'
import Story from "../../components/Story";
import Testimonials from "../../components/Testimonials";

const Page = () => {
    return (
        <div className="page">
            <Story/>

            <div className="quote">
                <h1>
                "Good ideas start with brainstorming great ideas start with coffee"
                </h1>
            </div>

            <div className="reviews">
                <h1>Відгуки</h1>
                <Testimonials/>
            </div>

        </div>
    );
};

export default Page;