var express = require('express');
var app = express();

app.use(express.static(__dirname+ '/public'));
//app.get('/',function(req,res) {
//	res.send("Hello world from server")
//});
app.get('/contactlist',function(req,res) {
	console.log("received get request");

	person1 = {
		name:"Anjali",
		email:"anjlali@gmail.com",
		number:"111-111-111"
	};
		person2 = {
		name:"abc",
		email:"abc@gmail.com",
		number:"111-121-111"
	};
		person3 = {
		name:"desf",
		email:"desf@gmail.com",
		number:"111-131-111"
	};

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
});

app.listen(3000);

console.log("Server running on port 3000");