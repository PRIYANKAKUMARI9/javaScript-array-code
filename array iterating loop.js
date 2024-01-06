let num=[10,20,30,40];
//for(let arr of  num){
  //  console.log(arr);
//}

num.forEach(function(number){
    console.log(number);
});

//arrow function used

num.forEach(number=>console.log(number));


//join array 

let joinall=['hello',9,8,9,'my'];
let all=joinall.join('++');
console.log(all);
