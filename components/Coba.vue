<template>
<main class="px-3">

<form @submit.prevent="handleSubmit">

  <div class="input-group mb-3">
  <input v-model="link" id="input-url" type="url" class="form-control form-control-lg"  placeholder="Paste your link" aria-label="" aria-describedby="">
  <input type="submit" id="input-submit" class="btn btn-primary btn-lg " value="Safe Link Now!"  >
</div>



</form>

</main>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      link: null,
    };
  },
  methods: {
    handleSubmit() {
      if(this.$data.link == null){
        console.log('Gila lu kosong pula!')
      }else{
        console.log(this.$data.link);
      }

    },
  }
};
</script>

<style>
</style>
