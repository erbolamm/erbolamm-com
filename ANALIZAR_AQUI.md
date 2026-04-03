# ANALIZAR_AQUI — Prompt Maestro para Agentes IA

> **Instrucción OBLIGATORIA**: Cuando abras este proyecto en VS Code, lee este archivo COMPLETO antes de hacer nada.
> Después lee también `ESTADO.md` para tener el contexto completo del proyecto.
> El usuario (Javier Mateo / ErBolamm) ha dejado un proyecto en la carpeta `ANALIZAR_AQUI/` para que lo analices.

---

## 🧠 Quién es Javier (contexto para el agente)

- **Javier Mateo** (ErBolamm / ApliArte) — aprendió a programar solo desde el 4 de abril de 2023
- Tiene TDAH y altas capacidades — explicar con frases cortas, listas numeradas, cero rodeos
- No sabe inglés — TODO en español
- Muchos proyectos son prueba/error del aprendizaje → hay que filtrar qué vale y qué no
- Si es ejercicio de Dart/Flutter → puede valer como contenido para apliarte.com o tutograti.com
- Su app estrella: **CalcaApp** (5.6M+ descargas, 4.8★, 15 idiomas)
- Carrera carnavalesca: Escudo de Oro, Concha de Plata, futuro Hijo Honorífico de Marbella (6 ago 2026)
- **El universo completo de proyectos** está en `universe.json` (12 registrados, ~25 en total)
- **El grafo visual** está en https://erbolamm-hub.web.app (proyecto hermano en `/Users/apliarte/trabajo/erbolamm-hub`)

### Dominios del ecosistema (TODOS en Cloudflare)
| Dominio | Pilar | Qué es |
|---------|-------|--------|
| erbolamm.com | Hub | Web principal (este proyecto) |
| apliarte.com | Educación | Blog developer + hub aprendizaje |
| calcaapp.com | Creación | Blog de CalcaApp |
| elbolademarbella.com | Cultura | Blog Carnaval |
| lachirigotadelbola.com | Cultura | Blog chirigota |
| lacomparsadelbola.com | Cultura | Blog comparsa |
| tuaplicaciongratis.com | Educación | Apps no-code |
| tutograti.com | Educación | Tutoriales gratuitos |

---

## 🎯 Tu misión

Analizar el proyecto que hay en `ANALIZAR_AQUI/` y ayudar a Javier a decidir qué hacer con él.

---

## 📋 Paso 1 — Análisis automático

Nada más leer esto, analiza `ANALIZAR_AQUI/` y responde:

1. **¿Qué es?** (app Flutter, extensión VS Code, web HTML, ejercicio Dart, paquete pub.dev, otra cosa)
2. **¿Qué lenguaje/framework?** (Dart, Flutter, TypeScript, Python, HTML puro...)
3. **¿Está completo?** (funcional, a medias, solo un esqueleto, roto)
4. **¿Tiene algo aprovechable?** (código, diseño, lógica, assets)
5. **Resumen en 3 líneas** — qué hace, para qué sirve, estado actual

---

## 📋 Paso 2 — Preguntar a Javier

Después del análisis, hazle EXACTAMENTE estas preguntas:

1. "¿Qué quieres hacer con este proyecto?"
   - a) **Publicar** → pasa al Paso 3
   - b) **Fusionar** con otro proyecto existente → pregunta cuál
   - c) **Aprovechar partes** → indica qué partes y para qué proyecto
   - d) **Descartar** → confirmar y archivar
   - e) **Continuar desarrollando** → ayudar a terminarlo

2. "¿Hay algo de este proyecto que ya exista en tu universo?" (revisa `universe.json`)

---

## 📋 Paso 3 — Requisitos para publicar

Si Javier quiere publicar el proyecto, DEBE cumplir estos campos mínimos según su tipo:

### App móvil
| Campo | Obligatorio | Ejemplo |
|-------|-------------|---------|
| `name` | ✅ | CalcaApp |
| `description` | ✅ | Mesa de luz digital |
| `urls.playstore` | ✅ (si Android) | https://play.google.com/... |
| `urls.appstore` | ⬜ (si iOS) | https://apps.apple.com/... |
| `urls.landing` | ⬜ (recomendado) | https://calcaapp-landing.web.app |
| `urls.web` | ⬜ (blog) | https://calcaapp.com |

