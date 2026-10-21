import { describe, test } from 'node:test';
import assert from 'node:assert';
import { aplicarDescuento } from '../src/tienda.js';

describe('aplicarDescuento', () => {

    test('40000 no recibe descuento y devuelve 40000', () => {
        assert.strictEqual(aplicarDescuento(40000), 40000);
    });

    test('60000 recibe 10% de descuento y devuelve 54000', () => {
        assert.strictEqual(aplicarDescuento(60000), 54000);
    });

    test('50000 recibe descuento y devuelve 45000', () => {
        assert.strictEqual(aplicarDescuento(50000), 45000);
    });

});