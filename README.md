![Tests](https://github.com/lucianomontecino132/practico-tests￾node/actions/workflows/tests.yml/badge.svg)
# practico-tests-node
## Ejercicio 4: Cazar el bug
El compañero no vio el bug porque le falto probar el limite exacto en que se deberia dar el descuento (los $50.000 exactos). Como usó un operador estricto (`>`) en lugar de incluir la igualdad (`>=`), el caso límite de $50.000 pasaba de largo sin aplicar la rebaja.