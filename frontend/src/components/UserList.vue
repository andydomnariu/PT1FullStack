<template>
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Real Name</th>
            <th>Alias</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.realName }}</td>
            <td>{{ user.alias }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="$emit('edit', user)">Edit</button>
              <button @click="$emit('delete', user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: Array,
    },
  };
  </script>
  
  <style scoped>
  </style>
  