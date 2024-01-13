export function isInteger(result){
    return /^\d+$/.test(result);
}

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}