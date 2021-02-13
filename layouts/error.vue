<template>
  <div class="container">
    <span>Sorry Beb..</span>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="btn btn-sm btn-secondary fw-bold border-white bg-white mt-2">Back to Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
