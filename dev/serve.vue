<template>
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="demo-set light">
      <div class="demo-subset bg-secondary">
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
          <floating-card title="hello world">
            <template #trigger>
              <regular-button>click me</regular-button>
            </template>
            <template #header>Hello world</template>
            click me asdfa sdf asdfasdfa sd asdf asd fa sdf s asdfasdfasdf asd
            fasd fa sdfa
          </floating-card>
        </div>
      </div>
      <div class="demo-subset bg-primary">
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
          <floating-card title="hello world">
            <template #trigger>
              <regular-button>click me</regular-button>
            </template>
            <template #header>Hello world</template>
            click me asdfa sdf asdfasdfa sd asdf asd fa sdf s asdfasdfasdf asd
            fasd fa sdfa
          </floating-card>
        </div>
      </div>
    </div>
    <div class="demo-set dark">
      <div class="demo-subset bg-secondary">
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
          <floating-card title="hello world">
            <template #trigger>
              <regular-button>click me</regular-button>
            </template>
            <template #header>Hello world</template>
            click me asdfa sdf asdfasdfa sd asdf asd fa sdf s asdfasdfasdf asd
            fasd fa sdfa
          </floating-card>
        </div>
      </div>
      <div class="demo-subset bg-primary">
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
          <floating-card title="hello world">
            <template #trigger>
              <regular-button>click me</regular-button>
            </template>
            <template #header>Hello world</template>
            click me asdfa sdf asdfasdfa sd asdf asd fa sdf s asdfasdfasdf asd
            fasd fa sdfa
          </floating-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularButton from "vue-buttons/src/RegularButton.vue";

export default defineComponent({
  name: "ServeDev",
  components: { RegularButton },
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
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
}

.demo-set {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &.light {
    @extend .theme-light;
  }

  &.dark {
    @extend .theme-dark;
  }

  .demo-subset {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

    &.bg-primary {
      background-color: var(--color-bg-primary) !important;
    }

    &.bg-secondary {
      background-color: var(--color-bg-secondary) !important;
    }
  }
}

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  &:first-child {
    margin-bottom: 10px;
  }
}
</style>
