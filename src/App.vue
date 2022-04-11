<template>
  <div id="app">
    <title>Pokmon Team Maker</title>
    <div id="nav">
      <div id="empty"></div>
      <div id="logo-header">
        <img src="./assets/logo.png"/>
      </div>
      <div id="link-wrap">  
        <div id="nav-links">
          <router-link id="link" to="/">How to use</router-link>
          <p id="spacer" ><strong>&nbsp;|&nbsp;</strong></p>
          <router-link id="link" to="/browse">Pokemon List</router-link>
          <p id="spacer" ><strong>&nbsp;|&nbsp;</strong></p>
          <router-link id="link" v-if="this.$root.$data.pokeLists.length === 0" to="/pokeLists">Teams</router-link>
          <router-link id="link"  v-else to="/pokeLists">Teams ({{this.$root.$data.pokeLists.length}})</router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <a href="https://github.com/woo3004/pokeTeam" target="_blank">https://github.com/woo3004/pokeTeam</a>
    </div>
  </div>
</template>

<style>
* {
  /* width: 90%; */
  padding: 0;
  margin: auto;
}

#spacer {
  color: white;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #225560;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
}

#empty {
  width: 30%;
}

#link-wrap {
  display: flex;
  width: 30%
}

#nav-links {
  font-size: 150%;
  display: flex;
  justify-content: center;
}

#logo-header {
  width: 30%
}

#nav, #footer {
  padding: 30px;
  background-color: #44b18c;
}

#nav a {
  font-weight: bold;
}

#footer {
  margin-top: 20px;
}

#footer a {
  color: white;
}

#footer p {
  color: white;
}

#nav a {
  color: white;
}


#logo-header img {
  height: 120px;
}

a {
  text-decoration: none;
  color: white;
}

#link:visited {
  color: white;
}

#link:hover {
  color: rgb(108, 108, 182);
}

#link:visited:hover {
  color: rgb(108, 108, 182);
}


</style>


