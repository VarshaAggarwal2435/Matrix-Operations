function matrixValues(matrixNo) {
    return [
        document.getElementById(`${matrixNo}-row1`).value.split(',').map(Number),
        document.getElementById(`${matrixNo}-row2`).value.split(',').map(Number),
        document.getElementById(`${matrixNo}-row3`).value.split(',').map(Number)
    ];
}

function displayResult(result) {
    let res = '';
    for (let i = 0; i < result.length; i++) {
        let row = '';
        for (let j = 0; j < result[i].length; j++) {
            row += result[i][j];
            if (j < result[i].length - 1) {
                row += ', ';
            }
        }
        res += row + '\n';
    }
    document.getElementById('result').textContent = res;
}

function addMatrices() {
    const matrix1 = matrixValues('matrix1');
    const matrix2 = matrixValues('matrix2');
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    displayResult(result);
}

function subtractMatrices() {
    const matrix1 = matrixValues('matrix1');
    const matrix2 = matrixValues('matrix2');
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }

    displayResult(result);
}

function multiplyMatrices() {
    const matrix1 = matrixValues('matrix1');
    const matrix2 = matrixValues('matrix2');
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    displayResult(result);
}

function divideMatrices() {
    const matrix1 = matrixValues('matrix1');
    const matrix2 = matrixValues('matrix2');
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix2[i][j] !== 0) {
                result[i][j] = matrix1[i][j] / matrix2[i][j];
            } else {
                result[i][j] = 'N';
            }
        }
    }

    displayResult(result);
}
