import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    setChecked: (state, payload) => {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === payload.id) {
          state.tasks[i].checked = payload.checked;
          return;
        }
      }
    },
    setTasks: (state, payload) => {
      state.tasks = payload;
    },
  },
  actions: {
    fetchTasks: async ({ commit }) => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        const tasks = response.data.tasks;
        commit("setTasks", tasks);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    },
    addTask: async ({ commit }, task) => {
      try {
        const response = await axios.post("http://localhost:3000/tasks", {
          task,
        });
        const tasks = response.data.tasks;
        commit("setTasks", tasks);
      } catch (error) {
        console.error("Error adding task", error);
      }
    },
    updateTask: async ({ commit }, { id, checked }) => {
      try {
        const response = await axios.patch("http://localhost:3000/tasks", {
          id,
          checked,
        });

        if (response.status === 204) {
          commit("setChecked", { id, checked });
        }
      } catch (error) {
        console.error("Error updating task", error);
      }
    },
    deleteTask: async ({ commit }, id) => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/tasks/${id}`
        );
        const tasks = response.data.tasks;
        commit("setTasks", tasks);
      } catch (error) {
        console.error("Error deleting task", error);
      }
    },
  },
  modules: {},
  getters: {
    getTasks: (state) => state.tasks,
    hasNoTasks: (state) => !state.tasks.length,
  },
});
