# Environment Variables Setup për React App

## Development

Në development, vendos në `.env` ose `.env.local`:

```env
REACT_APP_NEXTJS_URL=http://localhost:3000
```

Kjo do të krijojë links si: `http://localhost:3000/shpalljet`

## Production

Në production, vendos në environment variables të serverit:

```env
REACT_APP_NEXTJS_URL=
```

Ose mos vendos fare (do të përdorë empty string automatikisht).

Kjo do të krijojë links relative si: `/shpalljet` 
Që do të shkojë te: `gjelber.com/shpalljet`

## Si Funksionon

- **Development**: Links do të jenë `http://localhost:3000/shpalljet` (Next.js dev server)
- **Production**: Links do të jenë `/shpalljet` (relative path, same domain)
- **Reverse Proxy**: Në `gjelber.com`, reverse proxy do të route `/shpalljet` te `shpalljet-gjelber.vercel.app`

## Testimi

Pas vendosjes së environment variable:

1. **Development**:
   ```bash
   npm start
   # Kliko "Shpalljet" → duhet të shkojë te http://localhost:3000/shpalljet
   ```

2. **Production**:
   ```bash
   npm run build
   # Deploy dhe test
   # Kliko "Shpalljet" → duhet të shkojë te gjelber.com/shpalljet
   ```

## Shënim

Nëse në production shfaqet `http://localhost:3000/shpalljet`, kontrollo:
- ✅ Environment variable `REACT_APP_NEXTJS_URL` është vendosur si empty string `""`
- ✅ Ose mos vendos fare (do të përdorë empty string automatikisht)
- ✅ Rebuild app pas ndryshimit të environment variables
