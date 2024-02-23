// For the above JSON, iterate over all for loops (for,for in,for of,forEach)

let json=[{"bag":"fruit 1",
   "name":"apple",
   "count":40,
   "rotten":"3",
},
{
    "bag":"fruit 2",
   "name":"banana",
   "count":46,
   "rotten":5,
}
];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.bag);
    console.log(obj.name);
    console.log(obj.count);
    console.log(obj.rotten);

}

console.log("for Each")
json.forEach(function(obj) { console.log(obj.name); });

console.log("for In")
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].bag);
  //console.log(json[key].name);
 
}
}
console.log("for Of")
let rotten = "";
for (let x of json[key].bag) {
 rotten += x; 
}
 console.log(rotten);
