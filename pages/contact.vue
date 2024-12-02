<template>
  <NuxtLayout name="home" message="Don't hesitate to reach out!">
    <div class="grid grid-cols-1 items-center justify-center py-16 lg:grid-cols-2 gap-8">
      <form
        ref="contactForm"
        class="mx-auto flex w-full max-w-md flex-col items-center rounded-3xl bg-black/30 px-8 py-10 shadow-lg"
        @submit.prevent="submitForm"
      >
        <h2 class="text-3xl font-bold text-yellow-300 mb-6">Contact Us</h2>
        <label class="flex w-full flex-col py-2">
          <span class="text-yellow-200">Name *</span>
          <input
            v-model="form.name"
            name="name"
            class="rounded-md px-3 py-2 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300"
            placeholder="Your name"
            type="text"
          />
          <span v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</span>
        </label>
        <label class="flex w-full flex-col py-2">
          <span class="text-yellow-200">Email Address *</span>
          <input
            v-model="form.email"
            name="email"
            class="rounded-md px-3 py-2 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300"
            placeholder="Your email address"
            type="email"
          />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </label>
        <label class="flex w-full flex-col py-2">
          <span class="text-yellow-200">Message *</span>
          <textarea
            v-model="form.message"
            name="message"
            class="rounded-md px-3 py-2 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300"
            rows="4"
            minlength="3"
            maxlength="500"
            placeholder="Your message"
          ></textarea>
          <span v-if="messageError" class="text-red-500 text-sm">{{ messageError }}</span>
        </label>
        <button
          type="submit"
          class="mt-6 w-full rounded-full bg-yellow-500 px-6 py-2 text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg"
        >
          Send Message
        </button>
        <p v-if="result" :class="statusClass" class="mt-4">{{ result }}</p>
      </form>
      <div class="hidden lg:block">
        <img
          class="w-full max-w-md"
          src="/images/mail-sending-illustration.svg"
          alt="Sending email illustration"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { ref, watch, computed } from "vue";

definePageMeta({
  layout: false,
});

const form = ref({
  access_key: "c5513e89-f5bd-4e1e-99ab-5160f73c4ff9",
  subject: "New Submission",
  name: "",
  email: "",
  message: "",
});

const nameError = ref("");
const emailError = ref("");
const messageError = ref("");

const result = ref("");
const status = ref("");

const statusClass = computed(() => {
  return status.value === "success"
    ? "text-green-500"
    : status.value === "error"
    ? "text-red-500"
    : "";
});

const validateName = () => {
  nameError.value = form.value.name.trim() ? "" : "Name is required.";
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = form.value.email.trim()
    ? emailPattern.test(form.value.email)
      ? ""
      : "Invalid email address."
    : "Email is required.";
};

const validateMessage = () => {
  messageError.value = form.value.message.trim()
    ? ""
    : "Message is required.";
};

watch(() => form.value.name, validateName);
watch(() => form.value.email, validateEmail);
watch(() => form.value.message, validateMessage);

const submitForm = async () => {
  // Validate all fields
  validateName();
  validateEmail();
  validateMessage();

  // Proceed only if no validation errors
  if (!nameError.value && !emailError.value && !messageError.value) {
    try {
      status.value = "loading";

      // Send the form data
      const response = await $fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form.value,
      });

      result.value = response.message;

      if (response.status === 200) {
        status.value = "success";

        // Clear errors and reset form
        nameError.value = "";
        emailError.value = "";
        messageError.value = "";
        form.value.name = "";
        form.value.email = "";
        form.value.message = "";
      } else {
        status.value = "error";
        console.log(response); // Debugging
      }
    } catch (error) {
      console.log(error); // Debugging
      status.value = "error";
      result.value = "Something went wrong!";
    } finally {
      // Clear feedback message after 5 seconds
      setTimeout(() => {
        result.value = "";
        status.value = "";
      }, 5000);
    }
  }
};
</script>

