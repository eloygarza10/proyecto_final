<template>
<div>
     <div class="card card-defult">
            <div class="card-body quote">
             <slot></slot>
            </div>
</div>
   
</div>
</template>

<script>


export default {

}
</script>

<style>

.quote {
    cursor: pointer;
    text-align: left;
}

.quote:hover {
    background-color: #ffe2e2;
}


</style>
