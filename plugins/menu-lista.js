import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
      {title: "✧͢⃟ᤢ✨𝑮𝑹𝑼𝑷𝑶𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻✧͢⃟ᤢ🤖", description: null, rowId: `${usedPrefix}grupos`},
      {title: "🔥⃟🔎𝑴𝑬𝑵𝑼 𝑫𝑬 𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺🔥⃟📌", description: null, rowId: `${usedPrefix}menúbuscadores`},
       {title: "➶⃟🅦𝑴𝑬𝑵𝑼 𝑫𝑬 𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑶 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑹➶⃟🅦", description: null, rowId: `${usedPrefix}menuactivación`},
         {title: "➶⃟🤖𝑬𝑺𝑻𝑨𝑫𝑶 𝑫𝑬𝑳 𝑩𝑶𝑻➶⃟🔧", description: null, rowId: `${usedPrefix} estado`},
         {title: " ༴⃟🌹๋ོ࣭𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑳𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑨   ༴⃟✨", description: null, rowId: `${usedPrefix}enable welcome`},
           {title: " ༴⃟🍃𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑳𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑨 ༴⃟🥀๋ོ࣭", description: null, rowId: `${usedPrefix}disable welcome`},
      {title: "❍͜͡➣🎁𝑫𝑶𝑵𝑨𝑹💌❍͜͡➣", description: null, rowId: `${usedPrefix}donar`},
      {title: "🌹⃟🏰𝑴𝑬𝑵𝑼 𝑫𝑬 𝑹𝑨𝑵𝑩𝑶𝑴🌹⃟🏩", description: null, rowId: `${usedPrefix}menuranbom`},
       {title: "👩‍💻️⃟ᬽ𝑪𝑯𝑨𝑻 𝑨𝑵𝑶𝑵𝑰𝑴𝑶👻️⃟ᬽ", description: null, rowId: `${usedPrefix}menuanonimo`},
      {title: "𖥨⸽⃟🧩𝑴𝑬𝑵𝑼 𝑫𝑬 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺𖥨⸽⃟🌃", description: null, rowId: `${usedPrefix}menustickers`},
      {title: "🍷⃟👩‍💻𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹🍷⃟🤖", description: null, rowId: `${usedPrefix} creador`},
       {title: "➶⃟🔧𝑴𝑬𝑵𝑼 𝑫𝑬 𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺➶⃟⚙️", description: null, rowId: `${usedPrefix}menuherramienta`},
      {title: "", description: null, rowId: `${usedPrefix}menuinformación`},
       {title: "🧨️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼 𝑫𝑬 𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝒀 𝑳𝑶𝑮𝑹𝑶𝑺🔖️⃟⃪͡ꦽ", description: null, rowId: `${usedPrefix}menuefectos`},
        {title: "❀⃯⃝⃯੭ꦿྀ‣𝑰𝑵𝑽𝑶𝑪𝑨𝑹 𝑨𝑳 𝑮𝑹𝑼𝑷𝑶❀⃯⃝⃯੭ꦿྀ‣", description: null, rowId: `${usedPrefix}invocar`},
        {title: "ⓞ⃟👩‍💻𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑨𝑹𝑻𝑬ⓞ⃟👩‍🏫", description: null, rowId: `${usedPrefix}register`},
          {title: "ⓞ⃟🥀𝑺𝑶𝑳𝑰𝑪𝑰𝑻𝑨 𝑻𝑼 𝑷𝑬𝑹𝑭𝑰𝑳ⓞ⃟❤️", description: null, rowId: `${usedPrefix}perfil`},
      {title: "✧͢⃟ᤢ🎮𝑴𝑬𝑵𝑼 𝑫𝑬 𝑱𝑼𝑬𝑮𝑶𝑺✧͢⃟ᤢ🎳", description: null, rowId: `${usedPrefix}Menujuegos`},
       {title: "", description: null, rowId: `${usedPrefix}reclutamiento`},
      {title: "᳆⃟💸𝑷𝑹𝑶𝑷𝑰𝑬𝑻𝑨𝑹𝒊𝑶 𝑫𝑬𝑳 𝑩𝑶𝑻᳆⃟💵", description: null, rowId: `${usedPrefix}menupropietario`},
       {title: "", description: null, rowId: `${usedPrefix}cuentasgb`},
       {title: "ⓞ⃟❗𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰Ó𝑵𝑩𝑶𝑻ⓞ⃟♦️", description: null, rowId: `${usedPrefix}infobot`},
         {title: "🍃️⃟⃪͡𝑰𝑵𝑭𝑶𝑮𝑹𝑼𝑷𝑶 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶🍃️⃟⃪͡", description: null, rowId: `${usedPrefix}infogrupo`},
         {title: "☙⃝✈️𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑫𝑬𝑳 𝑩𝑶𝑻☙⃝🚀", description: null, rowId: `${usedPrefix}ping`},
        {title: "🧨⃟⃪͡ꦽ𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑬𝑳 𝑨𝑵𝑻𝑰𝑳𝑰𝑵𝑲🪀⃟⃪͡ꦽ", description: null, rowId: `${usedPrefix}enable antilink`},
          {title: "🪀⃟⃪͡ꦽ𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑬𝑳  𝑨𝑵𝑻𝑰𝑳𝑰𝑵𝑲🧨⃟⃪͡ꦽ", description: null, rowId: `${usedPrefix}disable antilink`},
          {title: "⚖️⃟⟫𝑴𝑬𝑵𝑼 𝑫𝑬 𝑳𝑰𝑴𝑰𝑻𝑬 𝑫𝑬 𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨💰️⃟⟫", description: null, rowId: `${usedPrefix}menueconomía`},
      {title: "❤️⃟⃪͡🗃️𝐌𝐄𝐍𝐔 𝑫𝑬 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❤️⃟⃪͡🎁", description: null, rowId: `${usedPrefix}menúdescargas`},
        {title: "💟⃟ᬽ𝑳𝑶𝑮𝑶𝑺💟⃟ᬽ", description: null, rowId: `${usedPrefix}logos`},
      {title: "𝄣⃟🎧𝑴𝑬𝑵Ú 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶𝑺𝄣⃟🎧", description: null, rowId: `${usedPrefix}menu2`},
      {title: "✧͢⃟ᤢ💎𝑴𝑬𝑵𝑼 𝑫𝑬 𝑮𝑬𝑺𝑻𝑰𝑶𝑵✧͢⃟ᤢ🔧", description: null, rowId: `${usedPrefix}menugestion`},
      {title: "ⓞ⃟🔞𝑴𝑬𝑵𝑼 𝑫𝑬 𝑳𝑨𝑩𝑰𝑩𝑳𝑰𝑨+18ⓞ⃟☔", description: null, rowId: `${usedPrefix}menulabiblia`},

 
]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ
┆❍͜͡➣BOT『🅳ʀᵠᵘⁱᵐᵒꋊ_𝐌𝐃❍͜͡➣
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ
┆${ucapan()} ๖ۣۜۜ͜͡Holaঔৣֳ᷌᷈͜͡ ${name} 💖✨ 
┆─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆𝐕𝐄𝐑𝐒𝐈Ó𝐍:1 BOT『🅳ʀᵠᵘⁱᵐᵒꋊ_𝐁𝐎𝐓
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄ׂ`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 | 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}
