<template>
    <div class="productCards">
        <h2>{{ item.name }}</h2>
        <img :src="item.img" alt="">
        <p>{{ item.processor }}</p>
        <p>{{ item.ram }} RAM</p>
        <p>{{ item.graphics_card }}</p>
        <p>{{ item.storage }} Storage</p>
        <p>{{ item.operating_system }}</p>
        <p>${{ item.price }}</p>
        <button class="btn" @click="AddCart">Add To Cart</button>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})
import { store } from "@/stores/ItemStore"
function AddCart(){
    store.insertItem(props.item.name);
    store.insertItem(props.item.price);
}
</script>

<style scoped>
.btn{
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 3px;
    padding: 0 15px;
    border-radius: 4px;
    color: #6200ee;
    background: transparent;
    line-height: 1.15;
    font-size: 14px;
    height: 36px;
    word-spacing: 0px;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 60px;
    border: 1px solid #6200ee;
    text-align: center;
    transition: all 0.5s;
                
}
img{
    width: 250px;
    height: 300px;
    object-fit: cover;
}
.productCard{
    border-radius: px;
    border: 4px solid #000000 ;
    margin: 10px;
}
.btn:hover {
    background-color: #6200ee;
    color: #FFFFFF;
    };
</style>