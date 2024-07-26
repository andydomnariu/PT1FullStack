<template>
    <div class="about-page">
      <h1>About Page</h1>
      <button @click="requestData">Fetch Data</button>
      <table v-if="data.length" class="data-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.field1 }}</td>
            <td>{{ item.field2 }}</td>
            <td>{{ item.field3 }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>No data available</p>
    </div>
  </template>
  
  <script>
  import io from 'socket.io-client';
  
  export default {
    data() {
      return {
        data: [],
        socket: null,
      };
    },
    mounted() {
      this.socket = io('http://localhost:3000'); // URL del servidor backend
      this.socket.on('dataUpdate', (data) => {
        this.data = data;
      });
    },
    beforeUnmount() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
    methods: {
      requestData() {
        this.socket.emit('requestData');
      },
    },
  };
  </script>
  
  <style scoped>
  .about-page {
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  
  button {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #FFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .data-table th, .data-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .data-table th {
    background-color: #f2f2f2;
    text-align: left;
  }
  </style>
  