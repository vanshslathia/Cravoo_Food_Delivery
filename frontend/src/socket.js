import { io } from 'socket.io-client'

let socketInstance = null

export const initializeSocket = (url) => {
  if (!socketInstance) {
    socketInstance = io(url, { withCredentials: true })
  }
  return socketInstance
}

export const getSocket = () => socketInstance

export const disconnectSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect()
    socketInstance = null
  }
}
