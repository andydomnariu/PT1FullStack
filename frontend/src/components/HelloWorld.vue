<template>
  <div>
    <h2>Real-Time Weather Data</h2>
    <div v-if="weather">
      <p>Temperature: {{ weather.main.temp }} K</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import socketService from '@/services/socket';

export default {
  data() {
    return {
      weather: null,
    };
  },
  mounted() {
    socketService.on('weatherUpdate', (data) => {
      this.weather = data;
    });
  },
  beforeUnmount() {
    socketService.disconnect();
  }
};
</script>

<style scoped>
</style>