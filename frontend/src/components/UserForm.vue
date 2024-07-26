<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="new-username">Username:</label>
        <input v-model="username" type="text" id="new-username" required />
      </div>
      <div>
        <label for="new-password">Password:</label>
        <input v-model="password" type="password" id="new-password" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <button type="submit">Sign Up</button>
      <button type="button" @click="$emit('close')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        email: this.email
      };
      this.$emit('submit', userData);
    }
  }
};
</script>

<style scoped>
</style>
