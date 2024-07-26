<template>
  <div class="weather-container">
    <h2 v-if="weather">Tiempo en {{ weather.name }}</h2>
    <div v-if="weather">
      <table class="weather-table">
        <tr>
          <th>Temperatura</th>
          <td>{{ weather.main.temp - 273.15 }} °C</td>
        </tr>
        <tr>
          <th>Humedad</th>
          <td>{{ weather.main.humidity }} %</td>
        </tr>
        <tr>
          <th>Presión</th>
          <td>{{ weather.main.pressure }} hPa</td>
        </tr>
        <tr>
          <th>Descripción</th>
          <td>{{ weather.weather[0].description }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>Cargando datos...</p>
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
    this.socket = io('http://localhost:3000');
    this.socket.on('weatherUpdate', (data) => {
      this.weather = data;
    });
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
.weather-container {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

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
