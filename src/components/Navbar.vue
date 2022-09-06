<template>
<nav class="header__nav">
<div class="header__nav-container">
    <a class="header__nav-logo">
        <img src="@/assets/images/logo.png" alt="">
        <span>vue weather</span>
    </a>
    <div class="header__nav-search">
        <img src="@/assets/images/icons/water.svg" alt="">
        <input 
        type="text"
        class="header__nav-input"
        placeholder="Выбрать город"
        v-model="search"
        @keydown.enter="weatherInfo(search); search = ''">
    </div>
</div>
</nav>
</template>

<script>

import { mapActions } from "vuex"

export default {
    data(){
        return{
            search: ""
        }
    },
    methods: {
        ...mapActions(['weatherInfo'])
    }
}
</script>