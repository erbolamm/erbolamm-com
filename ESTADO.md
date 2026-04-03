# ESTADO.md — erbolamm-com (Hub Central ErBolamm)
> Última verificación: 8 de marzo de 2026
> No borrar. Este archivo es la fuente de verdad del estado del proyecto.

---

## 🌐 URLs del Proyecto
- **Producción**: https://erbolamm-com.web.app
- **Dominio futuro**: https://erbolamm.com (pendiente conectar via Cloudflare)
- **Repo GitHub**: erbolamm/erbolamm-com
- **Local**: `/Users/apliarte/trabajo/erbolamm-com`

---

## ✅ YA COMPLETADO (verificado en código el 8 mar 2026)

- [x] Cards dinámicas cargadas desde `universe.json`
- [x] Fondo de estrellas animadas (twinkle)
- [x] Logo + favicon + título HTML
- [x] Responsive móvil
- [x] SEO básico (`lang="es"`, meta description)
- [x] **Google Analytics GA4** — ID: `G-EDDYNNPD9T` (en `index.html` línea 10)
- [x] **Open Graph + Twitter Card** — meta tags en `index.html` líneas 20-31
- [x] **Tunnel espacial** — animación de entrada (commit `37c0951`)
- [x] Deploy a Firebase Hosting — https://erbolamm-com.web.app
- [x] Scroll bloqueador en iframe (erbolamm-hub incrustado)
- [x] Slideshow automático en erbolamm-hub (desplegado en erbolamm-hub.web.app)
- [x] Historial carnavalesco guardado en perfil_usuario.md del bot (VPS)

---

## ⚠️ ACCIÓN INMEDIATA PENDIENTE

### 1 commit sin pushear a GitHub
```bash
cd /Users/apliarte/trabajo/erbolamm-com
git push
```
Commit: `1acbedf` — "docs: clarify app-ads.txt comments to reflect its scope for all mobile apps under the publisher ID."

---

## 📋 PENDIENTE (en orden de prioridad)

### 1. universe.json — Completar con proyectos que faltan
El JSON actual tiene **12 proyectos**. Faltan estos **13**:

| Proyecto | Tech | Estado | Repo GitHub |
|---------|------|--------|-------------|
| `erbolamm-hub` | React, Sigma.js, Graphology | activo | sin repo público |
| `jurado-popular` | HTML, Tailwind, Firebase | activo | sin repo público |
| `aplibot-web` | Flutter Web, Dart | activo | erbolamm/aplibot-web |
| `apliarte-assistant` | Python, FastAPI | activo en VPS | sin repo |
| `ai-gateway` | TypeScript, Bun | activo en VPS | sin repo |
| `apliarte-bot` / OpenClaw | Node.js, TypeScript | activo en VPS | en DockerHostinger |
| `¿Quieres Ser Feliz?` | iOS App | activo | sin repo |
| `Me llaman` | iOS App | activo | sin repo |
| `Mira quien llama` | iOS App | activo | sin repo |
| `Como Afinar de oído` | iOS App | activo | sin repo |
| `Lenguaje no Verbal` | iOS App | activo | sin repo |
| `Inem Sellar Renovar` | iOS App | activo | sin repo |
| `KeyMaster` (key-master) | TypeScript | publicado | erbolamm/key-master ✅ |

> Nota: key-master YA está en universe.json pero como "extensión VS Code — gestión de claves API". La descripción real es: "entrena atajos de teclado bloqueando clics del ratón". Corregir descripción.

### 2. Google Search Console
- Sin código de verificación (`google-site-verification`) en `index.html` ni en `public/`
- Pasos: entrar en https://search.google.com/search-console → añadir propiedad → pegar meta tag en `index.html`

### 3. Firebase Auth
- `src/` sin código de Firebase Auth
- Planificado: Google Login + Email (NUNCA SMS)
- Paquetes necesarios: `firebase` (ya instalado?), `react-firebase-hooks`

### 4. Chat IA desde cero
- Sin implementar
- Tecnología: LangChain (licencia MIT) — NO usar GitNexus (licencia no comercial, descartado)
- Pendiente decidir arquitectura antes de empezar

### 5. Admin Panel
- Sin implementar
- Solo accesible para `erbolamm@gmail.com`
- Depende de Firebase Auth (punto 3)
- Funcionalidad: editar universe.json desde la web

### 6. Conectar dominio erbolamm.com
- `.firebaserc` solo apunta a proyecto `erbolamm-com` (sin dominio custom)
- Pasos: Firebase Console → Hosting → Añadir dominio → Cloudflare DNS
- ⚠️ Este es el ÚLTIMO paso (hacerlo cuando todo lo demás esté listo)

### 7. Sincronizar historial carnavalesco al VPS
- El historial está en local pero no confirmado en VPS
- Verificar con: `ssh root@72.60.187.93 "cat /home/apliarte/docker/services/apliarte-bot/workspace/SOUL.md | grep -A5 carnaval"`

---

## 📦 Estructura de Carpetas Clave

```
erbolamm-com/
├── index.html          ← GA4, Open Graph, meta SEO
├── universe.json       ← Datos de todos los proyectos (12 de 25 completos)
├── src/
│   ├── App.tsx         ← Componente principal con cards
│   ├── App.css         ← Estilos + glassmorphism
│   └── main.tsx        ← Entry point
├── public/             ← Assets estáticos
├── dist/               ← Build de producción (generado por Vite)
├── ANALIZAR_AQUI/      ← Carpeta para proyectos a revisar/cribar (ahora vacía)
├── ANALIZAR_AQUI.md    ← Instrucciones para usar esa carpeta
└── ESTADO.md           ← Este archivo ✅
```

---

## 🔗 Proyectos Relacionados

| Proyecto | Relación | Local |
|---------|---------|-------|
| `erbolamm-hub` | Se incrusta como iframe en esta web | `/Users/apliarte/trabajo/erbolamm-hub` |
| `aplibot-web` | Web pública del bot (Flutter) | `/Users/apliarte/trabajo/aplibot-web-flutter-migration` |
| `jurado-popular` | Proyecto carnaval Firebase | `/Users/apliarte/trabajo/jurado-popular` |
| `DockerHostinger` | Infraestructura VPS | `/Users/apliarte/trabajo/DockerHostinger` |

---

## 💡 Notas de Arquitectura / Decisiones Tomadas

- **React Flow** — investigado como reemplazo de Sigma.js para erbolamm-hub. No descartado.
- **GitNexus** — descartado. Licencia no comercial. Se recreará chat IA desde cero.
- **Firebase Auth**: Google + Email ÚNICAMENTE. SMS prohibido (UX y coste).
- **Glassmorphism** — estilo visual principal del hub.
- **universe.json** — es la única fuente de verdad de proyectos. Se edita a mano o via admin panel (futuro).

---

*Actualizar este archivo cada vez que se complete un ítem.*
