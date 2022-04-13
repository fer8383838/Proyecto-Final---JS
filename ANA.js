/* 
1. El programa permite ingresar notas
2. Mayor igual que 0 y menor igual que 20.
3. Te devuelve un promedio y te dice si es que has aprobado.
4. También haay un botón SALIR
    que te devuelve al index, donde vuelves a ingresar 
    usuario y contraseña
*/

//AQUI TRAES EL ARCHICO JSON
//COMO UN ARRAY

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
        //AQUI SE CREA CON DOOM LOS DATOS 
        //MÁS IMPORTANTES DELPROGRAMA
        let form = document.querySelector("#form");
        alumnos.forEach(e => {
            let div = document.createElement("div");
            //agregué una clase con e.nombre
            //classList.add()
            div.classList.add(e.nombre)
            div.innerHTML =
                `
                    <h3>${e.nombre} ${e.apellido}</h3>
                    <div id="${e.nombre}">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;
            form.appendChild(div);
        });
        //SI EN CASO HUBIERA DATOS NE AL MEMORIA VIRTUAL
        //ESTOS LOS MUESTRAN EN PANTALLA
        localC();
        localF();
        localFi();
        localJ();
        localR();
    }
    
    function agregarF() {
        let agregar = document.querySelector("#Fernando>input");
        //AQUI HACES UN POCO INTERACTIVO EN PROGRAMA
        agregar.addEventListener("click", () =>  {
            let div1 = document.getElementById("Fernando");

            div1.innerHTML = "";

            div1.innerHTML= 
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button">CALCULAR</button>`;
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

            let notas = [];

            clasenota.forEach(e => {
                notas.push(e.valueAsNumber)
                console.log(notas)});

            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })
            //AQUI SE EVALÚA SI ES QUE LAS NOTAS 
            // SON AADECUADAS
            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {

                //AQUI SE ALMACENA LOS INPUTS 
                //EN LA MEMORIA VIRTUAL
                localStorage.setItem("notsFA", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promFA", JSON.stringify(promedio));

                killnotas = document.querySelector("div.Fernando");
                killnotas.innerHTML = "";

                killnotas.innerHTML = 
                `<h3>Fernando Montero</h3>
                    <div id="Fernando">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;
                localF();
                aprobado();
                agregarF();
            }
        })

    }

    //
    function localF() {
        //AQUI SE RECUPERAN LOS DATOS
        //SI LOS HUBIERA DE LA MEMORIA VIRTUAL
        if (JSON.parse(localStorage.getItem("notsFA")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsFA"));
        }

        promedio = JSON.parse(localStorage.getItem("promFA"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Fernando");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = ". La nota final es " + promedio + ".";
            resultado.appendChild(p2);
        }
    }

    //TODO LO DEMÁS ES LO MISMO
    //PERO CON DIFERENTES VARIABLES
    //NO PUDE OPTIMIZAR MÁS EL CÓDIGO
    //SE ACEPTA CONSEJOS

    function agregarJ() {
        let agregar = document.querySelector("#Julio>input");

        agregar.addEventListener("click", () =>  {
            let div1 = document.getElementById("Julio");

            div1.innerHTML = "";

            div1.innerHTML= 
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button">CALCULAR</button>`;
            calcularPromedioJ();
        })
        
    }
    function calcularPromedioJ() {

        let calcular = document.querySelector("#Julio>button");
        // let nombre = document.querySelectorAll("div.Fernando");
        // console.log(nombre);

        calcular.addEventListener("click", () => {

            let clasenota = document.querySelectorAll("#Julio>input");

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
                localStorage.setItem("notsJA", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promJA", JSON.stringify(promedio));

                killnotas = document.querySelector("div.Julio");
                killnotas.innerHTML = "";

                killnotas.innerHTML = 
                `<h3>Julio Diaz</h3>
                    <div id="Julio">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;

                agregarJ();
                localJ();
                aprobado();
            }
        })

    }
    function localJ() {
        if (JSON.parse(localStorage.getItem("notsJA")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsJA"));
        }

        promedio = JSON.parse(localStorage.getItem("promJA"));

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

        agregar.addEventListener("click", () =>  {
            let div1 = document.getElementById("Carlos");

            div1.innerHTML = "";

            div1.innerHTML= 
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
                localStorage.setItem("notsCA", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promCA", JSON.stringify(promedio));
                
                killnotas = document.querySelector(".Carlos")
                killnotas.innerHTML = "";

                killnotas.innerHTML = 
                `<h3>Carlos Jimenez</h3>
                    <div id="Carlos">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;
                agregarC();
                localC();
                aprobado();
                
            }
        })

    }
    function localC() {
        if (JSON.parse(localStorage.getItem("notsCA")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsCA"));
        }

        promedio = JSON.parse(localStorage.getItem("promCA"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Carlos");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = "La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function agregarFi() {
        let agregar = document.querySelector("#Finn>input");

        agregar.addEventListener("click", () =>  {
            let div1 = document.getElementById("Finn");

            div1.innerHTML = "";

            div1.innerHTML= 
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button">CALCULAR</button>`;
            calcularPromedioFi();
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
                localStorage.setItem("notsFiA", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promFiA", JSON.stringify(promedio));

                killnotas = document.querySelector(".Finn");
                killnotas.innerHTML = "";

                killnotas.innerHTML =
                `<h3>Finn Burga</h3>
                    <div id="Finn">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;    
                agregarFi();
                localFi();
                aprobado();
            }
        })
    }
    function localFi() {
        if (JSON.parse(localStorage.getItem("notsFiA")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsFiA"));
        }

        promedio = JSON.parse(localStorage.getItem("promFiA"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Finn");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = " + notas[2] + ".";
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = "La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function agregarR() {
        let agregar = document.querySelector("#Rachel>input");

        agregar.addEventListener("click", () =>  {
            let div1 = document.getElementById("Rachel");

            div1.innerHTML = "";

            div1.innerHTML= 
            `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
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
                localStorage.setItem("notsRA", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promRA", JSON.stringify(promedio));

                killnotas = document.querySelector(".Rachel");
                killnotas.innerHTML= "";

                killnotas.innerHTML =
                `<h3>Rachel Mendoza</h3>
                    <div id="Rachel">
                        <input type="button" value="AGREGAR NOTAS" />
                    </div>`;
                agregarR();
                localR();
                aprobado();
            }
        })

    }
    function localR() {
        if (JSON.parse(localStorage.getItem("notsRA")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsRA"));
        }

        promedio = JSON.parse(localStorage.getItem("promRA"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Rachel");
            let p = document.createElement("p");
            p.innerHTML = "PC1 = " + notas[0] + " " + "PC2 = " + notas[1] + " " + "PC3 = "+ notas[2] + "." ;
            resultado.appendChild(p);

            let p2 = document.createElement("p");
            p2.innerHTML = "La nota final es " + promedio + ".";
            resultado.appendChild(p2);

        }
    }

    function salir() {
        let salir = document.querySelector("a");

        salir.addEventListener("click", () => window.location.replace("http://127.0.0.1:5500/1.index.html"));
    }

    //funciona en todas porque no agregue let a la variables
    function aprobado() {
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
}