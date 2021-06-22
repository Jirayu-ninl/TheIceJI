## Snippets

```bash
rfs
```
Generate Default page structure

## Hiroku Deploy config

```json
{
  "name": "theiceji-v1",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    // "start": "next start -p $PORT"
    "heroku-postbuild": "npm run build"
  },
  "dependencies": {
    "graphql-request": "^2.0.0",
    "next": "9.4.4",
    "react": "16.13.1",
    "react-dom": "16.13.1"
  },
  "engines": {
    "node": "12.16.1",
    "npm": "6.13.4"
  }
}
```

## Tailwind Build

```
npx tailwindcss build styles.css -o output.css
```