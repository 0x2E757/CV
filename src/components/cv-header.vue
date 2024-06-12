<template>
  <h1 class="caption">
    <span v-if="name" class="primary ff-open-sans">
      {{ name }}
    </span>
    <span v-if="position" class="secondary ff-roboto-condensed">
      {{ position }}
    </span>
  </h1>
  <div class="header">
    <div v-if="email || phones?.length">
      <cv-header-info label="Email" icon="envelope">
        <a :href="`mailto:${email}`">
          {{ email }}
        </a>
      </cv-header-info>
      <cv-header-info
        v-for="(phone, index) of phones"
        :label="getLabel('Phone', index, phones.length)"
        icon="phone"
      >
        {{ phone }}
      </cv-header-info>
    </div>
    <div v-if="github || locations?.length">
      <cv-header-info label="GitHub" icon="github">
        <a :href="github">
          {{ github }}
        </a>
      </cv-header-info>
      <cv-header-info
        v-for="(location, index) of locations"
        :label="getLabel('Location', index, locations.length)"
        icon="location-dot"
      >
        {{ location }}
      </cv-header-info>
    </div>
    <div v-if="languages?.length">
      <cv-header-info label="Languages" icon="comment">
        <inline-list>
          <li v-for="language of languages">
            {{ language }}
          </li>
        </inline-list>
      </cv-header-info>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = "Eric Kevrel";
const position = "Full-Stack Developer, Software Developer";
const email = "eric.kevrel@gmail.com";
const phones = ["(+371) 20 58 4363", "(+7) 996 634 80 39"];
const github = "https://github.com/0x2E757/";
const locations = ["Daugavpils, Latvia", "Tver, Russia"];
const languages = ["Russian (native)", "English (B2)", "Latvian (B2)"];

function getLabel(text: string, index: number, total: number) {
  return total > 1 ? `${text} ${index + 1}` : text;
}
</script>

<style lang="scss" scoped>
.caption {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 100%;

  .primary {
    font-weight: 500;
  }

  .secondary {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 0.8em;
    color: #777;
  }
}

.header {
  > div + div {
    margin-top: 0.5rem;
  }
}
</style>
