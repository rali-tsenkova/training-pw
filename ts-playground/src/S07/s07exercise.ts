/*
const statuses: string[] = ['Submitted', 'In Review', 'Resolved'];

console.log(statuses[0]);                    // 'Submitted'
console.log(statuses[statuses.length - 1]);  // 'Resolved'
console.log(statuses.at(-1));                // 'Resolved'
console.log(statuses[5]);                    // undefined
console.log(statuses.length);                // 3
*/

/*
const ids = ['REQ-1', 'REQ-2', 'REQ-3'];

console.log(ids.includes('REQ-2'));     // true
console.log(ids.indexOf('REQ-3'));      // 2
console.log(ids.indexOf('REQ-9'));      // -1  (not found)
console.log(ids.join(', '));            // 'REQ-1, REQ-2, REQ-3'

console.log('Roads,Lighting,Parks'.split(',')); // string []
*/

/*
const original = ['Citizen', 'Clerk'];
const sameArray = original;
sameArray.push('Admin');
console.log(original);   // ['Citizen', 'Clerk', 'Admin'] !

const copy = [...original];
const all = [...original, 'Supervisor'];
console.log(copy);  // ['Citizen', 'Clerk']
console.log(all);   // ['Citizen', 'Clerk', 'Supervisor']
*/

/*
function slaHours(priority: number): number {
    if (priority === 1) {
        return 4;
    }
    return priority <= 3 ? 24 : 72;
}

const hours = slaHours(2);
console.log(`SLA hours: ${hours}`);  // SLA hours: 24
*/

/*
function formatRequest(id: number, title: string,
                       prefix = 'REQ', note?: string): string {
  const base = `${prefix}-${id}: ${title}`;
  return note ? `${base} (${note})` : base;
}

console.log(formatRequest(7, 'Pothole'));          // 'REQ-7: Pothole'
console.log(formatRequest(7, 'Pothole', 'INC'));   // 'INC-7: Pothole'
console.log(formatRequest(7, 'Pothole', 'REQ', 'note'));  // 'REQ-7: Pothole (note)'
*/

/*
function logStatus(id: string, status: string | undefined): void {
  if (!status) {
    console.log(`${id}: no status`);
    return;
  }
  console.log(`${id}: ${status}`);
}

const status = '';
const funcResult = logStatus('REQ-7', status);
console.log(funcResult);
*/

/*
const isUrgent = (priority: number): boolean => priority <= 2;

const toId = (n: number) => `REQ-${n}`;

const greet = (name: string) => {
  const time = new Date().getHours() < 12 ? 'morning' : 'day';
  return `Good ${time}, ${name}`;
};

console.log('Is urgent: ' + isUrgent(3));
console.log(toId(7));
console.log(greet('Rali'));
*/

/*
const priorities = [3, 1, 5, 2];

priorities.forEach((p) => console.log(`P${p}`));

const firstUrgent = priorities.find((p) => p <= 2);   // 1
console.log(`First urgent: ${firstUrgent}`);

function retry(times: number, action: () => boolean): boolean {
  for (let i = 0; i < times; i++) {
    if (action()) return true;
  }
  return false;
}

const retryResult = retry(3, () => Math.random() < 0.5);
console.log(`Retry result: ${retryResult}`);
*/

/*
// Write slaHours(priority) and isOverdue(createdHour, nowHour, priority) with full type annotations
function slaHours(priority: number): number {
    if (priority === 1) {
        return 4;
    }
    return priority <= 2 ? 24 : 72;
}

console.log(`SLA hours: ${slaHours(3)}`);

function isOverdue(createdHour: number, nowHour: number, priority: number): boolean {
    const sla = slaHours(priority);
    return nowHour - createdHour > sla;
}  

console.log(`Is overdue: ${isOverdue(3, 20, 1)}`);
*/
/*
// Write formatRequestId(n: number, prefix = 'REQ') that pads to 4 digits: REQ-0042
function formatRequestId(n: number, prefix = 'REQ'): string {
    return `${prefix}-${n.toString().padStart(4, '0')}`;
}
console.log(formatRequestId(10));
*/

// Given an array of priorities, write functions that return: the count of urgent ones, the highest priority, a sorted copy
// 1 - urgent, 2 - high, 3 - medium, 4 - low, 5 - lowest
const priorities = [3, 1, 5, 2, 3, 2, 1, 5, 1, 1, 3];

function countUrgent(priorities: number[]): number {
    let urgentCount: number = 0;
    for (const p of priorities) {
        if (p === 1) {
            urgentCount++;
        }
    }
    return urgentCount;
}

const urgentCount = countUrgent(priorities);
console.log(`Urgent count: ${urgentCount}`);

function highestPriority(priorities: number[]): number {
    let highestCount: number = 5;
    for (const p of priorities) {
        if (p < highestCount) {
            highestCount = p;
        }
    }
    return highestCount;
}

console.log(`Highest count: ${highestPriority(priorities)}`);

function sortedPrios(priorities: number[]): number[] {
    
    return [...priorities].sort((a, b) => a - b);
}

const sorted = sortedPrios(priorities);
console.log(`Sorted priorities: ${sorted}`);