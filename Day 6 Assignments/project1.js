let friends = [
	{
		name : "Manik",
		age : 25,
		city : "Vellore",
		salary : 20000
	},
	{
		name : "Shyam",
		age : 18,
		city : "Sydney",
		salary : 16000
	},
	{
		name : "Jegan",
		age : 27,
		city : "Mumbai",
		salary : 25000
	},
	{
		name : "Karthik",
		age : 20,
		city : "Chennai",
		salary : 30000
	},
	{
		name : "gopal",
		age : 30,
		city : "Bengaluru",
		salary : 50000
	},

];

function display(myarray)
{
 	let tabledata= "";
	myarray.forEach(function(fri,index){
				let currentrow=`<tr>
				<td>${index+1}</td>
				<td>${fri.name}</td>
				<td>${fri.age}</td>
				<td>${fri.city}</td>
				<td>${fri.salary}</td>
				<td><button onclick="del(${index})">Delete</button></td>
				</tr>` ;
	tabledata += currentrow;
	});
	document.getElementById("tdata").innerHTML= tabledata;
}
display(friends);

function searchByName(){
	let searchValue = document.getElementById("searchName").value;

	let newdata = friends.filter(function(friend){
		return friend.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
	});
	display(newdata);
}
function searchByCity(){
	let searchValue = document.getElementById("searchCity").value;

	let newdata = friends.filter(function(friend){
		return friend.city.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
	});
	display(newdata);
}
function del(index){
	friends.splice(index,1);
	display(friends);
}
