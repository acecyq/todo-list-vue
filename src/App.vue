<template>
  <div id="app">
    <el-menu class="menu" mode="horizontal">
      <el-menu-item index="1">
        <router-link class="nav-link" to="/about"
          >About</router-link
        ></el-menu-item
      >
    </el-menu>

    <div id="routes">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}

.menu {
  border-bottom: 2px solid #dde6f1;
}

#app > ul > li > a {
  color: #034694;
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
}

#routes {
  background-color: #f3f6fa;
  flex-grow: 1;
}
</style>
