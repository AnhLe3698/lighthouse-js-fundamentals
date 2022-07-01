const organizeInstructors = function(instructors) {
  // Put your solution here
  let course = [];
  let coursesPushed = [];
  let searched = false;
  let instrucCourse = {};
  for (let i = 0; i < instructors.length; i++) {
    //check if we had already searched the course
    for (p = 0; p < coursesPushed.length; p++) {
      if (instructors[i].course === coursesPushed[p]) {
        searched = true;
      }
    }
    if (searched === false) {
      course.push(instructors[i].name);
      coursesPushed.push(instructors[i].course);
      for (let j = i + 1; j < instructors.length; j++) {
        if (instructors[i].course === instructors[j].course) {
        course.push(instructors[j].name);
        }
      }
      instrucCourse[instructors[i].course] = course;
    }
    course = [];
  }
  return instrucCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));