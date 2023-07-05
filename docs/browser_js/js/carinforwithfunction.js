function CarList(){
const carinfor_obj = [
    {YEAR:"2020",CAR_NAME:"Sonata",CAR_INFOR_ID:"CI001",COMPANY_ID:"C001"},
    {YEAR:"2021",CAR_NAME:"Kona",CAR_INFOR_ID:"CI002",COMPANY_ID:"C002"},
    {YEAR:"2019",CAR_NAME:"SM6",CAR_INFOR_ID:"CI003",COMPANY_ID:"C003"},
    {YEAR:"2022",CAR_NAME:"3 Series",CAR_INFOR_ID:"CI004",COMPANY_ID:"C004"},
    {YEAR:"2020",CAR_NAME:"Camry",CAR_INFOR_ID:"CI005",COMPANY_ID:"C005"}
]; 

let carinfor = `<table>`;

    for(let List of carinfor_obj ){
        carinfor = `${carinfor}
        <tr>
            <td>${List.YEAR}</td>
            <td>${List.CAR_NAME}</td>
            <td>${List.CAR_INFOR_ID}</td>
            <td>${List.COMPANY_ID}</td>
        </tr>
        `
    }
    carinfor += `</table>`
    let loops_source = document.querySelector('#carlist'); //HTML에서 부르는 ID 설정
    loops_source.innerHTML = carinfor //HTML에 넣어주는 거

}
