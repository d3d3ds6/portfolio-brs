<template>
  <div class="h-full">
    <header
      class="hero relative min-h-[30%] bg-cover bg-top md:min-h-[35%] lg:bg-center"
    >
      <div class="pt-0 md:pt-2"></div>
      <TopNav />

      <!-- Profile Image Positioned Top Right -->
      <div class="profile-container">
        <div class="relative inline-block">
          <div class="border-animation">
            <img
              src="/images/about/profile.png"
              alt="Profile"
              class="profile-pic"
            />
          </div>
        </div>
      </div>

      <div
        v-if="message"
        class="mx-auto pt-24 text-center flex flex-col items-center"
      >
        <h2
          class="text-7xl font-bold tracking-wide text-yellow-100 md:text-8xl lg:max-w-[60%] lg:pt-8 lg:text-9xl"
        >
          {{ message }}
        </h2>
      </div>
      <div
        v-else
        class="pt-24 text-center flex flex-col items-center"
      >
        <h2
          class="text-9xl font-bold tracking-wide text-yellow-100 md:text-[12em] lg:pt-8"
        >
          Hello.
        </h2>
      </div>
    </header>

    <main><slot /></main>

    <MFooter />
  </div>
</template>
<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(9, 0, 37, 1) 80%),
    url("/images/hero.webp");
  position: relative; /* Ensure the header is a positioned container */
}

.profile-container {
  position: absolute; /* Place it in the top-right corner */
  left: 90rem;
  bottom: 5rem;
  z-index: 10; /* Ensure it appears on top of other elements */
}

.profile-pic {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
}

.border-animation {
  width: 10.5rem;
  height: 10.5rem;
  border: 5px solid #FEF9C3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
