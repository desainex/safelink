<template>
<div>
  <p v-if="$nuxt.isOffline">
      Anda Sedang Tidak Terhubung Ke Jaringan Internet!
  </p>
  <p v-if="$nuxt.isOnline">
      <!-- Anda Sedang Terhubung Ke Jaringan Internet! -->
  </p>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
