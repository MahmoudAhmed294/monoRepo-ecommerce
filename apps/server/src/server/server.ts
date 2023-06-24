import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import configs from '../configs/configs';
// import {
//   trpcMiddleware,
//   trpcDocsMiddleware,
//   trpcPlaygroundMiddleware,
// } from '../trpc/trpc.router';
// import {
//   errorHandler,
//   catchNotFound,
// } from '../../error/errorHandler.middlerware';
// import { metaDataMiddleware } from './middlewares/metadata.middleware';
// import { passportAuthenticate } from '../../auth/passport/passport.auth';
// import { prometheusMetricsMiddleware } from '../../monitoring/prometheus.monitor';
// import passport from 'passport';
// import '../../jobs/cron';

// =========================================================

async function launchWebServer() {
  const app = express();

  app.use('/version', (_: Request, res: Response) => {
    res.send('version: 3.1.10');
  });

  // CORS
  app.use(cors());

  // Body Parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Logger
  // app.use(logger(':method :url :status :res[content-length] - :response-time ms'))
  app.use(logger('dev'));

  // Upload Static File path
  app.use(express.static(path.join(__dirname, 'public')));

  // Meta Data Middleware ( Mandatory )
  // app.use(metaDataMiddleware);

  // Prometheus Metrics endpoint
  // app.get('/metrics', prometheusMetricsMiddleware);

  // Auth Passport Protect Middleware
  // app.use(passportAuthenticate(passport));

  // TRPC Router
  // app.use('/trpc', trpcMiddleware);

  // UI Development Kits
  // app.use('/playground', await trpcPlaygroundMiddleware());
  // app.use('/panel', trpcDocsMiddleware);

  // Error Handling
  // app.use(catchNotFound);
  // app.use(errorHandler);

  // Server listening
  app.listen(configs.API_PORT, () => {
    console.dir(`Server is on fire & listening on port ${configs.API_PORT} 🔥`);
  });

  return app;
}

export default launchWebServer;
