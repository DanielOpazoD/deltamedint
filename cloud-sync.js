export function setupCloudIntegration() {
  const btn = document.getElementById('cloud-sync-btn');
  if (!btn) return;

  (async () => {
    const [appMod, authMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js')
    ]);

    const { initializeApp } = appMod;
    const { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } = authMod;
    const { getFirestore, doc, getDoc, setDoc } = dbMod;

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid, 'state', 'temario');
          const snap = await getDoc(docRef);
          if (snap.exists() && snap.data().state) {
            localStorage.setItem('temarioState', snap.data().state);
            window.location.reload();
          }
        } catch (err) {
          console.error('Failed to load cloud data', err);
        }
      }
    });

    btn.addEventListener('click', async () => {
      try {
        if (!auth.currentUser) {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
        }
        const state = localStorage.getItem('temarioState') || '';
        const docRef = doc(db, 'users', auth.currentUser.uid, 'state', 'temario');
        await setDoc(docRef, { state });
        alert('Sincronización con Firebase completada.');
      } catch (err) {
        console.error('Cloud sync failed', err);
        alert('Fallo la sincronización.');
      }
    });
  })();
}
