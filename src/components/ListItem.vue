<template>
  <div class="list-item">
    <el-checkbox
      class="checkbox"
      v-model="isChecked"
      v-loading="checkLoading"
    ></el-checkbox>

    <p class="list-item-text">{{ content }}</p>

    <el-icon
      class="delete"
      size="16"
      @click="$store.dispatch('deleteTask', id)"
    >
      <close />
    </el-icon>
  </div>
</template>

<script>
import { Close } from "@element-plus/icons";

export default {
  name: "ListItem",
  components: {
    Close,
  },
  computed: {
    isChecked: {
      get() {
        return this.checked;
      },
      async set(checked) {
        try {
          this.checkLoading = true;
          await this.$store.dispatch("updateTask", {
            id: this.id,
            checked,
          });
        } catch (error) {
          console.error("Error updating task", error);
        } finally {
          this.checkLoading = false;
        }
      },
    },
  },
  data() {
    return {
      checkLoading: false,
    };
  },
  props: {
    checked: Boolean,
    content: String,
    id: String,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#routes > div > div > div > div:nth-child(3) > div > label > span > span {
  background-color: #034694;
  border-color: #034694;
  height: 16px;
  width: 16px;
}

#routes
  > div
  > div
  > div
  > div:nth-child(3)
  > div
  > label
  > span
  > span::after {
  left: 5px;
  top: 2px;
}

.delete {
  color: #034694;
  cursor: pointer;
  font-size: 20px;
}

.list-item {
  align-items: center;
  border-bottom: 1px solid lightblue;
  column-gap: 16px;
  display: flex;
  padding: 16px;
}

.list-item:hover {
  background-color: #dde6f1;
}

.list-item-text {
  flex-grow: 1;
  text-align: left;
}
</style>
