import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/Ya paso.mp3'
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
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐦𝐞𝐧ú
├⇶𝐝𝐞🌹⃟🔮𝐑𝐀𝐍𝐃𝐎𝐌🌹⃟🔮
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
├⇶📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
├⇶📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶🌹⃟🔮𝐑𝐀𝐍𝐃𝐎𝐌🌹⃟🔮
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶🌹⃟🏩_${usedPrefix}cristianoronaldo_
├⇶🌹⃟🏰_${usedPrefix}messi_
├⇶🌹⃟⛩️_${usedPrefix}meme_
├⇶🌹⃟💒_${usedPrefix}itzy_
├⇶🌹⃟🏩_${usedPrefix}blackpink_
├⇶🌹⃟🏰_${usedPrefix}kpop *<blackpink / exo / bts>*_
├⇶🌹⃟⛩️_${usedPrefix}lolivid_
├⇶🌹⃟💒_${usedPrefix}loli_
├⇶🌹⃟🏩_${usedPrefix}navidad_
├⇶🌹⃟🏰_${usedPrefix}ppcouple_
├⇶🌹⃟⛩️_${usedPrefix}neko_
├⇶🌹⃟💒_${usedPrefix}waifu_
├⇶🌹⃟🏩_${usedPrefix}akira_
├⇶🌹⃟🏰_${usedPrefix}akiyama_
├⇶🌹⃟⛩️_${usedPrefix}anna_
├⇶🌹⃟💒_${usedPrefix}asuna_
├⇶🌹⃟🏩_${usedPrefix}ayuzawa_
├⇶🌹⃟🏰_${usedPrefix}boruto_
├⇶🌹⃟⛩️_${usedPrefix}chiho_
├⇶🌹⃟💒_${usedPrefix}chitoge_
├⇶🌹⃟🏩_${usedPrefix}deidara_
├⇶🌹⃟🏰_${usedPrefix}erza_
├⇶🌹⃟⛩️_${usedPrefix}elaina_
├⇶🌹⃟🏩_${usedPrefix}eba_
├⇶🌹⃟🏰_${usedPrefix}emilia_
├⇶🌹⃟⛩️_${usedPrefix}hestia_
├⇶🌹⃟💒_${usedPrefix}hinata_
├⇶🌹⃟🏩${usedPrefix}inori_
├⇶🌹⃟🏰_${usedPrefix}isuzu_
├⇶🌹⃟⛩️_${usedPrefix}itachi_
├⇶🌹⃟💒_${usedPrefix}itori_
├⇶🌹⃟🏩_${usedPrefix}kaga_
├⇶🌹⃟🏰_${usedPrefix}kagura_
├⇶🌹⃟⛩️_${usedPrefix}kaori_
├⇶🌹⃟💒_${usedPrefix}keneki_
├⇶🌹⃟🏩_${usedPrefix}kotori_
├⇶🌹⃟🏰_${usedPrefix}kurumi_
├⇶🌹⃟⛩️_${usedPrefix}madara_
├⇶🌹⃟_${usedPrefix}mikasa_
├⇶🌹⃟💒_${usedPrefix}miku_
├⇶🌹⃟🏩_${usedPrefix}minato_
├⇶🌹⃟🏰_${usedPrefix}naruto_
├⇶🌹⃟⛩️_${usedPrefix}nezuko_
├⇶🌹⃟💒_${usedPrefix}sagiri_
├⇶🌹⃟🏩_${usedPrefix}sasuke_
├⇶🌹⃟🏰_${usedPrefix}sakura_
├⇶🌹⃟💒_${usedPrefix}cosplay_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣BOT『🅳ʀᵠᵘⁱᵐᵒꋊ_𝐌𝐃❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, '', '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', null, null, [
['𝄣⃟🎧𝑴𝑬𝑵Ú 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶𝑺𝄣⃟🎧', '/menu2'],
['❤️⃟⃪͡🗃️𝐌𝐄𝐍𝐔𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❤️⃟⃪͡🎁', '/menúdescargas'],
['✧͢⃟ᤢ🎮𝑴𝑬𝑵𝑼𝑱𝑼𝑬𝑮𝑶𝑺✧͢⃟ᤢ🎳','/menujuegos'],

], m,)
await conn.sendFile(m.chat, vn, 'Ya paso.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menuranbom|Menuranbom\?)$/i
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
