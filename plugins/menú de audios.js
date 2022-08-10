import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/ja.mp3'
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
├⇶𝐝𝐞 𝑴𝑬𝑵Ú 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶𝑺 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
├⇶📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
├⇶📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├𝄣⃟🎧𝑴𝑬𝑵Ú 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶𝑺𝄣⃟🎧 
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝄣⃟🎧_Noche de paz_
├⇶𝄣⃟🎧_Miau_
├⇶𝄣⃟🎧_Buenos dias_
├⇶𝄣⃟🎧_La cumbia del tilín_
├⇶𝄣⃟🎧_buenas noches_
├⇶𝄣⃟🎧_No pedí tu opinión_
├⇶𝄣⃟🎧_Senpai_
├⇶𝄣⃟🎧_esto va a ser épico_
├⇶𝄣⃟🎧_insulta_
├⇶𝄣⃟🎧_Audio hentai_
├⇶𝄣⃟🎧_Tiene la cara_
├⇶𝄣⃟🎧_Fiesta del admin_
├⇶𝄣⃟🎧_tengo_
├⇶𝄣⃟🎧_tranquilo_    
├⇶𝄣⃟🎧_Viernes_
├⇶𝄣⃟🎧_Chica lgante_
├⇶𝄣⃟🎧_No soy pati_
├⇶𝄣⃟🎧_Baneado_
├⇶𝄣⃟🎧_Bien pensado woody_ 
├⇶𝄣⃟🎧_Homero chino_
├⇶𝄣⃟🎧_El pepe_
├⇶𝄣⃟🎧_A nadie le importa_
├⇶𝄣⃟🎧_Sexo_
├⇶𝄣⃟🎧_nadie te pregunto_
├⇶𝄣⃟🎧_Vete a la vrg_
├⇶𝄣⃟🎧_Hola_
├⇶𝄣⃟🎧_Oye Bot te amo_
├⇶𝄣⃟🎧_Te amo_
├⇶𝄣⃟🎧_Yamete_
├⇶𝄣⃟🎧_y que agarra y qué me dice_
├⇶𝄣⃟🎧_Te diagnostico con gay_
├⇶𝄣⃟🎧_Eres fuerte_
├⇶𝄣⃟🎧_Su nivel de pendejo_
├⇶𝄣⃟🎧_Que pasa_
├⇶𝄣⃟🎧_cállese señora_
├⇶𝄣⃟🎧_Quien es tu sempai botsito 7w7_
├⇶𝄣⃟🎧_BiTCH_
├⇶𝄣⃟🎧_Bañate_
├⇶𝄣⃟🎧_cuándo se muera_
├⇶𝄣⃟🎧_Que rico_
├⇶𝄣⃟🎧_Feliz jueves_
├⇶𝄣⃟🎧_Lo puede todo_
├⇶𝄣⃟🎧_Gemime_
├⇶𝄣⃟🎧_Vivan los novios_
├⇶𝄣⃟🎧_sigues con vida_
├⇶𝄣⃟🎧_Marica quien_.
├⇶𝄣⃟🎧_Es puto_
├⇶𝄣⃟🎧_Onichan_
├⇶𝄣⃟🎧_Feliz cumpleaños_
├⇶𝄣⃟🎧_O omosa_
├⇶𝄣⃟🎧_Atencion grupo_
├⇶𝄣⃟🎧_Oh me vengo_
├⇶𝄣⃟🎧_Que linda noche_
├⇶𝄣⃟🎧_Te siento mía_
├⇶𝄣⃟🎧_hentai2_
├⇶𝄣⃟🎧_detengase admin_
├⇶𝄣⃟🎧_Canta2_
├⇶𝄣⃟🎧_Murio el grupo_
├⇶𝄣⃟🎧_Siuuu_ 
├⇶𝄣⃟🎧_Se enojan_
├⇶𝄣⃟🎧_Al unico_
├⇶𝄣⃟🎧_Se van a dormir_
├⇶𝄣⃟🎧_Hare mi rutina_
├⇶𝄣⃟🎧_Te sabes_    
├⇶𝄣⃟🎧_:c_
├⇶𝄣⃟🎧_Hay el amor_
├⇶𝄣⃟🎧_Orale_
├⇶𝄣⃟🎧_Se ríe_
├⇶𝄣⃟🎧_Que es eso_
├⇶𝄣⃟🎧_anana_
├⇶𝄣⃟🎧_No trabajo_
├⇶𝄣⃟🎧_asen_
├⇶𝄣⃟🎧_confeti_
├⇶𝄣⃟🎧_flash_
├⇶𝄣⃟🎧_Una pregunta_
├⇶𝄣⃟🎧_pinches bot_
├⇶𝄣⃟🎧_mmm_
├⇶𝄣⃟🎧_Oxxo_
├⇶𝄣⃟🎧_Mi bot es le mejor_
├⇶𝄣⃟🎧_Soy nuevo_
├⇶𝄣⃟🎧_La voz de hombre_
├⇶𝄣⃟🎧_Picachu_
├⇶𝄣⃟🎧_La voz de hombre_
├⇶𝄣⃟🎧_Pokemon_
├⇶𝄣⃟🎧_ñaña
├⇶𝄣⃟🎧_yutki_
├⇶𝄣⃟🎧_Ya basta jovenes_
├⇶𝄣⃟🎧_Verdad que te engañe_
├⇶𝄣⃟🎧_Calla maldita puta_
├⇶𝄣⃟🎧_YoShi_
├⇶𝄣⃟🎧_Me los voy a coger_
├⇶𝄣⃟🎧_manco_
├⇶𝄣⃟🎧_Me voy_
├⇶𝄣⃟🎧_Música desamor_
├⇶𝄣⃟🎧_mitamita_
├⇶𝄣⃟🎧_tuturu_
├⇶𝄣⃟🎧_woau_
├⇶𝄣⃟🎧_unga_
├⇶𝄣⃟🎧_umai_
├⇶𝄣⃟🎧_tututu_
├⇶𝄣⃟🎧_uma_
├⇶𝄣⃟🎧_uff_
├⇶𝄣⃟🎧_Tara_
├⇶𝄣⃟🎧_uchinchi_
├⇶𝄣⃟🎧_talcho_
├⇶𝄣⃟🎧_sss_
├⇶𝄣⃟🎧_a_
├⇶𝄣⃟🎧_Triste enojada toy_
├⇶𝄣⃟🎧_Bot maricon_
├⇶𝄣⃟🎧_Bot puto_
├⇶𝄣⃟🎧_estúpido_
├⇶𝄣⃟🎧_Un pato_.   
├⇶𝄣⃟🎧_Nyanpasu_
├⇶𝄣⃟🎧_El amor no existe_
├⇶𝄣⃟🎧_Es todo lo que tiene que decir_ 
├⇶𝄣⃟🎧_Muere por los humanos_
├⇶𝄣⃟🎧_La biblia_
├⇶𝄣⃟🎧_Otaku_
├⇶𝄣⃟🎧_Hace frío_
├⇶𝄣⃟🎧_Pikachu_
├⇶𝄣⃟🎧_Niconi_
├⇶𝄣⃟🎧_Mimir_
├⇶𝄣⃟🎧_Beastars_
├⇶𝄣⃟🎧_Manos_
├⇶𝄣⃟🎧_Facha_.      
├⇶𝄣⃟🎧_Sexual_
├⇶𝄣⃟🎧_Mujer_
├⇶𝄣⃟🎧_Cringe_
├⇶𝄣⃟🎧_Konede_
├⇶𝄣⃟🎧_Gambare_
├⇶𝄣⃟🎧_Pack_
├⇶𝄣⃟🎧_Temon_
├⇶𝄣⃟🎧_Primo_
├⇶𝄣⃟🎧_jaja quiero_
├⇶𝄣⃟🎧_Kya_
├⇶𝄣⃟🎧_rawr_
├⇶𝄣⃟🎧_El mundo_
├⇶𝄣⃟🎧_Nos vale_
├⇶𝄣⃟🎧_Bot gemine_.   
├⇶𝄣⃟🎧_Pespes_
├⇶𝄣⃟🎧_Ora_
├⇶𝄣⃟🎧_Hades bot_
├⇶𝄣⃟🎧_Tori_
├⇶𝄣⃟🎧_Oxxo_
├⇶𝄣⃟🎧_Mi bot es le mejor_
├⇶𝄣⃟🎧_Bunny_
├⇶𝄣⃟🎧_cancion hades2_
├⇶𝄣⃟🎧_cancion de hades_
├⇶𝄣⃟🎧_Hades es un Dios_
├⇶𝄣⃟🎧_llamando a seguridad_
├⇶𝄣⃟🎧_Atena_
├⇶𝄣⃟🎧_Que tonta eres_
├⇶𝄣⃟🎧_Bts_.         
├⇶𝄣⃟🎧_ara ara_
├⇶𝄣⃟🎧_La bebecita_
├⇶𝄣⃟🎧_Lol_
├⇶𝄣⃟🎧_Feliz navidad_
├⇶𝄣⃟🎧_Risa diabolica_
├⇶𝄣⃟🎧_Te pasas_. 
├⇶𝄣⃟🎧_Darling_
├⇶𝄣⃟🎧_Elmo_
├⇶𝄣⃟🎧_La lechuza_
├⇶𝄣⃟🎧_ñi_
├⇶𝄣⃟🎧_Éxtasis_
├⇶𝄣⃟🎧_no te acerques_
├⇶𝄣⃟🎧_Por que_
├⇶𝄣⃟🎧_La mamare_
├⇶𝄣⃟🎧_Lala_
├⇶𝄣⃟🎧_okey_
├⇶𝄣⃟🎧_Ya paso_
├⇶𝄣⃟🎧_UwU_
├⇶𝄣⃟🎧_Gracias bot_ 
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
await conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú de audios\?)$/i
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
