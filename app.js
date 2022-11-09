const app = Vue.createApp({
    data(){
        return{
            className:'',
            background:'',
            isHidden:false,
        }
    },
    computed:{
        classChanger(){
            return [this.className,{hidden:this.isHidden}]
        }
    },
    methods:{
        toggleVisibility(){
            this.isHidden=!this.isHidden
        }
    }
});
app.mount('#assignment');