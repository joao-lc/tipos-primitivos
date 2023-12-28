let lista = [10, 45, 32, 12, 34, 33, 12];
function comparaNumero(a, b) {
    

    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    } if (a > b) {
        return 1;
    }

}
lista.sort(comparaNumero);

console.log(lista)

// ou da seguinte forma lista.sort((a, b) => a - b);
