/**
 * Created by NHNent on 2014-07-01.
 */


// 직원정보 구조체(객체)
function EmpInfo() {
    this.empNum;
    this.age;
}


function UnderstandTable() {
    function main_500() {
        var empInfoArr = {};
        var ei;
        var eNum;

        var scan = prompt("사번과 나이 입력");
        ei = new EmpInfo();
        ei.empNum = scan.split(' ')[0];
        ei.age = scan.split(' ')[1];
        empInfoArr[ei.empNum] = ei;

        eNum = prompt('확인하고픈 직원 사번입력');
        ei = empInfoArr[eNum];
        console.log("사번"  , ei.empNum, " 나이 " , ei.age);

    }
    main_500();
}
