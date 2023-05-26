const producto = [
    { nombre: "guitarras", precio: 40000},
    { nombre: "baterias", precio: 30000},
    { nombre: "bajos", precio:20000},
    { nombre: "parlantes", precio:60000},
    { nombre: "pianos", precio:100000}
];
const cursos =[
    {nombre: "curso de guitarra", precio: 3000},
    {nombre: "curso de bateria", precio: 4000},
    {nombre: "curso de bajo", precio: 3500},
    {nombre: "curso de piano", precio: 4000}
]
let carrito = []

let seleccion = prompt("hola desea comprar alguno de nuestros productos o esta interesado en uno de nuestros cursos")

if (seleccion == "productos"){
    alert ("a continuacion nuestra lista de productos")
    let todoslosProductos = producto.map(
        (producto)=>producto.nombre+" "+"$"+producto.precio);
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "cursos"){
    alert ("a continuacion nuestros cursos")
    let todoslosCursos = cursos.map(
        (cursos)=>cursos.nombre+" "+"$"+cursos.precio);
    alert(todoslosCursos.join(" - "))
}

while(seleccion =="cursos"){
    let cursos = prompt ("agregue sus cursos a su carrito")
    let precio = 0
    if(cursos == "curso de guitarra"||cursos =="curso de bateria"||cursos =="curso de bajo"||cursos =="curso de piano"){
        switch(cursos){
            case "curso de guitarra":
            precio = 3000;
            break;
            case "curso de bateria":
            precio = 4000;
            break;
            case "curso de bajo":
            precio = 3500;
            break;
            case "curso de piano":
            precio = 4000;
            break;
            default:
            break;
        }
        let unidades = parseInt (prompt("cuantas unidades quiere llevar"))

        carrito.push({cursos,unidades,precio})
        console.log(carrito)
    }else(
        alert("no tenemos ese curso")
    )
seleccion = prompt("desea otro instrumento?")

if (seleccion === "no"){
        alert ("gracias por la compra hasta pronto")
        carrito.forEach((carritoFinal)=>{
            console.log (`productos: ${carritoFinal.cursos}, unidades:${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.cursos * carritoFinal.precio}`)
        })
break;}
}
while(seleccion =="productos"){
    let producto = prompt ("Elija sus instrumentos (guitarra,bateria,bajo,parlante,piano)")
    let precio = 0
    if( producto == "guitarra"||producto =="bateria"||producto =="bajo"||producto =="parlante"||producto =="piano"){
        switch(producto){
            case"guitarra":
            precio = 40000;
            break;
            case"bateria":
            precio = 30000;
            break;
            case"bajo":
            precio = 20000;
            break;
            case"parlante":
            precio = 60000;
            break;
            case"piano":
            precio = 100000;
            break;
        }
        let unidades = parseInt (prompt("cuantos instrumentos quiere llevar"))

        carrito.push({producto,unidades,precio})
        console.log(carrito)
    }else(
        alert("no tenemos ese instrumento")
    )
seleccion = prompt("desea otro instrumento?")
while (seleccion === "no"){
    alert ("gracias por la compra hasta pronto")
    carrito.forEach((carritoFinal)=>{
        console.log(`productos: ${carritoFinal.producto}, unidades:${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.producto * carritoFinal.precio}`)})
break;
}
}



