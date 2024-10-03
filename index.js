
// Part 1

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csvData.split ('\n');

for (let x = 0; x < rows.length; x++) { 
    let array = rows[x].split(',');
    console.log(array[0], array[1], array[2], array[3]);
}

//output: 
// ID Name Occupation Age
// 42 Bruce Knight 41
// 57 Bob Fry Cook 19
// 63 Blaine Quiz Master 58
// 98 Bill Doctor’s Assistant 26


//Part 2

let data = ["['ID','Name','Occupation','Age']\n['42','Bruce','Knight','41']\n['57','Bob','Fry Cook','19']\n['63','Blaine','Quiz Master','58']\n['98','Bill','Doctor’s Assistant','26']"];
let data1 = data[0];

for (let i = 0; i < data.length; i++) {
    data[i] = data[i];
    
	console.log(data[i]); }
    

//output: 
// ['ID','Name','Occupation','Age']
// ['42','Bruce','Knight','41']
// ['57','Bob','Fry Cook','19']
// ['63','Blaine','Quiz Master','58']
// ['98','Bill','Doctor’s Assistant','26']

let dataArray = [
    ['ID','Name','Occupation','Age'],
    ['42','Bruce','Knight','41'],
    ['57','Bob','Fry Cook','19'],
    ['63','Blaine','Quiz Master','58'],
    ['98','Bill','Doctor’s Assistant','26'],
];

console.log (dataArray);

//output: [
//   [ 'ID', 'Name', 'Occupation', 'Age' ],
//   [ '42', 'Bruce', 'Knight', '41' ],
//   [ '57', 'Bob', 'Fry Cook', '19' ],
//   [ '63', 'Blaine', 'Quiz Master', '58' ],
//   [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
// ]

//Part 3

let p1 = {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41"
}

let p2 = {
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: "19"
}

let p3 = {
    id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age: "58"
}

let p4 = {
    id: "98",
    name: "Bill",
    occupation: "Doctor's Assistant",
    age: "26"
}
console.log (p1, p2, p3, p4);

//output: { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' } 
     //   { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' } 
     //   { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' } 
     //   { id: '98', name: 'Bill', occupation: "Doctor's Assistant", age: '26' }

let newDataArray = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '98', name: 'Bill', occupation: "Doctor's Assistant", age: '26' }

]

//Part 4

let remove = newDataArray.pop();
console.log(newDataArray);

let splice = newDataArray.splice (1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log (newDataArray);

let push = newDataArray.push ({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log (newDataArray);

//output: 
// [
//     { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//     { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
//     { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//     { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//     { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
//   ]

let ages = [41, 25, 19, 58, 111];
let avgAge = ages.reduce ((a,b) => a + b)/ages.length;
console.log (avgAge);

//output: 50.8

//Part 5 attempt

let array = [
     { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
     { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
     { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
     { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
     { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
    ];


    function convertToCSV(objArray) {
        const header = Object.keys(objArray[0]).join(',');
        const rows5 = objArray.map(obj => {
          return Object.values(obj)
            .map(val => `"${val.toString().replace(/"/g, '""')}"`) // Escape quotes
            .join(',');
        });
        return `${header}\n${rows5.join('\n')}`;
      }
      const csvString = convertToCSV(array);
      
    
      console.log (csvString);

     
 let string = JSON.stringify(csvString);
      string.replace(/"/g,'');
      console.log(string);
 let newString = "id,name,occupation,age\n\"42\",\"Bruce\",\"Knight\",\"41\"\n\"48\",\"Barry\",\"Runner\",\"25\"\n\"57\",\"Bob\",\"Fry Cook\",\"19\"\n\"63\",\"Blaine\",\"Quiz Master\",\"58\"\n\"7\",\"Bilbo\",\"None\",\"111\"";
    newString = newString.replace(/"/g, '');
    console.log(newString);

   
    //  output:
// id,name,occupation,age
// 42,Bruce,Knight,41
// 48,Barry,Runner,25
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 7,Bilbo,None,111
     
    