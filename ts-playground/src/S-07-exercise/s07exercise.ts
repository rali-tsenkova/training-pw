// 1. Define a ServiceRequest type with id, title, category, priority, status and optional assignee. 
type ServiceRequest = {
  readonly id: number;
  title: string;
  category: string;
  priority: string;
  status: string;
  assignee?: string;
};

const sr1 : ServiceRequest = { 
    id: 123, 
    title: 'SR1 Title', 
    category: 'Water management', 
    priority: 'Low',
    status: 'Open'
};
console.log("1. Defined SR");
console.log(`Service Request 1: ${sr1.title}`);
console.log("-----------------------------\n");

// 2. Create an array of 6 requests
const requestCollection = [];

for (let i = 0; i < 6; i++) {
    const sr: ServiceRequest = {
        id: 1+i,
        title: `SR${i + 1} Title`,
        category: 'Water management',
        priority: i % 3 === 0 ? 'Low' : 'High',
        status: i % 2 === 0 ? 'Open' : 'Submitted'
    }
    
    requestCollection.push(sr);
}

console.log("2. Created array:");
console.log(requestCollection);
console.log("-----------------------------\n");

// 3. Write assign(request, clerk) that returns a new request with the assignee set; prove the original is unchanged
function assign(request: ServiceRequest, assigneeRole: string): ServiceRequest {
    return { ...request, assignee: assigneeRole };
}

console.log("3. Assigned clerk:");
//sr1.category = 'Electricity';
console.log(assign(sr1, 'Clerk'));
console.log(sr1);
console.log("-----------------------------\n");

// 4. Count the requests per status into an object { Submitted: n, ... } and print it with Object.entries
const submittedRequests = [];
const openRequests = [];
requestCollection.forEach((req) => {req.status === "Submitted" ? submittedRequests.push(req) : openRequests.push(req)});

console.log("4. Count requests:");
console.log(`Submitted requests: ${submittedRequests.length}, Open requests: ${openRequests.length}`);
console.log("-----------------------------\n");

// Write a Citizen class with name, email and a maskedEmail() method: i***@example.com