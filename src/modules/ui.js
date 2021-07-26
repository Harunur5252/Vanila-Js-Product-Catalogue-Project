import data from "./data"
import storage from "./storage"


class UI{
    constructor(){

    }
    // selectors
    selectors(){
        const filterInputElm = document.querySelector('.filter')
        const productListUlElm = document.querySelector('.collection')
        const productNameInputElm   = document.querySelector('.product-name')
        const productPriceInputElm   = document.querySelector('.product-price')
        const addBtnElm = document.querySelector('.add-product')
        const deleteBtnElm = document.querySelector('.delete-product')
        const msgElm = document.querySelector('.msg')
        const nameEElm = document.querySelector('.nameE')
        const priceEElm = document.querySelector('.priceE')
        return {
            filterInputElm,productListUlElm,productNameInputElm,productPriceInputElm,addBtnElm,
            deleteBtnElm,msgElm,nameEElm,priceEElm
        }
    }
    // load all eventListener
    loadEventListener(){
        const {
            addBtnElm,
            productListUlElm,
            filterInputElm
        } = ui.selectors()
        window.addEventListener('DOMContentLoaded',()=>ui.getData(data.productData))
        addBtnElm.addEventListener('click',(e)=>ui.addItem(e))
        productListUlElm.addEventListener('click',(e)=>ui.modifyOrDeleteProduct(e))
        filterInputElm.addEventListener('keyup',(e)=>ui.searchProduct(e))
    }
    // show error message
    showMessage(message){
        const {
            msgElm
        } = ui.selectors()
        msgElm.textContent=message
    }
    showAlert(alertMsg){
        return alert(alertMsg)
    }
    // create li in ul 
    getData(productList){
        const {
            productListUlElm,
        } = ui.selectors()
        if(productList.length > 0){
            ui.showMessage('')
            let li = ''
            productList.forEach(({id,name,price}) => {
            li = document.createElement('li')
            li.className=`list-group-item collection-item`
            li.id=`product-${id}`
            li.innerHTML=`
                    <strong>${name} </strong>
                    <span class="price">$${price}</span>
                    <i class="fa fa-trash float-right delete-product" aria-hidden="true"></i>
                    <i class="fa fa-edit  float-right edit-product" aria-hidden="true"></i>
            `
            productListUlElm.appendChild(li)
            })
        }else{
            ui.showMessage('Please add item to your catalogue')
        }
    }
    addItem(e){
        const {
            productNameInputElm,
            productPriceInputElm,
            productListUlElm
        } = ui.selectors()
        e.preventDefault()
        const name  = productNameInputElm.value
        const price = productPriceInputElm.value
        let id = data.generateId()
        const isInputOk = data.inValidInput(name, price)
        if(isInputOk){
            ui.showAlert('please fill up necessary and valid information')
        }else{
            data.productDataPushInArray(id,name,price)
            productListUlElm.innerHTML=''
            // const data ={
            //     id,
            //     name,
            //     price
            // }
            // productData.push(data)
            // productListUl.innerHTML=''
            ui.getData(data.productData)
            storage.saveDataToLocalStorage({id,name,price})
            productNameInputElm.value=''
            productPriceInputElm.value=''
        }
    }
    populateEditItem(foundProduct) {
        const {
            productNameInputElm,
            productPriceInputElm,
            addBtnElm
        } = ui.selectors()
        productNameInputElm.value = foundProduct.name
        productPriceInputElm.value = foundProduct.price
        addBtnElm.style.display = 'none'
        const updateBtn =
            "<button type='submit' class='btn btn-block btn-info update-product text-center'>update</button>"
        document.querySelector('form').insertAdjacentHTML('beforeend', updateBtn)
    }
    updateProductItem(id){
        const {
            productNameInputElm,
            productPriceInputElm,
            addBtnElm,
            productListUlElm
        } = ui.selectors()
        document.querySelector('.update-product').addEventListener('click',(e)=>{
            e.preventDefault()
            const isInputOk = data.inValidInput(productNameInputElm.value, productPriceInputElm.value)
            if (isInputOk) {
                ui.showAlert('input is not valid')
            }else{
                data.updateProductData(productNameInputElm,productPriceInputElm,id)
            }
            productListUlElm.innerHTML=''
            ui.getData(data.productData)
            productNameInputElm.value = ''
            productPriceInputElm.value = ''
            addBtnElm.style.display = 'block'
            document.querySelector('.update-product').remove()
            //save updated array to localStorage
            localStorage.setItem('productItems', JSON.stringify(data.productData))
        }) 
    }
    modifyOrDeleteProduct(e){
        const target =  e.target.parentElement
        console.log(target)
        let id = Number(target.id.split('-')[1])
        if(e.target.classList.contains('delete-product')){
            e.target.parentElement.parentElement.removeChild(target)
            data.deleteProductData(id)
            storage.deleteItemFromLocalStorage(id)
        }else if(e.target.classList.contains('edit-product')){
            const foundProduct = data.findProduct(id)
            //i have to select the item to edit
            ui.populateEditItem(foundProduct)
            e.target.style.display='none'
            //update Product
            ui.updateProductItem(foundProduct.id)
        }
    }
    searchProduct(e){
        const text = e.target.value.toLowerCase()
        document.querySelectorAll('.collection .collection-item').forEach((item)=>{
            const nameOfProduct = item.firstElementChild.textContent.toLowerCase()
            if(nameOfProduct.indexOf(text)===-1){
                item.style.display='none'
            }else{
                item.style.display='block'
                data.itemLength++
            }
        })
        data.itemLengthForSearch()
    }
}


const ui = new UI()

export default ui




