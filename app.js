var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent','There is an event');





var events = require('events');

var util=require('util');

var Person = function(name){
  this.name=name;
};
util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary ');
var ryu = new Person('ryu');
var people = [james,mary,ryu];

people.forEach(function(person){

  person.on('speak',function(mssg){
    console.log(person.name +' said ' + mssg);
  });
});

james.emit('speak','hey dudes');

var fs = require('fs');


fs.readFile('readMe.txt','utf8',function(err,data){
fs.writeFile('writeMe.txt',data);
});





var fs = require('fs');

fs.unlink('./stuff/writeMe.txt',function(){
  fs.rmdir('stuff');
});



var http = require('http');

var server = http.createServer(function(req,res){
  console.log('request was made'+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs now listening');








var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

myReadStream.on('data',function(chunk){
  console.log('new chunk Received');
});





















/*var server = http.createServer(function(req,res){
  console.log('request was made'+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs now listening');*/

var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

myReadStream.on('data',function(chunk){
  console.log('new chunk Received');
  myWriteStream.write(chunk);
});









var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made'+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs now listening');








var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made'+req.url);
if(req.url==='/home' || req.url==='/'){
res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname+'/index.html').pipe(res);
}else if (req.url==='/contact') {
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname+'/contact.html').pipe(res);
}else if (req.url==='/api/ninjas') {
  var ninjas = [{name:'ryu',age:29},{name:'yoshi',age:32}];
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify(ninjas));
}else{
  res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);

}
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs now listening');




var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:id',function(req,res){
  res.send('you lookong with profile id of '+req.params.id);
});
app.listen(3000);

