const { API } = require("../../backend");

const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export default getProducts;
