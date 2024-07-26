import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect() {
    if (!this.socket) {
      this.socket = io('http://localhost:3000');
      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });
    }
  }

  signUp(user) {
    this.socket.emit('signUp', user);
  }

  searchUser(username, callback) {
    this.socket.emit('searchUser', username);
    this.socket.on('searchUserResults', callback);
    this.socket.on('searchUserError', (error) => {
      console.error('Search user error:', error);
    });
  }

  on(event, callback) {
    if (!this.socket) return;
    this.socket.on(event, callback);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();