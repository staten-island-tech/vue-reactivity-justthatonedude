<template>
    <div class="cart">
    <h2>Cart</h2>
    <p>{{store.items.toString()}}</p>
    <p>Total: ${{ state.count }}</p>
    <button class="btn" @click="ClearCart">Clear Cart</button>
  </div>
</template>

<script setup>
import { store } from "@/stores/ItemStore"
import { state } from "@/stores/ItemStore"
function ClearCart(){
  store.items = [];
  state.count = 0;
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
.btn:hover {
    background-color: #6200ee;
    color: #FFFFFF;
    };
</style>