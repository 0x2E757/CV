<template>
  <cv-block caption="Public Projects">
    <cv-general-info
      v-for="projectInfo of projectInfoValues"
      :name="projectInfo.name"
      :place="projectInfo.place"
      :position="projectInfo.position"
      :start="projectInfo.start"
      :end="projectInfo.end"
    >
      <a v-if="projectInfo.link" :href="projectInfo.link">
        {{ projectInfo.link }}
      </a>
      <p v-for="detail of projectInfo.details">
        {{ detail }}
      </p>
      <div>
        <inline-list>
          <li v-for="project of projectInfo.technologies">
            {{ project }}
          </li>
        </inline-list>
      </div>
    </cv-general-info>
  </cv-block>
</template>

<script setup lang="ts">
interface ProjectInfo {
  name: string;
  place?: string;
  position?: string;
  start: string;
  end: string;
  link?: string;
  details?: string[];
  technologies?: string[];
}

const projectInfoValues: ProjectInfo[] = [
  {
    name: "ShiftWizard",
    place: "Binitex",
    position: "Full-Stack Developer",
    start: "2023",
    end: "PRESENT",
    link: "https://www.shiftwizard.com/",
    details: [
      `Implemented TSCodegen and TSCodegen.WebAPI libraries (as NuGet packages) for automatic C# to TypeScript types conversion.
      Replaced all the manually written API types in UI with the auto-generated and reduced to 0 amount of cases when wrong data passed to or received from the endpoint.
      Patched some Syncfusion bugs.`,
      `Handled the Vue 3 project setup and managed the migration from Vue 2 to Vue 3, as well as migration from Syncfusion to DevExtreme. 
      Implemented most of core components and wrappers for DevExtreme.
      Covered whole project with proper TypeScript types.
      Assisted team members with Vue 3 and general JavaScript/TypeScript stuff.
      Argued against bad UX solutions.
      Made documentation regarding the UI development.`,
    ],
    technologies: [
      // anti-prettier
      ".NET",
      "Vue",
      "Vuex",
      "VeeValidate",
      "Lodash",
      "Syncfusion",
      "DevExtreme",
    ],
  },
  {
    name: "Anjum Hotel Makkah TAP",
    place: "Geidans Solutions",
    position: "Frontend Developer",
    start: "2016",
    end: "2020",
    link: "https://tap.anjumhotels.com",
    details: [
      `Handled most of UI tasks, developed core components, actively worked on UI and UX improvements.
      Made the UI fully responsive across all screen sizes.
      Patched some bugs in third-party libraries.
      Improved UI build toolchain.
      Made basic documentation regarding the UI development.`,
    ],
    technologies: [
      // anti-prettier
      ".NET",
      "Webpack",
      "React",
      "Redux",
      "Redux Form",
      "Boostrap",
    ],
  },
];
</script>
