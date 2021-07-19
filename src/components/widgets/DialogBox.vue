<template>
    <div ref="toast" class="dialogs-float " :style="{top:top}">
      <div class="card text-center dialogs-border shadow p-3 mb-5 bg-white rounded" style="width:25rem;" >
       <h5 class="card-title"> <strong>{{title}}</strong></h5>
       <p class="card-text">{{message}}</p>
        <div>
            <button type="button" class="btn btn-danger rounded-pill " >
                    <span class="fa fa-check"></span>
            </button>
        </div>
      </div>
    </div>
</template>
<script>


export default {
    name:'DialogBox',
    props:['title','message','top'],
    mounted(){

       // const x=this.posX;
       // const y=this.posY;

       // this.$refs.toast.left=x;
       // this.$refs.toast.top=y;
    }
    
}
</script>
<style scoped>
    .dialogs-float{
        position: absolute;
        z-index: 9;
       left:20vw;
      transform: translate(-10%, -10%);
      


    }
    .dialogs-border{
        border-radius: 10px;
        padding: 2rem;
    }
</style>