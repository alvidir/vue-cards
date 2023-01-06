<template>
  <div class="dialog-card" v-if="active">
    <div class="background"></div>
    <regular-card v-click-outside="onClose" @close="onClose">
      <template #header v-if="hasHeader">
        <slot name="header"></slot>
      </template>
      <slot></slot>
      <template #footer v-if="hasFooter">
        <slot name="footer"></slot>
      </template>
    </regular-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ClickOutside } from "vue-directives/src/main";
import RegularCard from "./RegularCard.vue";

const CLOSE_EVENT_NAME = "close";

export default defineComponent({
  name: "DialogCard",
  emits: [CLOSE_EVENT_NAME],
  components: { RegularCard },
  directives: { ClickOutside },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    hasHeader(): boolean {
      return !!this.$slots.header;
    },

    hasFooter(): boolean {
      return !!this.$slots.footer;
    },
  },

  methods: {
    onClose(outside: boolean) {
      this.$emit(CLOSE_EVENT_NAME, outside);
    },
  },
});
</script>

<style scoped lang="scss">
@import "./styles.scss";

.dialog-card {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  backdrop-filter: blur($fib-4 * 1px);
  z-index: 2;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-bg-secondary);
    opacity: $fib-5 * 1%;
  }

  .regular-card {
    max-width: $fib-8 * 1%;
  }
}
</style>
