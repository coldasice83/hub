/**
 * Created by janeir on 5/12/14.
 */
/**
 * 들어간 순위에 상관없이 우선순위가 높은 데이터가 먼저나온다.
 *
 * 1. 배열을 기반으로 구현하는 방법
 *      삽입의 위치를 찾기 위해 배열에 저장된 모든 데이터와 우선순위 비교를 진행해야 할수도 있음.
 * 2. 연결 리스트를 기반으로 구현하는 방법
 *      배열과 같은 단점
 * 3. 힙을 이용하는 방법
 *      힙 = 완전이진트리, 모든 노드에 저장된 값은 자식노드에 저장된 값보다 크거나 같아야 한다.
 *      최대힙 : 루트노드가 젤 큰경우, 최소 힙: 루트노드가 젤 작은경우
 *
 * 힙에 데이터 추가 책 참조 345~346
 * 힙에 데이터 삭제 347~348
 *
 * 저장 및 삭제의 시간복잡도는 배열과 연결리스트가 같고 힙은 로그n
 *
 * 힙은 배열기반으로 구현됨 -> 연결 리스트를 기반으로 구현하면 새로운 노드를 힙의 마지막 위치에 추가하는 것이 쉽지 않다.
 **/

function UsefulHeap() {

    function Heap() {
        this.comp = null; // 우선순위를 판단하는 함수
        this.numOfData;
        this.heapArr = [];
    }

    /* ADT */
    function heapInit(ph, pc) {
        ph.numOfData = 0;
        ph.comp = pc;
    }
    function hIsEmpty(ph){
        if(ph.numOfData == 0)
            return true;
        else
            return false;
    }

    function getParantIDX(idx) {
        return parseInt(idx/2);
    }

    function getLChildIDX(idx) {
        return idx * 2;
    }

    function getRChildIDX(idx) {
        return idx * 2 + 1;
    }

    function getHiPriChildIDX(ph, idx) {

        if(getLChildIDX(idx) > ph.numOfData) // 자식이 없는경우
            return 0;
        else if(getLChildIDX(idx) == ph.numOfData) // 자식이 데이터 길이와 일치 -> 자식이 하나 뿐이다.
            return getLChildIDX(idx);
        else {
//            if(ph.heapArr[getLChildIDX(idx)].pr > ph.heapArr[getRChildIDX(idx)].pr)
//                return getRChildIDX(idx);
            if(ph.comp(ph.heapArr[getLChildIDX(idx)], ph.heapArr[getRChildIDX(idx)]) < 0)
                return getRChildIDX(idx);
            else
                return getLChildIDX(idx);
        }
    }

    function hInsert(ph, data) { // 우선순위를 직접 전달하는 방식은 불편
        var idx  = ph.numOfData + 1;
//        var heapEl = new HeapElement();
//        //console.log(idx, heapEl)
//        heapEl.pr = pr;
//        heapEl.data = data;

        while(idx != 1) {
//            if(pr < ph.heapArr[getParantIDX(idx)].pr){
            if(ph.comp(data, ph.heapArr[getParantIDX(idx)]) > 0) {
                ph.heapArr[idx] = ph.heapArr[getParantIDX(idx)];
                idx = getParantIDX(idx);
//                console.log(pr, idx, data);
            } else {
                break;
            }
        }

        ph.heapArr[idx] = data;
        ph.numOfData += 1;
    }

    function hDelete(ph) {

        var retData = ph.heapArr[1];
        var lastElem = ph.heapArr[ph.numOfData];
        var parentIdx = 1;
        var childIdx;
        // 마지막 요소를 위로 올렸다고 가정, 루트노드의 인덱스인 parentIdx를 사용하여 ph의 값들을 비교하여 최종목적지 확인 및 이동
        while(childIdx = getHiPriChildIDX(ph, parentIdx)) {
            //console.dir(lastElem.pr);
//            if(lastElem.pr <= ph.heapArr[childIdx])
            if(ph.comp(lastElem, ph.heapArr[childIdx]) >= 0)
                break;
            ph.heapArr[parentIdx] = ph.heapArr[childIdx];
            parentIdx = childIdx;
        }

        ph.heapArr[parentIdx] = lastElem;
        ph.numOfData -= 1;
        console.log(ph.heapArr);
        return retData;
    }



    function pQueueInit(pq, pc) {
        heapInit(pq, pc);
    }

    function pQIsEmpty(pq) {
        return hIsEmpty(pq);
    }

    function pEnqueue(pq, data) {
        hInsert(pq, data);
    }

    function pDequeue(pq) {
        return hDelete(pq);
    }



    // 프로그래머가 우선순위의 판단 기준을 힙에 설정할수 있어야 한다.(우선순위 직접 입력은 좋지 않다)
    console.log('######## Main 365 start=================');

    function main_365p() {
        var heap = new Heap();

        function dataPriorityComp(ch1, ch2) {
            return ch2.charCodeAt(0)-ch1.charCodeAt(0);
        }
        heapInit(heap, dataPriorityComp);

        hInsert(heap, 'A');
        hInsert(heap, 'B');
        hInsert(heap, 'C');

        console.log('Delete... ', hDelete(heap));

        hInsert(heap, 'A');
        hInsert(heap, 'B');
        hInsert(heap, 'C');

        console.log('Delete...', hDelete(heap));

        while(!hIsEmpty(heap)) {
            console.log('While Delete... ', hDelete(heap));
        }

    }
    main_365p();

    console.log('######## Main 365 end=================');
    console.log('######## Main 369 start=================');

    function main_369() {
        function dataPriorityComp(ch1, ch2) {
            return ch2.charCodeAt(0)-ch1.charCodeAt(0);
        }

        var pq = new Heap();
        pQueueInit(pq, dataPriorityComp);

        pEnqueue(pq, 'A');
        pEnqueue(pq, 'B');
        pEnqueue(pq, 'C');

        console.log('Dequeue', pDequeue(pq));

        pEnqueue(pq, 'A');
        pEnqueue(pq, 'B');
        pEnqueue(pq, 'C');

        console.log('Dequeue', pDequeue(pq));

        while(!pQIsEmpty(pq)) {
            console.log('While Delete', pDequeue(pq));
        }

    }
    main_369();


    console.log('######## Main 369 end=================');

}