<template>
    <div>
      <h1>Home Page - User Management</h1>
      <UserForm v-if="selectedUser" :userToEdit="selectedUser" @submit="handleSubmit" />
      <UserForm v-else @submit="handleSubmit" />
      <UserList :users="users" @edit="selectUser" @delete="deleteUser" />
    </div>
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  import UserList from '@/components/UserList.vue';
  import api from '@/services/api';
  import socketService from '@/services/socket';
  
  export default {
    components: { UserForm, UserList },
    data() {
      return {
        users: [],
        selectedUser: null,
      };
    },
    methods: {
      fetchUsers() {
        api.getUsers().then(response => {
          this.users = response.data;
        });
      },
      handleSubmit(user) {
        if (user.id) {
          api.updateUser(user).then(() => this.fetchUsers());
        } else {
          api.createUser(user).then(() => this.fetchUsers());
        }
        this.selectedUser = null;
      },
      selectUser(user) {
        this.selectedUser = { ...user };
      },
      deleteUser(id) {
        api.deleteUser(id).then(() => this.fetchUsers());
      },
    },
    mounted() {
      this.fetchUsers();
      socketService.connect();
      socketService.on('userCreated', this.fetchUsers);
      socketService.on('userUpdated', this.fetchUsers);
      socketService.on('userDeleted', this.fetchUsers);
    },
    beforeUnmount() {
      socketService.disconnect();
    }
  };
  </script>
  
  <style scoped>
  </style>
  