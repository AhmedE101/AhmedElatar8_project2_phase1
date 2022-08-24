import React from "react";
import "./Cstyle.module.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf"


function CourseCard(props) {

    return (<div className="Card">
        <img className="courseImg" src={props.ImgSrc} alt="courseImg"></img>
        <h3>{props.courseTitle}</h3>
        <p>{props.instructor}</p>
        <div className="ratingDiv">
            <span className="rating">{props.rating}</span>
            <span className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
            </span>
            <span className="noOfStudents">{props.noOfStudents}</span>
        </div>
        <h3 className="price">{props.price}</h3>
        <div className="bestsellerBadge">Bestseller</div>
    </div>);
}
export default CourseCard;