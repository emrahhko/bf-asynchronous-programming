import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';

x += 'j'; // 1

setTimeout(() => {
    x += 'sc'; //4
    log('cb 1:', x);
}, 100);

x += 'a'; // 2

setTimeout(() => { // 6
    x += 't';
    log('cb 2:', x);
}, 300);

setTimeout(() => {
    const test = x === 'javascript';
    log('cb 3:', test);
    console.assert(test, 'x should be "javascript"');
}, 500);

setTimeout(() => {
    x += 'rip'; // 5
    log('cb 4:', x);
}, 200);

x += 'va'; //3

log(x);

log('= = = =  the call stack is empty  = = = =');
