import ui from "./ui"

class Data{
    constructor(){
      this.itemLength = 0
    }
    inValidInput(name, price) {
    return (
      name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))
    )
    }
    generateId(){
        let id=0
        if(this.productData.length===0){
            id=0
        }else{
            id=this.productData[this.productData.length-1].id+1
        }
        return id
    }
    productDataPushInArray(id,name,price){
        const data ={
            id,
            name,
            price
        }
        this.productData.push(data)
        // UI.getData(this.productData)
        // storage.saveDataToLocalStorage(data)
    }
    deleteProductData(id){
        const result = this.productData.filter((productItem)=>{
            return productItem.id!==id
        })
        this.productData=result
    }
    findProduct(id) {
        const foundProduct = this.productData.find((productItem) => productItem.id === id)
        if (!foundProduct) {
        ui.showAlert('You product is not Found')
        return
        }
        return foundProduct
    }
    updateProductData(productNameInputElm,productPriceInputElm,id){
        this.productData = this.productData.map((productItem) => {
                if (productItem.id === id) {
                return {
                    ...productItem,
                    name: productNameInputElm.value,
                    price: productPriceInputElm.value
                }
                } else {
                return productItem
                }
            })
    }
    itemLengthForSearch(){
        if(this.itemLength>0){
            ui.showMessage('')
        }else{
            ui.showMessage('No item found')
        }
    }
}
const data = new Data()


export default data


