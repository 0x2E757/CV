<template>
  <div class="skills-info ff-roboto-condensed">
    <span class="label">
      {{ label }}
    </span>
    <ul>
      <li v-for="value of values">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  values: string[];
}>();
</script>

<style lang="scss" scoped>
.skills-info {
  white-space: nowrap;

  .label {
    font-weight: 500;
    margin-right: 0.5rem;
    text-transform: uppercase;

    &::after {
      content: ":";
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: inline-flex;

    li {
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
}
</style>