### Extensión VS Code
| Campo | Obligatorio | Ejemplo |
|-------|-------------|---------|
| `name` | ✅ | Key Master |
| `description` | ✅ | Gestión de claves API |
| `urls.github` | ✅ | https://github.com/erbolamm/... |
| `urls.marketplace` | ⬜ | https://marketplace.visualstudio.com/... |

### Paquete / Librería
| Campo | Obligatorio | Ejemplo |
|-------|-------------|---------|
| `name` | ✅ | apliarte_faq |
| `description` | ✅ | FAQ integrable para apps Flutter |
| `urls.github` | ✅ | https://github.com/erbolamm/... |
| `urls.pub` | ⬜ (si Dart) | https://pub.dev/packages/... |
| `urls.npm` | ⬜ (si JS/TS) | https://npmjs.com/package/... |

### Web / Blog
| Campo | Obligatorio | Ejemplo |
|-------|-------------|---------|
| `name` | ✅ | ApliArte |
| `description` | ✅ | Hub de Aprendizaje de Flutter |
| `urls.web` | ✅ | https://apliarte.com |

### Dispositivo / Hardware
| Campo | Obligatorio | Ejemplo |
|-------|-------------|---------|
| `name` | ✅ | ApliMemo |
| `description` | ✅ | Asistente Cognitivo de Bolsillo |
| `urls.landing` | ⬜ (cuando exista) | https://aplimemo.apliarte.com |

## 📋 Paso 3.5 — Regla obligatoria de README (GitHub o idea nueva)

Si el proyecto está publicado en GitHub **o** es un proyecto nuevo (solo idea inicial), el `README.md` debe quedar visualmente cuidado y **terminar siempre** con este bloque final (sin ninguna sección después):

```md
## Autor
Javier Mateo (ApliArte) — github.com/erbolamm

## 💬 Una nota personal del autor / A personal note from the author
ℹ️ Nota: El texto siguiente es un mensaje personal del autor, escrito en varios idiomas para que pueda leerlo gente de todo el mundo. Esto no implica que el proyecto tenga soporte funcional completo en esos idiomas.

ℹ️ Note: The text below is a personal message from the author, written in several languages so people around the world can read it. This does not imply full multilingual feature support in those languages.

<details>
<summary>🇪🇸 Español</summary>
[Mensaje completo adaptado al proyecto analizado: qué es, para qué sirve y por qué se comparte]
</details>

<details>
<summary>🇬🇧 English</summary>
[Full message adapted to the analyzed project: what it is, what it does, and why it is shared]
</details>

<details>
<summary>🇧🇷 Português</summary>
[Mensagem completa adaptada ao projeto analisado: o que é, para que serve e por que é compartilhado]
</details>

<details>
<summary>🇫🇷 Français</summary>
[Message complet adapté au projet analysé : ce que c'est, à quoi il sert et pourquoi il est partagé]
</details>

<details>
<summary>🇩🇪 Deutsch</summary>
[Vollständige Nachricht zum analysierten Projekt: was es ist, wofür es dient und warum es geteilt wird]
</details>

<details>
<summary>🇮🇹 Italiano</summary>
[Messaggio completo adattato al progetto analizzato: cos'è, a cosa serve e perché viene condiviso]
</details>

## 💖 Apoya el proyecto
Herramienta gratuita y open source. Si te ahorra tiempo, un café ayuda a mantener el desarrollo.

| Plataforma | Enlace |
|-----------|--------|
| PayPal | paypal.me/erbolamm |
| Ko-fi | ko-fi.com/C0C11TWR1K |
| Twitch Tip | streamelements.com/apliarte/tip |

🌐 Sitio Oficial · 📦 GitHub

## Licencia
MIT — © 2026 ApliArte

## About
[Descripción corta real del proyecto actual]
```

Reglas adicionales de esta sección final:
1. Debe ser el cierre real del README (no añadir nada después de `About`).
2. Mantener exactamente el orden de secciones del bloque.
3. Se permite mejorar estilo visual (tablas, enlaces Markdown, detalles plegables), sin romper el contenido mínimo.
4. En `About`, adaptar solo la descripción al proyecto concreto que se está publicando.
5. Los idiomas deben ir en formato desplegable con `<details><summary>...</summary>...</details>` como en `corrector-vscode`.
6. El texto de cada idioma debe hablar del proyecto actual (nombre, utilidad, propósito y estado), no copiar literalmente el mensaje de otro repositorio.

---

