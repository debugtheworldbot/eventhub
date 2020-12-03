import EventHub from '../src/index'

const eventHub = new EventHub

eventHub.on('click', (content) => {
    console.log(content);
})

eventHub.emit('click', 'i clicked!')

const eventHub2 = new EventHub
let called = false
const fn1 = () => { called = true; }
eventHub.on('sub', fn1)
eventHub.off('sub', fn1)
eventHub.emit('sub')
setTimeout(() => {
    console.log(called);
}, 1000);
