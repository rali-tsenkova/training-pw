//  build the label REQ-1042 [P2] Broken street light (Lighting) from separate constants, print it, 
// then print its length with .length
const requestType = 'REQ';
const requestId = 1042;
const priority = '[P2]';
const description = 'Broken street light';
const category = 'Lighting';

const label = `${requestType}-${requestId} ${priority} ${description} (${category})`;
console.log(label);
console.log(`Length: ${label.length}`);