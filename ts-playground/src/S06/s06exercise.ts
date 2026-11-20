// Write a function-free script that takes a priority (1–5) and 
// prints the SLA in hours using if / else if, then rewrite it with switch
/*
let priority: 1 | 2 | 3 | 4 | 5 = 1;

if (priority>=4) {
  console.log('SLA is 3 days');
} else if (priority>=2) {
  console.log('SLA is 7 days');
} else {
  console.log('SLA is 30 days or more');
}
  */

/*
switch (priority) {
  case 5:
  case 4:
    console.log('SLA is 3 days');
    break;
  case 3:
  case 2:
    console.log('SLA is 7 days');
    break;
  default:
    console.log('SLA is 30 days or more');
}
*/

// Print the numbers 1 to 100; for multiples of 3 print Clerk, of 5 Citizen, of both Supervisor
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Supervisor');
    } else if (i % 3 === 0) {
        console.log('Clerk');
    } else if (i % 5 === 0) {
        console.log('Citizen');
    } else {
        console.log(i);
    }
}
*/

// Given an array of request statuses, count how many are Submitted, In Review and Resolved
/*
const requestStatuses: string[] = ['Submitted', 'In Review', 'Resolved', 'Submitted', 'In Review'];
let countSubmitted = 0;
let countInReview = 0;
let countResolved = 0;

for (const status of requestStatuses) {
    if (status === 'Submitted') {
        countSubmitted++;
    } else if (status === 'In Review') {
        countInReview++;
    } else if (status === 'Resolved') {
        countResolved++;
    }
}

console.log(`Submitted: ${countSubmitted}`);
console.log(`In Review: ${countInReview}`);
console.log(`Resolved: ${countResolved}`);
*/

// Print every combination of 3 roles and 4 pages as role → page
const roles: string[] = ['Admin', 'User', 'Guest'];
const pages: string[] = ['Home', 'About', 'Contact', 'Profile'];

for (const role of roles) {
    for (const page of pages) {
        console.log(`${role} → ${page}`);
    }
}