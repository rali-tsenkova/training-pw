// Write a request status validator: given the current and the next status, 
// print whether the transition is allowed (Submitted → In Review → Resolved; In Review → Waiting for Info → In Review)

const statuses: string[] = ['Submitted', 'In Review', 'Resolved', 'Waiting for Info'];

const currentStatus: string = 'Submitted';
const nextStatus: string = 'Resolved'; 
let isTransitionAllowed: boolean = false;

switch (currentStatus) {
  case 'Submitted':
    isTransitionAllowed = nextStatus === 'In Review';
    break;
  case 'In Review':
    isTransitionAllowed = nextStatus === 'Resolved' || nextStatus === 'Waiting for Info';
    break;
  case 'Waiting for Info':
    isTransitionAllowed = nextStatus === 'In Review';
    break;
  default:
    console.log('Invalid current status.');
}

console.log(`Transition is ${isTransitionAllowed ? 'allowed' : 'not allowed'}.`);
