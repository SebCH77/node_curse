// setTimeout(() => {
//   console.log("Hello Sebastian!");
// }, 3000);

const getUserById = (id, callback) => {
  const user = {
    id,
    nombre: "Sebastian",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUserById(10, ({ id, nombre }) => {
  console.log(nombre);
  console.log(id);
});
