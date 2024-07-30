// import config from './config/config.js'
// import app from './server/express.js'
// import mongoose from 'mongoose'
// mongoose.Promise = global.Promise
// mongoose.connect(config.mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

//   .then(() => {
//     console.log("Connected to the database!");
//   })

// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${config.mongoUri}`)
// })

// app.listen(config.port, (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.info('Server started on port %s.', config.port)
// })

// import config from './config/config.js';
// import app from './server/express.js';
// import mongoose from 'mongoose';
// import path from 'path';
// import express from 'express'; // Import the express module

// const __dirname = path.resolve();

// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("Connected to the database!");
// })
// .catch((error) => {
//   console.error("Error connecting to database:", error);
//   process.exit(1); // Exit process on database connection error
// });

// app.use(express.static(path.join(__dirname, 'client')));

// // Route handler for root URL
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'index.html'));
// });

// const PORT = config.port || 3000;
// app.listen(PORT, () => {
//   console.info(`Server started on port ${PORT}`);
// });

import config from './config/config.js';
import app from './server/express.js';
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import userRoutes from './server/routes/user.routes.js';
import flightRoutes from './server/routes/flight.routes.js';

const __dirname = path.resolve();

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch((error) => {
  console.error("Error connecting to database:", error);
  process.exit(1); // Exit process on database connection error
});

app.use('/api', userRoutes);
app.use(express.static(path.join(__dirname, 'client')));
app.use('/api', flightRoutes);

// Route handler for root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
