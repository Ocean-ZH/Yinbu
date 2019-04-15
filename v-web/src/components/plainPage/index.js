import plainPage from './index.vue'

const plainPageLists = {
    install : function(Vue){
        Vue.component('plainPageLists',plainPage)
    }
}

export default plainPageLists;