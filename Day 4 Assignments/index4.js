let students=[ 
 {
 name : "manik", 
 age : 25, 
 country : "India",
 hobbies : ["cards","videogames","movies"],
 },
 {
 name : "shyam", 
 age : 18, 
 country : "Australia",
 hobbies : ["golf","cricket","drawing"],
 },
 {
 name : "daniel", 
 age : 32, 
 country : "India",
 hobbies : ["rugby","skating","dancing"],
 },
 {
 name : "gabriel", 
 age : 19,
 country : "Canada",
 hobbies : ["icehockey","pub","singing"],
 },
 	]
 function disp_age(obj){
 	console.log("Student's age less than 30 are: ");	
	students.forEach(function(obj){
			if (obj.age < 30)
				console.log(obj);
			});}
disp_age(students);
 
 function disp_country(obj){
 	console.log("Students in india: ");	
	students.forEach(function(obj){
			if (obj.country == "India")
				console.log(obj);
			});}
disp_country(students);