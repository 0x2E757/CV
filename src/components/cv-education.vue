<template>
  <cv-block caption="Education">
    <cv-general-info
      v-for="educationInfo of educationInfoValues"
      :name="educationInfo.name"
      :place="educationInfo.place"
      :start="educationInfo.start"
      :end="educationInfo.end"
    >
      {{ educationInfo.degree }}
    </cv-general-info>
  </cv-block>
</template>

<script setup lang="ts">
interface EducationInfo {
  name: string;
  place: string;
  start: string;
  end: string;
  degree: string;
}

const educationInfoValues: EducationInfo[] = [
  {
    name: "Daugavpils Universitāte",
    place: "Daugavpils, Latvia",
    start: "2014",
    end: "2018",
    degree: "Computer Science Bachelor's degree",
  },
  {
    name: "J. Raiņa Daugavpils 6. vidusskola",
    place: "Daugavpils, Latvia",
    start: "2002",
    end: "2014",
    degree: "High school degree",
  },
];
</script>
