<template>
  <i :class="[iconStyleClass, `fa-${icon}`]" aria-hidden="true" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon?: string;
  regular?: boolean;
  solid?: boolean;
}>();

const iconStyleClass = computed(() => {
  switch (props.icon) {
    case "github":
      return "fa-brands";
  }

  switch (true) {
    case props.regular:
      return "far";
    case props.solid:
      return "fas";
  }

  return "fas";
});
</script>
