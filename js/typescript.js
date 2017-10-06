console.log("Ok");
//Can declare a variable type via something like "var example:number = 0,"
//in order to specify the type, instead of the usual "var example = 0,""
//so long as we are working with Typescript.
//If required to do so, you can do "var example:any = 0," which
//is basically the same thing as "var example = 0"
//Even in these variables were inside a function, they would
//be accessible from anywhere in the code.  If we want to limit
//the variable to a particular function, instead of "var," we
//need to use "let"
var example = 0;
var x = 0;
var StudentList = [];
//Like in C#, we can specify a return type, by adding it after
//the name of the function.
function sayReady() {
    return "Ready Player One";
}
;
//Typescript has the benefit of allowing classes, with their
//usual properties and methods.
//A property inside of a class does not need "var" as
//part of its type
var Student = /** @class */ (function () {
    function Student(name, color, number) {
        this.Name = name;
        this.Color = color;
        this.Number = number;
    }
    //Again, like in C#, we can specify a return type, but
    //we can also say nothing gets returned.
    Student.prototype.Log = function () {
        //If we are referring to a property inside a class,
        //we do have to use "this" to refer to it, even
        //if that property is the only property by that name.
        console.log(this.Name, this.Color, this.Number);
    };
    ;
    return Student;
}());
;
//There is a slight difference between Typescript and C# when you
//create an instance of a class via a constructor.  Besides needing 
//to use var, the property name comes first, followed by the class name.
//var student:Student = new Student(1, "Fred");
//Student.Log();
StudentList = [
    new Student("Sue Ann", "Green", 7),
    new Student("Greg", "Black", 4),
    new Student("Eric B", "Blue", 11),
    new Student("Bob", "Black", 13),
    new Student("Eric S", "Green", 13)
];
for (var _i = 0, StudentList_1 = StudentList; _i < StudentList_1.length; _i++) {
    var cust = StudentList_1[_i];
    cust.Log();
}
