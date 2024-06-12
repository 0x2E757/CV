<template>
  <ul>
    <slot />
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  values: string[];
}>();
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  display: inline-flex;

  :deep(li) {
    display: inline-flex;
    align-items: center;

    & + li {
      &::before {
        content: "|";
        margin: -1px 0.35rem 0 0.35rem;
        font-size: 0.75em;
        opacity: 0.35;
      }
    }
  }
}
</style>
