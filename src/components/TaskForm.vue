<template>
  <el-form class="form" :inline="true">
    <el-form-item class="input-item form-item">
      <el-input
        class="text-input"
        autosize
        placeholder="Enter new task description here"
        v-model="task"
      ></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-button
        class="add-button"
        type="primary"
        :disabled="!task"
        v-loading="loading"
        @click="handleClick"
        >Add</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      loading: false,
      task: "",
    };
  },
  methods: {
    handleClick: async function () {
      try {
        this.loading = true;
        await this.$store.dispatch("addTask", this.task);
        this.task = "";
      } catch (error) {
        console.error("Error adding task", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-button {
  background-color: #034694;
  border: none;
}

.add-button:disabled {
  background-color: #dde6f1;
}

.form {
  border-bottom: 2px solid #dde6f1;
  column-gap: 16px;
  display: flex;
  padding: 16px;
}

.form-item {
  margin: 0;
}

.input-item {
  flex-grow: 1;
}

.task-input {
  border: 2px solid #dde6f1;
}

.task-input:hover,
.task-input:active {
  border: 2px solid #034694;
}
</style>
