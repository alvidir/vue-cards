<template>
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="demo-set light">
      <dialog-card @close="onClose(1)" :active="dialogs[1]">
        <template #header>
          <span><i class="bx bxs-chat"></i>&nbsp;This is a dialog card</span>
          <small
            >Dialog cards are usually used for confirmation or important
            warnings</small
          >
        </template>
        This is the body of the card, so the content itself should be set here
      </dialog-card>
      <div class="demo-subset bg-secondary">
        <div class="demo-item">
          <notice-card
            class="card"
            title="I am an info card"
            text="I am usually used to highlight relevant information for the user"
            level="info"
          />
          <notice-card
            class="card"
            title="I am an error card"
            text="I amb usually used to notify to the user about an error"
            level="error"
            closable
          />
        </div>
        <div class="demo-item">
          <!-- <regular-button>click me</regular-button> -->
          <regular-card closable @close="onOutsideClick">
            <template #header>
              <span
                ><i class="bx bxs-comment-detail"></i>&nbsp;This is a regular
                card</span
              >
              <small>Regular cards are multipurpose</small>
            </template>
            This is the body of the card, so the content itself should be set
            here
            <template #footer>
              <regular-button @click="showDialog(1)">
                do something
              </regular-button>
            </template>
          </regular-card>
        </div>
      </div>
      <div class="demo-subset bg-primary">
        <div class="demo-item">
          <notice-card
            class="card"
            title="I am an info card"
            text="I am usually used to highlight relevant information for the user"
            level="info"
          />
          <notice-card
            class="card"
            title="I am an error card"
            text="I amb usually used to notify to the user about an error"
            level="error"
            closable
          />
        </div>
        <div class="demo-item">
          <regular-card closable>
            <template #header>
              <span
                ><i class="bx bxs-comment-detail"></i>&nbsp;This is a regular
                card</span
              >
              <small>Regular cards are multipurpose</small>
            </template>
            This is the body of the card, so the content itself should be set
            here
            <template #footer>
              <regular-button @click="showDialog(1)">
                do something
              </regular-button>
            </template>
          </regular-card>
        </div>
      </div>
    </div>
    <div class="demo-set dark">
      <dialog-card @close="onClose(2)" :active="dialogs[2]">
        <template #header>
          <span><i class="bx bxs-chat"></i>&nbsp;This is a dialog card</span>
          <small
            >Dialog cards are usually used for confirmation or important
            warnings</small
          >
        </template>
        This is the body of the card, so the content itself should be set here
      </dialog-card>
      <div class="demo-subset bg-secondary">
        <div class="demo-item">
          <notice-card
            class="card"
            title="I am an info card"
            text="I am usually used to highlight relevant information for the user"
            level="info"
          />
          <notice-card
            class="card"
            title="I am an error card"
            text="I amb usually used to notify to the user about an error"
            level="error"
            closable
          />
        </div>
        <div class="demo-item">
          <!-- <regular-button>click me</regular-button> -->
          <regular-card closable>
            <template #header>
              <span
                ><i class="bx bxs-comment-detail"></i>&nbsp;This is a regular
                card</span
              >
              <small>Regular cards are multipurpose</small>
            </template>
            This is the body of the card, so the content itself should be set
            here
            <template #footer>
              <regular-button @click="showDialog(2)">
                do something
              </regular-button>
            </template>
          </regular-card>
        </div>
      </div>
      <div class="demo-subset bg-primary">
        <div class="demo-item">
          <notice-card
            class="card"
            title="I am an info card"
            text="I am usually used to highlight relevant information for the user"
            level="info"
          />
          <notice-card
            class="card"
            title="I am an error card"
            text="I amb usually used to notify to the user about an error"
            level="error"
            closable
          />
        </div>
        <div class="demo-item">
          <!-- <regular-button>click me</regular-button> -->
          <regular-card closable>
            <template #header>
              <span
                ><i class="bx bxs-comment-detail"></i>&nbsp;This is a regular
                card</span
              >
              <small>Regular cards are multipurpose</small>
            </template>
            This is the body of the card, so the content itself should be set
            here
            <template #footer>
              <regular-button @click="showDialog(2)">
                do something
              </regular-button>
            </template>
          </regular-card>
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
  data() {
    return {
      dialogs: { 1: false, 2: false } as { [key: number]: boolean },
    };
  },
  methods: {
    onClose(key: number) {
      this.dialogs[key] = false;
    },

    showDialog(key: number) {
      this.dialogs[key] = true;
    },

    onOutsideClick() {
      console.log("on outside click");
    },
  },
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
  position: relative;
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
