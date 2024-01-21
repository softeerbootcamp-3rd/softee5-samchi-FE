function makeProperty(initialValue = undefined) {
    let value = initialValue;
    const listeners = [];
    function setValue(newValue) {
        if(value === newValue) return;
        value = newValue;
        listeners.forEach(listener => listener(value));
    } 
    function getValue() {return value;}

    function addListener(listener) {listeners.push(listener);}
    function deleteListener(listener) {listeners.splice(listeners.indexOf(listener), 1);}
    function resetListeners() {listeners.splice(0, listeners.length);}
    function getListeners() {return listeners;}

    return {setValue, getValue, addListener, deleteListener, resetListeners, getListeners};
}
