import { describe, test } from 'node:test';
import assert from 'node:assert';
import { clasificar } from '../src/notas.js';

describe('clasificar', () => {

    test('3.99 debe devolver LIBRE', () => {
        assert.strictEqual(clasificar(3.99), 'LIBRE');
    });

    test('4 debe devolver REGULAR', () => {
        assert.strictEqual(clasificar(4), 'REGULAR');
    });

    test('5.99 debe devolver REGULAR', () => {
        assert.strictEqual(clasificar(5.99), 'REGULAR');
    });

    test('6 debe devolver PROMOCIONA', () => {
        assert.strictEqual(clasificar(6), 'PROMOCIONA');
    });

    test('10 debe devolver PROMOCIONA', () => {
        assert.strictEqual(clasificar(10), 'PROMOCIONA');
    });

    test('11 debe lanzar RangeError', () => {
        assert.throws(() => clasificar(11), RangeError); // Pista del profe
    });

});