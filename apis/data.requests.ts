import Employee from "./../models/employee.model";
class DataRequests{
	 getEmployeeRecords():Employee[]{
		var employeesCount=1000;
		var employeeRecords = [];
		for(var i=0;i<employeesCount;i++){
			var randomNumber  = Math.round(Math.random()*1000);
			employeeRecords.push(new Employee(
			10000+i,	
			new Date(new Date().getTime() - (randomNumber)*60*60*24*1000 )
			));
	}
		return employeeRecords;
	}
}
let dataRequestObj:DataRequests = new DataRequests();
export {dataRequestObj}
