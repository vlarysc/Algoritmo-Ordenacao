const valores = [5, 6, 3, 2, 1, 4];

function ordenar(arr) {
  let intermediario = null;
  let array = arr
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (array[i] > array[i + 1]) {
        intermediario = array[i];
        array[i] = array[i + 1];
        array[i + 1] = intermediario;
      }
    }
  }
  console.log(array)
}

ordenar(valores)