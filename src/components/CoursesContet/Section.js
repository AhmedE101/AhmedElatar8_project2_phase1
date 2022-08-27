import React from "react";
import "./Sstyle.module.css";
import CardList from "./CardsList";



function HCourses() {
    return (
        <div className="H-coursesDiv">
            <div className="H-course">
                <h3>The world's largest selection of courses</h3>
                <p>
                    Choose from 130,000 online video courses with new additions published
                    every month
                </p>
                <h2>Students are viewing</h2>
                <CardList />
            </div>
        </div>


    );

}
export default HCourses;
