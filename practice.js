let cars = 'toyota'
cars = cars

const myCars = 'bmw'


console.log(myCars);


const name = 'sadik'

const sadikName = `
hello ${name} welcome to our team
`

console.log(sadikName);


const products = {
    name:'tata', price:80000,color :'black',
    name:'BMW', price:60000,color :'blue',
    name:'toyota', price:50000,color :'green',
    name:'riksa', price:2000,color :'white',
    name:'car', price:3000,color :'red'
}

const newProduct = `
this is my car ${products.name,products.price} taka price
`
console.log(newProduct);


const sum = sum => sum * 5;
const value = sum(10)



const sum = (num1,num2)=> (num1,num2 + 2) * (num1,num2) ;
const num = sum (10,20)
console.log(num);

const doMath =

    (num1,num2) =>{

        const sum = num1 + 2;
        const num = num2 + 2;

        console.log(sum,num);
        const bum = sum * num;
        return bum
        
        
    }

    const total = doMath(21,10)
    console.log(total);


const numbers = (num1,num2,num3) => num1 * num2* num3;

const total = numbers(20,10,30)

console.log(total);


const numbers = [10,20,30,40,50,60,70]

const number  = numbers.map(number => number * 5) 
const total = [...number]
console.log(total);
    

const array = [10,31,45,101,105,12,11,36,35]

const number = array.filter(number => number % 2  );
console.log(number);


const newArray = [{
    name:'BMW' ,price: 15000 ,color : "black", 
    name:'toyota' ,price: 5000, color : "blue" ,
    name:'tata' ,price: 15000, color : "white" ,
    name:'nan' ,price: 15000, color : "red" 
}]

const newName = newArray.find(name  => newArray.price = 5000)

console.log(newName);


// array.map mane holo for loop er moto ghure ghure array er sob eliment re dhore dhore hisab korbe ba ja korar korbe .forEach o amonoi just for each er moddhe return lage na .array.filtar mane holo ata kichu akta sorto dibe .arrayer moddhe jetar sathe sorto ta mile tader sob gula re dekhabe .ar find o same but find just first er ta e dhore anbe .
    
 



const players = 
    { name: 'omuk', firstName: "Shakib", lastName: "Hasan" , age: 34 ,
     id:46 , nickName: "Tamim",
    };

   const {name,age}  = players;
   console.log(name,age);


const [one,two,three]= [10,40,30,50,80]


console.log(three);


const name = (num1,num2,num3 = 7) => num1 + num2 + num3 ;
const value = name(10,20);
console.log(value);


const object = {
     name : 'mamun', work : {web:'dev', other: 'design', like:{other1:'idont', other2:{like2:'your head'}}}
}

console.log(object.work.web);


