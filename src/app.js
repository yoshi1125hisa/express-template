'use strict';

// Import modules
import Express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

// Create application
const app = Express();

app.use(cors());
app.use(helmet());
app.use(Express.static(path.join(__dirname, 'public')));

// Routes settings
import router from './routes';
app.use('/', router);

app.get('/', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
