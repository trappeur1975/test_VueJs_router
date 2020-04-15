<template>
  <div id="app">
    <div class="ui fixe inverted menu">
      <div class="ui container">
       <!--  <router-link to="/" class="header item" tag="button">accueil</router-link>
        <router-link to="/a" class="item">pageA</router-link> -->
        <router-link :to="{name: 'root'}" class="header item" tag="button">accueil</router-link>
        <router-link :to="{name: 'a'}" class="item">pageA</router-link>
        <router-link :to="{name: 'd'}" class="item">pageD</router-link>
        <router-link :to="{name: 'post', params:{id:1}} " class="item">article</router-link>
      </div>
    </div>
    <div class="slidebar">
      <h1>sidebar</h1>
      <router-view name="slidebar"/>
    </div>
    <div class="main">
      <h1>main</h1>
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
