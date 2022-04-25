<template>
  <TypeNav/>
  <ListContainer/>
  <Recommend/>
  <Rank/>
  <Like/>
  <Floor/>
  <Floor/>
  <Brand/>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/components/ListContainer";
import Recommend from "@/components/Recommend";
import Rank from "@/components/Rank";
import Like from "@/components/Like";
import Floor from "@/components/Floor";
import Brand from "@/components/Brand";

export default {
  name: "Home",
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer, TypeNav}
}
</script>

<style scoped>

</style>