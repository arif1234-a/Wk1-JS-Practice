This is the WK1-JS-Practice lab.
There were a series of three challenges. The solutions to the challenges can be found in the foulder called solutionfolderjs.

## Challeng-1 : Student Grade Generator

The challenge was to come up with a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

This challenge was solved in the Challeng1.js file.
We first prompt the user to enter the marks of a student. The marks should be between 0 and 100.

We then use the if else statement to select the appropriate grade for the student in accordance with their marks.

The statement checks the range of the marks and assigns the grade.

## Challenge-2 : Speed Detector

The challeng required a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.If the points exeeded 12 then the program should print "License suspended".