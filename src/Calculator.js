var Calculator = function() {
};

Calculator.prototype.add = function(x, y) {
    this.result = x + y;
    return this.result;
};

Calculator.prototype.subtract = function(x, y) {
    this.result = x - y;
    return this.result;
};

Calculator.prototype.lastResult = function() {
    return this.result;
};

window.Calculator = Calculator;