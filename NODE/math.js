// math.js
function add(a, b) {
    return a + b;
}

function remove(a, b) {
    return b - a;
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

module.exports = { add, remove, areaOfCircle };
