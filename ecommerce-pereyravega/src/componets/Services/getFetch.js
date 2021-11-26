const productos = [
    { id: 1, categoria: "Comida", nombre: "Pizza",  precio: 300,  thumbnailUrl: "https://picsum.photos/id/2/600", stock:10},
    { id: 2, categoria: "Bebida", nombre: "Café",  precio: 50,   thumbnailUrl: "https://picsum.photos/id/1/600", stock:9},
    { id: 3, categoria: "Bebida", nombre: "Agua",  precio: 100,  thumbnailUrl: "https://picsum.photos/id/3/600", stock:8},
    { id: 4, categoria: "Comida", nombre: "Empanadas",  precio: 80,  thumbnailUrl: "https://picsum.photos/id/4/600", stock:7}
  ];
  
  export const getFetch = new Promise ((resolve, reject) => {
  
    const condition = true
    if (condition) {
        setTimeout(()=> {
            resolve (productos)
        }, 2000)
    } else {
        setTimeout(()=>{
            reject('404 not found')
        }, 2000)
    }
  })