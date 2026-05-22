// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = (context, next) => {
  const { request, url } = context;
  
  // Si ya es HTTPS o es localhost, seguir normal
  if (url.protocol === 'https:' || url.hostname === 'localhost') {
    return next();
  }
  
  // Construir la URL con https y redirigir (código 301)
  const httpsUrl = new URL(request.url);
  httpsUrl.protocol = 'https:';
  return Response.redirect(httpsUrl.toString(), 301);
};