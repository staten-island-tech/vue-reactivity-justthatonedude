<template>
  <div class="cart">
    <ShopCart/>
  </div>
  <div class = "container">
    <ItemCard v-for="item in items" :key="items.name" :item="item"/>
  </div>
  
</template>

<script setup>
import ItemCard from '@/components/ItemCard.vue';
import ShopCart from '@/components/ShopCart.vue';
const items = [
    {
        name: "Apex I",
        processor: "AMD Ryzen 5 7600X",
        graphics_card: "AMD Radeon RX 7600XT",
        ram: "16GB",
        storage: "1TB SSD",
        operating_system: "Windows 10 Home",
        price: 1099,
        img: "https://starforgesystems.com/cdn/shop/files/H2Base_3cdb85a8-372d-41ac-8ae4-14b544d792d7.png?v=1698933718&width=832",
    },
    {
        name: "Apex II",
        processor: "AMD Ryzen 7 7700X",
        graphics_card: "AMD Radeon RX 7800XT",
        ram: "16GB",
        storage: "1TB SSD",
        operating_system: "Windows 10 Home",
        price: 1299,
        img: "https://starforgesystems.com/cdn/shop/files/pro-product-cuout.png?v=1700242736&width=832",
    },
    {
        name: "Apex III",
        processor: "Intel Core i7-13700K",
        graphics_card: "NVIDIA GeForce RTX 4070",
        ram: "16GB",
        storage: "1TB SSD",
        operating_system: "Windows 10 Home",
        price: 1799,
        img: "https://starforgesystems.com/cdn/shop/files/product-img-cuouts-1.png?v=1707098488&width=832",
    },
    {
        name: "Apex IV",
        processor: "Intel Core i7-14700K",
        graphics_card: "NVIDIA GeForce RTX 4070 Super",
        ram: "32GB",
        storage: "1TB SSD",
        operating_system: "Windows 10 Home",
        price: 2599,
        img: "https://starforgesystems.com/cdn/shop/files/product-img-cuouts-2.png?v=1707098519&width=832",
    },
    {
        name: "Apex V",
        processor: "AMD Ryzen 7 7700X3D",
        graphics_card: "NVIDIA GeForce RTX 4080 Super",
        ram: "32GB",
        storage: "2TB SSD",
        operating_system: "Windows 10 Home",
        price: 2999,
        img: "https://starforgesystems.com/cdn/shop/files/voyager-product-img-cuouts.png?v=1699022987&width=832",
    },
    {
        name: "Apex X",
        processor: "AMD Ryzen 9 7900X3D",
        graphics_card: "NVIDIA GeForce RTX 4090",
        ram: "64GB",
        storage: "4TB SSD",
        operating_system: "Windows 10 Home",
        price: 4599,
        img: "https://starforgesystems.com/cdn/shop/files/voyager-pro-product-img-cuouts.png?v=1699023001&width=832",
    },
]

</script>

<style scoped>
.container{
    width: 1024px;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>