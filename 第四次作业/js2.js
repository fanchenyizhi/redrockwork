// let obj = new obj();
// obj.name = "第一种";
// obj.num = '11111';
// console.log(obj); 

// let obj={
//     name:'第二次',
//     age:'2'

// }
// console.log(obj); 


const p1 = new Person('BBH', 30)
const p2 = new Person('star', 19)

function ren(name, age) {
    this.name = name
    this.age = age
    this.sayname = () => {
        console.log(this.name)
    }


}