import EventHub from '../src/index'


const test1 = () => {
    const eventHub = new EventHub
    console.assert(eventHub instanceof Object === true, 'eventhub is an Object')
}

const test2 = () => {
    const eventHub = new EventHub
    const content = 'i clicked!'
    let called = false
    eventHub.on('click', (text) => {
        called = true
        console.assert(text === content, 'add sub');
    })
    eventHub.emit('click', content)
    setTimeout(() => {
        console.assert(called === true, 'add sub')
    }, 0);
}

const test3 = () => {
    const eventHub = new EventHub
    let called = false
    const fn1 = () => { called = true; }
    eventHub.on('sub', fn1)
    eventHub.off('sub', fn1)
    eventHub.emit('sub')
    setTimeout(() => {
        console.assert(called === false, 'on&off sub');
    }, 0);
}


test1()
test2()
test3()