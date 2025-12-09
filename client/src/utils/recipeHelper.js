export function parseList(value) {
    return value
        .split(',')
        .map(v => v.trim())
        .filter(v => v.length > 0);
}