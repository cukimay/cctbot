exports.info = (id, CCTB, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${CCTB}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${CCTB}*
╠════════════════════
║├≽️⚜ *AUTOR* : _Cukimay_
║├≽️⚜ *DESIGNER* : _Cukimay_
║├≽️⚜ *OWNER* : _CCT_
╠════════════════════
║  *${CCTB}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${CCTB}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY CCT*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
