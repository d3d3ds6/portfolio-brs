<template>
  <div>
    <!-- Projects Section -->
    <section class="px-6 py-12 md:px-16 lg:px-36 xl:px-48">
      <h2
        class="text-5xl md:text-6xl bg-gradient-to-r from-yellow-100 to-blue-900 bg-clip-text font-extrabold tracking-wide text-transparent text-center"
      >
        PROJECTS SECTION
      </h2>

      <!-- Project Cards Grid - 2 cards per row -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Movie App Project Card -->
        <div class="group relative w-full rounded-xl bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h3 class="text-3xl font-bold text-yellow-300">
            Movie App
          </h3>
          <p class="mt-4 text-gray-300">
            A React application that allows users to search for and view detailed information about movies. Browse popular, upcoming, now playing, and top-rated movies with an intuitive interface.
          </p>
          <ul class="mt-4 text-gray-300">
            <li><strong>Tech Stack:</strong> React, TypeScript, Vite, React Query (Tanstack), TailwindCSS, DaisyUI</li>
            <li><strong>Features:</strong>
              <ul class="list-disc pl-6">
                <li>Search for movies by title</li>
                <li>View movie details including title, release date, overview, genres, runtime, and rating</li>
                <li>Browse popular, upcoming, now playing, and top-rated movies</li>
                <li>View similar movies with horizontal scrolling for better user experience</li>
                <li>Fully responsive design for mobile and desktop</li>
              </ul>
            </li>
          </ul>
          <div class="mt-6 flex justify-center space-x-4">
            <a 
              target="_blank" 
              href="https://main-peach-three.vercel.app/" 
              class="relative inline-block text-center">
              <span class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-blue-600 rounded-full blur-lg opacity-50"></span>
              <span class="relative inline-flex h-14 w-48 items-center justify-center rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors">
                Live Demo
              </span>
            </a>
          </div>
        </div>

        <!-- E-Commerce REST API Project Card -->
        <div class="group relative w-full rounded-xl bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h3 class="text-3xl font-bold text-yellow-300">
            REST API for an E-Commerce Application
          </h3>
          <p class="mt-4 text-gray-300">
            We have developed this REST API for an e-commerce application. This API
            performs all the fundamental CRUD operations of any e-commerce platform
            with user validation at every step.
          </p>
          <ul class="mt-4 text-gray-300">
            <li><strong>Tech Stack:</strong> Java, Spring Framework, Spring Boot, Spring Data JPA, Hibernate, MySQL</li>
            <li><strong>Features:</strong>
              <ul class="list-disc pl-6">
                <li>Customer and Seller authentication & validation</li>
                <li>Seller can add/update/delete products</li>
                <li>Customers can view products, add them to cart, and place orders</li>
              </ul>
            </li>
          </ul>
          <div class="mt-6 flex justify-center">
            <a 
              target="_blank" 
              href="https://github.com/d3d3ds6/master" 
              class="relative inline-block text-center">
              <span class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-blue-600 rounded-full blur-lg opacity-50"></span>
              <span class="relative inline-flex h-14 w-48 items-center justify-center rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors">
                View on GitHub
              </span>
            </a>
          </div>
        </div>
        
        <!-- You can add more project cards here -->
        <!-- They will automatically flow into the next row -->
        
      </div>
    </section>
  </div>
</template>

<style scoped>
/***** Add custom styles here *****/

/* Style for hoverable card */
.group:hover .transform {
  transform: translateY(-10px);
}

/***** Gradient animation on button hover *****/
.hover\:bg-gradient-to-r:hover {
  background-image: linear-gradient(to right, #f6e05e, #63b3ed);
}

.transition-shadow {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}
</style>