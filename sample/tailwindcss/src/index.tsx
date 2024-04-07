import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()
//console.log("env=", import.meta.env.PROD);

app.get('/api/clock', (c) => {
  return c.json({
    time: new Date().toLocaleTimeString()
  })
})

app.get('*', (c) => {
  //
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {(import.meta.env.PROD) ? (
              <link href="/static/style.css" rel="stylesheet" /> 
          ): (
              <link href="/src/index.css" rel="stylesheet" /> 
          )} 
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.tsx"></script>
          )}
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    )
  )
})

export default app
