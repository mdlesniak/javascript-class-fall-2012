describe('Calculator', function () {
    it('can add 2 and 2', function () {
        var calculator = new Calculator();
        var actual = calculator.add(2, 2);
        expect(actual).toBe(4);
    });

    it('stores the result in result', function () {
        var calculator = new Calculator();
        calculator.add(2, 2);
        expect(calculator.result).toBe(4);
    });

    it('can subtract 42 and 11', function () {
        var calculator = new Calculator();
        var actual = calculator.subtract(42, 11);
        expect(actual).toBe(31);
    });

    it('can subtract 42 and 11 and store the result', function () {
        var calculator = new Calculator();
        calculator.subtract(42, 11);
        expect(calculator.result).toBe(31);
    });

    it('stores the last result', function() {
        var calculator = new Calculator();
        calculator.add(1, 2);
        expect(calculator.lastResult()).toBe(3);
    });
});
