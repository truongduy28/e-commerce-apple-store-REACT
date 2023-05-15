export const logOutUser = () => {
  localStorage.setItem("user-e-commerce", JSON.stringify());
};

export const formatPrice = (price) => {
  return String(price).replace(/(.)(?=(\d{3})+$)/g, "$1,");
};

export const formatHHMMDDMMYYY = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

export const handleLogout = (navigate) => {
  logOutUser();
  navigate("/login");
};
