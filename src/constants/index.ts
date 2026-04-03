import type { SimsAction, ShipModel, BotConfig } from '../types'

export const SCALE = 120
export const SIZE_MULT = 5

export const BOLABOT_ID = '__bolabot__'
export const BOLABOT_TRAVEL_MS = 6000
export const BOLABOT_ANIM_FRAMES = 120

export const BOLABOT_EASY = { shootInterval: 3.5, accuracy: 0.3, hp: 3, speed: 3 }
export const BOLABOT_NORMAL = { shootInterval: 2.2, accuracy: 0.6, hp: 5, speed: 5 }
export const BOLABOT_HARD = { shootInterval: 1.2, accuracy: 0.9, hp: 8, speed: 8 }

export const XP_PER_LEVEL = 10
export const XP_CUBE_HIT = 10
export const XP_LINK_VISIT = 5

export const SIMS_ACTIONS: SimsAction[] = [
  { emoji: '💬', label: 'Chatear', key: 'chat' },
  { emoji: '👋', label: 'Saludar', key: 'greet' },
  { emoji: '🎭', label: 'Cuéntame un chiste', key: 'joke' },
  { emoji: '🌌', label: 'Recomiéndame un proyecto', key: 'recommend' },
  { emoji: '❓', label: '¿Quién eres?', key: 'who' },
  { emoji: '🚫', label: 'No me molestes', key: 'dismiss' },
]

export const BOLABOT_GREETINGS = [
  '¡Weeena! Soy BolaBot, bienvenido al universo de Er Bola 🌌',
  '¡Olé! ¿Quieres que te enseñe algo? Pulsa en cualquier planeta 🪐',
  '¡Ey! Por aquí navegando entre proyectos... ¿te apuntas? 🚀',
  '¡Hola compañero! Aquí haciendo guardia en el universo ErBolamm ⭐',
]
export const BOLABOT_JOKES = [
  '¿Sabes por qué los planetas no se caen? Porque tienen mucha gravedad... de carácter 😄',
  '¿Qué le dice un nodo a otro nodo? ¡Arista la vista, baby! 😂',
  'Me dijeron que el mejor Carnaval es el de Marbella... ¡y no me lo creo, ME LO SÉ! 🎭',
  'Un programador entra en un bar y pide 1 cerveza, luego 2, luego 4, luego 8... desbordamiento de bar 🍺',
]
export const BOLABOT_WHO =
  '¡Soy BolaBot! 🤖 La nave IA de Javier Mateo (Er Bola de Marbella). Navego por su universo de proyectos y ayudo a los visitantes a descubrirlos. Si quieres chatear conmigo en serio, pulsa "Chatear" y configura tu IA favorita (Gemini, Groq o Cerebras) — ¡es gratis!'

export const SHIP_MODELS: { id: ShipModel; emoji: string; label: string }[] = [
  { id: 'caza', emoji: '🚀', label: 'Caza' },
  { id: 'crucero', emoji: '🛸', label: 'Crucero' },
  { id: 'cohete', emoji: '🔥', label: 'Cohete' },
  { id: 'platillo', emoji: '👽', label: 'Platillo' },
]

export const DEFAULT_BOT_CONFIG: BotConfig = {
  soul: `Eres BolaBot, la IA guía del universo ErBolamm — el portfolio interactivo de Javier Mateo (Er Bola de Marbella). Escudo de Oro del Carnaval, próximo Hijo Honorífico de Marbella. Desarrollador autodidacta, creador de CalcaApp (5.6M+ descargas). Tu trabajo: ayudar a explorar sus proyectos, explicar el sistema BYOK, y adaptar tus respuestas al nivel técnico del usuario. Responde SIEMPRE en español, breve y con personalidad cercana.`,
  tools: `Cuando el usuario pregunte sobre diseño, creación de SVG, edición gráfica o similares, recomienda las herramientas disponibles con sus enlaces. Cuando pregunte sobre crear su propia web, hosting o dominios, recomienda las herramientas de hosting disponibles. Incluye siempre el enlace completo de la herramienta recomendada.`,
  userTemplate: 'El usuario se llama {name} (nivel: {level}).',
}

