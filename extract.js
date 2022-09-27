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
    

    
  

    
    let emailCount = 0;

    let emailRegex =/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g
    
    text.match(emailRegex).forEach(function(email) {
    console.log(email);
    

//   if (text.substring === '@softwire.com') console.log(text)

//   text.match("@softwire.com").forEach(processEachEmail
//   )

//     console.log(`Processed ${emailCount} address`);

//     function processEachEmail(line) {
       
//         emailCount++;

  }
    )}