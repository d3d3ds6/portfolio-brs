<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-900 to-blue-900 text-yellow-200 flex flex-col items-center justify-center">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-12">My Experience Timeline</h1>

    <div class="relative w-full max-w-4xl">
      <!-- Vertical line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-800"></div>

      <!-- Timeline items -->
      <div v-for="(experience, index) in experiences" :key="index"      ref="timelineItemRefs" 
      class="flex w-full mb-12"     :data-index="index">

        <!-- Conditionally render text and timeline marker sections -->
        <!-- For even indexes -->
        <template v-if="index % 2 === 0">
          <!-- Text Section -->
          <div class="flex items-center relative w-1/2 px-4 justify-start">
            <div>
              <h2 class="text-2xl font-bold mb-1 text-yellow-100">{{ experience.title }}</h2>
              <h3 class="text-xl text-gray-400 mb-2">{{ experience.subtitle }}</h3>
              <h4 class="text-lg font-semibold text-yellow-500 mb-3">{{ experience.workType }}</h4>
              <ul class="list-disc list-inside text-base space-y-1 text-gray-200">
                <li v-for="(desc, i) in experience.workDescription" :key="i">{{ desc }}</li>
              </ul>
            </div>
          </div>
          <!-- Date Section -->
          <div class="relative flex items-center justify-center w-1/2">
            <div
              class="absolute w-6 h-6 rounded-full bg-yellow-600 border-4 border-yellow-500 left-[0.001%] transform -translate-x-1/2 z-10 top-11"
            ></div>
            <span class="absolute text-sm text-gray-300 transform -translate-x-1/2 top-[3rem] right-[15%]">
              {{ experience.dateText }}
            </span>
          </div>
        </template>

        <!-- For odd indexes -->
        <template v-else>
          <!-- Date Section -->
          <div class="relative flex items-center justify-center w-1/2">
            <div
              class="absolute w-6 h-6 rounded-full bg-yellow-600 border-4 border-yellow-500 left-[100%] transform -translate-x-1/2 z-10 top-11"
            ></div>
            <span class="absolute text-sm text-gray-300 transform -translate-x-1/2 right-[15%] top-[3rem]">
              {{ experience.dateText }}
            </span>
          </div>
          <!-- Text Section -->
          <div class="flex items-center w-1/2 px-14 justify-end ">
            <div>
              <h2 class="text-2xl font-bold mb-1 text-yellow-100">{{ experience.title }}</h2>
              <h3 class="text-xl text-gray-400 mb-2">{{ experience.subtitle }}</h3>
              <h4 class="text-lg font-semibold text-yellow-500 mb-3">{{ experience.workType }}</h4>
              <ul class="list-disc list-inside text-base space-y-1 text-gray-200">
                <li v-for="(desc, i) in experience.workDescription" :key="i">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from "vue";

const timelineItemRefs = ref<HTMLElement[]>([]);

const experiences = [
  {
    title: "Software Engineer",
    subtitle: "DGTAL",
    workType: "Internship",
    workDescription: [
      "Developed a centralized platform to enhance business listing management in Tunisia, addressing the needs of users and business owners.",
      "Implemented secure user authentication, business submission and management, admin dashboard, and search functionality.",
      "Worked remotely as part of a Scrum team, achieving project milestones across multiple sprints.",
      "Technologies used: Firebase, Google Cloud, Docker, Git, Nuxt.js 3, Bootstrap, TypeScript, Spring Boot.",
    ],
    dateText: "May 2024 – September 2024",
  },
  {
    title: "Software Engineer",
    subtitle: "MappCraft",
    workType: "Part-time Contract",
    workDescription: [
      "Currently working on the development of a new version of Houni.tn, an innovative real estate platform.",
      "Improving features to streamline property searches and management.",
      "Technologies used: Firebase, Google Cloud, Docker, Git, Nuxt.js 3, TypeScript, Spring Boot, Angular 18, Node.js 18.",
    ],
    dateText: "October 2024 – March 2025",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% visible
  );

  timelineItemRefs.value.forEach((item) => {
    observer.observe(item);
  });
});
</script>

<style scoped>
/* Ensure alignment */
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.left-1\/2 {
  left: 50%;
}
.transform {
  transform: translateX(-50%);
}
.z-10 {
  z-index: 10;
}
.top-0 {
  top: 0; /* Align to top edge of the parent */
}

</style>
