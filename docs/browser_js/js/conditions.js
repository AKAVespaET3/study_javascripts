// if(){
// } else if (){
// } else{
// }
// let 변수 설정 
let first = 1;
let second = 4;

if(first <10){
    console.log("KIM");
} else if (first>second){
    console.log(`${first}>${second}`);
} else{
    console.log(`second :  ${second}`);
}

// == vs === ===는 데이터 타입까지 물어봄
let third = `4`;
first = 4;
// third == first
// true
// third === first
// false

// 삼항 연산자

// if(){
// } else if (){
// } else{
// }
// 변수 = () ? : ;
let result = (third === first) ? `true!` : `false!`;