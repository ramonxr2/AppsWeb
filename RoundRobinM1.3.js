// RoundRobin M1.3

class Proceso {
    constructor(nombre, lineas){
        this.nombre=nombre;
        this.lineas=lineas;
        this.lineaActual=0;
    }
}

class AlgoritmoRoundRobin{
    constructor(procesos){
        this.procesos=procesos;
    }

    ejecutar(){
        const outputDiv = document.getElementById('output');
        while(this.procesos.length > 0){
            const procesoActual=this.procesos.shift();
            const outputMessage=`Proceso ${procesoActual.nombre} ${procesoActual.lineas[procesoActual.lineaActual]}\n`;
            // Imprimir en pagina
            outputDiv.innerHTML += `<p>${outputMessage}</p>`;
            
            if(procesoActual.lineaActual<procesoActual.lineas.length-1){
                procesoActual.lineaActual++;
                this.procesos.push(procesoActual);
            } else {
                outputDiv.innerHTML += `${procesoActual.nombre} ha terminado`;
      }
    }

    outputDiv.innerHTML += "Todos los procesos han sido ejecutados.";
  }
}

// ejemplos
const proceso1 = new Proceso("1",["a = 1 + 2;","console.log(\"1+2\");","console.log(a)"]);
const proceso2 = new Proceso("2",["b = 3 + 4;","console.log(\"3+4\");",""]);
const proceso3 = new Proceso("3",["c = 5 + 6;","console.log(\"5+6\");","console.log(c)"]);

const calendarizador = new AlgoritmoRoundRobin([proceso1,proceso2,proceso3]);

calendarizador.ejecutar();
