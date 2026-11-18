// Print a text table of requests: id, title padded to 25 characters, priority, status
const requests: { id: number; title: string; priority: string; status: string }[] = [
  { id: 1, title: 'REQ-1', priority: 'Critical', status: 'Submitted' },
  { id: 2, title: 'REQ-2', priority: 'High', status: 'In Review' },
  { id: 3, title: 'REQ-3', priority: 'Low', status: 'Resolved' },
  { id: 4, title: 'REQ-4', priority: 'Medium', status: 'Waiting for Info' },
]; 

requests.forEach((request) => {
  console.log(`${request.id.toString().padEnd(5)} ${request.title.padEnd(25)} ${request.priority.padEnd(10)} ${request.status}`);
});
