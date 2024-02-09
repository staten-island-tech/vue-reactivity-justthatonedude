<template>
    <div class="productCard">
        <h2>{{ item.name }}</h2>
        <img :src="item.img" alt="">
        <p>{{ item.processor }}</p>
        <p>{{ item.ram }} RAM</p>
        <p>{{ item.graphics_card }}</p>
        <p>{{ item.storage }} Storage</p>
        <p>{{ item.operating_system }}</p>
        <p>${{ item.price }}</p>
        <button class="btn">Add To Cart</button>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})
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
    min-width: 64px;
    border: 1px solid #6200ee;
    text-align: center;
    transition: all 0.3s;
                
}
img{
    width: 250px;
    height: 300px;
    object-fit: cover;
}
.productCard{
    margin: 10px;
    height: 549px;
    width: 305px;
}
.btn:hover {
    transform: scale(1.1);
    background-color: #6200ee;
    color: #FFFFFF;
    };
</style>