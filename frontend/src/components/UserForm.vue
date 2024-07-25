<template>
    <div>
      <h2>{{ isEditing ? 'Edit User' : 'Create User' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="isEditing">
          <label for="id">ID:</label>
          <input type="text" v-model="user.id" readonly />
        </div>
        <div>
          <label for="realName">Real Name:</label>
          <input type="text" v-model="user.realName" required />
        </div>
        <div>
          <label for="alias">User Alias:</label>
          <input type="text" v-model="user.alias" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="user.password" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="user.email" required />
        </div>
        <button type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userToEdit: Object,
    },
    data() {
      return {
        user: this.userToEdit || {
          id: null,
          realName: '',
          alias: '',
          password: '',
          email: '',
        },
        isEditing: !!this.userToEdit,
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('submit', this.user);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  