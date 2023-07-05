const carinfor_obj = [
        {YEAR:"2020",CAR_NAME:"Sonata",CAR_INFOR_ID:"CI001",COMPANY_ID:"C001"},
        {YEAR:"2021",CAR_NAME:"Kona",CAR_INFOR_ID:"CI002",COMPANY_ID:"C002"},
        {YEAR:"2019",CAR_NAME:"SM6",CAR_INFOR_ID:"CI003",COMPANY_ID:"C003"},
        {YEAR:"2022",CAR_NAME:"3 Series",CAR_INFOR_ID:"CI004",COMPANY_ID:"C004"},
        {YEAR:"2020",CAR_NAME:"Camry",CAR_INFOR_ID:"CI005",COMPANY_ID:"C005"}
];

let carinfor = ``;
  for(let infor of carinfor_obj){
    carinfor = `${carinfor}
    <tr>
        <td>${infor.YEAR}</td>
        <td>${infor.CAR_NAME}</td>
        <td>${infor.CAR_INFOR_ID}</td>
        <td>${infor.COMPANY_ID}</td>
    </tr>`;
  }
  // 생성된 HTML 문자열을 carinfor 변수에 누적하고, 마지막에 innerHTML을 사용하여 해당 내용을 테이블의 tbody 요소에 설정합니다.
  let loops_source = document.querySelector('#carTableBody'); //HTML에서 부르는 ID 설정
  loops_source.innerHTML = carinfor //HTML에 넣어주는 거
//

// const carinfor_obj = [
//   {"YEAR":"2020","CAR_NAME":"Sonata","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
//   {"YEAR":"2021","CAR_NAME":"Kona","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
//   {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
//   {"YEAR":"2022","CAR_NAME":"3 Series","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
//   {"YEAR":"2020","CAR_NAME":"Camry","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
// ];

// let outHtml = `<table>`; //테이블열기
// for (let car_hashmap of carinfor_obj) {   
//   // 각 자동차의 정보를 콘솔에 출력(올바르게 액세스하고 있는지 확인용)
//   console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
//    // 동적으로 생성된 HTML 테이블 행을 추가
//   outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
// }
// outHtml += `</table>`; //테이블 닫기 </table>태그

// console.log(outHtml); // outHtml 변수에 저장된 동적으로 생성된 HTML 코드를 콘솔에 기록

// // "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
// let carTableBody = document.querySelector('#carTableBody'); // list.html에서 이 id 넣음 <tbody id="carTableBody"> !!
// carTableBody.innerHTML = outHtml; //outHtml 변수에 저장된 동적으로 생성된 HTML이 선택된 <tbody> 요소의 내부 HTML로 할당됨
