let data = [
    {
        id:1,
        nombre:"Julian"
    },
    {
        id:2,
        nombre:"Juan"
    },
    {
        id:3,
        nombre:"Pedro"
    }
]


let data2 = data


data.push({
    id:4,
    nombre:"Roberto"
})

console.log(data);
console.log(data2);




const persona1 = {nombre:"Julian"}

const persona2 = {...persona1}

persona1.nombre = "Pedro"

console.log(persona1);
console.log(persona2);