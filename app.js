const app = Vue.createApp({
    data(){
        return{
            className:'',
            background:'',
            isHidden:false,
        }
    },
    methods:{
        toggleVisibility(){
            this.isHidden=!this.isHidden
        }
    }
});
app.mount('#assignment');