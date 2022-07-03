import express,{Express,Request,Response} from "express";
import {dataRequestObj} from "./apis/data.requests";
import Employee from "./models/employee.model";
import path from "path";

var app:Express = express();


app.set('view engine', 'html');
console.log(path.join(__dirname ,"../../"));
app.use(express.static(path.join(__dirname ,"../../")));

app.get("/apis/get-employees-data",function(req:Request,res:Response){
	var employeeRecords:Employee[] = dataRequestObj.getEmployeeRecords();
	res.json(employeeRecords);
});



app.get("/",function(req:Request,res:Response){
	var htmlPath:string = path.join(__dirname ,"../../index.html"); 
	res.sendFile(htmlPath);
});


app.listen(80,()=>{
	console.log("Server started listening the port 80");
});