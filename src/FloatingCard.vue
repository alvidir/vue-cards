<template>
  <div class="floating">
    <div class="trigger"><slot name="trigger"></slot></div>
    <div class="content" :class="{ active: active }">
      <div v-if="hasHeader" class="header"><slot name="header"></slot></div>
      <div class="body"><slot></slot></div>
      <div v-if="hasFooter" class="footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FloatingCard",
  components: {},

  props: {
    active: Boolean,
    title: String,
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

.floating {
  display: inline-block;
  position: relative;

  .content {
    @extend .round-corners, .fib-5, .shadow-box;

    position: absolute;
    display: flex;
    flex-direction: column;
    transition-delay: $default-delay;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    margin-top: $fib-5 * 1px;
    padding: $fib-6 * 1px;
    max-width: 20vw;
    width: fit-content;
    visibility: hidden;
    z-index: 2;

    .header,
    .footer {
      font-weight: 600;
      margin-top: $fib-7 * 1px;
      margin-bottom: $fib-7 * 1px;
    }

    .body {
    }
  }

  &:focus-within .content,
  .content:hover,
  .content.active {
    visibility: visible;
    transition-delay: 0s;
  }
}
</style>
