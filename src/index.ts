class EventHub {
    cache = {}
    on(eventName: string, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        (this.cache[eventName]).push(fn)
    }
    emit(eventName) {
        (this.cache[eventName] || []).forEach(fn => fn())
    }
}
export default EventHub
