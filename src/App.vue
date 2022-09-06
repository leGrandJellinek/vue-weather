<template>
<div class="wrapper" v-if="getFullWeather">
<Header />
<Main />
</div>
<div class="loading" v-else>
    <div class="loading__element">

    </div>
</div>
</template>

<script>

import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import {mapGetters , mapActions} from "vuex";

export default {
  components: {
    Header, 
    Main,
  },
  methods: {
    ...mapActions(["weatherInfo"])
  },
  computed: {
    ...mapGetters(["getFullWeather"])
  },
  created(){
    setTimeout(() => this.weatherInfo("Moscow"), 1000)
  }
}


</script>