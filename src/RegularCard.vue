<template>
  <div class="regular-card" v-if="active" v-click-outside="onClose(true)">
    <button
      v-if="closable"
      class="close bx bx-x"
      @click="onClose(false)"
    ></button>
    <div v-if="hasHeader" class="card-header" :class="{ adjusted: closable }">
      <slot name="header"></slot>
    </div>
    <div class="card-body"><slot></slot></div>
    <div v-if="hasFooter" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ClickOutside } from "vue-directives/src/main";

const CLOSE_EVENT_NAME = "close";

export default defineComponent({
  name: "RegularCard",
  emits: [CLOSE_EVENT_NAME],
  directives: { ClickOutside },
  props: {
    closable: Boolean,
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

<style lang="scss">
@import "./styles.scss";

.regular-card {
  @extend .round-corners, .fib-5;

  position: relative;
  border: 1px solid var(--color-border);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);

  transition: box-shadow $default-duration;

  .card-header {
    display: flex;
    flex-direction: column;

    padding: $fib-7 * 1px;
    padding-bottom: 0;

    :first-child {
      font-weight: 600;
      margin-bottom: $fib-3 * 1px;
    }

    :not(:first-child) {
      color: var(--color-text-secondary);
    }
  }

  .card-body {
    padding: $fib-7 * 1px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: $fib-7 * 1px;
    padding-top: 0;
  }
}
</style>
