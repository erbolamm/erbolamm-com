# 🌌 ErBolamm-Com — Universo Digital de ErBolamm

Portal web oficial del ecosistema ErBolamm. Un universo interactivo donde cada proyecto es un planeta conectado por aristas en un grafo 3D navegable con física real.

[![Deploy](https://img.shields.io/badge/deploy-Firebase%20Hosting-FFCA28?logo=firebase)](https://erbolamm-com.web.app)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)

## 🚀 Demo

**[➡️ erbolamm-com.web.app](https://erbolamm-com.web.app)**

## ✨ Características

- **Grafo nativo interactivo** — React Flow + d3-force en tiempo real
- **Nodos 3D** — Esferas CSS con iluminación, sombras y animaciones
- **BolaBot patrullero** — IA que navega automáticamente entre planetas
- **Aristas brillantes** — GlowEdge con animaciones SVG
- **Datos en tiempo real** — Firebase Realtime Database con fallback local
- **Túnel espacial** — Animación de entrada con anillos concéntricos
- **Lazy Loading** — El grafo se carga solo cuando es visible (IntersectionObserver)
- **Tarjetas dinámicas** — Ecosistema de proyectos renderizado desde Firebase
- **Glassmorphism** — UI con efecto cristal premium
- **Audio manager** — Gestión de audio ambiental con persistencia en localStorage

## 🛠️ Stack técnico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| [React](https://react.dev) | 19 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Vite](https://vite.dev) | 7 | Bundler |
| [React Flow](https://reactflow.dev) | @xyflow/react | Grafo interactivo |
| [d3-force](https://d3js.org/d3-force) | 3 | Motor de física (colisiones, layout) |
| [Firebase](https://firebase.google.com) | 11 | Realtime Database + Hosting |

## 📦 Inicio rápido

```bash
# Clonar el repositorio
git clone https://github.com/erbolamm/erbolamm-com.git
cd erbolamm-com

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre `http://localhost:5173` y explora el universo.

## 📜 Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor local con HMR |
| `npm run build` | Build de producción (`dist/`) |
| `npm run lint` | Lint con ESLint 9 |
| `npm run preview` | Previsualizar build local |

---

## 🚀 Despliegue para Forkers (Hosting & Setup)

Este proyecto está diseñado para ser **Multiversal**. Si hacés un fork, así podés tener tu propio universo en 3 minutos:

### 1. Preparación en Firebase ☁️
1.  Creá un proyecto en el [Firebase Console](https://console.firebase.google.com/).
2.  Habilitá **Authentication** (Método Google).
3.  Habilitá **Firestore Database** (Modo producción).
4.  Habilitá **Realtime Database** (Europa u otra región).

### 2. Configuración Local 🛠️
1.  Copiá `.env.example` a `.env`:
    ```bash
    cp .env.example .env
    ```
2.  Pegá tus credenciales de Firebase en el `.env`.
3.  **Bootstrapping**: Podés importar el archivo `public/universe.json` a tu **Realtime Database** para empezar con una galaxia de ejemplo.

### 3. Reglas de Seguridad 🛡️
Desplegá las reglas de seguridad incluidas para proteger tu universo:
```bash
firebase deploy --only firestore,database
```

---

## 🏗️ Arquitectura

```text
erbolamm-com/
├── src/
│   ├── components/
│   │   ├── FlowGraph.tsx            ← ⭐ Grafo principal (React Flow)
│   │   ├── CristalOverlay.tsx       ← 💎 Overlay glassmorphism
│   │   ├── nodes/
│   │   │   ├── PlanetNode.tsx       ← 🪐 Nodo planeta (esfera 3D CSS)
│   │   │   ├── BolaBotNode.tsx      ← 🤖 Nodo del bot patrullero
│   │   │   └── TrailNode.tsx        ← ✨ Efecto estela del bot
│   │   └── edges/
│   │       └── GlowEdge.tsx         ← 🌟 Arista con brillo animado
│   ├── hooks/
│   │   ├── useGraphData.ts          ← 🧠 Layout radial + d3-force + BolaBot
│   │   ├── useHashRouter.ts         ← 🔗 Navegación por hash
│   │   ├── useAudioManager.ts       ← 🔊 Audio ambiental
│   │   └── useGithubMemory.ts       ← 🐙 Auto-sync repos GitHub
│   ├── constants/index.ts           ← ⚙️ Constantes del bot y sistema
│   ├── types/index.ts               ← 📐 Tipos TypeScript compartidos
│   ├── firebase.ts                  ← 🔥 Configuración Firebase
│   ├── App.tsx                      ← 📄 Página principal
│   ├── App.css                      ← 🎨 Estilos y animaciones
│   └── main.tsx                     ← 🚀 Entry point
├── public/
│   └── universe.json                ← 🗺️ Datos del universo (fallback)
└── firebase.json                    ← ☁️ Config de hosting
```

## 🧠 Cómo funciona el grafo

### Layout radial ("Octópodo")

```
universe.json / Firebase RTDB  →  jerarquía padre-hijo (propiedad "pillar")
  → Layout radial recursivo (placeChildren)
  → Refinamiento anti-colisión (d3-force, 100 ticks)
  → React Flow nodes + edges
```

1. **ErBolamm** siempre en el centro `(0, 0)`, fijado con `fx=0, fy=0`
2. **Pilares** orbitan al centro a distancia fija
3. **Proyectos** orbitan a su pilar padre, y sus hijos a ellos (recursivo)
4. **d3-force** resuelve colisiones tras el layout inicial
5. **BolaBot** patrulla por las aristas con interpolación easeInOut

### Tamaños por profundidad

```
Nivel 0 (centro):  72px
Nivel 1 (pilares): 58px
Nivel 2 (hijos):   46px
Nivel 3:           36px
Nivel 4:           28px
Nivel 5+:          22px
```

### Colores

Los colores se heredan del pilar padre y se oscurecen por profundidad con `darkenColor()` (factor 0.82 por nivel).

## 🗺️ Datos del universo

Los datos vienen de **Firebase Realtime Database** con fallback a `public/universe.json`:

```json
{
  "nodes": [
    {
      "id": "calcaapp",
      "label": "CalcaApp",
      "emoji": "🖼️",
      "color": "#E53935",
      "pillar": "apps",
      "subtitle": "Calcar fotos en cristal",
      "url": "https://app.calcaapp.com",
      "status": "active",
      "type": "app"
    }
  ],
  "edges": [["erbolamm", "apps"], ["apps", "calcaapp"]],
  "showcaseNodes": ["calcaapp"]
}
```

### Campos de un nodo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `string` | Identificador único |
| `label` | `string` | Nombre visible |
| `emoji` | `string` | Emoji representativo |
| `color` | `string` | Color hex del pilar |
| `pillar` | `string` | ID del nodo padre |
| `subtitle` | `string` | Descripción corta |
| `url` | `string?` | URL al hacer clic |
| `status` | `'active' \| 'pending' \| 'disabled'` | Estado del nodo |
| `type` | `string?` | Tipo: pilar, proyecto, etc. |

## 🔧 Personalización

### Añadir un planeta nuevo

1. Edita `public/universe.json` o añade el nodo en Firebase RTDB
2. Asegúrate de definir `pillar` (su padre) y el `status: "active"`
3. Añade la arista `[pilarId, nuevoNodoId]` en el array `edges`
4. El grafo recalcula el layout automáticamente

### Cambiar colores de pilares

Los colores base de cada pilar se definen en el nodo raíz de cada pilar. Los hijos heredan el color y lo oscurecen por profundidad.

### Configurar Firebase

Edita `src/firebase.ts` con tus credenciales:

```typescript
const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'tu-proyecto.firebaseapp.com',
  databaseURL: 'https://tu-proyecto-default-rtdb.firebasedatabase.app',
  projectId: 'tu-proyecto',
}
```

## 🚀 Deploy

```bash
# Build + Deploy a Firebase Hosting
npm run build
npx firebase deploy --only hosting
```

## 🤝 Contribuir

1. Fork del repositorio
2. Crea tu rama (`git checkout -b feature/mi-mejora`)
3. Commit (`git commit -m 'feat: añadida mi mejora'`)
4. Push (`git push origin feature/mi-mejora`)
5. Abre un Pull Request

---

## Autor

**Javier Mateo** (ApliArte) — [github.com/erbolamm](https://github.com/erbolamm)

## 💬 Una nota personal del autor / A personal note from the author

ℹ️ Nota: El texto siguiente es un mensaje personal del autor, escrito en varios idiomas para que pueda leerlo gente de todo el mundo.

<details>
<summary>🇪🇸 Español</summary>

Soy un desarrollador indie, sin estudios formales, que ha aprendido todo por su cuenta a base de esfuerzo y persistencia. Este proyecto, `erbolamm-com`, es la puerta de entrada a mi universo digital — un grafo interactivo donde cada nodo es un proyecto real con su historia.

Construir esto me ha costado años de trabajo. Si te inspira o te aporta valor, te agradecería una ⭐ en GitHub y, si puedes, un pequeño donativo para sostener el desarrollo.

Gracias de corazón por explorar este universo.

</details>

<details>
<summary>🇬🇧 English</summary>

I'm an indie developer, self-taught, who learned everything from scratch through effort and persistence. This project, `erbolamm-com`, is the entry point to my digital universe — an interactive graph where every node is a real project with its own story.

Building this has taken years of work. If it inspires you or adds value, I'd appreciate a ⭐ on GitHub and, if possible, a small donation to support ongoing development.

Thank you for exploring this universe.

</details>

<details>
<summary>🇧🇷 Português</summary>

Sou um desenvolvedor indie, autodidata, que aprendeu tudo do zero com muito esforço e persistência. Este projeto, `erbolamm-com`, é a porta de entrada do meu universo digital — um grafo interativo onde cada nó é um projeto real com sua própria história.

Construir isso levou anos de trabalho. Se te inspira ou agrega valor, agradeço uma ⭐ no GitHub e, se puder, uma pequena doação para sustentar o desenvolvimento.

Obrigado de coração por explorar este universo.

</details>

<details>
<summary>🇫🇷 Français</summary>

Je suis un développeur indie, autodidacte, qui a tout appris seul avec beaucoup d'efforts et de persévérance. Ce projet, `erbolamm-com`, est la porte d'entrée de mon univers numérique — un graphe interactif où chaque nœud est un projet réel avec sa propre histoire.

Construire cela m'a pris des années de travail. Si ce projet vous inspire ou vous apporte de la valeur, je vous serais reconnaissant pour une ⭐ sur GitHub et, si possible, un petit don pour soutenir le développement.

Merci d'explorer cet univers.

</details>

<details>
<summary>🇩🇪 Deutsch</summary>

Ich bin ein Indie-Entwickler und Autodidakt, der sich alles durch Einsatz und Ausdauer selbst beigebracht hat. Dieses Projekt, `erbolamm-com`, ist der Einstiegspunkt meines digitalen Universums — ein interaktiver Graph, in dem jeder Knoten ein echtes Projekt mit seiner eigenen Geschichte ist.

Der Aufbau hat Jahre gedauert. Wenn es dich inspiriert oder dir Mehrwert bietet, freue ich mich über einen ⭐ auf GitHub und, wenn möglich, über eine kleine Spende zur Unterstützung der weiteren Entwicklung.

Danke, dass du dieses Universum erkundest.

</details>

<details>
<summary>🇮🇹 Italiano</summary>

Sono uno sviluppatore indie, autodidatta, che ha imparato tutto da zero con impegno e perseveranza. Questo progetto, `erbolamm-com`, è la porta d'ingresso al mio universo digitale — un grafo interattivo dove ogni nodo è un progetto reale con la sua storia.

Costruire tutto questo ha richiesto anni di lavoro. Se ti ispira o ti è utile, ti sarei grato per una ⭐ su GitHub e, se puoi, una piccola donazione per sostenere lo sviluppo.

Grazie di cuore per esplorare questo universo.

</details>

## 💖 Apoya el proyecto

Herramienta gratuita y open source. Si te ahorra tiempo, un café ayuda a mantener el desarrollo.

| Plataforma | Enlace |
|------------|--------|
| PayPal | [paypal.me/erbolamm](https://www.paypal.com/paypalme/erbolamm) |
| Ko-fi | [ko-fi.com/C0C11TWR1K](https://ko-fi.com/C0C11TWR1K) |
| Twitch Tip | [streamelements.com/apliarte/tip](https://streamelements.com/apliarte/tip) |

🌐 [Sitio Oficial](https://erbolamm-com.web.app) · 📦 [GitHub](https://github.com/erbolamm/erbolamm-com)

## Licencia

MIT — © 2026 ApliArte
