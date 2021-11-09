const productos = [
    { id: 2, categoria: "Pizza",  precio: 300,  thumbnailUrl: "https://picsum.photos/id/2/600"},
    { id: 1, categoria: "Café",  precio: 50,   thumbnailUrl: "https://picsum.photos/id/1/600"},
    { id: 3, categoria: "Agua",  precio: 100,  thumbnailUrl: "https://picsum.photos/id/3/600"},
];

//Promise
export const getFetch = new Promise((resolve, reject)=>{
    const condition=true
    if(condition){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }else {
        setTimeout(()=>{
            reject('404 not found')
        },2000)
    }

});