// davaleba--1
for(let i=1; i<=100; i++){
    console.log(i);
}



// davaleba--2
let i=0;
while(i<50){
    i++;
    console.log(i);
}



// davaleba--3
let name=["salomeko", "rubiko", "nanako", "iliko", "demetriko"];
name.pop();
console.log(name);

name.shift();
console.log(name);

name.push("tasiko");
console.log(name);

name.unshift("datiko");
console.log(name);



// davaleba--4
let something=[];
for(let i=1; i<=10000; i++){
    something.push(i*i);
}
console.log(something);



// davaleba--5
let nums=[21,22,23,24,25];
let sum=0;
for(let i=0; i< nums.length; i++){
    sum += nums[i];
}
console.log(`sum of nums =${sum}`);



// davaleba--6
function isOdd(number){
    if(number % 2 !== 0){
        return true
    }else{
        return false
    }
}
console.log(isOdd(11));



// davaleba--7
function convertToLowerCase(uppercaseString){
    return uppercaseString.toLowerCase();
}
let uppercaseString="MY NAME IS JOHN";
let lowercaseString=convertToLowerCase(uppercaseString);
console.log(lowercaseString);



// davaleba--8
const numbers=[21,22,23,24,25,26,27,28,29];
function checkeven(number){
    return  number.filter((number)=> number %2==0);
}
console.log(checkeven(numbers));



