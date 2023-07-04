// string - String
// 숫자 - Number
// ArrayList = Array
// HashMap = Object

// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`);

// for(let i=0; i<animals.length ; i++){
//     console.log(`${i+1} : ${animals[i]}`); //$다음 변수
// }

// // for(String animals : animals)
// for(let animal of animals){
//     console.log(`${animal}`);
// }

const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];
let outHtml = ``;
  for(let animal_hashmap of animals_obj){ //of = : 같다
    console.log(`name : ${animal_hashmap.name},
    species : ${animal_hashmap.species}`);
    outHtml = `${outHtml}<div>name : ${animal_hashmap.name},  species : ${animal_hashmap['species']}</div>`
  }
  console.log(outHtml);
 
  //browser 자원 중에 docs
  let loops_source = document.querySelector('#loops');
  
  // loops_source
  // <div id = "loops">inner text</div>
  loops_source.innerHTML = outHtml
  //html 구성 어디에 넣을지 구성, 이너 HTML 변경