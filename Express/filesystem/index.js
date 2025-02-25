// Initialize filesystem
const filesys = require("fs")


// Synchronous code to create and write into a file
// filesys.writeFileSync("./synchronous.txt", "This is synchronous code file");

// Asynchronous code (Always use function for error handling in this otherwise it will not work)
filesys.writeFile("./Asynchronous.txt", "This is asynchronous code file" , (err) => {});


// To read a file synchronously
const result = filesys.readFileSync("./userdata.txt" ,"utf-8")
console.log(result);


// To read file asynchronously
filesys.readFile("./userdata.txt" ,"utf-8" , (err, resu) => {
    if(err){
        console.log("Error",err);  
    }
    else{
        console.log(resu);
    }
})

// To add text to existing file
// filesys.appendFileSync('./userdata.txt' , "New data added\n");


// To copy text to another file (if you uncomment this it will copy code)
// filesys.cpSync("./userdata.txt", "./copieddata.txt");


// To delete a file(file is deleted that's why it is not appearing) --------------------
// filesys.unlinkSync("./copieddata2.txt");

// To create a directory(folder)
filesys.mkdirSync("folder_name")