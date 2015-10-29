var AddChar = (function () {
    function AddChar(add_target_element) {
        this.add_target_element = add_target_element;
        this.ecscra = "!";
        this.star = "☆";
    }
    AddChar.prototype.addekusucra = function () {
        document.getElementById(this.add_target_element).innerHTML += this.ecscra;
    };
    AddChar.prototype.addstar = function () {
        document.getElementById(this.add_target_element).innerHTML += this.star;
    };
    return AddChar;
})();
var addchar = new AddChar("hello");
