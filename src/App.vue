<template>
  <Header/>
  <router-view/>
  <Footer v-show="!$route.meta.showFooter"/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Header},
}
</script>


<style>

</style>
