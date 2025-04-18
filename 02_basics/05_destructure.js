//Object destructuring
const course = {
    courseName: "JavScript",
    coursePrice: "999",
    courseInstructor: "Tanush Saini"
}

//De-structure this object field instructor
//course.courseInstructor //we have to write this again & again so we destructure this object use its key directly without writing the whole object name and key.
//{ } - Destructure
const {courseInstructor: instructor} = course
console.log(instructor);
