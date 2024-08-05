// import fs from 'fs';
// import http from 'http'

const fs = require(`fs`)
const http  = require(`http`)

const PORT=3000;

const server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-type" : "text/html"})

    fs.readFile("./index.html" , (err,data) => {
     err? console.log("Error: "+err): res.write(data)   
})
})


const message = `Hello Node`

fs.writeFile("Welcome.txt", message, (err)=>  {
 err? console.log("Error: "+err): console.log("File created successfully")
})

server.listen(PORT, (err)=>{
    err? console.log("Error: "+err): console.log(`server running on port ${PORT}`)
 })

 fs.readFile("Welcome.txt", (err , data)=>{
    err? console.log(err):console.log(data.toString())})

// Define the path to the file
const filePath = './hello.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:");
    console.log(data);
});
