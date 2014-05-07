function CircleListExam01() {

    function run() {
        var list = new CircleList();
        var data = {};
        var i, nodeNum;
        
        ListInit(list);

        LInsert(list, 3);
        LInsert(list, 4);
        LInsert(list, 5);
        LInsertFront(list, 2);
        LInsertFront(list, 1);
        if(LFirst(list, data)) {
            console.log(data.value);
            for(i = 0; i<LCount(list)*3-1;i++) {
                if(LNext(list, data)) 
                    console.log(data.value)
            }
        } 

        var nodeNum = LCount(list);
        if(nodeNum != 0) {
            LFirst(list, data);
            if(data%2 == 0) 
                LRemove(list);

            for(var i = 0; i< nodeNum-1;i++) {
                LNext(list, data);
                if(data % 2 == 0) 
                    LRemove(list);
            }
        }
        if(LFirst(list, data)) {
            console.log(data);
        }
    }
    run();

    function Node() {
        this.data;
        this.next;
    }
    function CircleList() {
        this.tail;
        this.cur;
        this.before;
        this.numOfData;
    }

    function ListInit(_list) {
        _list.tail = null;
        _list.cur = null;
        _list.before = null;
        _list.numOfData = 0;
    }

    function LInsert(_list, _data) {
        var newNode = new Node();
        newNode.data = { value : _data };

        if(!_list.tail) {
            _list.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = _list.tail.next;
            _list.tail.next = newNode;
            _list.tail = newNode;
        }
        _list.numOfData++;
    }

    function LInsertFront(_list, _data) {
        var newNode = new Node();
        newNode.data = { value : _data };

        if(!_list.tail) {
            _list.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = _list.tail.next;
            _list.tail.next = newNode;
        }
        _list.numOfData++;
    }

    function LFirst(_list, _data) {
        if(!_list.tail) 
            return false;
        _list.before = _list.tail;
        _list.cur = _list.tail.next;

        _data.value = _list.cur.data.value;
        return true;
    }

    function LNext (_list, _data) {
        if(!_list.tail)
            return false;

        _list.before = _list.cur;
        _list.cur = _list.cur.next;

        _data.value = _list.cur.data.value;
        return true;
    }

    function LRemove(_list) {
        var rpos =_list.cur; 
        var rdata = rpos.data;

        if(rpos == _list.tail) {
            if(_list.tail == _list.tail.next)
                _list.tail = null;
            else
                _list.tail = _list.before;
        }

        _list.before.next =_list.cur.next;
        _list.cur = _list.before;
        
        _list.numOfData--;
    }

    function LCount(_list) {
        return _list.numOfData;
    }
}