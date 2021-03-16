// ts中书写js中的类，演示效果
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = new Person('诸葛', '孔明');
    console.log(person.fullName);
    console.log(showFullName(person));
})();
