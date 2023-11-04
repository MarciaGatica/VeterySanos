const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);


// Ruta para la autenticación
mock.onPost('/api/autenticar').reply(config => {
  const { email, clave } = JSON.parse(config.data);

  // Busca un usuario con el email proporcionado
  const usuarioEncontrado = usuarios.find(user => user.email === email);

  if (usuarioEncontrado) {
    // Verifica si la contraseña coincide
    if (usuarioEncontrado.clave === clave) {
      return [200, { id_usuario: usuarioEncontrado.id_usuario }];
    } else {
      return [401, { message: 'Contraseña incorrecta' }];
    }
  } else {
    return [401, { message: 'Email no encontrado' }];
  }
});

// Mock de roles
mock.onGet('/api/roles').reply(200, [
  {
    id_rol: 1,
    des_rol: 'cliente',
  },
  {
    id_rol: 2,
    des_rol: 'trabajador',
  },
  {
    id_rol: 3,
    des_rol: 'administrador',
  },
]);

// Mock de estados
mock.onGet('/api/estados').reply(200, [
  {
    id_estado: 1,
    des_estado: 'en proceso',
  },
  {
    id_estado: 2,
    des_estado: 'enviado',
  },
  {
    id_estado: 3,
    des_estado: 'entregado',
  },
]);

// Mock de usuarios
mock.onGet('/api/usuarios').reply(200, [
  {
    id_usuario: 1,
    nombre_usuario: 'Usuario1',
    clave: '1234',
    email: 'usuario1@example.com',
    telefono: '123456789',
    foto_usuario: 'imagen1.jpg',
    id_rol: 1,
  },
  {
    id_usuario: 2,
    nombre_usuario: 'Usuario2',
    clave: '1234',
    email: 'usuario2@example.com',
    telefono: '987654321',
    foto_usuario: 'imagen2.jpg',
    id_rol: 2,
  },
  {
    id_usuario: 3,
    nombre_usuario: 'Usuario3',
    clave: '1234',
    email: 'usuario3@example.com',
    telefono: '555555555',
    foto_usuario: 'imagen3.jpg',
    id_rol: 3,
  },
  // Agrega más usuarios según sea necesario
]);

// Mock de horas veterinarias
mock.onGet('/api/horas_veterinarias').reply(200, [
  {
    id_hora: 1,
    fecha: '2023-11-02',
    hora: '10:00 AM',
    id_usuario: 1, // ID del usuario que la creó
  },
  {
    id_hora: 2,
    fecha: '2023-11-03',
    hora: '2:00 PM',
    id_usuario: 2,
  },
  // Agrega más horas veterinarias según sea necesario
]);

// Mock de pedidos
mock.onGet('/api/pedidos').reply(200, [
  {
    id_pedido: 1,
    total: 50.0,
    fecha: '2023-11-02',
    id_estado: 1, // ID del estado del pedido (en proceso)
  },
  {
    id_pedido: 2,
    total: 75.0,
    fecha: '2023-11-03',
    id_estado: 2, // ID del estado del pedido (enviado)
  },
  // Agrega más pedidos según sea necesario
]);

// Mock de productos
mock.onGet('/api/productos').reply(200, [
  {
    id_producto: 1,
    nombre_producto: 'Producto1',
    precio: 10.0,
    stock: 100,
    foto_producto: 'producto1.jpg',
  },
  {
    id_producto: 2,
    nombre_producto: 'Producto2',
    precio: 15.0,
    stock: 50,
    foto_producto: 'producto2.jpg',
  },
  // Agrega más productos según sea necesario
]);
