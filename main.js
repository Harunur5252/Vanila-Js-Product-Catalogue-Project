
(function (){
    // selector
    const filterInput = document.querySelector('.filter')
    const productListUl = document.querySelector('.collection')
    const productNameInput   = document.querySelector('.product-name')
    const productPriceInput   = document.querySelector('.product-price')
    const addBtn = document.querySelector('.add-product')
    const deleteBtn = document.querySelector('.delete-product')
    const msg = document.querySelector('.msg')
    const nameE = document.querySelector('.nameE')
    const priceE = document.querySelector('.priceE')

    // data/state
    let productData = getDataFromLocalStorage()
    function getDataFromLocalStorage(){
        let items=''
        if(localStorage.getItem('productItems')===null){
            items=[]
        }else{
            items = JSON.parse(localStorage.getItem('productItems'))
        }
        return items
    }
    function saveDataToLocalStorage(item){
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

    function deleteItemFromLocalStorage(id){
        const items =  JSON.parse(localStorage.getItem('productItems'))
        const result = items.filter((productItem)=>{
            return productItem.id!==id
        })
        localStorage.setItem('productItems',JSON.stringify(result))
        if(result.length===0){
            location.reload()
        }
    }

    // load all eventListener 
    function loadEventListener(){
        window.addEventListener('DOMContentLoaded',getData.bind(null,productData))
        addBtn.addEventListener('click',addItem)
        productListUl.addEventListener('click',deleteProduct)
        filterInput.addEventListener('keyup',searchProduct)
    }

    // show message that product is add or not
    function showMessage(message){
        msg.textContent=message
    }

    // getting data form store and populate ul
    function getData(productList){
        if(productList.length > 0){
            showMessage('')
            let li = ''
            productList.forEach(({id,name,price}) => {
            li = document.createElement('li')
            li.className=`list-group-item collection-item`
            li.id=`product-${id}`
            li.innerHTML=`
                    <strong>${name}</strong>
                    <span class="price">${price}</span>
                    <i class="fa fa-trash float-right delete-product" aria-hidden="true"></i>
            `
            productListUl.appendChild(li)
            })
        }else{
            showMessage('Please add item to your catalogue')
        }
    }

    // adding product
    function addItem(e){
        e.preventDefault()
        const name  = productNameInput.value
        const price = productPriceInput.value
        let id
        if(productData.length===0){
            id=0
        }else{
        id=productData[productData.length-1].id+1
        }

        if(name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))){
            alert('error')
        }else{
            const data ={
                id,
                name,
                price
            }
            productData.push(data)
            productListUl.innerHTML=''
            getData(productData)
            saveDataToLocalStorage(data)
            productNameInput.value=''
            productPriceInput.value=''
        }
    }

    // Delete product
    function deleteProduct(e){
            if(e.target.classList.contains('delete-product')){
            //removing target form view
            const target =  e.target.parentElement
            e.target.parentElement.parentElement.removeChild(target)
            
            //removing item form the store
            // getting id(number type)
            let id = Number(target.id.split('-')[1])
            const result = productData.filter((productItem)=>{
                return productItem.id!==id
            })
            productData=result
            deleteItemFromLocalStorage(id)
        }
    }

    // searching item form existing product
    function searchProduct(e){
        const text = e.target.value.toLowerCase()
        let itemLength= 0
        document.querySelectorAll('.collection .collection-item').forEach((item)=>{
            const nameOfProduct = item.firstElementChild.textContent.toLowerCase()
            if(nameOfProduct.indexOf(text)===-1){
                item.style.display='none'
            }else{
                item.style.display='block'
                itemLength++
            }
        })
        if(itemLength>0){
            showMessage('')
        }else{
            showMessage('No item found')
        }
    }
    
    loadEventListener()

})()