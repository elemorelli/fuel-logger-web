const host = "http://localhost:3000";

const api = {
  login: () => `${host}/users/login`,
  logout: () => `${host}/users/logout`,
  userCurrent: () => `${host}/users/me`,
  userAvatar: (userId) => `${host}/users/${userId}/avatar`,
  vehicles: () => `${host}/vehicles`,
  vehicle: (vehicleId) => `${host}/vehicles/${vehicleId}`,
  vehicleStats: (vehicleId) => `${host}/vehicles/${vehicleId}/stats`,
  vehiclePicture: (vehicleId) => `${host}/vehicles/${vehicleId}/picture`,
};

export default api;