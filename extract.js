import fs from 'fs';

let text = fs.readFileSync("sample.txt", "utf-8")


console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;

text.split("\n").forEach(
    processOneLine
)


console.log(`Processed ${lineCount} lines.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;

    // add code here to find emails in the line 
    

    
  let emailCount = 0

    let emailRegex =/[a-zA-Z0-9._-]+@[?:softwire0-9.-]+\.[a-zA-Z]{2,4}/g  /* {2,4} Means the string has minimum 2 characters and maximum 4 characters 
                                                                            (The length of string should be greater than or equal to 2 
                                                                             and less than or equal to 4). */
    text.match(emailRegex).forEach(function(email) {
    console.log(email);

    
     

     email.split().forEach(           // ("\n") new line
        processEachEmail
    )

    console.log(`Processed ${emailCount} address`);

    function processEachEmail() {
       
        emailCount ++;

  }

    }
    )}
