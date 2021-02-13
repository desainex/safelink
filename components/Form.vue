<template>
  <form class="cf" @submit.prevent="handleSubmit">
    <div class="half left cf">
      <input type="text" id="input-url" placeholder="Paste your link" v-model="link">
      <input type="text" id="input-name" placeholder="First Name" v-model="user.firstname">
      <input type="text" id="input-surname" placeholder="Last Name" v-model="user.lastname">
      <input type="text" id="input-phone" placeholder="Phone #" v-model="user.phone">
    </div>
    <div class="half right cf">
      <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
    </div>
    <input type="submit" value="Submit" id="input-submit">
  </form>
</template>

<script>
export default {
data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        phone: ""
      }
    };
  },
    methods: {
    handleSubmit() {
        console.log(this.$data.user)
    }
  }
}

</script>

<style>

</style>
