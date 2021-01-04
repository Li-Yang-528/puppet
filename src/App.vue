<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    layout: () => import('@/components')
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app{
  display: flex;
  flex-direction: column;
}

</style>
