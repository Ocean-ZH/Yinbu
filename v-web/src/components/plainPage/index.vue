<template>
    <div class="page-init" :style="{height:initHeight}">
        {{initWords}}
    </div>
</template>
<script>
    export default {
        props:['initHeight','initWords'],
        data(){
            return {
                
            }
        },
    }
</script>

<style lang="less" scoped>
    .page-init{
        font-size:14px;
        color:#666;
    }
</style>