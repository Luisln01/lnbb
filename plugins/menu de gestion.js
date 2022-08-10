import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/tuturu.mp3'
let pp = './media/menus/Menuvid1.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let str = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐦𝐞𝐧ú 𝐝𝐞
├⇶✧͢⃟ᤢ💎𝐆𝐄𝐒𝐓𝐈𝐎𝐍✧͢⃟ᤢ🔧
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
├⇶📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
├⇶📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶✧͢⃟ᤢ💎𝐆𝐄𝐒𝐓𝐈𝐎𝐍✧͢⃟ᤢ🔧
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶✧͢⃟ᤢ💎_${usedPrefix}add *<numero>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}kick *<@tag>*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}grupo *<abrir / cerrar>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}promote *<@tag>*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}demote *<@tag>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}banchat_
├⇶✧͢⃟ᤢ💎_${usedPrefix}unbanchat_
├⇶✧͢⃟ᤢ🔧_admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├⇶✧͢⃟ᤢ💎_${usedPrefix}demote *<@tag>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}infogroup_
├⇶✧͢⃟ᤢ💎_${usedPrefix}link_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}setname *<texto>*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}setdesc *<texto>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}invocar *<texto>*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}hidetag *<texto>*_
├⇶✧͢⃟ᤢ🔧_${usedPrefix}simular *<welcome / bye / promote / demote>*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣BOT『🅳ʀᵠᵘⁱᵐᵒꋊ_𝐌𝐃❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://wa.me/59160189030', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁',  null, null, [
['🌹͜͡꙰➢𝑴𝑬𝑵𝑼 𝑫𝑬 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰Ó𝑵🌹͜͡꙰➢', '/menuinformación'],
['🧨️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼 𝑫𝑬 𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝒀 𝑳𝑶𝑮𝑹𝑶𝑺🔖️⃟⃪͡ꦽ', '/menuefectos'],
['❀⃯⃝⃯੭ꦿྀ‣𝑰𝑵𝑽𝑶𝑪𝑨𝑹 𝑨𝑳 𝑮𝑹𝑼𝑷𝑶❀⃯⃝⃯੭ꦿྀ‣',  '/invocar'],

], m,)
await conn.sendFile(m.chat, vn, 'tuturu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menugestion|Menugestion\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
