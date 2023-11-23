class persona {
  #dni;
  #nombre;
  #edad;
  #sexo;
  #peso;
  #altura;
  #fechnacimineto

 
  constructor(dniParam, nombreParam, edadParam, sexoParam, pesoParam, alturaParam, fechnaciminetoParam,){
    this.#dni = dniParam; 
    this.#nombre = nombreParam; 
    this.#edad = edadParam;
    this.#sexo = sexoParam;
    this.#peso = pesoParam;
    this.#altura = alturaParam
    this.#fechnacimineto = fechnaciminetoParam

}

//get

get dni(){
  return this.#dni;
}
get nombre(){
  return this.#nombre;
}
get edad(){
  return this.#edad;
}
get sexo(){
  return this.#sexo;
}
get peso(){
  return this.#peso;
}
get altura(){
  return this.#altura;
}
get fechnacimineto(){
  return this.#fechnacimineto;
}


//set

set dni(nuevoDni){
  this.#dni = nuevoDni
}
set nombre(nuevoNombre){
  this.#nombre = nuevoNombre
}
set edad(nuevaEdad){
  this.#edad = nuevaEdad
}
set sexo(nuevoSexo){
  this.#sexo = nuevoSexo
}
set peso(nuevoPeso){
  this.#peso = nuevoPeso
}
set altura(nuevaAltura){
  this.#altura = nuevaAltura
}
set fechnacimineto(nuevaFechnacimineto){
  this.#fechnacimineto = nuevaFechnacimineto
}



}




