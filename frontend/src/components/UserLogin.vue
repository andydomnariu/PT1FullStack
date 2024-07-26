<template>
  <div>
    <h2>Login Required</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
    <button @click="showSignUp = true">New User, Sign Up</button>

    <UserForm v-if="showSignUp" @close="showSignUp = false" @submit="handleSignUp" />

    <button @click="toggleWeatherDisplay" style="position: absolute; top: 500px; left: 10px;">
      Show Data & Weather
    </button>

    <div v-if="showWeather">
      <WeatherDisplay />
    </div>
  </div>
</template>

<script>
import UserForm from './UserForm.vue';
import WeatherDisplay from '../views/WeatherDisplay.vue';
import apiClient from '../services/api'; 

export default {
  components: {
    UserForm,
    WeatherDisplay
  },
  data() {
    return {
      username: '',
      password: '',
      error: '',
      showSignUp: false,
      showWeather: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/login', {
          username: this.username,
          password: this.password
        });
        if (response.data.success) {
          this.error = '';
        } else {
          this.error = 'Invalid username or password';
        }
      } catch (err) {
        this.error = 'Error logging in. Please try again later.';
      }
    },
    async handleSignUp(userData) {
      try {
        const response = await apiClient.post('/signup', userData);
        if (response.data.success) {
          this.error = '';
          this.showSignUp = false;
        } else {
          this.error = 'Sign-up failed. Please try again.';
        }
      } catch (err) {
        this.error = 'Error signing up. Please try again later.';
      }
    },
    toggleWeatherDisplay() {
      this.showWeather = !this.showWeather;
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
