<template>
  <el-card class="task-card" shadow="never">
    <task-form></task-form>
    <list-items></list-items>
  </el-card>
</template>

<script>
import ListItems from "./ListItems.vue";
import TaskForm from "./TaskForm.vue";

export default {
  name: "ListCard",
  components: {
    ListItems,
    TaskForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.task-card {
  border: 2px solid #dde6f1;
  width: 80%;
}

#routes > div > div > div {
  padding: 0;
}
</style>
