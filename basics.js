// temp=25;
// if(temp>30)
// {
//     console.log("ITS A HOT DAY");
// }
// else if(temp>20 && temp<30)
// {
//     console.log("pleasent");
// }
// else{
//     console.log("its a cold day");
// }

// i=0;
// do{
//     console.log(i)
//     i++;
// }
// while(i<5)
// i=0;
// for(i=0;i<=15;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i,"even number");
//     }
//     else
//     {
//         console.log(i,"odd number");
//     }
// }

// let fruits=['banana','orange','apple'];
// console.log(fruits);
// console.log(fruits.length);
// fruits[0]='grapes';
// console.log(fruits);

// for(i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }

// fruits.push('kiwi');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// fruits.shift('orange');
// console.log(fruits);

// function greet(name)
// {
//     console.log('welcomes '+' '+name+'!');
// }
// greet('diya');
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(2,3));

//  
// var [a,b,c,d]=['apple','orange','pinepple','mango'];
// console.log(d);
// var a=[1,2,3];
// var b=[4,5,6];
// var c=[...a,...b];
// console.log(c);

var [a,b,...t]=[2,3,45,5.9];
console.log(t);