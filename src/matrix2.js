'use strict';

/**
 * Real matrix
 */
class Matrix {
    /**
     * @constructor
     * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
     * 2D array containing the data or Matrix instance to clone
     * @param {number} [nColumns] - Number of columns of the new matrix
     */
    constructor(nRows, nColumns) {
        this.rows = nRows;
        this.columns = nColumns;
        this.elements = new Array(nRows * nColumns);
    }

    getIndex(row, column) {
        return row * this.columns + column;
    }

    set(row, column, value) {
        this.elements[this.getIndex(row, column)] = value;
    }

    get(row, column) {
        return this.elements[this.getIndex(row, column)] || 0;
    }

}

Matrix.prototype.klass = 'Matrix';

module.exports = Matrix;