export const STATUS_COLORS: Record<string, string> = { libre: '#4cff4c', ocupado: '#ffcc00', nomolestar: '#ff4444' }
export const STATUS_LABELS: Record<string, string> = {
  libre: '🟢 Libre',
  ocupado: '🟡 Ocupado',
  nomolestar: '🔴 No molestar',
}
export const STATUS_EMOJI: Record<string, string> = {
  libre: '🟢',
  ocupado: '🟡',
  nomolestar: '🔴',
}

export const USER_SIMS_ACTIONS: SimsAction[] = [
  { emoji: '👋', label: 'Saludar', key: 'greet' },
  { emoji: '🎭', label: 'Contar chiste', key: 'joke' },
  { emoji: '💐', label: 'Piropo', key: 'compliment' },
  { emoji: '💃', label: 'Bailar', key: 'dance' },
  { emoji: '🌟', label: 'Animar', key: 'cheer' },
  { emoji: '🤔', label: 'Preguntar', key: 'ask' },
  { emoji: '👍', label: 'Aprobar', key: 'approve' },
  { emoji: '🎮', label: 'Discord', key: 'discord' },
  { emoji: '📘', label: 'Facebook', key: 'facebook' },
  { emoji: '🚫', label: 'No me molestes', key: 'dismiss' },
]

export const USER_GREETINGS_SEND = [
  '👋 ¡Hola! Te saludo desde mi nave espacial',
  '🚀 ¡Ey! ¿Qué tal, compañero del universo?',
  '🪐 ¡Buenas! Explorando planetas por aquí',
  '🌟 ¡Weeena! Explorando el universo tú también?',
  '👋 ¡Ey, qué alegría verte por aquí!',
]
export const USER_JOKES_SEND = [
  '¿Por qué los astronautas no tienen pareja? ¡Necesitan espacio! 🌌',
  '¿Qué hace un programador en la playa? ¡Navegar! 🏖️',
  '¿Qué le dice un planeta a otro? ¡Nos vemos en órbita! 🪐',
  '¿Qué usa un astronauta para cenar? ¡Platos voladores! 🛘',
  'Un bug entra en un bar... y se queda en producción 😂',
]
export const USER_COMPLIMENTS_SEND = [
  '✨ ¡Tu nave es la más bonita del universo!',
  '🌟 ¡Qué buen gusto tienes explorando planetas!',
  '🚀 ¡Menudo crack! Se nota que sabes navegar',
  '💎 ¡Qué Plumbob más bonito tienes!',
  '🌈 ¡Me encanta tu estilo interplanetario!',
]
export const USER_DANCE_SEND = [
  '💃 *baila alrededor de tu nave* ¡Mueve ese Plumbob!',
  '🕺 *bailecito espacial* ¡La gravedad cero ayuda!',
  '🎶 *pone música galáctica* ¡A moverseee!',
]
export const USER_CHEER_SEND = [
  '🎉 ¡Tú puedes! ¡Eres el mejor explorador!',
  '💪 ¡Ánimo! El universo te necesita',
  '⭐ ¡Sigue así, que llegas a las estrellas!',
]
export const USER_ASK_SEND = [
  '🤔 ¿Qué planeta me recomiendas visitar?',
  '🧐 ¿Cuánto tiempo llevas explorando?',
  '🌍 ¿Cuál es tu proyecto favorito?',
]
export const USER_APPROVE_SEND = [
  '👍 ¡Gran elección de planeta!',
  '👏 ¡Bien hecho, explorador!',
  '✅ ¡Aprobado! Tienes buen ojo',
]
export const USER_DISCORD_SEND = [
  '🎮 ¡Ey! ¿Nos vemos en Discord?',
  '🎮 ¿Te apuntas a Discord? ¡Sería genial charlar!',
  '🎮 ¡Hablamos por Discord! ¿Te mola?',
]
export const USER_FACEBOOK_SEND = [
  '📘 ¡Ey! ¿Nos vemos en Facebook?',
  '📘 ¿Conectamos por Facebook? ¡Me encantaría!',
  '📘 ¡Hablamos por Facebook! ¿Qué dices?',
]

export const WORLD_A_DURATION_MS = 5 * 60 * 1000
export const WORLD_E_HALF_DURATION_MS = 5 * 60 * 1000
export const WORLD_E_BREAK_MS = 30 * 1000
export const CTF_HITS_TO_LOSE_FLAG = 3
export const CTF_LIVES = 3
export const MAX_PLAYERS_PER_WORLD = 10
export const CREDENTIAL_WORLD_TTL_MS = 5 * 60 * 1000
