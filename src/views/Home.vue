<template>
  <div class="container">
    <list-card></list-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCard from "../components/ListCard.vue";

export default {
  name: "Home",
  components: {
    ListCard,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}
</style>