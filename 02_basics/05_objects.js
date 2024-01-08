//DESTRUCTURING OF OBJECT:
//This concept is mostly used in the react for functions.It is also mostly used in javascript as sometimes you have to access a particular element several times.


const course = {
    cost: 400,
    courseInstructor: "Rajesh",
    courseSubject: "Python",
}

const {courseInstructor: Instructor} = course;
const {courseSubject: Subject} = course;
console.log(Instructor);
console.log(`The name of the Instructor for this course is: ${Instructor}`);
console.log(`And the subject taught by him is ${Subject}`);

//JSON: A FORMAT FOR THE DATA INCLUDED IN THE APIS.
//APIS ARE CERTAIN HELPERS WHICH WE WILL LEAR ABOUT MORE IN FURTHER VIDEOS.