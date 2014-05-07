function explain1() {
    var exp = ['1, malloc 과 free의 개념이 없으니 동적메모리 구성이 불가.',
    '2, 그래서 malloc과 free의 과정이 필요하지 않다.',
    '3. 그래서 교재의 예제를 살짝 변경'];
    exp.forEach(function(e) {
        console.log(e);
    });
}


function Node() {
    this.data;
    this.next;
}

function linkedList() {

    var head = null;
    var tail = null;
    var cur = null;

    var newNode = null;
    var readData;

    // 위의 아이들은 절대 전역으로 만들어지면 안됨. 이유는 다수의 배열사용시 문제가 생김

    console.log('Prepare input data, [2,4,6,8,0]');
    var tempInputDate = [2,4,6,8,0];

    var i = 0;
    while(1) {
        console.log("input : ", tempInputDate[i]);
        readData = tempInputDate[i++];
        if(readData < 1)
            break;

        newNode = new Node();
        newNode.data = readData;
        newNode.next = null;

        if(head == null)
            head = newNode;
        else
            tail.next = newNode;
        // 마지막요소의 참조를 변경
        tail = newNode;
    }
    console.log('Print all input data...')

    if(head== null)
        console.log('There are no number');
    else{
        cur = head;
        console.log(cur.data);
        // 실질적으로 null이면 존재하지 않는값이니 !cur.next를 사용해도 된다.
        while(cur.next != null) {
            cur = cur.next;
            console.log(cur.data);
        }
    }

    if(head ==null) {
        return 0;
    } else {
        var delNode = head;
        console.log('head delete...');
        function nextFree (node){
            if(node.next)
                nextFree(node.next);
            console.log(node.data, 'delete');
            node = null;
        }
        // 교재의 다음노드를 저장하고 메모리를 해제하는 방식이 아닌 재귀를 통해 마지막 연결리스트노드부터 하나식 제거하면서 돌아온다.
        nextFree(head);
        console.log('Javascript does not need free method, \nThere is a browser garbage collector that is collecting memory is pointed by nothing.');
    }

}


//헤드에 추가  : 리스트는 저장된 순서를 유지하는 자료구조가 아니다.
// tail (to point last node) isn't needed.

