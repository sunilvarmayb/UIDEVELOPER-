// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var acctData = [
{
"acctNum": "AAA - 1234",
"user": "Alice"
},
{
"acctNum": "AAA - 5231",
"user": "Bob"
},
{
"acctNum": "AAA - 9921",
"user": "Alice"
},
{
"acctNum": "AAA - 8191",
"user": "Alice"
}
];
var balance = {
"AAA - 1234": 4593.22,
"AAA - 9921": 0,
"AAA - 5231": 232142.5,
"AAA - 8191": 4344
};



// part-2...


// 1 Program Solution

function sortingObj(userObj, sortBy, sortDirection){
  
  // sortDirection Optional parameter
  if(sortDirection === undefined){ 
    sortDirection = "asc";
  };
  
  // sorting with account number
  if(userObj && Array.isArray(userObj) && userObj[0].acctNum && sortBy== "acctNum"){    
   var sortable = userObj.map(item=> item.acctNum).sort();
  }; 
 

 // sorting with balance
  if(userObj && typeof(userObj)== "object" && sortBy== "balance"){
     var sortable =  Object.keys(userObj).sort((a,b)=>userObj[a]-userObj[b]);
  };

  if(sortDirection == "asc"){
    return sortable;
  } else if (sortDirection == "desc"){
    return sortable.reverse();
  } else {
    console.log("give proper sortDirection")
  }
 
};

console.log(sortingObj(acctData, "acctNum"));
console.log(sortingObj(acctData, "acctNum", "asc"));
console.log(sortingObj(acctData, "acctNum", "desc"));

console.log(sortingObj(balance, "balance"));
console.log(sortingObj(balance, "balance", "asc"));
console.log(sortingObj(balance, "balance", "desc"));


// 2 Program Solution
// A and B programs solution
function filterUser(data, userName){
return data.filter(item => item.user == userName);
};

console.log(filterUser(acctData,"Bob"));
console.log(filterUser(acctData,"Charlie"));

// C Program Solution

function compare(a,b){
  let comparison = 0;
  if(a.acctNum > b.acctNum){
    comparison = 1;
  };
  if(a.acctNum > b.acctNum){
    comparison = -1;
  }
  return comparison;
};

console.log(acctData.sort(compare));

// D program Solution

function flterUserSortBal ( data, userName, balance){
 let filterObj = filterUser(data,userName);
 let bal = balance;
 for (const key in bal){
   for(var i = 0; i< filterObj.length; i++){
     if(filterObj[i].acctNum==key){
       filterObj[i].balance = bal[key];
     }

     if(!filterObj[i].acctNum == key){
       console.log(i);
       filterObj.slice(0,i);
     }
   }
 }
 console.log(filterObj);
 return filterObj;
};

function compareUser(a,b){
  let comparison = 0;
  if(a.balance > b.balance){
    comparison = 1;
  };
  if(a.balance > b.balance){
    comparison = -1;
  }
  return comparison;
};

var x = flterUserSortBal(acctData, "Alice", balance).sort((a,b)=> a.balance - b.balance);
