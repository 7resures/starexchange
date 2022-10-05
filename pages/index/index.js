import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'

Page({
  data: {
   
  },
  onLoad:function() {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:[],
      actions:[]
    })
  },
  onUnload:function(){
    this.storeBindings.destroyStoreBindings()
  }
  
})
