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

function SimpleHeap() {
    function HeapElement() {
        this.pr; // priority int
        this.data;
    }

    function Heap() {
        this.numOfData;
        this.heapArr = [];
    }

    /* ADT */
    function heapInit(ph) {
        ph.numOfData = 0;
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
            if(ph.heapArr[getLChildIDX(idx)].pr > ph.heapArr[getRChildIDX(idx)].pr)
                return getRChildIDX(idx);
            else
              return getLChildIDX(idx);
        }
    }

    function hInsert(ph, data, pr) {
        var idx  = ph.numOfData + 1;
        var heapEl = new HeapElement();
        //console.log(idx, heapEl)
        heapEl.pr = pr;
        heapEl.data = data;

        while(idx != 1) {
            if(pr < ph.heapArr[getParantIDX(idx)].pr){
                ph.heapArr[idx] = ph.heapArr[getParantIDX(idx)];
                idx = getParantIDX(idx);
//                console.log(pr, idx, data);
            } else {
                break;
            }
        }

        ph.heapArr[idx] = heapEl;
        ph.numOfData += 1;
    }

    function hDelete(ph) {
        var retData = ph.heapArr[1].data;
        var lastElem = ph.heapArr[ph.numOfData];
        var parentIdx = 1;
        var childIdx;
        // 마지막 요소를 위로 올렸다고 가정, 루트노드의 인덱스인 parentIdx를 사용하여 ph의 값들을 비교하여 최종목적지 확인 및 이동
        while(childIdx = getHiPriChildIDX(ph, parentIdx)) {
            //console.dir(lastElem.pr);
            if(lastElem.pr <= ph.heapArr[childIdx])
                break;
            ph.heapArr[parentIdx] = ph.heapArr[childIdx];
            parentIdx = childIdx;
        }

        ph.heapArr[parentIdx] = lastElem;
        ph.numOfData -= 1;
        return retData;
    }


    function main_359p() {
        var heap = new Heap();
        heapInit(heap);

        hInsert(heap, 'A', 1);
        hInsert(heap, 'B', 2);
        hInsert(heap, 'C', 3);

        console.log('Delete... ', hDelete(heap));

        hInsert(heap, 'A', 1);
        hInsert(heap, 'B', 2);
        hInsert(heap, 'C', 3);

        console.log('Delete...', hDelete(heap));

        while(!hIsEmpty(heap)) {
            console.log('While Delete... ', hDelete(heap));
        }
    }
    main_359p();

}