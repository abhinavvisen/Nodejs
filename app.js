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