function mostrardatos(){
   
 
  const dni1 = document.getElementById('dni1');
  const dnirecibido = parseInt (dni1.value)

  const nombre1 = document.getElementById('nombre1');
  const nombrerecibido = nombre1.value

  const edad1 = document.getElementById('edad1');
  const edadrecibida = parseInt (edad1.value)

  const sexo1 = document.getElementById('sexo1');
  const sexorecibido = sexo1.value

  const peso1 = document.getElementById('peso1');
  const pesorecibido = peso1.value
  
  const altura1 = document.getElementById('altura1');
  const alturarecibida = altura1.value

  const fecha1 = document.getElementById('fecha1');
  const fecharecibida = fecha1.value
  console.log(fecharecibida) 

   if (   (dnirecibido == "") || 
     (nombrerecibido == "") || 
        (edadrecibida == "") || 
       (sexorecibido == "") || 
        (pesorecibido == "") || 
      (alturarecibida == "") ||
       (fecharecibida == "")) 
       { 

       }
       else{
 


  const personaCreada = new persona(dnirecibido, nombrerecibido, edadrecibida, sexorecibido, pesorecibido, alturarecibida, fecharecibida);
  console.log(personaCreada)
  const ano = new Date (personaCreada.fechnacimineto)
  const extraerano = ano.getFullYear()





 const parrafoNuevo = document.createElement('p') // <p></p>
 parrafoNuevo.innerHTML = `<h2>Nombre: ${personaCreada.nombre}</h2>
 <ul>
    <li>Dni N°:  ${personaCreada.dni}</li>
    <li>Edad: ${personaCreada.edad} años</li>
    <li>Sexo: ${personaCreada.sexo}</li>
    <li>Peso: ${personaCreada.peso} kg</li>
    <li>Altura: ${personaCreada.altura} m</li>
    <li>Fecha de Nacimiento: ${personaCreada.fechnacimineto}</li>
 </ul>`
 parrafoNuevo.className = `${personaCreada}`
 const seccionInformacionExtra = document.getElementsByClassName('my-5');

 seccionInformacionExtra[1].appendChild(parrafoNuevo) 
  
 if(personaCreada.edad >= 18)
 {
  const parrafoNuevo2 = document.createElement('p') // <p></p>
  parrafoNuevo2.innerHTML = `<h2>${personaCreada.nombre} es mayor de edad</h2>
`
  parrafoNuevo2.className = `${personaCreada}`
  const seccionInformacionExtra2 = document.getElementsByClassName('my-5');
 
  seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
 }else{
  const parrafoNuevo2 = document.createElement('p') // <p></p>
  parrafoNuevo2.innerHTML = `<h2>${personaCreada.nombre} es menor de edad</h2>
`
  parrafoNuevo2.className = `${personaCreada}`
  const seccionInformacionExtra2 = document.getElementsByClassName('my-5');
 
  seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
 }

 if(extraerano >= 1994 && extraerano <= 2010)
 {

 const parrafoNuevo2 = document.createElement('p') // <p></p>
 parrafoNuevo2.innerHTML = `<h2>Nombre de la generacion a la que pertenece ${personaCreada.nombre}: Generacion Z</h2>
 <ul>
    <li>marco temporal:  1994 - 2010 </li>
    <li>poblacion: 7.800.000</li>
    <li>Circunstancia Historica: expansion masiva de internet</li>
    <li>Rasgos caracteristicos : irreverncia</li>

 </ul>`
 parrafoNuevo2.className = `${personaCreada}`
 const seccionInformacionExtra2 = document.getElementsByClassName('my-5');

 seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
   }
   else if (extraerano >= 1981 && extraerano <= 1993) 
   {
    
 const parrafoNuevo2 = document.createElement('p') // <p></p>
 parrafoNuevo2.innerHTML = `<h2>Nombre de la generacion a la que pertenece ${personaCreada.nombre}: Generacion Y Milleniams</h2>
 <ul>
    <li>marco temporal:  1981 - 1993 </li>
    <li>poblacion: 7.200.000</li>
    <li>Circunstancia Historica: inicio de la digitalizacion</li>
    <li>Rasgos caracteristicos : Frustracion</li>

 </ul>`
 parrafoNuevo2.className = `${personaCreada}`
 const seccionInformacionExtra2 = document.getElementsByClassName('my-5');

 seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
     
   }  else if (extraerano >= 1969 && extraerano <= 1980) 
   {
    
 const parrafoNuevo2 = document.createElement('p') // <p></p>
 parrafoNuevo2.innerHTML = `<h2>Nombre de la generacion a la que pertenece ${personaCreada.nombre}: Generacion X</h2>
 <ul>
    <li>marco temporal:  1969 - 1980 </li>
    <li>poblacion: 9.300.000</li>
    <li>Circunstancia Historica: crisis del 73 y transicion española</li>
    <li>Rasgos caracteristicos : Obsesion por el exito</li>

 </ul>`
 parrafoNuevo2.className = `${personaCreada}`
 const seccionInformacionExtra2 = document.getElementsByClassName('my-5');

 seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
     
   }   else if (extraerano >= 1949 && extraerano <= 1968) 
   {
    
 const parrafoNuevo2 = document.createElement('p') // <p></p>
 parrafoNuevo2.innerHTML = `<h2>Nombre de la generacion a la que pertenece ${personaCreada.nombre}: Baby Room</h2>
 <ul>
    <li>marco temporal:  1949 - 1968 </li>
    <li>poblacion: 12.200.000</li>
    <li>Circunstancia Historica: paz y explosion demografica</li>
    <li>Rasgos caracteristicos : ambicion</li>

 </ul>`
 parrafoNuevo2.className = `${personaCreada}`
 const seccionInformacionExtra2 = document.getElementsByClassName('my-5');

 seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
     
   }   else if (extraerano >= 1930 && extraerano <= 1948) 
   {
    
 const parrafoNuevo2 = document.createElement('p') // <p></p>
 parrafoNuevo2.innerHTML = `<h2>Nombre de la generacion a la que pertenece ${personaCreada.nombre}: Silent Generation Los niños de la posguerra</h2>
 <ul>
    <li>marco temporal:  1930 - 1948 </li>
    <li>poblacion: 6.300.000</li>
    <li>Circunstancia Historica: conflictos belicos</li>
    <li>Rasgos caracteristicos : Austeridad</li>

 </ul>`
 parrafoNuevo2.className = `${personaCreada}`
 const seccionInformacionExtra2 = document.getElementsByClassName('my-5');

 seccionInformacionExtra2[1].appendChild(parrafoNuevo2) 
     
   }
  }
}
