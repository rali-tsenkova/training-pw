import {idFormat, slaHours, isOverdue, isTitleValid, isValidCategory, summaryPrint } from './hw07-request-utils';

// Use the functions to process an array of 8 hard-coded requests and print a report
const requests = [
    { id: 1, title: "Fix a big pothole on Al. Malinov street", category: "Roads", priority: 1, createdHour: 9 },
    { id: 2, title: "Clear the fallen leaves from the streets shafts in Mladost 1A", category: "Cleanup", priority: 3, createdHour: 14 },
    { id: 3, title: "Clear fallen branches from right in front of the school", category: "School", priority: 2, createdHour: 20 },
    { id: 4, title: "Put a new streetlight on Saharov bulevard", category: "Lighting", priority: 4, createdHour: 20 },
    { id: 5, title: "Repair the gardrail on the main street", category: "Roads", priority: 1, createdHour: 23 },
    { id: 6, title: "Paint the crosswalks in front of the kindergarten", category: "Roads", priority: 3, createdHour: 15 },
    { id: 7, title: "Fix", category: "Parks", priority: 4, createdHour: 16 },
    { id: 8, title: "Install new slides in the playground", category: "Parks", priority: 2, createdHour: 18 }
];

const allowedCategories = ["Roads", "Lighting", "Parks", "Cleanup", "Trees"];
var currentHour = 24;

console.log("Summary of Requests:");
console.log('-----------------------------');
/*
for (const request of requests) {summaryPrint(
    request.id, 
    request.priority, 
    request.createdHour, 
    currentHour, 
    request.title, 
    request.category, 
    allowedCategories);
    console.log('-----------------------------');
}
    */
console.log("End of Summary");
console.log('***********************');

console.log("Report:")
console.log('-----------------------------');
for (const request of requests) {
    const categoryValid = isValidCategory(request.category, allowedCategories);
    const titleValid = isTitleValid(request.title);
    const formattedID = idFormat(request.id);
    const slaCalc = slaHours(request.priority);
    const overdue = isOverdue(request.createdHour, currentHour, request.priority);
    var text = `Request: ${formattedID.padEnd(5)} | SLA hours: ${slaCalc.toString().padEnd(5)} | Is overdue: ${overdue.toString().padEnd(5)} | Category: ${request.category.padEnd(10)} | Title: ${request.title.padEnd(10)}`
    console.log(!categoryValid || !titleValid ? "Invalid request" : text);
    console.log("-".repeat(text.length));
}
