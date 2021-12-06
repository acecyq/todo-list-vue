<template>
  <div v-show="isEmpty" class="no-item-text">
    <p>No items</p>
  </div>

  <div v-for="task in $store.state.tasks" :key="task.id">
    <list-item
      :id="task.id"
      :checked="task.checked"
      :content="task.content"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "ListItems",
  components: {
    ListItem,
  },
  computed: {
    isEmpty: function () {
      return !this.$store.state.tasks.length;
    },
  },
  mounted() {
    this.$nextTick(async function () {
      await this.$store.dispatch("fetchTasks");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-item-text {
  color: #c6c6c6;
  padding: 16px;
  text-align: center;
}
</style>
