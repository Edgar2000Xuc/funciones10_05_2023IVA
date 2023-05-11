function calcularIVA(monto) {
    let ivaPorcentaje = 12; // Porcentaje de IVA en Guatemala
    let iva = monto * (ivaPorcentaje / 100);
    return iva;
  }
  let monto = 100;
  let iva = calcularIVA(monto);
  console.log("El IVA correspondiente es de:", iva, "quetzales");

  

//segundo ejercicio

  function saludar(nombre) {
    let mensaje = "Hola " + nombre + ", ¡bienvenid@!";
    return mensaje;
  }
  
  let nombre = "Juan";
let mensaje = saludar(nombre);
console.log(mensaje);
