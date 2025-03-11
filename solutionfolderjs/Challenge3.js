let basicSalary = 300000; // The user enters the basic salary.
let benefits = 0; // The user enters all the benefits they enjoy.
const grossSalary = basicSalary + benefits; // Calculates the gross salary.
let payee = 0;
let nssfDeductions = 0;
let nhifDeductions = 0;
function payeeTax() {
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
  } else if (grossSalary > 32333 && grossSalary <= 500000) {
    payee = grossSalary * 0.3;
  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    payee = grossSalary * 0.32;
  } else if (grossSalary > 800000) {
    payee = grossSalary * 0.35;
  }
  return payee;
} // calculates the value of the payee.

function nssfCalculations() {
    const nssfTierILimit = 8000;
    const nssfTierIILimit = 72000;
  if (grossSalary <= nssfTierILimit) {
    nssfDeductions = grossSalary * 0.06;
  } else{ nssfDeductions =
    nssfTierILimit * nssfTierIIRate +
    (grossSalary - nssfTierILimit) * 0.06;
  }
  return nssfDeductions;
} // calculates the value of the NSSF deductions.

function nhifCalculation() {
  // calculates the NHIF Deduction. The values used were not specified by the assignment in canvas but were sourced from the internet.
  if (grossSalary <= 5999) nhifDeductions = 150;
  else if (grossSalary <= 7999) nhifDeductions = 300;
  else if (grossSalary <= 11999) nhifDeductions = 400;
  else if (grossSalary <= 14999) nhifDeductions = 500;
  else if (grossSalary <= 19999) nhifDeductions = 600;
  else if (grossSalary <= 24999) nhifDeductions = 750;
  else if (grossSalary <= 29999) nhifDeductions = 850;
  else if (grossSalary <= 34999) nhifDeductions = 900;
  else if (grossSalary <= 39999) nhifDeductions = 950;
  else if (grossSalary <= 44999) nhifDeductions = 1000;
  else if (grossSalary <= 49999) nhifDeductions = 1100;
  else if (grossSalary <= 59999) nhifDeductions = 1200;
  else if (grossSalary <= 69999) nhifDeductions = 1300;
  else if (grossSalary <= 79999) nhifDeductions = 1400;
  else if (grossSalary <= 89999) nhifDeductions = 1500;
  else if (grossSalary <= 99999) nhifDeductions = 1600;
  else nhifDeductions = 1700;
  return nhifDeductions;
}

payeeTax();
nssfCalculations();
nhifCalculation();

let netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);

console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE: ${payee}`);
console.log(`NSSF: ${nssfDeductions}`);
console.log(`NHIF: ${nhifDeductions}`);
console.log(`Net Salary: ${netSalary}`);
