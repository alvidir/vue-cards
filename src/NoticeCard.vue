<template>
  <div class="warning">
    <div class="flag"></div>
    <div class="content">
      <div class="text">
        <span v-if="title">{{ title }}</span>
        <p v-if="text">{{ text }}</p>
      </div>
      <span class="space-between"></span>
      <button class="bx bx-x" @click="onClose()"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum NoticeLevel {
  INFO = "info",
  ERROR = "error",
}

const CLOSE_EVENT_NAME = "close";
const LEVEL_COLOR: { [key: string]: string } = {
  [NoticeLevel.INFO]: "var(--color-accent)",
  [NoticeLevel.ERROR]: "var(--color-red)",
};

export default defineComponent({
  name: "NoticeCard",
  emits: [CLOSE_EVENT_NAME],
  components: {},

  props: {
    title: String,
    text: String,
    level: {
      type: String as PropType<NoticeLevel>,
      default: NoticeLevel.INFO,
    },
  },

  computed: {
    baseColor(): string {
      return LEVEL_COLOR[this.level];
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

$base-color: unquote(v-bind(baseColor));

.warning {
  display: flex;
  flex-direction: row;
  width: 100%;

  .flag,
  .content {
    border: 1px solid $base-color;
  }

  .flag {
    @extend .round-corners, .left-only, .fib-5;
    width: $fib-5 * 1px;
    background: $base-color;
    border: 1px solid $base-color;
  }

  .content {
    @extend .round-corners, .right-only, .fib-5;

    display: flex;
    flex-direction: row;

    width: 100%;
    padding: $fib-5 * 1px;
    color: $base-color;
    background: var(--color-background-primary);
    margin-top: auto;
    margin-bottom: auto;

    .space-between {
      flex: 1;
    }

    span {
      font-weight: 600;
      margin-right: $fib-5 * 1px;
    }

    p {
      margin-top: $fib-5 * 1px;
      margin-right: $fib-5 * 1px;
      font-size: $fib-6 * 1px;
    }

    button {
      cursor: pointer;
      background: none;
      color: $base-color;
      border: none;
      font-size: $fib-7 * 1px;
    }
  }
}
</style>
