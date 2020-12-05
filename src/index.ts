class EventHub {
    private cache = {}
    on(eventName: string, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        (this.cache[eventName]).push(fn)
    }
    emit(eventName, content?) {
        (this.cache[eventName] || []).map(fn => fn(content))
    }
    off(eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        let index = this.cache[eventName].indexOf(fn)
        if (index > -1) {
            this.cache[eventName].splice(index, 1)
        } else {
            return
        }

    }
}
export default EventHub
