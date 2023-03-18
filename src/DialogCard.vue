<script setup lang="ts">
import { defineEmits, useSlots } from "vue";

const slots = useSlots();

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();
</script>

<template>
  <div class="dialog-card">
    <div class="background" @click="emit('close', $event)"></div>
    <regular-card @close="emit('close', $event)" closeable>
      <template #header v-if="slots.header">
        <slot name="header"></slot>
      </template>
      <slot></slot>
      <template #footer v-if="slots.footer">
        <slot name="footer"></slot>
      </template>
    </regular-card>
  </div>
</template>

<style scoped lang="scss">
@import "fibonacci-styles";

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

  & > .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-bg-secondary);
    opacity: $fib-5 * 1%;
  }

  & > .regular-card {
    max-width: $fib-8 * 1%;
  }
}
</style>
