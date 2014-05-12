/**
 * Created by NHNent on 2014-05-09.

     구현가능 방식
     1. 배열기반 - 트리완성 후 빈번한 탐색이 이뤄질때 좋다.
     2. 연결리스트 기반(더 유연)

     그림 8-15 노드번호부여 -> 배열기반시 각 배열의 인덱스를 노드번호로 부여한다.

 */


function BinaryTree() {

    function bTreeNode() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

    function makeBTreeNode() {
        var node = new bTreeNode();
        return node;
    }

    function getData(node) {
        return node.data;
    }

    function setData(node, data) {
        node.data = data;
    }

    function getLeftSubTree(node) {
        return node.left;
    }

    function getRightSubTree(node) {
        return node.right;
    }

    function makeLeftSubTree(main, sub) {
        main.left = sub;
    }

    function makeRightSubTree(main, sub) {
        main.right = sub;
    }

    // 노드를 만들고 트리형태로 연결
    function connect() {
        var ndA = makeBTreeNode();
        var ndB = makeBTreeNode();
        var ndC = makeBTreeNode();

        makeLeftSubTree(ndA, ndB);
        makeRightSubTree(ndA, ndC);
    }

    // 308 예제
    function main_308p() {
        console.log('=============main_308');
        var bt1 = makeBTreeNode();
        var bt2 = makeBTreeNode();
        var bt3 = makeBTreeNode();
        var bt4 = makeBTreeNode();

        setData(bt1, 1);
        setData(bt2, 2);
        setData(bt3, 3);
        setData(bt4, 4);

        makeLeftSubTree(bt1, bt2);
        makeRightSubTree(bt1, bt3);
        makeLeftSubTree(bt2, bt4);

        console.log('bt1\'s left leaf-node print...', getData(getLeftSubTree(bt1)));
        console.log('bt1\'s left leaf-node\'s left leaf-node print', getData(getLeftSubTree(getLeftSubTree(bt1))));

        //반복된 작업인데 다 써주는 것이 과연 옳은 자료구조의 사용일까요?
        var func1 = function(data) {
            console.log(data);
        }
        inOrderTraverse(bt1, func1);
    }
    main_308p();

    // 그래서 순회
    // 순회의 종류
    // 1. 전위 순회 - 루트 노드를 먼저
    // 2. 중위 순회 - 루트 노드를 나중에
    // 3. 후위 순회 - 루트 노드를 마지막에


    function inOrderTraverse(bt, func) {
        if(!bt) return; //노드가 존재하지 않으면 재귀의 끝으로 판단하여 탈출
        // 왼쪽이 존재하면 왼쪽을 먼저 탐색한다. 재귀적 호출
        inOrderTraverse(bt.left, func);
        func(bt.data);
        inOrderTraverse(bt.right, func);
    }

    function preOrderTraverse(bt, func) {
        if(!bt) return;
        func(bt.data);
        preOrderTraverse(bt.left, func);
        preOrderTraverse(bt.right, func);
    }

    function postOrderTraverse(bt, func) {
        if(!bt) return;
        postOrderTraverse(bt.left, func);
        postOrderTraverse(bt.right, func);
        func(bt.data);
    }


    function main_317p() {
        console.log('=============main_317');
        /* *
        트리모양
             1
           2   3
          4 5 6

         */
        var bt1 = makeBTreeNode();
        var bt2 = makeBTreeNode();
        var bt3 = makeBTreeNode();
        var bt4 = makeBTreeNode();
        var bt5 = makeBTreeNode();
        var bt6 = makeBTreeNode();

        setData(bt1, 1);
        setData(bt2, 2);
        setData(bt3, 3);
        setData(bt4, 4);
        setData(bt5, 5);
        setData(bt6, 6);

        makeLeftSubTree(bt1, bt2);
        makeRightSubTree(bt1, bt3);
        makeLeftSubTree(bt2, bt4);
        makeRightSubTree(bt2, bt5);
        makeRightSubTree(bt3, bt6);

        preOrderTraverse(bt1, showIntData);
        console.log('============================preOrder End');
        inOrderTraverse(bt1, showIntData);
        console.log('============================inOrder End');
        postOrderTraverse(bt1, showIntData);
        console.log('============================postOrder End');

        function showIntData(data) {
            console.log('Data : ', data);
        }
    }
    main_317p();


    // 그렇다면 트리 제거는?

    function deleteTree(bt) {
        if(!bt) return;
        deleteTree(bt.left);
        deleteTree(bt.right);
    }

}



