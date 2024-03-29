const empleados = [
  {
    id: 1,
    nombre: "Sebastian",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 5000,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id);
  if (salario) {
    callback(null, salario);
  } else {
    callback(`No existe salario para el id ${id}`);
  }
};

const id = 1;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("Error!");
    return console.log(err);
  }

  console.log("Empleado existe!");
  console.log(empleado.nombre);
});

getSalario(id, (err, salario) => {
  if (err) {
    console.log("Error!");
    return console.log(err);
  }

  console.log("Salario existe!");
  console.log(salario.salario);
});
