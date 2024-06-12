<template>
  <cv-block caption="Skills">
    <cv-skills-info label="Languages" :values="languagesValues" />
    <cv-skills-info label="Technologies" :values="technologiesValues" />
    <cv-skills-info label="Libraries" :values="librariesValues" />
    <cv-skills-info label="Dev Tools" :values="toolsValues" />
    <cv-skills-info label="Testing" :values="testingValues" />
    <cv-skills-info label="Principles" :values="principlesValues" />
    <cv-skills-info label="Workflows" :values="workflowsValues" />
    <cv-skills-info label="OS" :values="osValues" />
  </cv-block>
</template>

<script setup lang="ts">
const languagesValues = [
  // anti-prettier
  "C++",
  "C#",
  "Pascal",
  "TypeScript",
  "JavaScript",
  "Lua",
  "Python",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
  "LESS",
  "SCSS",
];

const technologiesValues = [
  // anti-prettier
  ".NET",
  "ASP.NET",
  "Node.js",
  "Deno",
  "Express",
  "React",
  "React Hooks",
  "Vue 2",
  "Vue 3",
  "Redux",
  "Vuex",
  "Pinia",
];

const librariesValues = [
  // anti-prettier
  "Boostrap",
  "Lodash",
  "Redux Form",
  "VeeValidate",
  "Syncfusion",
  "DevExtreme",
];

const toolsValues = [
  // anti-prettier
  "Git",
  "Npm",
  "Deno",
  "Vite",
  "Webpack",
  "Electron",
  "Unity",
  "Cordova",
  "CMake",
];

const testingValues = [
  // anti-prettier
  "Postman",
  "NUnit",
  "Jest",
  "Deno",
  "SonarQube",
  "New Relic",
];

const principlesValues = [
  // anti-prettier
  "SOLID",
  "DRY",
  "KISS",
];

const workflowsValues = [
  // anti-prettier
  "Agile",
  "Scrum",
];

const osValues = [
  // anti-prettier
  "Windows",
  "Linux",
];
</script>
