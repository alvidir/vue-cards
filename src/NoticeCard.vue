<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, computed } from "vue";
import RegularCard from "./RegularCard.vue";
import { NoticeLevel } from "./types";

interface Props {
  title?: string;
  text?: string;
  closeable?: boolean;
  level?: NoticeLevel;
}

const props = withDefaults(defineProps<Props>(), {
  level: NoticeLevel.INFO,
});

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const symbol = computed((): string => {
  const symbols: { [key: string]: string } = {
    [NoticeLevel.INFO]: "bx bxs-info-circle",
    [NoticeLevel.ERROR]: "bx bxs-error",
  };

  return symbols[props.level];
});

const color = computed((): string => {
  const colors: { [key: string]: string } = {
    [NoticeLevel.INFO]: "var(--color-accent)",
    [NoticeLevel.ERROR]: "var(--color-red)",
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
