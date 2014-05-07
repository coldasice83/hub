function LinkedListExam01() {

    function run() {
        var list = new LinkedList;
        var data = {};
        ListInit(list);

        setSortRule(list, function(a, b) {
            if(a.value < b.value) 
                return 0;
            else
                return 1;
        })

        LInsert(list, 11);
        LInsert(list, 11);
        LInsert(list, 22);
        LInsert(list, 22);
        LInsert(list, 33);

        console.log('Count... ', LCount(list));

        if(LFirst(list, data)) {
            console.log('First', data.value);
        }
        while(LNext(list, data)) {
            console.log('Next', data.value);
        }


        // 22 제거
        if(LFirst(list, data)) {
            console.log(data)
            if(data.value == 22) {
                LRemove(list);
            }

            while(LNext(list, data)) {
                if(data.value == 22) {
                    LRemove(list);
                }
            }
        }

        console.log('Count...', LCount(list));

// 남은애들 출력
        if(LFirst(list, data)) {
            console.log(data.value);

            while(LNext(list, data)) {
                console.log(data.value);
            }
        }


    }

    run();

    function Node() {
        this.data;
        this.next;
    }

    function LinkedList() {
        this.head;
        this.cur;
        this.before;
        this.numOfData;
        this.comp;
    }

    
    function FInsert(_list, _data) {
        // 더미 노드 생성입니다.
        var newNode = new Node();
        newNode.data = _data;
        newNode.next = _list.head.next;
        _list.head.next = newNode;

        _list.numOfData++;
    }

    // 정렬을 할건지 말건지 정렬 함수가 있는지를 보고 판단한다.
    function LInsert(_list, _data) {
        if(!_list.comp) {
            FInsert(_list, {value:_data});
        } else {
            SInsert(_list, {value:_data});
        }
    }

    function SInsert(_list, data) {
        var newNode = new Node();
        var pred = _list.head;
        newNode.data = data;

        while(pred.next && _list.comp(data, pred.next.data) != 0) {
            pred = pred.next;
        }
        newNode.next = pred.next;
        pred.next = newNode;

        _list.numOfData++;
    }

    function LFirst(_list, _data) {
        if(!_list.head.next)
            return false;

        _list.before = _list.head;
        _list.cur = _list.head.next;

        _data.value = _list.cur.data.value;
        return true;
    }

    function LNext(_list, _data) {
        if(!_list.cur.next)
            return false;

        _list.before = _list.cur;
        _list.cur = _list.cur.next;

        _data.value = _list.cur.data.value;

        return true;
    }

    function LRemove(_list) {
        var _rpos = _list.cur;
        var data = _rpos.data;

        // 이전 노드의 다음노드 포인터와 
        // 현 노드의 다음노드 포인터를 연결
        _list.before.next = _list.cur.next;
        _list.cur = _list.before;

        _rpos = null;
        _list.numOfData--;
        return data;
    }

    function LCount(_list) {
        return _list.numOfData;
    }

    function setSortRule(_list, comp) {
        _list.comp = comp;
    }

    function ListInit(_list) {
        // 초기화
        _list.head = new Node;
        _list.head.next = null
        _list.comp = null;
        _list.numOfData = 0;
    }



}

