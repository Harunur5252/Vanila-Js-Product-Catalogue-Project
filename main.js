
const data={
      itemLength:0,
      inValidInput(name, price) {
        return (
          name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))
        )
      },
      generateId(){
        let id=0
        if(this.productData.length===0){
            id=0
        }else{
            id=this.productData[this.productData.length-1].id+1
        }
        return id
      },
      productDataPushInArray(id,name,price){
        const data ={
            id,
            name,
            price
        }
        this.productData.push(data)
        // UI.getData(this.productData)
        // storage.saveDataToLocalStorage(data)
      },
      deleteProductData(id){
        const result = this.productData.filter((productItem)=>{
            return productItem.id!==id
        })
        this.productData=result
      },
       findProduct(id) {
        const foundProduct = this.productData.find((productItem) => productItem.id === id)
        if (!foundProduct) {
          UI.showAlert('You product is not Found')
          return
        }
        return foundProduct
      },
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
      },
      itemLengthForSearch(){
        if(this.itemLength>0){
            UI.showMessage('')
        }else{
            UI.showMessage('No item found')
        }
      }
}

const storage = {
     getDataFromLocalStorage(){
        let items=''
        if(localStorage.getItem('productItems')===null){
            items=[]
        }else{
            items = JSON.parse(localStorage.getItem('productItems'))
        }
        return items
    },
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
    },

     deleteItemFromLocalStorage(id){
        const items =  JSON.parse(localStorage.getItem('productItems'))
        const result = items.filter((productItem)=>{
            return productItem.id!==id
        })
        localStorage.setItem('productItems',JSON.stringify(result))
        if(result.length===0){
            location.reload()
        }
    }
}

const UI={
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

    },
    // load all eventListener
    loadEventListener(){
        const {
            addBtnElm,
            productListUlElm,
            filterInputElm
        } = this.selectors()
        window.addEventListener('DOMContentLoaded',()=>this.getData(data.productData))
        addBtnElm.addEventListener('click',(e)=>this.addItem(e))
        productListUlElm.addEventListener('click',(e)=>this.modifyOrDeleteProduct(e))
        filterInputElm.addEventListener('keyup',(e)=>this.searchProduct(e))
    },
    // show error message
    showMessage(message){
        const {
            msgElm
        } = this.selectors()
        msgElm.textContent=message
    },
    showAlert(alertMsg){
      return alert(alertMsg)
    },
    // create li in ul 
     getData(productList){
        const {
            productListUlElm,
        } = this.selectors()
        if(productList.length > 0){
            this.showMessage('')
            let li = ''
            productList.forEach(({id,name,price}) => {
            li = document.createElement('li')
            li.className=`list-group-item collection-item`
            li.id=`product-${id}`
            li.innerHTML=`
                    <strong>${name}</strong>
                    <span class="price">${price}</span>
                     <i class="fa fa-trash float-right delete-product" aria-hidden="true"></i>
                     <i class="fa fa-edit  float-right edit-product" aria-hidden="true"></i>
            `
            productListUlElm.appendChild(li)
            })
        }else{
            this.showMessage('Please add item to your catalogue')
        }
    },
     addItem(e){
        const {
            productNameInputElm,
            productPriceInputElm,
            productListUlElm
        } = this.selectors()
        e.preventDefault()
        const name  = productNameInputElm.value
        const price = productPriceInputElm.value
        let id = data.generateId()
        const isInputOk = data.inValidInput(name, price)
        if(isInputOk){
            this.showAlert('please fill up necessary and valid information')
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
            this.getData(data.productData)
            storage.saveDataToLocalStorage({id,name,price})
            productNameInputElm.value=''
            productPriceInputElm.value=''
        }
    },
    populateEditItem(foundProduct) {
        const {
            productNameInputElm,
            productPriceInputElm,
            addBtnElm
        } = this.selectors()
        productNameInputElm.value = foundProduct.name
        productPriceInputElm.value = foundProduct.price
        addBtnElm.style.display = 'none'
        const updateBtn =
          "<button type='submit' class='btn btn-block btn-info update-product text-center'>update</button>"
        document.querySelector('form').insertAdjacentHTML('beforeend', updateBtn)
        // document.querySelector('.edit-product').style.display = 'none'
    },
     updateProductItem(id){
        const {
            productNameInputElm,
            productPriceInputElm,
            addBtnElm,
            productListUlElm
        } = this.selectors()
        document.querySelector('.update-product').addEventListener('click',(e)=>{
            e.preventDefault()
            const isInputOk = data.inValidInput(productNameInputElm.value, productPriceInputElm.value)
            if (isInputOk) {
              this.showAlert('input is not valid')
            }else{
                data.updateProductData(productNameInputElm,productPriceInputElm,id)
            }
            productListUlElm.innerHTML=''
            this.getData(data.productData)
            productNameInputElm.value = ''
            productPriceInputElm.value = ''
            addBtnElm.style.display = 'block'
            document.querySelector('.update-product').remove()
            //save updated array to localStorage
            localStorage.setItem('productItems', JSON.stringify(data.productData))
        }) 
    },
     modifyOrDeleteProduct(e){
        const target =  e.target.parentElement
        let id = Number(target.id.split('-')[1])
            if(e.target.classList.contains('delete-product')){
            e.target.parentElement.parentElement.removeChild(target)
            data.deleteProductData(id)
            storage.deleteItemFromLocalStorage(id)
        }else if(e.target.classList.contains('edit-product')){
           const foundProduct = data.findProduct(id)
           //i have to select the item to edit
           this.populateEditItem(foundProduct)
           e.target.style.display='none'
           //update Product
           this.updateProductItem(foundProduct.id)
        }
    },
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
data.productData=storage.getDataFromLocalStorage()
UI.loadEventListener()