## 📋 Paso 4 — Registrar en el universo

Si el proyecto cumple los requisitos mínimos, **añádelo a `universe.json`** con esta estructura:

```json
{
  "id": "nombre-en-kebab-case",
  "name": "Nombre Visible",
  "pillar": "creacion|educacion|cultura|herramientas|hardware",
  "type": "app|web|extension|package|device|client",
  "description": "Descripción corta",
  "urls": { ... },
  "status": "published|wip|archived"
}
```

### Pilares disponibles:
- `creacion` (rosa #ff4e83) — Apps y productos creativos
- `educacion` (azul #1976D2) — Enseñanza, tutoriales, aprendizaje
- `cultura` (verde #388E3C) — Carnaval, música, identidad cultural
- `herramientas` (naranja #FF8F00) — Extensiones, paquetes, tools de dev
- `hardware` (dorado #FFB300) — Dispositivos físicos, IoT

---

## 📋 Paso 5 — Auditoría de Nube (Proyectos Huérfanos)

> Esta fase es **opcional** pero recomendada cuando Javier quiera limpiar su ecosistema de Firebase / GCP / GitHub.
> El objetivo: cruzar `universe.json` con lo que hay en la nube y detectar **proyectos huérfanos** (proyectos abandonados que ocupan espacio, consumen cuota o "hacen ruido" sin estar registrados).

### ¿Qué es un proyecto huérfano?
Un proyecto que existe en Firebase, GCP o GitHub **pero NO está en `universe.json`** (o está con `status: archived` y sigue activo en la nube).

### ⚠️ Decisión de seguridad FIRME

**El bot NO tiene acceso directo a las cuentas de Javier.**
No se usará Service Account JSON ni GitHub PAT almacenado en el bot.

El modelo correcto es: **el bot actúa como guía**.
El bot lee `universe.json`, genera los comandos exactos y los da a Javier para que él los ejecute localmente en su Mac.

### Cómo funciona el flujo

**1. El bot lee `universe.json`** y genera una lista de todos los proyectos registrados con sus IDs de Firebase, repos de GitHub y dominios.

**2. El bot genera los comandos exactos** para que Javier los ejecute localmente:

```bash
# Listar proyectos Firebase (requiere firebase-tools instalado y sesión activa)
firebase projects:list

# Listar repositorios GitHub (requiere gh CLI instalado y sesión activa)
gh repo list erbolamm --limit 100 --json name,updatedAt,isArchived

# Listar proyectos GCP activos
gcloud projects list --format="table(projectId,name,lifecycleState)"
```

**3. Javier pega el output** de esos comandos en el chat con el bot.

**4. El bot cruza** los resultados con `universe.json` y devuelve:
- ✅ Proyectos en nube que SÍ están en universe.json → OK
- ⚠️ Proyectos en nube que NO están en universe.json → candidatos a revisar
- 🗑️ Proyectos en nube con `status: archived` en universe.json → candidatos a borrar

**5. El bot propone acciones concretas** (nunca las ejecuta solo):
- "Este repo lleva 18 meses sin commits y no está en universe.json. ¿Lo archivamos en GitHub?"
- "Este proyecto de Firebase tiene 0 usuarios activos. ¿Lo borramos?"

### ⚠️ Regla de oro de la auditoría

**NUNCA borrar nada automáticamente.** Cada borrado requiere confirmación explícita de Javier.
El bot solo sugiere. Javier decide y ejecuta.

### Añadir al SOUL.md del bot

Cuando se desarrolle esta funcionalidad, el `SOUL.md` del bot deberá incluir un bloque con:
- La lista de IDs de proyectos Firebase conocidos (del universe.json)
- La lista de repos GitHub conocidos
- El prompt maestro para guiar la auditoría paso a paso sin acceso directo

> Estado: **pendiente** — desarrollar una vez completadas las prioridades de la web (Auth, Admin Panel, Chat IA).

---

## ⚠️ Reglas obligatorias

1. **NUNCA borrar nada** sin confirmación de Javier
2. **NUNCA mover archivos fuera** de `ANALIZAR_AQUI/` sin permiso
3. Si el proyecto tiene secretos o API keys → AVISAR, no imprimir
4. Si dudas del pilar → pregunta
5. Después de analizar, **vaciar `ANALIZAR_AQUI/`** solo cuando Javier confirme
6. **NUNCA SMS Auth** — Javier perdió 1600€ por esto en CalcaApp
7. Si el proyecto usa Firebase → verificar si ya hay un proyecto Firebase existente en el ecosistema
8. Escribir respuestas en **español**, frases cortas, listas numeradas

---

## 📊 Pilares del ecosistema (referencia rápida)

| Pilar | Color | Emoji | Ejemplos |
|-------|-------|-------|----------|
| `creacion` | Rosa `#ff4e83` | ✏️ | CalcaApp, diseños, vídeos |
| `educacion` | Azul `#1976D2` | 🎓 | ApliArte, TutoGrati, TuAplicacionGratis |
| `cultura` | Verde `#388E3C` | 🎭 | ElBolaDeMarbella, chirigotas, comparsas |
| `herramientas` | Naranja `#FF8F00` | 🔧 | Key Master, Corrector VS Code, apliarte_faq |
| `hardware` | Dorado `#FFB300` | 🤖 | ApliMemo (Asistente Cognitivo de Bolsillo) |

---

## 🏗️ Patrón estándar por app

Cada app del ecosistema sigue este patrón:
1. **Landing** (Flutter Web + Firebase Hosting)
2. **Blog** (Blogger, ya existente)
3. **App** (móvil: Flutter/Dart, pub en Play Store / App Store)

La web principal (erbolamm-com) es la excepción: React + Vite (no Flutter).

---

## 📋 Paso 6 — Evaluación de Migración de Hosting

> Añadido el 12 de marzo de 2026 tras inspección directa del VPS Hostinger (`72.60.187.93`).
> Infraestructura VPS: **Docker + Nginx Proxy Manager** — sin nginx nativo.
> Proyectos web de pilares Educación y Cultura: hosting a confirmar (posiblemente Hostinger cPanel o Blogger).

### 🖥️ Mapa de infraestructura actual (VPS)

| Contenedor | Dominio expuesto | Puerto interno | Propósito |
|-----------|-----------------|---------------|-----------|
| `npm` | — | 80/443 | Nginx Proxy Manager (gateway de entrada) |
| `apliarte-bot` | `chatbot.apliarte.com` | 18791 | Bot Telegram (OpenClaw) |
| `apliarte-assistant` | `app.calcaapp.com` (parcial) | 8010 | Chatbot CalcaApp (Python/FastAPI) |
| `calcaapp-landing` | `app.calcaapp.com` | 8085 | Landing CalcaApp (HTML estático) |
| `ai-gateway` | — | 3000 | Gateway LLM (Groq/Gemini/Cerebras) |
| `apliarte-directos` | `directo.apliarte.com` | 7979 | Streaming en directo |
| `info-apliarte` | `info.apliarte.com` | 8082 | Página informacional |
| `n8n` | `n8n.apliarte.com` | 5678 | Automatización n8n |
| `dozzle` | `dozzle.apliarte.com` | 8080 | Monitor de logs Docker |
| `uptime-kuma` | `uptime-kuma.apliarte.com` | 3001 | Monitor de disponibilidad |
| `portainer` | `panel.apliarte.com` | 9000 | Panel Docker visual |
| `postgres` | — | 5432 | Base de datos (n8n + assistant) |
| `redis` | — | 6379 | Caché y memoria de conversación |
| `watchtower` | — | — | Auto-actualización de imágenes Docker |

---

### 📊 Estado de hosting por proyecto del universo

| Proyecto | Estado | Hosting actual | ¿Migrar a Firebase? | Notas |
|---------|--------|---------------|---------------------|-------|
| **erbolamm-com** | 🟢 Producción | ✅ Firebase Hosting | No — ya está | `erbolamm-com.web.app` |
| **erbolamm-hub** | 🟢 Producción | ✅ Firebase Hosting | No — ya está | `erbolamm-hub.web.app` (iframe incrustado) |
| **CalcaApp** (app móvil) | 🟢 Producción | App Store / Play Store | N/A | App nativa, no aplica hosting web |
| **calcaapp-landing** | 🟢 Producción | 🖥️ VPS Hostinger (Docker) | ⚠️ Evaluar | Contenedor `calcaapp-landing` en VPS → `app.calcaapp.com`. Migrar a Firebase Hosting eliminaría carga del VPS |
| **Jurado Popular** | 🟢 Producción | ✅ Firebase Hosting | No — ya está | `jurado-popular.web.app` |
| **ApliArte** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `apliarte.com` — Mantenimiento cero, hosting rápido de Google |
| **TutoGrati** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `tutograti.com` — Mantenimiento cero, hosting rápido |
| **TuAplicacionGratis** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `tuaplicaciongratis.com` — Excelente para este fin |
| **ElBolaDeMarbella** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `elbolademarbella.com` — Perfecto para el blog de carnaval |
| **LaChirigotaDelBola** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `lachirigotadelbola.com` — Perfecto para el archivo muscial |
| **LaComparsaDelBola** | 🟡 Activo | ✅ Blogger (Google) | ❌ No aplica | `lacomparsadelbola.com` — Perfecto para el archivo musical |
| **apliarte-assistant** | 🟢 Activo | 🖥️ VPS Hostinger (Docker) | ❌ No aplica | Backend Python/FastAPI — requiere servidor, Firebase Hosting no es oportuno |
| **ai-gateway** | 🟢 Activo | 🖥️ VPS Hostinger (Docker) | ❌ No aplica | Backend Bun/TypeScript — ídem anterior |
| **apliarte-bot** | 🟢 Activo | 🖥️ VPS Hostinger (Docker) | ❌ No aplica | Bot Telegram (OpenClaw) — debe vivir en VPS |
| **ApliMemo** | 🔵 WIP | ❌ Sin hosting (hardware) | ❌ N/A | Dispositivo físico — cuando tenga web/landing, sí evaluar Firebase |
| **apliarte-faq** | 🟢 Publicado | pub.dev + GitHub | ❌ No aplica | Paquete Dart — no tiene hosting, se distribuye por pub.dev |
| **Key Master** | 🟢 Publicado | GitHub + VS Marketplace | ❌ No aplica | Extensión VS Code |
| **Corrector VS Code** | 🟢 Publicado | GitHub + VS Marketplace | ❌ No aplica | Extensión VS Code |
| **Apps iOS** (6 apps legacy) | 🟡 Activo | App Store | ❌ N/A | Apps nativas iOS — sin hosting web propio |

---

### ✅ Ventajas de Firebase Hosting (para los candidatos a migrar)

1. **CDN global nativo** — cero configuración, Cloudflare sería opcional
2. **Integración directa con Firestore / Auth** — si en el futuro los proyectos web tienen backend Firebase
3. **Deploy con un comando** — `firebase deploy` desde CI/CD
4. **HTTPS automático** — sin gestionar certificados Let's Encrypt manualmente
5. **Libera carga del VPS** — la landing de CalcaApp y sitios estáticos no deberían consumir recursos del VPS donde vive el bot

### ⚠️ Cuándo NO migrar a Firebase

- **Backends con servidor** (apliarte-assistant, ai-gateway, apliarte-bot) → necesitan Docker/VPS siempre
- **Blogs en Blogger** → Dejar SIEMPRE en Blogger: es infraestructura de Google de nivel mundial, gratis de por vida y requiere cero mantenimiento del servidor.
- **Lo que ya funciona bien** → no migrar por migrar; solo si hay ganancia real

### 📋 Acción recomendada (por Javier)

| Prioridad | Proyecto | Acción |
|----------|---------|--------|
| 🔴 Alta | `calcaapp-landing` | Migrar a Firebase Hosting → libera VPS |

> **Análisis finalizado**: Se ha verificado la infraestructura general. El único proyecto web susceptible a mejorar su hosting hacia Firebase de manera inmediata es la Landing de CalcaApp (`calcaapp-landing`). El resto de componentes (Pilares Cultura y Educación) están de modo óptimo en *Blogger*.

---

## 📚 Archivos clave del proyecto que debes conocer

| Archivo | Qué contiene | Prioridad de lectura |
|---------|-------------|---------------------|
| `ESTADO.md` | Estado completo del proyecto, tareas pendientes, decisiones | 🔴 LEE PRIMERO |
| `universe.json` | Base de datos de todos los proyectos (fuente de verdad) | 🔴 LEE SEGUNDO |
| `ANALIZAR_AQUI.md` | Este archivo — instrucciones de análisis | 🟡 Ya lo estás leyendo |
| `src/App.tsx` | Componente principal (176 líneas, monolítico) | 🟢 Solo si vas a tocar código |
| `src/App.css` | Estilos completos (514 líneas) | 🟢 Solo si vas a tocar diseño |
| `index.html` | GA4, OG tags, SEO | 🟢 Solo si vas a tocar SEO |
