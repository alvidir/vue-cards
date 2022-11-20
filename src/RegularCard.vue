<template>
  <div class="regular-card">
    <div v-if="hasHeader" class="card-header">
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

export default defineComponent({
  name: "RegularCard",
  components: {},

  props: {
    active: Boolean,
  },

  computed: {
    hasHeader(): boolean {
      return !!this.$slots.header;
    },

    hasFooter(): boolean {
      return !!this.$slots.footer;
    },
  },

  methods: {},
});
</script>

<style lang="scss">
@import "fibonacci-styles";

.regular-card {
  @extend .round-corners, .fib-5;

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

    button {
      width: fit-content;

      &:not(:first-child) {
        margin-left: $fib-5 * 1px;
      }
    }
  }
}
</style>
