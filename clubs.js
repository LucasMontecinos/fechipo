// ═══════════════════════════════════════════════════════════════
// YourLift — Logos de clubes afiliados FECHIPO
// Fuente: https://www.fechipo.com (sección "Clubes Afiliados")
// ═══════════════════════════════════════════════════════════════
// El helper hace match por substring normalizado, así que
// "All Power CD", "All Power", "ALL POWER" todos matchean a 'allpower'.
// Si fechipo.com cambia un logo, se actualiza la URL acá.
// Si una URL deja de funcionar (Google Sites a veces rota tokens),
// reemplazá por la versión local en /clubs/<key>.png.
// ═══════════════════════════════════════════════════════════════

window.CLUBS_LOGOS = {
  'allpower':         'https://lh3.googleusercontent.com/sitesv/AA5AbUD0jFT_T5InIeP5yT3r-qxziMatHmHjALdTkYGu4EaLssfelRCf1Sa5LVcNTOLaG1aouCVVjYJk5ftaI9b79xdcTCpaq13buXjgRVtkksFD-bazhH8kXQvL8oRDGq1OZ5cihitUTIbOsTXY6QoiBhvQd6_6FzHKNtuCqZQ-wOK1AWtnhqgCuMentzLl0n-KLMuqpH3UDhfyqjKxyv4C6QQIHRf-nozL5RRWpC0=w240',
  'himalaya':         'https://lh3.googleusercontent.com/sitesv/AA5AbUCkeDOYDOGTyi1c9SmBS-dRxUO9tbhQ9H24miuUmsAbF_WFR-nfcft1mOIaDTPIqsga6tp-33ZX0HlCJ3euYa0rNh_-QNzXttMxW3vC3hekhi1UExaxhnWzNlk31HtWmYB3btUb8nIfZo1ttgLjrnvvor8nvgyZLKkRL_jgmkfJ9r3zDy__3vjuOg2vMZ99prvUlGAsSpLIjyfgGVzZIhaj7cc4iUPbRv9TFpo=w240',
  'beersandlifts':    'https://lh3.googleusercontent.com/sitesv/AA5AbUBzV977jqgvA1nvc20UGDl8aG2WH9H-cV42TU_LXi6SxcwT5G3HDdv7A2QJeBKhSKQQZpImQeqnIt0N0f1121VLF5LVn0ncGM2ZHfX9zAa9XwJ-Y1Hl5QTxGdybzytpS0vEQqcaBSIc5RQdw0cHSAX03fhDmHTx2MfxrSx46gKO9drR-ZyyfiiDimc=w240',
  'ironforces':       'https://lh3.googleusercontent.com/sitesv/AA5AbUDvxXQvc8FP0W1nC0dzPLot_ZnmVR6nb3JncvLCMAby4zmzT3tJQTu7y11Xk3mkC8Ub9n10dUQfRyxFUOpu1QSDsGNh39DnTg4sWcVGdABbhUJAoSRqCcpKkH6OR1PabepJnEpLsCK8q88UgKhDkOqTj3YTuOVuZWLsmupO_SZAlLLBRFHNib6-mbI=w240',
  'jaquesoliger':     'https://lh3.googleusercontent.com/sitesv/AA5AbUAPGBFwwRSVkfEGqEJ59S9a2sl9TroMihF_VVjP4k-c5trhbHDlkTm6fIemZIzs2yniiDFTnm8D0ANWVGOebT3DcAf6qbiJ4_PVEe3VXN6ckfpjszkWNsTAGrEb92h_4zZsfN0STfKZcBVNrPkLnbnnkK8DTLcxWNA1e4tTCe0_Xb4S2EdfV6lq3ohnQMhi0yANdli5-FGfl1MljjHrlmFCI6h6LtRf3jylyPk=w240',
  'lostoros':         'https://lh3.googleusercontent.com/sitesv/AA5AbUBnouyrCjt8eHkE9ORUfqxTEYu82hFOSfCi9C3H4rVfPkTLaL-SsWcMq8hphaVKKCKEF-UCyyOCIo_rUlJJH8Bem0PyO86r2jb48rAz9facBuh3fGW9iVkunqsy5WJDN43xsceheE4sDh3QI9NUkIBCVZrceObHHXIOzoz5vfoEewjrNtqE7gZVqdpOnafLUQpmnvjZcO1J23DovJsyCOUGxlrTnBoWU8s-=w240',
  'potenciamuscular': 'https://lh3.googleusercontent.com/sitesv/AA5AbUAGU9EcMmezM8C-nzGVhLN47P4bcmI_1QC_zwHmzPnQcdpg0_8yIc8ofysDLFFNrSlsrM_EZFMKNNsGHqs_MUpqTbAus5AyfOk95E5dNa5XKFp4kNiC5E_K0Gu9wGHPVGRZOx6Rpsv8cUKdI9in1LrmF-Pkw_QSEX88pByaeM1FXB-9ClUMkYaG8uvmNP0-23O8t6zHCa3r7v7qT_QieVMFF6xu27Ao9lr5_Fk=w240',
  'kaizen':           'https://lh3.googleusercontent.com/sitesv/AA5AbUB2m0Lgpzdh482ALF7efKCIdyBrE8luYEwWewwIC4gaPrap6zTWO4WgPNlyiwG5LGGhpQILOVJWAiid0YYL7fFsWG-U36Jdx_J2rUSNP5wD4djm33V_jwg16YEQ1UkLlgij3HIPjhs4Ugmwg2FjRUeReDY7VuHbwIvCnydARKiW-LT2i8-LRzWbJzALfCVb6gNp3ddgtduGk7m014kp1AuSsHu-oAO6o4YXiS0=w240',
  'rema':             'https://lh3.googleusercontent.com/sitesv/AA5AbUBsH3sU3LC3Vfs1em76gAaTKv5u4dmXZ6hhR_yTASUSaajnkY0OT2qS9-AfNYAcxg2WFeCM6jA-NBX43AFC3zddxdOOXZZJVRextcJEUQAcGu5gZdoB7Vg3-yig9UisUaer01TWDPyjgL06evjWGoWc8786BRZ1Io7u0KD7jiAKQLF2FRKzONv9c5s=w240',
  'southside':        'https://lh3.googleusercontent.com/sitesv/AA5AbUDRHfzOeQ4bR3DDzSwN-fhssYLh3kkQtL9_YhFgev5iXI67wcOBMQ5cy1jwGYa--0kYHrtAJMMUuIHMTXn0S7R2s4soDQKs1zgQfDLWoWrI6PcqKDRWcTpZD_MLZatd3uFxeL8yjJszC0eYOqFtCjMFFHeZuUbQlnJiMNOdJb0LyJ68__kXoU3YEzsTte9thaRp9T-Rr1DpHsUHigkIAIuPx_8ZWBoUmtbe=w240',
  'hannya':           'https://lh3.googleusercontent.com/sitesv/AA5AbUDrb7yHVkWH5CVuk-HVgJ1sY6oPkprWFkkg06qxB9zxaXDt_mVwFeQRb-rSf7MR8HydkC4b46ggOXWqoODs69jQdbZZX9h7J3s6wOKxEF3dEnEo1U9nclwMmgUkm8MeH9AOTTwa1anM9RxnqcNv5yeyBb06NSv2hx7EyjpMH0XA1XOiP0B_87gQdB5FFOQOS6UoKfRJeW6ojfxHFOwrishrii4yOQuPdsDf7_0=w240',
  'bushido':          'https://lh3.googleusercontent.com/sitesv/AA5AbUBezNuQ2E3dylb7g510vbqDgfGnlYFtK7ZYy1YsHXNs4hZW1eYINB1CioEXm9895qC-LhIvANehzs_ZDOb4qZR1OjNQiJlTICb2J-px2uzXe9T0hniyUwvctERQze9-OUmUfpFbcbzPPNRfZMFJAJJ6ygh6Lcv-HeyRL20ihu9fXAtYCs7cM8ZeKtmoz06kY1qJC4hXNVzKS7S09hVLsXArbmx4ZzTlVecOeIo=w240',
  'atacama':          'https://lh3.googleusercontent.com/sitesv/AA5AbUCxsBaOvlHG_YS0KW-3BD3piNe-Jz1ZV5iCnBaHB2S8waTl4f2hCRI93clmqJYCH6l3WIrP9p1-Oa7At1S6gWyhaWY30Q08qvy4E3c4tyYgb6LRkzpHrVdDtEtoDHqNE4DERKqHvDjiXs7L4E6D97gov_M9-LQZSypNkC0YVAbZQEflwtQtZ9iy5Frqpl4JCPZCyylSLphCBB-jYyEaV_OpIWDk1EkDPDtp=w240'
};

// Normaliza nombre: minúsculas, sin acentos, sin espacios ni símbolos
window.normClub = function(s){
  return (s||'').toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]/g,'');
};

// Devuelve URL del logo o '' si no hay match
window.clubLogo = function(name){
  if(!name) return '';
  const n = window.normClub(name);
  // Match por substring: 'allpowercd' contiene 'allpower'
  const map = window.CLUBS_LOGOS;
  for(const key in map){
    if(n.indexOf(key) >= 0) return map[key];
  }
  return '';
};

// HTML helper: <img> con onerror para que no rompa el layout si el URL falla
window.clubLogoImg = function(name, size, extraStyle){
  const url = window.clubLogo(name);
  if(!url) return '';
  const s = size || 24;
  const xs = extraStyle || '';
  return '<img src="'+url+'" alt="" loading="lazy" '
    +'style="width:'+s+'px;height:'+s+'px;object-fit:contain;border-radius:4px;'+xs+'" '
    +'onerror="this.style.display=\'none\'">';
};
