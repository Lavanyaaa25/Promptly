require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const client = require('prom-client');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// ################################ MONGO DB CONNECTION ################################

mongoose.connect('mongodb://127.0.0.1:27017/Promptly').then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection error:', err));

const userRoute = require('./Routes/User');
const publishRoute = require('./Routes/Publish');
const profileRoute = require('./Routes/Profile');
const feedRoute = require('./Routes/Feed');
const deleteRoute = require('./Routes/DeletePrompt');
const saveRoute = require('./Routes/SavePrompt');
const editRoute = require('./Routes/Edit');
const genRoute = require('./Routes/Generate');

const register = new client.Registry();

//default metrics
client.collectDefaultMetrics({ register });

// Create a Counter to track total number of HTTP requests
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
  });
 
  //register the counter
register.registerMetric(httpRequestCounter);

// Create a Histogram to track request duration
const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 2, 5] // duration buckets
  });
  
  // Register the Histogram
  register.registerMetric(httpRequestDuration);
  
  // Middleware to count requests and track their duration
  app.use((req, res, next) => {
    const end = httpRequestDuration.startTimer();
    res.on('finish', () => {
      httpRequestCounter.inc({ method: req.method, route: req.path, status_code: res.statusCode });
      end({ method: req.method, route: req.path, status_code: res.statusCode });
    });
    next();
  });
  
  // Metrics endpoint to expose the collected metrics
  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });
  

app.use('/user',userRoute);
app.use('/publish',publishRoute);
app.use('/users',profileRoute);
app.use('/feed',feedRoute);
app.use('/delete',deleteRoute);
app.use('/save',saveRoute);
app.use('/edit',editRoute);
app.use('/generate',genRoute);

app.listen(3030, () => console.log("Server running on port 3030"));