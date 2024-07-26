<template>
  <div>
    <div v-if="weather">
      <h2>Weather in {{ weather.name }}</h2>
      <table class="weather-table">
        <tr>
          <th>Temperature</th>
          <td>{{ weather.main.temp }} °C</td>
        </tr>
        <tr>
          <th>Humidity</th>
          <td>{{ weather.main.humidity }} %</td>
        </tr>
        <tr>
          <th>Pressure</th>
          <td>{{ weather.main.pressure }} hPa</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{{ weather.weather[0].description }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      weather: null,
      socket: null,
    };
  },
  mounted() {
    this.setupSocket();
  },
  methods: {
    setupSocket() {
      this.socket = io('http://localhost:3000');
      this.socket.on('weatherUpdate', (data) => {
        this.weather = data;
      });
    }
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
.weather-table {
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
}

.weather-table th, .weather-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.weather-table th {
  text-align: left;
  background-color: #f4f4f4;
}
</style>
