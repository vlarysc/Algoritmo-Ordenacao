const valores = [2308, 3872, 4685, 4974,  989, 4359, 2651, 4234, 2909, 1411,
  2262,  965,  147,  419, 3741,  361, 3090, 3156,  748, 2304,
   964, 1491, 1521, 3303, 2824,  323,  873, 4187, 4675, 4935,
  3107, 1448, 4309, 3197, 4519, 3893, 3775, 2667, 1108, 3152,
  1450,   55, 4942, 4482,  536, 3799, 1491, 2326, 2717, 2816,
   704, 2561, 4908,  784, 4749, 2133,  649, 4282, 2474, 1038,
  4598, 1119, 2731, 3608, 2656, 4094, 1454, 3738, 2749, 1574,
  3837, 4173, 2861, 3169, 4282, 3284, 3791, 4456, 3793, 1720,
  1429, 2824, 4012, 4597, 2365, 1059,  193, 1519, 2259, 1697,
   579, 3187, 3107, 4840, 4886, 1004, 2580, 4382, 4373, 2206];
let teste = [];
let antes = Date.now();
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
let duracao = Date.now() - antes;
console.log(duracao)