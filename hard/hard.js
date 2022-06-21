// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.

// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.

// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.

// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.

// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.


// const http = require('http');
// const hostname= '127.0.0.1';
// const port= 8000;

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Welcome to start learning node and express \n');
// });

// server.listen(port, hostname,() => {
//     console.log(`Sever running at http://${hostname}:${port}/`);
// })

import emJson from './employees.json' 
console.log(emJson.employees.employee[0])

const express = require('express')
const app = express();



app.get('/employees', (req, res) => { 

    res.status(200).send(emJson.employees)
    
    });



app.get('/employees/:id',(req,res)=> {

    const id= req.params.id -1
    if(req.params.id > emJson.employees.employee.length) 
    res.status(400).send('Employee Not Found')
    else res.status(200).send(emJson.employees.employee[id]);

})


app.listen(8000, () => {
console.log('Example app listening on port 8000!')
});