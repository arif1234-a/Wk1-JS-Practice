let carSpeed = prompt("car speed")
// prompts the user to enter the car's speed.
let points = 0
// initial number of points.
let speedLimit = 70
function demeritPoints() {
    if (carSpeed <= speedLimit) {
      return "Ok";
    } //Checks if the speed is less than or equal to the speed limit. If so it returns "Ok".
    
    else if (carSpeed > 70) {
      points = (carSpeed - 70) / 5;
        //Checks if the speed is greater than 70. If so it calculates by how much has the speed exeeded the limit and by how many factors (using the factor of 5). The answer equals to the number of points.
        
      if (points >= 12) {
        return "License suspended";
      } // checks if the the number of points is equal or greater than 12. If so it prints "License suspended"
      else {
        return `Points:${points}`;
      }
        // If the points are less than 12, it returns the number of points.
    }
}
console.log(demeritPoints())