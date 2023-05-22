<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

interface Props {
  closeable?: boolean;
}

defineProps<Props>();

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const onClose = (payload: MouseEvent) => {
  emit("close", payload);
};
</script>

<template>
  <div class="regular-card">
    <button v-if="closeable" class="close bx bx-x" @click="onClose"></button>
    <div v-if="slots.header" class="header" :class="{ adjusted: closeable }">
      <slot name="header"></slot>
    </div>
    <div class="body"><slot></slot></div>
    <div v-if="slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "fibonacci-styles";

.regular-card {
  @extend .round-corners;

  position: relative;
  border: 1px solid var(--color-border);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);

  & > button.close {
    position: absolute;
    display: block;
    width: $fib-8 * 1px;
    height: $fib-8 * 1px;
    right: 0;

    font-size: large;
    color: var(--color-text-primary);
    background: none;
    border: none;
  }

  & > .header {
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

  & > .body {
    padding: $fib-7 * 1px;
  }

  & > .footer {
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: $fib-7 * 1px;
    padding-top: 0;
  }
}
</style>
