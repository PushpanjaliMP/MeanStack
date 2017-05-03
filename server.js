var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require("body-parser");

app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());

app.get('/contactlist',function(req,res) {
	console.log("received get request");
  //	res.send("Hello world from server")
	db.contactlist.find(function(err,doc){
		console.log(doc);
		res.json(doc);
	});
});

app.get('/contactlist/:id',function(req,res) {
	console.log()
	var id= req.params.id;
	//var ObjectId = mongojs.ObjectId;
	//var id=ObjectId('id1');
	console.log("mongojs"+id);
	db.contactlist.findOne({_id: require("mongojs").ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});

app.put('/contactlist/:id',function(req,res) {

	var id= req.params.id;
	//var ObjectId = mongojs.ObjectId;
	//var id=ObjectId('id1');
	console.log("put mongojs"+id);
	db.contactlist.findAndModify({query:{_id: require("mongojs").ObjectId(id)},update:{$set:{name:req.body.name,email:req.body.email,number:req.body.number}},new:true},function(err,doc){
		console.log("response"+doc);
		res.json(doc);
	})
});


app.post('/contactlist',function(req,res){
	console.log(req.body.contacts+"req body");
	db.contactlist.insert(req.body,function(err,doc){
		res.json(doc);
		console.log("ended");
	})
});

app.delete('/contactlist/:id',function(req,res){
	console.log("delete operation"+req.params.id);
	var id= req.params.id;
	//var ObjectId = mongojs.ObjectId;
	//var id=ObjectId('id1');
	console.log("mongojs"+id);
	db.contactlist.remove({_id: require("mongojs").ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});
app.listen(3000);
console.log("Server running on port 3000");