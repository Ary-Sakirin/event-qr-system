## Getting Started
Install necessary dependencies:

```
yarn add better-sqlite3 qrcode.react react-qr-reader
```

Add a script to your `package.json` to run the database setup:
```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:setup": "node db/setup.js"
  }
}
```
Run the database setup:
```
yarn db:setup
```

run the development server:

```bash
yarn dev
```