function ExpressionTree() {
    // 수식 트리!!
    // 루트 노드에 저장된 연산자의 연산을 하되, 두개의 자식노드에 저장된 두 피연산자를 대상으로 연산을 한다. 그림참조(319~320)
    // 중위표기법의 수식 -> 후위표기법의 수식 -> 수식트리(후위 표기법에 필요한 스택)
    // 후위 표기법의 수식에서 앞쪽에 등장하는 피연산자와 연산자를 이용해서 트리의 하단을 만들고, 이를 바탕으로 점진적으로 수식 트리의 윗부분을 구성해 나간다.
    function bTreeNode() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

    function makeBTreeNode() {
        var node = new bTreeNode();
        return node;
    }

    function getData(node) {
        return node.data;
    }

    function setData(node, data) {
        node.data = data;
    }

    function getLeftSubTree(node) {
        return node.left;
    }

    function getRightSubTree(node) {
        return node.right;
    }

    function makeLeftSubTree(main, sub) {
        main.left = sub;
    }

    function makeRightSubTree(main, sub) {
        main.right = sub;
    }

    function inOrderTraverse(bt, func) {
        if(!bt) return; //노드가 존재하지 않으면 재귀의 끝으로 판단하여 탈출
        // 왼쪽이 존재하면 왼쪽을 먼저 탐색한다. 재귀적 호출
        inOrderTraverse(bt.left, func);
        func(bt.data);
        inOrderTraverse(bt.right, func);
    }

    function preOrderTraverse(bt, func) {
        if(!bt) return;
        func(bt.data);
        preOrderTraverse(bt.left, func);
        preOrderTraverse(bt.right, func);
    }

    function postOrderTraverse(bt, func) {
        if(!bt) return;
        postOrderTraverse(bt.left, func);
        postOrderTraverse(bt.right, func);
        func(bt.data);
    }

    function makeExpTree(exp) {

        var stack;
        var node;

        var expLen = exp.length;
        var i;

        stack = new Array();

        for(i = 0; i < expLen; i++) {
            node = makeBTreeNode();

            if(!isNaN(exp[i])) {
                setData(node, exp[i] - '0');
            } else {
                // 연산자일경우, 노드의 왼쪽과 오른쪽 세팅후 연산자를 값으로 세팅
                makeRightSubTree(node, stack.pop());
                makeLeftSubTree(node, stack.pop());
                setData(node, exp[i]);
            }
            // 노드가 피연산자든, 연산자든 상관없이 저장
            stack.push(node);
        }

        return stack.pop();
    }


    function evaluateExpTree(bt) {
        var op1, op2;

        if(!getLeftSubTree(bt) && !getRightSubTree(bt)) return getData(bt); // 단말노드 일때

        op1 = evaluateExpTree(getLeftSubTree(bt));
        op2 = evaluateExpTree(getRightSubTree(bt));

        switch(getData(bt)) {
            case '+' :
                return op1+op2;
            case '-' :
                return op1-op2;
            case '*' :
                return op1*op2;
            case '/' :
                return op1/op2;
        }
        return 0;
    }

    function showPrefixTypeExp(bt) {
        preOrderTraverse(bt, showNodeData);
    }

    function showInfixTypeExp(bt) {
        inOrderTraverse(bt, showNodeData);
    }

    function showPostfixTypeExp(bt) {
        postOrderTraverse(bt, showNodeData);
    }

    function showNodeData(data) {
        console.log(data);
    }

    function main_332p() {
        var exp = '12+7*';
        var eTree = makeExpTree(exp);

        console.log("전위 표기법의 수식 : ");
        showPrefixTypeExp(eTree);

        console.log("중위 표기법의 수식 : ");
        showInfixTypeExp(eTree);

        console.log("후위 표기법의 수식 : ");
        showPostfixTypeExp(eTree);

        console.log("연산자의 결과 : ", evaluateExpTree(eTree));

    }
    main_332p();
}