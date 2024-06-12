<template>
  <table class="block no-print-break">
    <thead>
      <tr>
        <th class="header">
          <span class="caption ff-open-sans">
            {{ caption }}
          </span>
          <hr />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="content">
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  caption: string;
}>();
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  margin-top: 1rem;
  text-align: left;

  .header {
    position: relative;
    padding-bottom: 0.75rem;

    .caption {
      position: relative;
      padding: 0 0.25rem;
      margin: 0 1rem;
      line-height: 1em;
      font-weight: 600;
      text-transform: uppercase;
      background: #fff;
      color: rgb(8, 66, 152);
      z-index: 2;
    }

    hr {
      position: absolute;
      top: 0.5em;
      width: 100%;
      margin: 0;
      margin-top: 1px;
      border: none;
      border-top: 1px solid #084298;
      opacity: 0.25;
      z-index: 1;
    }
  }

  .content {
    > * + * {
      margin-top: 0.75rem;
    }
  }
}
</style>
