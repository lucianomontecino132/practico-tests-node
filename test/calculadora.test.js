import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sumar } from '../src/calculadora.js';
test('sumar 2 + 3 devuelve 5', () => {
// Arrange (preparar): los datos de entrada
const a = 2;
const b = 3;
// Act (ejecutar): llamar a la función
const resultado = sumar(a, b);
// Assert (verificar): comparar con lo esperado
assert.equal(resultado, 5);
});

test('sumar -4 + 1 devuelve -3', () => {
// Arrange (preparar): los datos de entrada
const a = -4;
const b = 1;
// Act (ejecutar): llamar a la función
const resultado = sumar(a, b);
// Assert (verificar): comparar con lo esperado
assert.equal(resultado, -3);
});

test('dividir 10 / 5 devuelve 2', () => {
// Arrange (preparar): los datos de entrada
const a = 10;
const b = 5;
// Act (ejecutar): llamar a la función
const resultado = dividir(a, b);
//Assert (verificar): comparar con lo esperado
assert.equal(resultado, 2);
});

test('dividir 10 / 0 lanza error', () => {
// Arrange (preparar): los datos de entrada
const a = 10;
const b = 0;
// Act (ejecutar): llamar a la función
const resultado = dividir(a, b);
//Assert (verificar): comparar con lo esperado
assert.throws(() => dividir(10, 0), { message: 'No se puede dividir por cero' });
});