// (function (){
    // selector
    // const filterInput = document.querySelector('.filter')
    // const productListUl = document.querySelector('.collection')
    // const productNameInput   = document.querySelector('.product-name')
    // const productPriceInput   = document.querySelector('.product-price')
    // const addBtn = document.querySelector('.add-product')
    // const deleteBtn = document.querySelector('.delete-product')
    // const msg = document.querySelector('.msg')
    // const nameE = document.querySelector('.nameE')
    // const priceE = document.querySelector('.priceE')

    // data/state
    // let productData = getDataFromLocalStorage()
    // function getDataFromLocalStorage(){
    //     let items=''
    //     if(localStorage.getItem('productItems')===null){
    //         items=[]
    //     }else{
    //         items = JSON.parse(localStorage.getItem('productItems'))
    //     }
    //     return items
    // }
    // function saveDataToLocalStorage(item){
    //     let items=''
    //     if(localStorage.getItem('productItems')===null){
    //         items=[]
    //         items.push(item)
    //         localStorage.setItem('productItems',JSON.stringify(items))
    //     }else{
    //         items = JSON.parse(localStorage.getItem('productItems'))
    //         items.push(item)
    //         localStorage.setItem('productItems',JSON.stringify(items))
    //     }
    // }

    // function deleteItemFromLocalStorage(id){
    //     const items =  JSON.parse(localStorage.getItem('productItems'))
    //     const result = items.filter((productItem)=>{
    //         return productItem.id!==id
    //     })
    //     localStorage.setItem('productItems',JSON.stringify(result))
    //     if(result.length===0){
    //         location.reload()
    //     }
    // }

    // load all eventListener 
    // function loadEventListener(){
    //     window.addEventListener('DOMContentLoaded',getData.bind(null,productData))
    //     addBtn.addEventListener('click',addItem)
    //     productListUl.addEventListener('click',modifyOrDeleteProduct)
    //     filterInput.addEventListener('keyup',searchProduct)
    // }

    // show message that product is add or not
    // function showMessage(message){
    //     msg.textContent=message
    // }

    // getting data form store and populate ul
    // function getData(productList){
    //     if(productList.length > 0){
    //         showMessage('')
    //         let li = ''
    //         productList.forEach(({id,name,price}) => {
    //         li = document.createElement('li')
    //         li.className=`list-group-item collection-item`
    //         li.id=`product-${id}`
    //         li.innerHTML=`
    //                 <strong>${name}</strong>
    //                 <span class="price">${price}</span>
    //                  <i class="fa fa-trash float-right delete-product" aria-hidden="true"></i>
    //                  <i class="fa fa-edit  float-right edit-product" aria-hidden="true"></i>
    //         `
    //         productListUl.appendChild(li)
    //         })
    //     }else{
    //         showMessage('Please add item to your catalogue')
    //     }
    // }

    // function inValidInput(name, price) {
    //     return (
    //       name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))
    //     )
    //   }

    // adding product
    // function addItem(e){
    //     e.preventDefault()
    //     const name  = productNameInput.value
    //     const price = productPriceInput.value
    //     let id
    //     if(productData.length===0){
    //         id=0
    //     }else{
    //     id=productData[productData.length-1].id+1
    //     }
    //     const isInputOk = inValidInput(name, price)
    //     if(isInputOk){
    //         alert('please fill up necessary and valid information')
    //     }else{
    //         const data ={
    //             id,
    //             name,
    //             price
    //         }
    //         productData.push(data)
    //         productListUl.innerHTML=''
    //         getData(productData)
    //         saveDataToLocalStorage(data)
    //         productNameInput.value=''
    //         productPriceInput.value=''
    //     }
    // }

    // Delete and edit product
    // function modifyOrDeleteProduct(e){
    //     const target =  e.target.parentElement
    //     let id = Number(target.id.split('-')[1])
    //         if(e.target.classList.contains('delete-product')){
    //         e.target.parentElement.parentElement.removeChild(target)
    //         const result = productData.filter((productItem)=>{
    //             return productItem.id!==id
    //         })
    //         productData=result
    //         deleteItemFromLocalStorage(id)
    //     }else if(e.target.classList.contains('edit-product')){
    //        const foundProduct = findProduct(id)
    //        //i have to select the item to edit
    //        populateEditItem(foundProduct)
    //        //update Product
    //        updateProductItem(foundProduct.id)
    //     }
    // }

    // function findProduct(id) {
    //     const foundProduct = productData.find((productItem) => productItem.id === id)
    //     if (!foundProduct) {
    //       alert('You product is not Found')
    //       return
    //     }
    //     return foundProduct
    // }

    // function populateEditItem(foundProduct) {
    //     productNameInput.value = foundProduct.name
    //     productPriceInput.value = foundProduct.price
    //     addBtn.style.display = 'none'
    //     const updateBtn =
    //       "<button type='submit' class='btn btn-block btn-info update-product text-center'>update</button>"
    //     document.querySelector('form').insertAdjacentHTML('beforeend', updateBtn)
    //     // document.querySelector('.edit-product').style.display = 'none'
    // }

    
    // function updateProductItem(id){
    //     document.querySelector('.update-product').addEventListener('click',(e)=>{
    //         e.preventDefault()
    //         const isInputOk = inValidInput(productNameInput.value, productPriceInput.value)
    //         if (isInputOk) {
    //           alert('input is not valid')
    //         }else{
    //             productData = productData.map((productItem) => {
    //                 if (productItem.id === id) {
    //                   return {
    //                     ...productItem,
    //                     name: productNameInput.value,
    //                     price: productPriceInput.value
    //                   }
    //                 } else {
    //                   return productItem
    //                 }
    //               })
    //         }
    //         productListUl.innerHTML=''
    //         getData(productData)
    //         productNameInput.value = ''
    //         productPriceInput.value = ''
    //         addBtn.style.display = 'block'
    //         document.querySelector('.update-product').remove()
    //         //save updated array to localStorage
    //         console.log(productData)
    //         localStorage.setItem('productItems', JSON.stringify(productData))
    //     }) 
    // }


    // searching item form existing product
    // function searchProduct(e){
    //     const text = e.target.value.toLowerCase()
    //     let itemLength= 0
    //     document.querySelectorAll('.collection .collection-item').forEach((item)=>{
    //         const nameOfProduct = item.firstElementChild.textContent.toLowerCase()
    //         if(nameOfProduct.indexOf(text)===-1){
    //             item.style.display='none'
    //         }else{
    //             item.style.display='block'
    //             itemLength++
    //         }
    //     })
    //     if(itemLength>0){
    //         showMessage('')
    //     }else{
    //         showMessage('No item found')
    //     }
    // }
    
    // loadEventListener()

// })()