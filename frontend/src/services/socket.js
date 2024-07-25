import io from 'socket.io-client';

class SocketService {
  socket;

  connect() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
  }

  on(event, callback) {
    if (!this.socket) return;
    this.socket.on(event, callback);
  }

  emit(event, data) {
    if (!this.socket) return;
    this.socket.emit(event, data);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketService();
