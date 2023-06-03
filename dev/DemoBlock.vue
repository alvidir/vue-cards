<script setup lang="ts">
import { ref } from "vue";
import RegularButton from "vue-buttons/src/RegularButton.vue";

const showDialog = ref(false);

const onClose = () => {
  console.log("got close card event");
  showDialog.value = false;
};
</script>

<template>
  <dialog-card @close="onClose()" v-if="showDialog">
    <template #header>
      <span><i class="bx bxs-chat"></i>&nbsp;This is a dialog card</span>
      <small
        >Dialog cards are usually used for confirmation or important
        warnings</small
      >
    </template>
    This is the body of the card, so the content itself should be set here
  </dialog-card>
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
      @close="onClose"
      closeable
    />
  </div>
  <div class="demo-item">
    <regular-card class="sized" @close="onClose" closeable>
      <template #header>
        <span
          ><i class="bx bxs-comment-detail"></i>&nbsp;This is a regular
          card</span
        >
        <small>Regular cards are multipurpose</small>
      </template>
      <span
        >This is the body of the card, so the content itself should be set here.
        Notice that if the content is too large for the available space, the
        body is always hidden; header and footer are priorized here.
      </span>
      <template #footer>
        <regular-button @click="() => (showDialog = true)">
          click me
        </regular-button>
      </template>
    </regular-card>
  </div>
</template>

<style lang="scss">
@import "fibonacci-styles";

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

.sized {
  height: 200px;

  span {
    // Set the necessary styles for the span
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
