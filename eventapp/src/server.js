const express = require('express');
const cors = require('cors');

const app = express();

// Permite solicitudes CORS desde todos los dominios
app.use(cors());
// Middleware para procesar cuerpos de solicitudes como JSON
app.use(express.json());

// Array para almacenar los eventos
const events = [
  {
    id: 1,
    title: 'Conferencia de Tecnología',
    description: 'Únete a nosotros para aprender sobre las últimas tecnologías.',
    date: '2024-04-10',
    location: 'Centro de Convenciones',
    capacity: 100,
    registered: 75
  },
  {
    id: 2,
    title: 'Taller de Desarrollo Web',
    description: 'Un taller práctico para mejorar tus habilidades de desarrollo web.',
    date: '2024-04-15',
    location: 'Espacio de Coworking',
    capacity: 50,
    registered: 30
  },
  {
    id: 3,
    title: 'Hackathon de Innovación',
    description: 'Un desafío de programación para desarrollar soluciones innovadoras.',
    date: '2024-04-20',
    location: 'Universidad Local',
    capacity: 80,
    registered: 60
  },
  {
    id: 4,
    title: 'Seminario de Inteligencia Artificial',
    description: 'Descubre las últimas tendencias en inteligencia artificial y machine learning.',
    date: '2024-05-05',
    location: 'Centro de Innovación Tecnológica',
    capacity: 120,
    registered: 90
  },
  {
    id: 5,
    title: 'Curso de Diseño Web UX/UI',
    description: 'Aprende los principios fundamentales del diseño de experiencia de usuario e interfaz de usuario.',
    date: '2024-05-15',
    location: 'Escuela de Diseño Digital',
    capacity: 60,
    registered: 40
  },
  {
    id: 6,
    title: 'Charla sobre Ciberseguridad',
    description: 'Conoce las mejores prácticas para proteger tu información en línea.',
    date: '2024-05-25',
    location: 'Centro de Ciberseguridad',
    capacity: 50,
    registered: 20
  }
];

// Ruta para obtener los datos de eventos
app.get('/events', (req, res) => {
  res.json(events);
});

// Ruta para registrar un usuario en un evento
app.post('/register', (req, res) => {
  const { eventId } = req.body;
  const event = events.find(event => event.id === eventId);
  if (!event) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }
  // Incrementa el contador de registrados en el evento
  event.registered++;
  res.json({ message: 'Usuario registrado en el evento exitosamente' });
});

// Ruta para obtener los eventos próximos
app.get('/upcoming-events', (req, res) => {
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  res.json(upcomingEvents);
});

// Inicia el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en el puerto ${PORT}`));

