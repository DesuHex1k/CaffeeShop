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
                "Гарні ідеї народжуються під час обговорень, а великі ідеї — з чашки кави"
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