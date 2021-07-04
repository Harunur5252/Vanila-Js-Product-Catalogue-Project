
import ui from './modules/ui'
import data from './modules/data'
import storage from './modules/storage'


data.productData=storage.getDataFromLocalStorage()
ui.loadEventListener()




