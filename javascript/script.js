const comprador = () => {
    // Bienvenida al cliente
    const Bienvenida = () => {
        let ingresarNombre = "";
        do {
            ingresarNombre = prompt(
                "Bienvenido/a al Sol mayor diganos su nombre para una atencion mas personalizada"
            ).toUpperCase();
            if (ingresarNombre === "" || ingresarNombre === null) {
                alert("porfavor ingrese su nombre");
                console.log("El cliente no ingreso su nombre volvera a intentarlo");
            } if (!isNaN(ingresarNombre)) { alert("solo se pueden utilizar numeros"); console.log ("error del usuario") }
        } while (ingresarNombre === "" || ingresarNombre === null
        ); console.log("El nombre cargado por el cliente es: " + ingresarNombre);
        return ingresarNombre
    };
    //consulta de que servicio esta interesado el cliente 
    const Consulta = () => {
        let consultaCliente = "";
        do {
            consultaCliente = prompt("Ingrese que servicio le interesaria que le ofrezcamos: Venta de instrumento/ Clases particulares"
            ).toUpperCase();
            if (
                consultaCliente == "venta de instrumento" ||
                consultaCliente == "venta"

            ) {
                constVenta = prompt("Gracias por elegir Venta de instrumento. Por favor, complete el siguiente formulario: \n- Nombre del producto: \n- Precio: \n- Cantidad: ")
                console.log("Formulario de venta completado: " + formVenta)
                console.log(
                    "EL cliente esta interesado en la compra de un instrumento"
                );
            } else if
                (consultaCliente == "clases particulares" ||
                consultaCliente == "clases") {
                    constClases = prompt ("Gracias por elegir Venta de instrumento. Por favor, complete el siguiente formulario: \n- Nombre del producto: \n- Precio: \n- Cantidad: ")
                console.log(
                    "el clientes esta interesado en clases particulares"
                );
            }
        } while (consultaCliente === "" || consultaCliente === null); console.log("el cliente se intereso por " + consultaCliente)
        return consultaCliente
    }
    const instrumento = () => {
    let consultaInstrumento = ""
    do {
       consultaInstrumento = prompt ("En que instrumento estarias interesado Bateria, Guitarra, Bajo?").toUpperCase();
       if (
        consultaInstrumento == "bateria" || consultaInstrumento == "Bateria"
       ) if (
        consultaInstrumento == "guitarra" || consultaInstrumento == "Guitarra"
       ) if (consultaInstrumento == "bajo "|| consultaInstrumento == "Bajo");
    } while (consultaInstrumento == "" || consultaInstrumento == null); console.log("el cliente se intereso por " + consultaInstrumento)
    return consultaInstrumento
}
    
Bienvenida()
Consulta()
instrumento()
}
comprador()