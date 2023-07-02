import { createExpressMiddleware } from '@trpc/server/adapters/express';
import {
  OpenApiRouter,
  createOpenApiExpressMiddleware,
  generateOpenApiDocument,
} from 'trpc-openapi';
import { Request, Response } from 'express';
import { renderTrpcPanel } from 'trpc-panel';
import { router, procedure } from './trpc';
import configs from '../../configs/configs';

// =================================================================

export const appRouter: any = router({
  greeting: procedure.query(() => 'hello tRPC v10!'),
});

// =================================================================

export const trpcMiddleware = createExpressMiddleware({
  router: appRouter,
});

export const trpcOpenApiRestMiddleware =
  createOpenApiExpressMiddleware<OpenApiRouter>({
    router: appRouter,
  });

// =================================================================

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Example CRUD API',
  description: 'OpenAPI compliant REST API built using tRPC with Express',
  version: '1.0.0',
  baseUrl: 'http://localhost:5000/api',
  docsUrl: 'https://github.com/jlalmes/trpc-openapi',
  tags: ['auth', 'users', 'posts'],
});

// =================================================================

export const trpcDocsMiddleware = (_: Request, res: Response) => res.send(renderTrpcPanel(appRouter, { url: configs.API_URL }));

// =================================================================

// export const trpcPlaygroundMiddleware = async () =>
//   await expressHandler({
//     trpcApiEndpoint: '/trpc',
//     playgroundEndpoint: '/playground',
//     router: appRouter,
//   });

// =================================================================

export type AppRouter = typeof appRouter;
