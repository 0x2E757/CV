<template>
  <div class="general-info no-print-break">
    <div class="caption">
      <span class="name ff-open-sans">
        {{ name }}
      </span>
      <span v-if="place" class="place">
        {{ place }}
      </span>
      <span v-if="position" class="position ff-roboto-condensed">
        {{ position }}
      </span>
    </div>
    <div class="dates">
      <span class="start">
        {{ start }}
      </span>
      <span class="end">
        {{ end }}
      </span>
    </div>
    <div class="content ff-open-sans">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  place: string;
  position: string;
  start: string;
  end: string;
}>();
</script>

<style lang="scss" scoped>
.general-info {
  .caption {
    font-size: 1.25rem;

    .name {
      font-weight: 600;
      color: #303336;
    }

    .place {
      &::before {
        content: ", ";
      }
    }

    .position {
      &::before {
        content: " — ";
      }
    }
  }

  .dates {
    margin-top: 0.15rem;
    font-size: 0.75rem;

    .start + .end {
      &::before {
        content: " - ";
      }
    }
  }

  .content {
    margin-top: 0.35rem;

    :deep(p) {
      margin: 0.25rem 0;
      text-align: justify;
      text-indent: 1em;
    }
  }
}
</style>
