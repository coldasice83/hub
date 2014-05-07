/**
 * Created by janeir on 4/3/14.
 */

/* 
ADT란 자료형이 아닌, 자료를 조작하는데 들어가는 기능들을 모두 통칭하는 개념으로, 명령형 언어에서 유효한 개념으로 클래스기반 언어에서는 멤버변수들이 비슷한 성격을 띈다.
*/


function ListInit(_list) {
    // 데이터 참조 위치 파악을 위한 초기화
    _list.poiner = -1;
}
/* 
교제에선 C언어 특성상 배열을 맘대로 줄이거나 늘일수 없어서 데이터 수와 참조위치를 따로 둔다. 
Javascript에선 유동적인 배열 조작이 가능하므로 현재 포인트만 알고 있으면 된다.
*/
function LInsert(_list, data) {
    _list.push(data);
}
function LFirst(_list, _data) {
    _data.value = _list[0];
    _list.pointer = 0;
    if(_data.value != undefined)
        return true;
} 
/* 저자의 취향인가 Lfirst와 LNext 구분? 
그렇지 않다. 만드시 LFirst 과정은 거치기 마련이다. */
function LNext(_list, _data){
    _data.value = _list[++_list.pointer];
    if(_data.value != undefined) return true;
}
function LRemove(_list) {
    _list.splice(_list.pointer, 1);
    _list.pointer--;
}
/* LRemove 중간 빈칸없게 공간이동을 해야한다 
Javascript에선 splice 기능이 있으므로 손쉽게 해결 가능. 
없을시 책에서와 같이 뒤의 값들을 하나씩 땡겨주는 
for문 사용 후 데이터 수와 참조위치를 하나씩 감소*/
function LCount(_list) {
    return _list.length;
}
function setSortRule(_list, _data1, _data2) {
    
}

/* Point */
function Point() {
    this.xpos;
    this.ypos;
}
function setPointPos(ppos, xpos, ypos) {
    ppos.xpos = xpos;
    ppos.ypos = ypos;
}
function showPointPos(ppos) {
    console.log(ppos.xpos, ppos.ypos);
}
function pointComp(pos1, pos2) {
    if(pos1.xpos == pos2.xpos && pos1.ypos == pos2.ypos)
        return 0;
    else if(pos1.xpos == pos2.xpos)
        return 1;
    else if(pos1.ypos == pos2.ypos)
        return 2;
    else
        return -1;
}



/* running */
function main() {

    //exam();
    exam2();

    // 1. 참조를 위해, call by reference 이용.

    // var list = [];
    // var data = {};
    // ListInit(list);
    // LInsert(list, 11);
    // LInsert(list, 22);
    // LInsert(list, 22);
    // LInsert(list, 33);
    // LInsert(list, 44);

    // console.log("Now Data Count : %d \n", LCount(list));

    // if(LFirst(list, data)) {
    //     console.log(data.value);
    //     while(LNext(list, data))
    //         console.log(data.value);
    // }
    // console.log('-----------------------------');

    // if(LFirst(list, data)) {
    //     if(data.value == 22)
    //         LRemove(list);

    //     while(LNext(list, data)){
    //         if(data.value == 22)
    //             LRemove(list);
    //     }
    // }

    // console.log("Now Data Count : ", LCount(list));

    // if(LFirst(list, data)) {
    //     console.log(data.value);

    //     while(LNext(list, data))
    //         console.log(data.value);
    // }

    // console.log('-----------------------Exit');

}

function exam() {
    var list = [];
    var data = {};

    ListInit(list);

    for(var i = 1; i <= 9; i++) {
        LInsert(list, i);
    }

    if(LFirst(list, data)) {
        console.log('first : ', data.value);
        while(LNext(list, data))
            console.log(data.value);
    }


    console.log("Now Data Count : ", LCount(list));
    console.log("2와 3배수 삭제");

   if(LFirst(list, data)) {
       if(data.value % 2 == 0 || data.value % 3 == 0)
            LRemove(list);

       while(LNext(list, data)) {
           if(data.value % 2 == 0 || data.value % 3 == 0)
               LRemove(list);
       }
   }

    if(LFirst(list, data)) {
        console.log('first : ', data.value);
        while(LNext(list, data))
            console.log(data.value);
    }
    console.log("Now Data Count : ", LCount(list));

}
function exam2() {
    var list =[];
    var data = {};
    var compPos = new Point();

    ListInit(list);

    var point = new Point();
    setPointPos(point, 2,1);    
    LInsert(list, point);

    point = new Point();
    setPointPos(point, 2,2);
    LInsert(list, point);

    point = new Point();
    setPointPos(point, 3,1);    
    LInsert(list, point);
    
    point = new Point();
    setPointPos(point, 3,2);    
    LInsert(list, point);

    console.log('now count', LCount(list));

    if(LFirst(list, data)){
        showPointPos(data.value);
        while(LNext(list, data))
            showPointPos(data.value);
    }

    compPos.xpos = 2;
    compPos.ypos = 0;

    if(LFirst(list, data)) {
        if(pointComp(data.value, compPos) == 1) {
            data.value = LRemove(list);
            data.value = null;
        }

        while(LNext(list, data)) {
            if(pointComp(data.value, compPos) == 1) {
                data.value = LRemove(list);
                data.value = null;
            }
        }
    }

    /* 책에선 동적으로 생성한 값들의 메모리 해제를 포함하고 있지만, 자바스크립트는 브라우저의 가비지 컬렉터에 의존적임, free 대신 null을 넣어줌 */

    console.log('now count', LCount(list));

    if(LFirst(list, data)) {
        showPointPos(data.value);
        while(LNext(list, data))
            showPointPos(data.value);
    }
    console.log('#Exit exam2');

}