import React from "react";
import CourseCard from "./Card";
import "./CardListstyle.module.css";


function CardList() {
    return (
        <div className="Cardlist">
            <CourseCard
                courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
                imgSrc={"https://img-a.udemycdn.com/course/240x135/793796_0e89.jpg"}
                instructor={"Kyle Pew, Office Newb LLC"}
                rating={4.6}
                noOfStudents={"(166,042)"}
                price={"$864"}
            />
            <CourseCard
                courseTitle={"The Complete Digital Marketing Course - 12 Courses in 1"}
                imgSrc={"https://img-a.udemycdn.com/course/240x135/914296_3670_8.jpg"}
                instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
                rating={4.4}
                noOfStudents={"(166,042)"}
                price={"$864"}
            />
            <CourseCard
                courseTitle={"iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"}
                imgSrc={"https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg"}
                instructor={"Dr. Anglea Yu"}
                rating={4.4}
                noOfStudents={"(166,042)"}
                price={"$864"}
            />
            <CourseCard
                courseTitle={"Cisco CCNA 200-301 – The Complete Guide to Getting Certified"}
                imgSrc={"https://img-a.udemycdn.com/course/240x135/1203374_6d6f_3.jpg"}
                instructor={"Neil Anderson"}
                rating={4.4}
                noOfStudents={"(166,042)"}
                price={"$864"}
            />
            <CourseCard
                courseTitle={"Advanced CSS and Sass: Flexbox, Grid, Animations and More!"}
                imgSrc={"https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg"}
                instructor={"Jonas Schmedtmann"}
                rating={4.4}
                noOfStudents={"(166,042)"}
                price={"$864"}
            />




        </div>
    );
}
export default CardList;