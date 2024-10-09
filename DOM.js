// let lista =document.getElementsByTagName("li")
// for(let i=0;i<lista.length;i++){
//     if(i%2==0){
//         lista[i].style.fontSize ='24px'
//         lista[i].style.fontFamily ='arial'
//         lista[i].innerHTML= "texto nuevo " + (i+1)
//         lista[i].style.backgroundColor = "green"
//     }else{
//         lista[i].innerHTML= "texto nuevo " + (i+1)
//         lista[i].style.background="red"
//     }
    
// }
// ---------------
// hacer un evento con una fucnion flecha siempre
// const presionar =document.getElementById("botom") 
// const texto =document.getElementById("parrafo")
// presionar.addEventListener("click",()=>{
//     texto.innerText="Gano argentina"
// })
// ---------------
// const contenedor= document.getElementById("bloque")
// const productos =[{id:1,nombre:"churro",precio:50},{id:2,nombre:"metal",precio:50},{id:3,nombre:"tinta",precio:50},{id:4,nombre:"queso",precio:50}]
// for(let i=0;i<productos.length;i++){
//     const producto = productos[i]
//     const div = document.createElement("div")
//     div.innerHTML =`<p>${producto.nombre}</p><p>${producto.precio}</p>`
//     contenedor.appendChild(div)
// }
// ---------------
const contenedor = document.getElementById("contenedor-tareas")

const tareas = [{id:1,nombre:"tarea1",estado:"incompleto"},{id:2,nombre:"tarea2",estado:"incompleto"},{id:3,nombre:"tarea3",estado:"incompleto"},{id:4,nombre:"tarea4",estado:"completo"}]
const tareascompletadas =[]
for(let i=0;i<tareas.length;i++){
    const tarea = tareas [i]
    if(tarea.estado =="completado"){
        tareascompletadas.push(tarea)
    }
}
for(let i=0;i<tareascompletadas.length;i++){
    const tareacompleta = tareascompletadas[i]
    const div =document.createElement("div")
    div.innerHTML = `<p>${tareacompleta.nombre}</p>`
    contenedor.append(div)
}

