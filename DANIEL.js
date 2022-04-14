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
    function formInput() {
        let form = document.createElement("form");
        return form;
    }


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
        localF();
        localJ();
        localC();
        localFi();
        localR();
    }

    function agregarF() {
        let agregar = document.querySelector("#Fernando>input");

        agregar.addEventListener("click", ()=> {
            let div1 = document.querySelector("#Fernando");

            div1.innerHTML = "";
            div1.innerHTML = `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button"">CALCULAR</button>`
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

            clasenota.forEach(e => notas.push(e.valueAsNumber));

            let bool = notas.map((e) => {
                return e >= 0 && e <= 20
            })

            let valorbool = bool.indexOf(false);

            if (valorbool !== -1) {
                alert("INGRESE UNA NOTA VÁLIDA")
            } else {
                localStorage.setItem("notsFD", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promFD", JSON.stringify(promedio));

                killnotas = document.querySelector(".Fernando")
                killnotas.innerHTML = "";
                killnotas.innerHTML = `
                <h3>Fernando Montero</h3>
                <div id="Fernando">
                    <input type="button" value="AGREGAR NOTAS">
                </div>`
                localF();
                agregarF();
                aprobado();
            }
        })
    }
    function localF() {
        if (JSON.parse(localStorage.getItem("notsFD")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsFD"));
        }

        promedio = JSON.parse(localStorage.getItem("promFD"));

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

    function agregarJ() {
        let agregar = document.querySelector("#Julio>input");

        agregar.addEventListener("click", ()=> {
            let div1 = document.querySelector("#Julio");

            div1.innerHTML = "";
            div1.innerHTML = `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button"">CALCULAR</button>`
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
                localStorage.setItem("notsJD", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promJD", JSON.stringify(promedio));
                
                killnotas = document.querySelector(".Julio");
                killnotas.innerHTML = `
                <h3>Julio Diaz</h3>
                <div id="Julio">
                    <input type="button" value="AGREGAR NOTAS"
                </div>`;
                localJ();
                aprobado();
                agregarJ()
            }
        })
    }
    function localJ() {
        if (JSON.parse(localStorage.getItem("notsJD")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsJD"));
        }

        promedio = JSON.parse(localStorage.getItem("promJD"));

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

        agregar.addEventListener("click", ()=> {
            let div1 = document.querySelector("#Carlos");

            div1.innerHTML = "";
            div1.innerHTML = `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button"">CALCULAR</button>`
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
                localStorage.setItem("notsCD", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promCD", JSON.stringify(promedio));

                killnotas = document.querySelector(".Carlos");
                killnotas.innerHTML = "";

                killnotas.innerHTML = `
                <h3>Carlos Jimenez</h3>
                <div id="Carlos">
                    <input type="button" value="AGREGAR NOTAS"
                </div>`;

                agregarC();
                localC();
                aprobado();
            }
        })

    }
    function localC() {
        if (JSON.parse(localStorage.getItem("notsCD")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsCD"));
        }

        promedio = JSON.parse(localStorage.getItem("promCD"));

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

        agregar.addEventListener("click", ()=> {
            let div1 = document.querySelector("#Finn");

            div1.innerHTML = "";
            div1.innerHTML = `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button"">CALCULAR</button>`
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
                localStorage.setItem("notsFiD", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promFiD", JSON.stringify(promedio));

                killnotas = document.querySelector(".Finn");
                killnotas.innerHTML = "";

                killnotas.innerHTML = `
                <h3>Finn Burga</h3>
                <div id="Finn">
                    <input type="button" value="AGREGAR NOTAS"
                </div>`;
                agregarFi();
                localFi();
                aprobado();
            }
        })
    }
    function localFi() {
        if (JSON.parse(localStorage.getItem("notsFiD")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsFiD"));
        }

        promedio = JSON.parse(localStorage.getItem("promFiD"));

        if (promedio == null) {
            promedio = 0;
        } else {

            let resultado = document.querySelector("div.Finn");
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

        agregar.addEventListener("click", ()=> {
            let div1 = document.querySelector("#Rachel");

            div1.innerHTML = "";
            div1.innerHTML = `
            <h4>PC1 (20% Nota Final)</h4><input type="number"/>
            <h4>PC2 (30% Nota Final)</h4><input type="number"/>
            <h4>PC3 (50% Nota Final)</h4><input type="number"/><br>
            <br><button type="button"">CALCULAR</button>`
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
                localStorage.setItem("notsRD", JSON.stringify(notas));


                //console.log(notas);
                let promedio = (notas[0] * 0.2) + (notas[1] * 0.3) + (notas[2] * 0.5);
                //console.log(promedio);

                localStorage.setItem("promRD", JSON.stringify(promedio));

                killnotas = document.querySelector(".Rachel");
                killnotas.innerHTML = "";

                killnotas.innerHTML = `
                <h3>Rachel Mendoza</h3>
                <div id="Rachel">
                    <input type="button" value="AGREGAR NOTAS"
                </div>`;

                agregarR();
                localR();
                aprobado();
            }
        })
    }
    function localR() {
        if (JSON.parse(localStorage.getItem("notsRD")) == null) {
            notas = [0, 0, 0];
        } else {
            notas = JSON.parse(localStorage.getItem("notsRD"));
        }

        promedio = JSON.parse(localStorage.getItem("promRD"));

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

    function salir() {
        let salir = document.querySelector("a");

        salir.addEventListener("click", () => window.location.replace("http://127.0.0.1:5500/index.html"));
    }

    salir()

    formInput();
    datos();
    agregarF();
    agregarJ();
    agregarC();
    agregarFi();
    agregarR();
}