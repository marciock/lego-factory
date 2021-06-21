<template>
    <div>
        <div class="lego-wrapper">
        
                <div class="form-group lego-height">
                <select class="form-select player"></select>
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point">
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control">
                </div>
    
                <div class="lego-height">
                    <button type="button" class="btn btn-success rounded-circle ">
                        <span class="fa fa-save"></span>]
                    </button>
                </div>
         </div>
    </div>
</template>
<script>
   
export default {
    name:'LegoDrop',

}
</script>
<style>
    .player{
        width: 6em;
        
    }
    .point{
        width: 4em;
    }
    .lego-wrapper{
        display: flex;
        grid-template-columns: 5em 2em 2em;
    }

</style>