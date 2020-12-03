import EventHub from '../src/index'

const eventHub = new EventHub

eventHub.on('click', () => {
    console.log('clicked!');
})

eventHub.emit('click')

