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
title: `๐๐๐๐๐ผ ๐ฟ๐๐๐๐๐๐๐ผ๐ฝ๐๐ | ๐ฟ๐๐๐-๐ฟ๐๐๐ ๐๐๐๐`,
rows: [
      {title: "โงอขโแคขโจ๐ฎ๐น๐ผ๐ท๐ถ๐บ ๐ถ๐ญ๐ฐ๐ช๐ฐ๐จ๐ณ๐ฌ๐บ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโงอขโแคข๐ค", description: null, rowId: `${usedPrefix}grupos`},
      {title: "๐ฅโ๐๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฉ๐ผ๐บ๐ช๐จ๐ซ๐ถ๐น๐ฌ๐บ๐ฅโ๐", description: null, rowId: `${usedPrefix}menรบbuscadores`},
       {title: "โถโ๐ฆ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐น ๐ถ ๐ซ๐ฌ๐บ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐นโถโ๐ฆ", description: null, rowId: `${usedPrefix}menuactivaciรณn`},
         {title: "โถโ๐ค๐ฌ๐บ๐ป๐จ๐ซ๐ถ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโถโ๐ง", description: null, rowId: `${usedPrefix} estado`},
         {title: " เผดโ๐นเฝผเนเฃญ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐น ๐ณ๐จ ๐ฉ๐ฐ๐ฌ๐ต๐ฝ๐ฌ๐ต๐ฐ๐ซ๐จ   เผดโโจ", description: null, rowId: `${usedPrefix}enable welcome`},
           {title: " เผดโ๐๐ซ๐ฌ๐บ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐น ๐ณ๐จ ๐ฉ๐ฐ๐ฌ๐ต๐ฝ๐ฌ๐ต๐ฐ๐ซ๐จ เผดโ๐ฅเฝผเนเฃญ", description: null, rowId: `${usedPrefix}disable welcome`},
      {title: "โออกโฃ๐๐ซ๐ถ๐ต๐จ๐น๐โออกโฃ", description: null, rowId: `${usedPrefix}donar`},
      {title: "๐นโ๐ฐ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐น๐จ๐ต๐ฉ๐ถ๐ด๐นโ๐ฉ", description: null, rowId: `${usedPrefix}menuranbom`},
       {title: "๐ฉโ๐ป๏ธโแฌฝ๐ช๐ฏ๐จ๐ป ๐จ๐ต๐ถ๐ต๐ฐ๐ด๐ถ๐ป๏ธโแฌฝ", description: null, rowId: `${usedPrefix}menuanonimo`},
      {title: "๐ฅจโธฝโ๐งฉ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐บ๐ป๐ฐ๐ช๐ฒ๐ฌ๐น๐บ๐ฅจโธฝโ๐", description: null, rowId: `${usedPrefix}menustickers`},
      {title: "๐ทโ๐ฉโ๐ป๐ด๐ฐ ๐ช๐น๐ฌ๐จ๐ซ๐ถ๐น๐ทโ๐ค", description: null, rowId: `${usedPrefix} creador`},
       {title: "โถโ๐ง๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฏ๐ฌ๐น๐น๐จ๐ด๐ฐ๐ฌ๐ต๐ป๐จ๐บโถโโ๏ธ", description: null, rowId: `${usedPrefix}menuherramienta`},
      {title: "", description: null, rowId: `${usedPrefix}menuinformaciรณn`},
       {title: "๐งจ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฌ๐ญ๐ฌ๐ช๐ป๐ถ๐บ ๐ ๐ณ๐ถ๐ฎ๐น๐ถ๐บ๐๏ธโโชอก๊ฆฝ", description: null, rowId: `${usedPrefix}menuefectos`},
        {title: "โโฏโโฏเฉญ๊ฆฟเพโฃ๐ฐ๐ต๐ฝ๐ถ๐ช๐จ๐น ๐จ๐ณ ๐ฎ๐น๐ผ๐ท๐ถโโฏโโฏเฉญ๊ฆฟเพโฃ", description: null, rowId: `${usedPrefix}invocar`},
        {title: "โโ๐ฉโ๐ป๐น๐ฌ๐ฎ๐ฐ๐บ๐ป๐น๐จ๐น๐ป๐ฌโโ๐ฉโ๐ซ", description: null, rowId: `${usedPrefix}register`},
          {title: "โโ๐ฅ๐บ๐ถ๐ณ๐ฐ๐ช๐ฐ๐ป๐จ ๐ป๐ผ ๐ท๐ฌ๐น๐ญ๐ฐ๐ณโโโค๏ธ", description: null, rowId: `${usedPrefix}perfil`},
      {title: "โงอขโแคข๐ฎ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฑ๐ผ๐ฌ๐ฎ๐ถ๐บโงอขโแคข๐ณ", description: null, rowId: `${usedPrefix}Menujuegos`},
       {title: "", description: null, rowId: `${usedPrefix}reclutamiento`},
      {title: "แณโ๐ธ๐ท๐น๐ถ๐ท๐ฐ๐ฌ๐ป๐จ๐น๐๐ถ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปแณโ๐ต", description: null, rowId: `${usedPrefix}menupropietario`},
       {title: "", description: null, rowId: `${usedPrefix}cuentasgb`},
       {title: "โโโ๐ฐ๐ต๐ญ๐ถ๐น๐ด๐จ๐ช๐ฐร๐ต๐ฉ๐ถ๐ปโโโฆ๏ธ", description: null, rowId: `${usedPrefix}infobot`},
         {title: "๐๏ธโโชอก๐ฐ๐ต๐ญ๐ถ๐ฎ๐น๐ผ๐ท๐ถ ๐ซ๐ฌ๐ณ ๐ฎ๐น๐ผ๐ท๐ถ๐๏ธโโชอก", description: null, rowId: `${usedPrefix}infogrupo`},
         {title: "โโโ๏ธ๐ฝ๐ฌ๐ณ๐ถ๐ช๐ฐ๐ซ๐จ๐ซ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโโ๐", description: null, rowId: `${usedPrefix}ping`},
        {title: "๐งจโโชอก๊ฆฝ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐น ๐ฌ๐ณ ๐จ๐ต๐ป๐ฐ๐ณ๐ฐ๐ต๐ฒ๐ชโโชอก๊ฆฝ", description: null, rowId: `${usedPrefix}enable antilink`},
          {title: "๐ชโโชอก๊ฆฝ๐ซ๐ฌ๐บ๐จ๐ช๐ป๐ฐ๐ฝ๐จ๐น ๐ฌ๐ณ  ๐จ๐ต๐ป๐ฐ๐ณ๐ฐ๐ต๐ฒ๐งจโโชอก๊ฆฝ", description: null, rowId: `${usedPrefix}disable antilink`},
          {title: "โ๏ธโโซ๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ณ๐ฐ๐ด๐ฐ๐ป๐ฌ ๐ซ๐ฌ ๐ฌ๐ช๐ถ๐ต๐ถ๐ด๐ฐ๐จ๐ฐ๏ธโโซ", description: null, rowId: `${usedPrefix}menueconomรญa`},
      {title: "โค๏ธโโชอก๐๏ธ๐๐๐๐ ๐ซ๐ฌ ๐๐๐๐๐๐๐๐๐โค๏ธโโชอก๐", description: null, rowId: `${usedPrefix}menรบdescargas`},
        {title: "๐โแฌฝ๐ณ๐ถ๐ฎ๐ถ๐บ๐โแฌฝ", description: null, rowId: `${usedPrefix}logos`},
      {title: "๐ฃโ๐ง๐ด๐ฌ๐ตร ๐ซ๐ฌ ๐จ๐ผ๐ซ๐ฐ๐ถ๐บ๐ฃโ๐ง", description: null, rowId: `${usedPrefix}menu2`},
      {title: "โงอขโแคข๐๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฎ๐ฌ๐บ๐ป๐ฐ๐ถ๐ตโงอขโแคข๐ง", description: null, rowId: `${usedPrefix}menugestion`},
      {title: "โโ๐๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ณ๐จ๐ฉ๐ฐ๐ฉ๐ณ๐ฐ๐จ+18โโโ", description: null, rowId: `${usedPrefix}menulabiblia`},

 
]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `
โญืโโืโืโโืโโืโืโโืโโืโืโโื
โโออกโฃBOTใ๐ณสแต?แตโฑแตแต๊_๐๐โออกโฃ
โโโืโืโโืโโืโืโโืโโืโืโโื
โ${ucapan()} เน?ฃ?อกอ?Holaเฆเงฃอกอแทึณแท ${name} ๐โจ 
โโืโโืโืโโืโโืโืโโืโโืโืโ
โ๐๐๐๐๐ร๐:1 BOTใ๐ณสแต?แตโฑแตแต๊_๐๐๐
โฐโืโโืโืโโืโโืโืโโืโโืโืโื`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "๐๐๐๐๐ผ ๐ฟ๐ ๐๐๐๐ | ๐๐๐๐ ๐๐๐๐", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menรบ|memu|memรบ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
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
  let res = "๐ *BIENVENIDO(A) | WELCOME* ๐"
  if (time >= 4) {
    res = "๐ *Buenos Dรญas | Good Morning* โ"
  }
  if (time >= 11) {
    res = "๐๏ธ *Buenas Tardes | Good Afternoon* ๐ค๏ธ"
  }
  if (time >= 15) {
    res = "๐ *Buenas tardes | Good Afternoon* ๐ฅ๏ธ"
  }
  if (time >= 17) {
    res = "๐ *Buenas noches | Good Evening* ๐ซ"
  }
  return res
}
