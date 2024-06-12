<template>
  <span class="header-info">
    <span class="label">
      <fa-icon v-if="icon" :icon="icon" class="icon" />
      <span>
        {{ label }}
      </span>
    </span>
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
.header-info {
  white-space: nowrap;

  .label {
    font-weight: 500;
    margin-right: 0.35rem;

    &::after {
      content: ":";
    }

    .icon {
      margin-right: 0.35rem;
      color: #084298;
    }
  }

  + .header-info {
    margin-left: 1rem;
  }
}
</style>
