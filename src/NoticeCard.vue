<script setup lang="ts">
import { computed } from "vue";
import RegularCard from "./RegularCard.vue";

interface Props {
  title?: string;
  text?: string;
  closeable?: boolean;
  level?: string;
}

const props = withDefaults(defineProps<Props>(), {
  level: "info",
});

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const symbol = computed((): string => {
  const symbols: { [key: string]: string } = {
    info: "bx bxs-info-circle",
    error: "bx bxs-error",
  };

  return symbols[props.level];
});

const color = computed((): string => {
  const colors: { [key: string]: string } = {
    info: "var(--color-accent)",
    error: "var(--color-red)",
  };

  return colors[props.level];
});
</script>

<template>
  <regular-card
    class="notice-card"
    :closeable="closeable"
    @close="emit('close', $event)"
  >
    <template #header>
      <span> <i :class="symbol"></i>&nbsp;{{ title }} </span>
    </template>

    <p v-if="text">{{ text }}</p>
  </regular-card>
</template>

<style lang="scss">
@import "fibonacci-styles";
$base-color: unquote(v-bind(color));

.notice-card {
  border: 1px solid $base-color;

  & > button.close {
    color: $base-color !important;
  }

  & > .header {
    color: $base-color;
  }

  & > .body {
    color: var(--color-text-secondary);
  }
}
</style>
