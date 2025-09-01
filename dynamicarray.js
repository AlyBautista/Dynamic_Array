function dynamicArray(n, queries) {
    let seqList = Array.from({ length: n }, () => []);
    let lastAnswer = 0;
    let results = [];

    for (let q of queries) {
        let [type, x, y] = q;
        let idx = (x ^ lastAnswer) % n;

        if (type === 1) {
          
            seqList[idx].push(y);
            
        } else if (type === 2) {

            let size = seqList[idx].length;
            lastAnswer = seqList[idx][y % size];
            results.push(lastAnswer);
        }
    }

    return results;
}
