<template>
  <div class="notice-card">
    <div v-if="flagged" class="flag"></div>
    <div v-else class="symbol">
      <i :class="symbol"></i>
    </div>
    <div class="content">
      <span v-if="title">{{ title }}</span>
      <p v-if="text">{{ text }}</p>
    </div>
    <button class="bx bx-x" @click="onClose()"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum NoticeLevel {
  INFO = "info",
  ERROR = "error",
}

interface LevelData {
  symbol: string;
  color: string;
}

const CLOSE_EVENT_NAME = "close";
const LEVEL_DATA: { [key: string]: LevelData } = {
  [NoticeLevel.INFO]: {
    symbol: "bx bxs-info-circle",
    color: "var(--color-accent)",
  },
  [NoticeLevel.ERROR]: {
    symbol: "bx bxs-error",
    color: "var(--color-red)",
  },
};

export default defineComponent({
  name: "NoticeCard",
  emits: [CLOSE_EVENT_NAME],
  components: {},

  props: {
    title: String,
    text: String,
    flagged: Boolean,
    level: {
      type: String as PropType<NoticeLevel>,
      default: NoticeLevel.INFO,
    },
  },

  computed: {
    color(): string {
      return LEVEL_DATA[this.level].color;
    },

    symbol(): string {
      return LEVEL_DATA[this.level].symbol;
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
@import "fibonacci-styles";

$base-color: unquote(v-bind(color));

.notice-card {
  @extend .round-corners, .fib-5;

  display: flex;
  flex-direction: row;
  border: 1px solid $base-color;
  background: var(--color-bg-primary);
  padding-right: $fib-5 * 1px;
  overflow: hidden;

  .flag {
    width: $fib-4 * 1px;
    background: $base-color;
    border: 1px solid $base-color;
  }

  .symbol {
    color: $base-color;
    padding: $fib-6 * 1px;
    padding-right: 0;
    font-weight: 600;
  }

  .content {
    width: 100%;
    padding: $fib-6 * 1px;
    color: $base-color;
    margin-top: auto;
    margin-bottom: auto;

    span {
      font-weight: 600;
      margin-right: $fib-5 * 1px;
    }

    p {
      margin-top: $fib-6 * 1px;
      margin-right: $fib-5 * 1px;
    }
  }

  button {
    background: none;
    color: $base-color;
    border: none;
    font-size: $fib-7 * 1px;
  }
}
</style>
