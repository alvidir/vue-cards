<template>
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="demo-item">
      <notice-card
        class="card"
        title="I am an info card"
        text="I am usually used to highlight relevant information for the user adfasdfasdfas adsf sadf asd fsd fasdfsdfasdfasd  sdfasdf asd fasdf asd      fasdfasdf a sd fa sdf as df asd fa"
        level="info"
      />
      <notice-card
        class="card"
        title="I am an error card"
        text="I amb usually used to notify to the user about an error"
        level="error"
      />
    </div>
    <div class="demo-item">
      <button>click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServeDev",
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  @extend .theme-light;

  margin: 0;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;

  background: var(--color-background-secondary);
}

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  &:first-child {
    margin-bottom: 10px;
  }
}
</style>
