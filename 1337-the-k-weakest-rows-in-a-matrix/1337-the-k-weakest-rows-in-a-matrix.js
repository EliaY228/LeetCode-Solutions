function kWeakestRows(mat, k) {
    const summedValues = [];

    for (let i = 0; i < mat.length; i++) {
        const sum = mat[i].reduce((sum, item) => sum + item, 0);
        summedValues.push({ i, sum });
    }

    summedValues.sort((a, b) => a.sum < b.sum ? -1 : 1);

    const result = [];

    for (let i = 0; i < k; i++) {
        const item = summedValues[i];
        result.push(item.i);
    }

    return result;
}