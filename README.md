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

For this challenge, the program first prompts the user to enter the speed of the car.We then use the if else statement to check if the car's speed is over the speedlimt (70).If not, the program prints "Ok"

 If it is, the program calculates by how much the speed limit was exceeded. It then calculates the number of demerit points obtained for every 5km/h over the speed limit. It then returns the points.

If the points exceeds 12, the program will print "License suspended".

## Challenge-3 : Net Salary Calculator

For this challenge a program was required that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

Here the program requires the basic salary and any benefits as input. Once they have been provided, the program calculates the deductions using the payee and NSSF rates provided in the links. As for the the NHIF rates, they were not provided thus were sourced from the internet.

Once the deductions have been calculated, the program calculates the net salary. It then displays all the deductions, net salary and gross salary.