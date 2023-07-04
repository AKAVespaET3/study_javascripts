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