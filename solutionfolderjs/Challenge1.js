let studentMarks = prompt("Student marks between 0 and 100")
// prompts the user to enter the student's marks.
function grade() {
  if (studentMarks > 79) {
    return "A";
  } //Checks if the marks are above 79. If so it returns the grade "A".
  else if (studentMarks >= 60 && studentMarks <= 79) {
    return "B";
  } //Checks if the marks range between 60 and 79. If so it returns the grade "B".
  else if (studentMarks >= 49 && studentMarks <= 59) {
    return "C";
  } //Checks if the marks 59 and 49. If so it returns the grade "C".
  else if (studentMarks >= 40 && studentMarks <= 49) {
    return "D";
  } //Checks if the marks 40 and 49. If so it returns the grade "D".
  else return "E";
  //Checks if the marks are less than 40. If so it returns the grade "E".
}
console.log (grade())