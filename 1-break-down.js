//ideal for PythonTutor

let input = 'lumo'
let expected = 'dee'
let output;

console.log("String(arg).charAt(2) + String('ee');\n");
console.log("- " + input + " should become " + expected);


 { 
    const step_1 = input.charAt(2); 
    // str: 'm'
    const step_2 = step_1 + 'ee'
    // str: 'mee'
    output = step_2;
};

console.log("- actual: " + output );
