
class Storage{
   constructor(){

   }
   getDataFromLocalStorage(){
    let items=''
    if(localStorage.getItem('productItems')===null){
        items=[]
    }else{
        items = JSON.parse(localStorage.getItem('productItems'))
    }
    return items
   }
   saveDataToLocalStorage(item){
    let items=''
    if(localStorage.getItem('productItems')===null){
        items=[]
        items.push(item)
        localStorage.setItem('productItems',JSON.stringify(items))
    }else{
        items = JSON.parse(localStorage.getItem('productItems'))
        items.push(item)
        localStorage.setItem('productItems',JSON.stringify(items))
    }
   }
   deleteItemFromLocalStorage(id){
    const items  =  JSON.parse(localStorage.getItem('productItems'))
    const result = items.filter((productItem)=>{
        return productItem.id!==id
    })
    localStorage.setItem('productItems',JSON.stringify(result))
    if(result.length===0){
        location.reload()
    }
   }
}

const storage = new Storage()
export default storage