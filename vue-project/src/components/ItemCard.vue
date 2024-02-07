<template>
    <div>
        <h2>{{ item.name }}</h2>
        <img :src="item.img" alt="">
        <p>{{ item.processor }}</p>
        <p>{{ item.ram }} RAM</p>
        <p>{{ item.graphics_card }}</p>
        <p>{{ item.storage }} Storage</p>
        <p>{{ item.operating_system }}</p>
        <p>${{ item.price }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})
</script>

<style scoped>
img{
    width: 250px;
    height: 300px;
    object-fit: cover;
}
</style>