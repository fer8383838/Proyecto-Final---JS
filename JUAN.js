//  //esto me devuelve el index correctamente
//     //tendría que combinarla con otras funciones para usarla
//     let resultado = alumnos2.indexOf(killnotas);
//     console.log(resultado);


//     //casi se logra traer la clase con esto
//     //pero no funcionó
//     let resultado2 = alumnos2.find(e => e === killnotas);
//     console.log(resultado2)
//     //esto me devolvia el item
//     //con el index dentro del HTMLcollection 
//     //tampoco funcionó
//     div3 = resultado2[0];
//     //get attribute no funciono
//     //isEqualNode no funciono
//     console.log(div3);


//     //alumnos2.forEach(e => console.log(e === killnotas));


let url = './data/alumnos.json'

fetch(url).
then((res) => res.json()).
then((json) => {
    mostrarInfo(json);
    //mostrar(json);
})

// function mostrar(json) {
//     console.log(json);
// }

function mostrarInfo(alumnos) {

    
    function datos() {
        let form = document.querySelector("#form");
        alumnos.forEach(e => {
            let div = document.createElement("div");
            //agregeue una clase con e
            div.classList.add(e.nombre);
            div.innerHTML = 
            `<h3>${e.nombre} ${e.apellido}</h3>
            <div id="${e.nombre}">
                <input type="button" value="AGREGAR NOTAS" />
            </div>`
            form.appendChild(div);
        })
        
        // dibuja la información guardada en la memoria virtual
        // desde que se inicia el programa
        localF2();
        localJ2();
        localC2();
        localFi2();
        localR2();
    }
    function agregarF() {

        let agregar = document.querySelector("#Fernando>input");
        //no reconocía el boton
        //cuado lo traías fuera de la funcion
        //solucion: activar la funcion despues 
        //de lamar los datos
        //console.log(agregar);

        //localF();
        agregar.addEventListener("click", () => {

            div1 = document.getElementById("Fernando");

            //fue echo para desaparcer el boton agregar
            div1.innerHTML = "";
            //creo un div si clase ni id
            //para pegarlo al div#Fernando
            //aparece los inputs
            //para ingresar las notas
            div1.innerHTML =
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button">CALCULAR</button>`;
            localF2;
            calcularPromedioF();


        })
    }
    function calcularPromedioF() {

        let calcular = document.querySelector("#Fernando>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Fernando>input");

            //console.log(clasenota);

            //crear un array con los valores 
            //escritos en los inputs
            let notas = [];
            clasenota.forEach(e => notas.push(e.valueAsNumber));

            //validas si los valores escritos en lo input son validos
            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {
                //guardar los datos validados en la memoria virtual
                //con sus respectivas llaves
                localStorage.setItem("notsF", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promF", JSON.stringify(promedio));

                //funcio que lanza un sweet alert si esta
                //aprobado o desaprobado
                

                //eliminara los inputs pc
                //y el boton calcular
                let killnotas = document.querySelector(".Fernando");
                killnotas.innerHTML = "";


                // //Volverá a crear los datos
                // //de la ventana principal
                // //solo modificará a este alumno. 

                killnotas.innerHTML =
                    `<h3>Fernando Montero</h3>
                <div id="Fernando">
                    <input type="button" value="AGREGAR NOTAS"/>
                </div>`
                agregarF();
                //localF2 me va a devolver las notas
                //almacenadas en la memoria virtual
                localF2();
                aprobado();
                // // setTimeout(() => {
                // //     window.location.reload();
                // // }, 1000)

            }
        })

    }
    function localF2() {
        //atrae los valores guardados en la memoria local
        //y también los dibuja en el codigo
        //sin necesidad de agregar funciones adicionales

        // let resultado = alumnos.map(e => {
        //    return document.getElementsByClassName(e); 
        // });
        //es lo mas cerca qu estuve de hacer esto con un solo boton
        if (JSON.parse(localStorage.getItem("notsF")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsF"));
        }

        promedio = JSON.parse(localStorage.getItem("promF"));

        if (promedio == null) {
            promedio = 0;
        } else {
            let resultado = document.querySelector('div.Fernando');
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);
        }
    }

    function agregarJ() {

        let agregar = document.querySelector("#Julio>input");
        //no reconocía el boton
        //cuado lo traías fuera de la funcion
        //solucion: activar la funcion despues 
        //de lamar los datos
        //console.log(agregar);

        //localF();
        agregar.addEventListener("click", () => {
            div1 = document.getElementById("Julio");
            div1.innerHTML = "";
            //fue echo para desaparcer el boton agregar
            div1.innerHTML =
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button">CALCULAR</button>`;
            calcularPromedioJ();
            localJ2;

        })
    }
    function calcularPromedioJ() {

        let calcular = document.querySelector("#Julio>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Julio>input");

            let notas = [];

            clasenota.forEach(e => notas.push(e.valueAsNumber));

            //ESTO NO FUNCIONA
            // if ((notas[0] && notas[1] && notas[2]) >= 0 && (notas[0] && notas[1] && notas[2]) <= 20) 

            //utilizamos map para comparar si los valores
            //cumplen las condiciones
            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            //console.log(bool);
            //console.log(valorbool)

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {
                localStorage.setItem("notsJ", JSON.stringify(notas));
                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promJ", JSON.stringify(promedio));


                //eliminara los inputs pc
                //y el boton calcular
                let killnotas = document.querySelector(".Julio");
                killnotas.innerHTML = "";

                killnotas.innerHTML =
                    `<h3>Julio Diaz</h3>
                <div id="Julio">
                    <input type="button" value="AGREGAR NOTAS"/>
                </div>`;
                agregarJ();
                localJ2();
                aprobado();
            }
        })



    }
    function localJ2() {
        if (JSON.parse(localStorage.getItem("notsJ")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsJ"));
        }

        promedio = JSON.parse(localStorage.getItem("promJ"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Julio");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function agregarC() {

        let agregar = document.querySelector("#Carlos>input");
        //no reconocía el boton
        //cuado lo traías fuera de la funcion
        //solucion: activar la funcion despues 
        //de lamar los datos
        //console.log(agregar);

        //localF();
        agregar.addEventListener("click", () => {
            div1 = document.getElementById("Carlos");
            div1.innerHTML = "";
            //fue echo para desaparcer el boton agregar
            div1.innerHTML =
                `
                <h4>PC1 (20% Nota Final)</h4><input type="number"/>
                <h4>PC2 (30% Nota Final)</h4><input type="number"/>
                <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
                <br><button type="button">CALCULAR</button>`;
            calcularPromedioC();
        })
    }
    function calcularPromedioC() {

        let calcular = document.querySelector("#Carlos>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Carlos>input");

            //console.log(clasenota);
            let notas = [];

            clasenota.forEach(e => notas.push(e.valueAsNumber));

            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {

                localStorage.setItem("notsC", JSON.stringify(notas));

                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promC", JSON.stringify(promedio));

                //eliminara los inputs pc
                //y el boton calcular
                let killnotas = document.querySelector(".Carlos");
                killnotas.innerHTML = "";

                killnotas.innerHTML =
                    `<h3>Carlos Jimenez</h3>
                <div id="Carlos">
                    <input type="button" value="AGREGAR NOTAS"/>
                </div>`;
                agregarC();
                localC2();
                aprobado();
            }
        })
    }
    function localC2() {
        if (JSON.parse(localStorage.getItem("notsC")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsC"));
        }

        promedio = JSON.parse(localStorage.getItem("promC"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Carlos");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function agregarFi() {

        let agregar = document.querySelector("#Finn>input");
        //no reconocía el boton
        //cuado lo traías fuera de la funcion
        //solucion: activar la funcion despues 
        //de lamar los datos
        //console.log(agregar);

        //localF();
        agregar.addEventListener("click", () => {
            div1 = document.getElementById("Finn");
            div1.innerHTML = "";
            //fue echo para desaparcer el boton agregar
            div1.innerHTML =
                `<h4>PC1 (20% Nota Final)</h4><input type="number"/>
                <h4>PC2 (30% Nota Final)</h4><input type="number"/>
                <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
                <br><button type="button">CALCULAR</button>`;
            calcularPromedioFi();
            localFi2();
        })
    }
    function calcularPromedioFi() {

        let calcular = document.querySelector("#Finn>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Finn>input");
            //console.log(clasenota);

            let notas = [];

            clasenota.forEach(e => notas.push(e.valueAsNumber));

            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {
                localStorage.setItem("notsFi", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promFi", JSON.stringify(promedio));

                //eliminara los inputs pc
                //y el boton calcular
                let killnotas = document.querySelector(".Finn");
                killnotas.innerHTML = "";

                killnotas.innerHTML =
                    `<h3>Finn Burga</h3>
                <div id="Finn">
                    <input type="button" value="AGREGAR NOTAS"/>
                </div>`;
                agregarFi();
                localFi2();
                aprobado();
            }
        })
    }
    function localFi2() {
        if (JSON.parse(localStorage.getItem("notsFi")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsFi"));
        }

        promedio = JSON.parse(localStorage.getItem("promFi"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div#Finn");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function agregarR() {

        let agregar = document.querySelector("#Rachel>input");
        //no reconocía el boton
        //cuado lo traías fuera de la funcion
        //solucion: activar la funcion despues 
        //de lamar los datos
        //console.log(agregar);

        //localF();
        agregar.addEventListener("click", () => {
            div1 = document.getElementById("Rachel");
            div1.innerHTML = "";
            //fue echo para desaparcer el boton agregar
            div1.innerHTML =
                `<h4>PC1 (20% Nota Final)</h4><input type="number"/>
                <h4>PC2 (30% Nota Final)</h4><input type="number"/>
                <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
                <br><button type="button">CALCULAR</button>`;
            calcularPromedioR();
        })
    }
    function calcularPromedioR() {

        let calcular = document.querySelector("#Rachel>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Rachel>input");

            //console.log(clasenota);


            let notas = [];

            clasenota.forEach(e => notas.push(e.valueAsNumber));

            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {
                localStorage.setItem("notsR", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promR", JSON.stringify(promedio));

                //eliminara los inputs pc
                //y el boton calcular
                let killnotas = document.querySelector(".Rachel");
                killnotas.innerHTML = "";

                killnotas.innerHTML =
                    `<h3>Rachel Mendoza</h3>
                <div id="Rachel">
                    <input type="button" value="AGREGAR NOTAS"/>
                </div>`;
                agregarR();
                localR2();
                aprobado();
            }

        })

    }
    function localR2() {
        if (JSON.parse(localStorage.getItem("notsR")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsR"));
        }

        promedio = JSON.parse(localStorage.getItem("promR"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Rachel");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);
        }
    }

    function salir() {
        let salir = document.querySelector("a");

        salir.addEventListener("click", () => location.href="index.html");
    }

    function aprobado() {
        //Necesita de la funcion localf2 porque
        //esta contiene las variables que necesita
        if (promedio >= 12) {
            Swal.fire({ // retornando lo que retorne la función Swal.fire(); (retorna una Promise)
                title: 'APROBADO',
                text: 'El alumno ha sido aprobado'
                // Si el usuario dió click en 'sí', se retornará true.
            });
        } else {
            Swal.fire({ // retornando lo que retorne la función Swal.fire(); (retorna una Promise)
                title: 'DESAPROBADO',
                text: 'El alumno ha desaprobado'
                // Si el usuario dió click en 'sí', se retornará true.
            });
        }
    }
    



    salir()
    datos();
    agregarF();
    agregarJ();
    agregarC();
    agregarFi();
    agregarR();

    //calcularPromedioJ();
    //calcularPromedioC();
    //calcularPromedioFi();
    //calcularPromedioR();
}