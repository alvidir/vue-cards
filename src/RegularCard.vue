<template>
  <div class="regular-card">
    <button v-if="closable" class="close bx bx-x" @click="onClose"></button>
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

const CLOSE_EVENT_NAME = "close";

export default defineComponent({
  name: "RegularCard",
  emits: [CLOSE_EVENT_NAME],
  components: {},

  props: {
    closable: Boolean,
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
    onClose() {
      this.$emit(CLOSE_EVENT_NAME);
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
  overflow: hidden;
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
