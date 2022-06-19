/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mismaCantidadCaracteres(strings, caracteres) {
  // La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'
  // y un numero entero llamado 'caracteres'
  // Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
  // Ej:
  // mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
  // mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']

  // Tu código aca:
  function mismaCantidadCaracteres(strings, caracteres) {
    return strings.filter(string => string.length === caracteres);
  }
  const result1 = mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2)
  const result2 = mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5)
}
  console.log("Palabras con length == 2",result1);
  console.log("Palabras con length == 5",result2);


// No modifiques nada debajo de esta linea //

module.exports = mismaCantidadCaracteres