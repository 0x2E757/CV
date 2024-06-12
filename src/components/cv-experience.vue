<template>
  <cv-block caption="Experience">
    <cv-general-info
      v-for="experienceInfo of experienceInfoValues"
      :name="experienceInfo.name"
      :place="experienceInfo.place"
      :position="experienceInfo.position"
      :start="experienceInfo.start"
      :end="experienceInfo.end"
    >
      <inline-list>
        <li v-for="project of experienceInfo.projects">
          {{ project }}
        </li>
      </inline-list>
    </cv-general-info>
  </cv-block>
</template>

<script setup lang="ts">
interface ExperienceInfo {
  name: string;
  place?: string;
  position?: string;
  start: string;
  end: string;
  projects?: string[];
}

const experienceInfoValues: ExperienceInfo[] = [
  {
    name: "Binitex",
    place: "remote",
    position: "Full-Stack Developer",
    start: "2023",
    end: "PRESENT",
    projects: [
      // anti-prettier
      "ShiftWizard",
    ],
  },
  {
    name: "VPasaule",
    place: "remote",
    position: "Web Developer, Software Developer",
    start: "2020",
    end: "2023",
    projects: [
      // anti-prettier
      "Implementing MVPs",
      "2 non-public projects",
      ".NET, Electon and Android applications",
    ],
  },
  {
    name: "Geidans Solutions",
    place: "Daugavpils, Latvia",
    position: "Frontend Developer",
    start: "2016",
    end: "2020",
    projects: [
      // anti-prettier
      "Anjum Hotel Makkah TAP",
      "1 non-public project",
      "2 internal projects",
    ],
  },
  {
    name: "Freelance",
    position: "Web Developer, Software Developer",
    start: "2011",
    end: "2016",
    projects: [
      // anti-prettier
      "Various web works",
      "Windows applications",
    ],
  },
];
</script>
