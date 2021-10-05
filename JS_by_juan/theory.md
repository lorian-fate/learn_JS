.Sentencias: en JS se consideran unidades básicas de programación, e.g
    alert("hello student);
    document.write("Hello);
    
.Funciones predefinidas: son funciones que vienen con el lenguaje, e.g
    alert();
    document.write();
    isNan():
    Number(): permite transforma un string que se puede convertir en número
    prompt(); permite introducir datos al programa

.document.write("texto"); nos permite escribir dentro del documento html

.Tipos de datos:
    ._Existen tres tipos básicos:
        Números
        Strings
        Booleans

.Variables: espacion en memoria del ordenador donde se almacena un valor que podrá cambiar dutante la ejecución del programa, e.g: var variable;

.Operadores básicos:
    suma +
    resta -
    multiplicacion *
    division /

.Operadores in/de-cremento:
    += incremento en x el valor de una variable
    -= decremento en x el valor de una variable
    *= multiplica en x el valor de una variable
    /= Divide en x el valor de una variable
    ++ incrementa en 1 el valor de una variable
    -- Decrementa en 1 el valor de una variable

.Arrays, Arreglos o Matrices: es una variable donde se pueden almacenar muchos valores
.Propiedades y métodos del Array:
    length: variable.length = 4;, longitud o número de elementos que tiene un array
    push: variable.push("balon"); variable.push("balon", "raqueta", "bolsa"), agrega elementos al final de array
    pop: variable.pop();, elimina elementos al final de un array
    unshift: variable.unshift("balon");, agrega elementos pero al comienzo del array
    shift: variable.shift(); elimina elementos al principio de un array

.POO

.condicionales
    if(condicion){
        //código a ejecutar si la condicion es verdad
    }
    if(condicion){
        //código a ejecutar si la condicion es verdad
    }
    else{
        //código a ejecutar si la condicion es verdad
    }

    operadores de comparación:
        ==    igual que...
        !=    Diferente que...
        >     Mayor que...
        <     Menor que...
        >=    Mayor o igual que...
        <=    Menor o igual que...
        ===   Estrictamente igual que(comprueba también tipos)
        !==   Estrictamente diferente que...(comprueba tipos)

    operadores lógicos:
        &&    Y lógico
        ||    O lógico

    el operador negado expresa lo contrario de lo que haya a continuación.
        !
    
.Bucles:
    Determinados:
        for:
            for(inicio;condicion;incremento/Decremento){
                //codigo a repetir mientras se cumpla la condicion
            }
    
    Indeterminados:
        while:
            While(condicion){
                //Código a repetir mientras la condicion del bucle sea cierta
            }
        Do while
            Do{
                //código a ejecutar
            }while(condicion);

.funciones:
    sintaxis:
        function nombre_funcion(){
            //código a ejecutar
        }

        //llamamos a la funcion
        nombre_funcion();

.Eventos:
    Eventos más importantes
    01._ onblur: deseleccionar un elemento (<button>, <input>, <label>, <select>, <textarea>, <body>)
    02._ onchange: Deseleccionar un elemento que se ha modificado (<input>, <select>, <textarea>)
    03._ onclick: Pinchar y soltar el ratón (todos los elementos)
    04._ ondblclick: Pinchar dos veces seguidas con el ratón (todos los elementos)
    05._ onfocus: Seleccionar un elemento (<button>, <input>, <label>, <select>, <textarea>, <body>)
    06._ onkeydown: Pulsar una tecla (sin soltar) (Elementos de formulario y <body>)
    07._ onkeypress: Pulsar una tecla (Elementos de formulario y <body>)
    08._ onkeyup: Soltar una tecla pulsada (Elementos de formularioi y <body>)
    09._ onload: la página se cargado completamente (<body>)
    10._ onmousedown: Pulsar (sin soltar) un botón del raton (todos los elementos)
    11._ onmousemove: Mover el ratón (todos los elementos)
    12._ onmouseout: El ratón sale del elemento (pasa por encima de otro elemeto) (todos los elementos)
    13._ onmouseover: El ratón entra en el elemento (pasa por encima de otro elemeto) (todos los elementos)
    14._ onmouseup: Soltar el botón que estaba pulsado en el ratón (todos los elementos)
    15._ onreset: Inicializar el formulario (borrar todos los datos) (<form>)
    16._ onresize: Se ha modificado el tamaño de la ventana del navegador (<body>) 


.JQuert: es una librería de js que nos ayuda en la creación de tareas frecuentes a la hora de programar en js como por ejemplo:
    seleccionar elementos
    agregar nuevo contenido
    ocultar y mostrar elementos de una web
    validación de formularios
    efectos visuales vistosos

.Otras librerías conocidas:
    Prototype
    Mootools
    Dojo
    Yahoo User Interface

.Agregar JQuery
    existen dos formas:
        -Enlazando con un servidor que contenga a su vez JQuery: para obtener los links, abra un buscador y  escriba cdn jquery.
        -Descargando tu propia copia de JQuery

.DOM: document object model,
.Funciones para agregar contenido a las páginas web:
    .html(): nos permite reemplazar texto.
    .text(): 
    .after(): agrega el contenido despues de donde estamos apuntando.
    .append(): nos permite agregar texto a continuacion.
    .prepend(): nos permite agregar texto antes.
    .before(): agrega el contenido antes de donde estamos apuntando.

.JQ reemplazar y eliminar elementos:
    .remove()
    .replaceWith()

.JQ cambiar atributos css:
    .addClass(): Agrega un estilo de clase
    .removeClass(): Quita un estilo de clase
    .toggleClass(): hace las dos cosas

.JQ propiedad css:
    .css("propiedad_css)
    .css("propiedad_css", valor)
    .css({"propiedad_css": valor, "propiedad_css": valor})

.JQ cambiar atributos html:
    .attr("atributo", valor)
    .removeAttr("atributo")

.JQ funcion each() y funciones anonimas

.JQ Eventos: son desencadenantes de la acción
    Eventos del ratón:
        .click
        .dblclick
        .mousedown
        .mouseup
        .mouseover
        .mouseout
        .mousemove
    Eventos del teclado:
        .keypress
        .keydown
    Eventos de documento o ventana:
        .load
        .resize
        .scroll
        .unload
    Eventos de formulario:
        .submit
        .reset
        .change
        .focus
        .blur

.Eventos, funciones hover(), toggle()