# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. (Optional) To enable cloud sync, also add your Firebase project settings in `.env.local`:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

4. Run the app:
   `npm run dev`

### Features

- Nueva herramienta en el editor para redimensionar lateralmente notas o bloques HTML insertados mediante el botón ↔️ de la barra de herramientas.
- Botón ☁️ para sincronizar los datos con Firebase usando autenticación de Google.
