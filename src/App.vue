<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos globais podem ser adicionados aqui */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a0a0a, #1a2a2a, #2a2a2a);
  color: #FFFFFF;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
</style>
