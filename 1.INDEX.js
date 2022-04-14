/*
1. El programa permite ingresar un usuario y una contraseña.
2. El programa validará los datos ingresados.
3. Si son válidos ingresará a su portal
 */

let url = './data/contraseñas.json'

fetch(url).
then((res) => res.json()).
then((json) => {
    mostrarInfo(json);
    //mostrar(json)
})

//mre devuelve un array de objetos
//como el original
// function mostrar(json) {
//     console.log(json);
// }

function mostrarInfo(contraseñas) {
    //aqui creampos un array de las contraseñas
    //esto es adicional, nada relevante


    const contras = contraseñas.map(element => {
        return {

            ...element.contra
        }
    })

    console.log("Lista de contraseñas", ...contras);




    evaluarContraseñas();

    function evaluarContraseñas() {


        let boton = document.getElementById("ingresarInput");


        boton.addEventListener("click", () => {
            let user = document.getElementById("userInput");

            //AQUI VALIDAMOS QUE NO SEAN ESPACIOS EN BLANCO
            let contra = document.getElementById("contraInput");
            if (user.value.trim() === "" || contra.value.trim() === "") {
                alert("INGRESA USUARIO y CONTRASEÑA");

            } else {
                //AQUI OBTENEMOS LOS VALORES INGRESADOS Y LOS AGREGAMOS A UN OBJETO
                let uservalue = {
                    usuario: `${user.value}`
                };
                let contravalue = {
                    contra: `${contra.value}`
                };
                let ingreso = Object.assign(uservalue, contravalue);

                //AQUI CONVERTIMOS A JSON EL ARRAY DE MIS CONTRASEÑAS VALIDAS 
                //Y EL OBJETO DE CONTRASEÑAS INGRESADAS
                //PARA QUE PUEDAN SER COMPARADAS
                let x = JSON.stringify(contraseñas).indexOf(JSON.stringify(ingreso));

                //AQUI EVALUAMOS SI RESULTÓ O NO
                //LA COMPARACIÓN ANTERIOR
                console.log(x);
                if (x !== -1) {
                    sweetalert();
                    cambioPagina();

                } else {
                    alert("Ingrese un usuario y contraseña válidos")
                    console.log(user.value);
                }

                document.getElementById("formularioInput").reset();

            }
        })

    }

}



function sweetalert() {
    Swal.fire({ // retornando lo que retorne la función Swal.fire(); (retorna una Promise)
        title: 'BIENVENIDO',
        text: 'En breve ingresará a su portal'
        // Si el usuario dió click en 'sí', se retornará true.
    })
}

//AQUIS E REALIZA EL CAMBIO DE HTML
//DEPENDIENDO DEL USUARIO INGRESADO

function cambioPagina() {
    let user = document.getElementById("userInput");
    if (user.value === "ANA") {
        setTimeout(() => {
            location.href="ANA.HTML";
        }, 1000)
    } else if (user.value === "DANIEL") {
        setTimeout(() => {
            location.href="DANIEL.HTML";
        }, 1000)
    } else if (user.value === "JOSE") {
        setTimeout(() => {
            location.href="JOSE.HTML";
        }, 1000)
    } else if (user.value === "JUAN") {
        setTimeout(() => {
            location.href="JUAN.HTML";
        }, 1000)
    }
}