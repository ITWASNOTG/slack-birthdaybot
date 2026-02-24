/***** CONFIG – fill these in with your own values *****/
const PEOPLE_TEAM_DRAFT_WEBHOOK = 'YOUR_PEOPLE_TEAM_WEBHOOK_URL_HERE'; // private People Team channel
const COMPANY_CHANNEL_WEBHOOK   = 'YOUR_COMPANY_CHANNEL_WEBHOOK_URL_HERE'; // company-wide channel
const WEB_APP_BASE_URL          = 'YOUR_WEB_APP_URL_HERE'; // paste after deploying (Step 5)
const SHEET_NAME                = 'Birthdays';
const TIMEZONE                  = 'Europe/London';

/***** Curated GIFs – add as many as you like, separated by commas *****/
const GIFS = [
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZzaWIzMmc5aW41azhsY2J1OHJiamE3Yzh1Nm56bHV1NHUwb252aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g5R9dok94mrIvplmZd/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZzaWIzMmc5aW41azhsY2J1OHJiamE3Yzh1Nm56bHV1NHUwb252aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wGKrkvHxZT6PVpw635/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmdreXRpNDBzc2Y3dnZ0bW43dWhkOXdyd2l5MHhueGZ0YndjOXo2ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S5oVZIvOlYInEgDtFX/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a2hmMmtmMWQ5dG51ZnZscW8xNGIzMG0wdHBveDBxOWEzMWh4cTV5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fr5XCUeBXeP8mxS9Yv/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3gxOGJva2VyMHJ3d2x6cG04OGxtNXN3Z2k1ejFidGVma3k3Z3h0cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pX8pS6MIvtH7ues1Vq/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3gxOGJva2VyMHJ3d2x6cG04OGxtNXN3Z2k1ejFidGVma3k3Z3h0cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/42JyIG6NgQiL9TgIYP/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd1cjlyNXFrNHRtdnNiMTdoZ2pqamFwNzIycHAydjJ5dmp5bnA3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RBSl3CbhLTo5rZmVgp/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2ozd2dnc2JkYWF5emZnOW55enZ1Yng1c2loZGE3NGhrN3U3bXc5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NsIgSsYiQfv8c/giphy.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGtseTB4cDdjMmRjeWNwOTgwdWpiazNnZWR1ang3N3liMHI1YTRybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxfcsFhVkd0UOsdW/giphy.gif',
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXAxMm54eWxha2llcHlqOXkyZm92azJjMzRkcG03aHkweGIxdmJjNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eDXcHIdARrCv9xjqZ9/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmkzZDZ5YjdyZWlpaDdhbzYxdWw0bWVzNW12YTc1YXd2N2V0ZGoxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QT5awcIL79arsipL3Z/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzNzVpcXRiYXVoODZ0ejZ3cTU1dGpkcGk0Y2J3ZmJnZGJ1NXgyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWExYTMzczVyYzRjam42cmNxb3ZzOG02aXJqcm96MnpvMWRyZGY3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQYR1p8saOQla/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVwbWVwcDliajV5cGRkOWl5ajBoc2d2bHE0cDJjM3JhbWJsMGp4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYR1KTJeMe7F2mY/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm54dnBnMzVjdmkyNGxrNDI3Z2Q5amRlMWRwa2FyN2ttMjI5aWxxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s2qXK8wAvkHTO/giphy.gif'
];

/***** Fun blurbs – will cycle without repeating until the list resets *****/
const BLURBS = [
  "🎂 Wishing you a wonderful birthday and a year ahead full of things that make you happy.",
  "🥳 Hope your day brings good food, good company, and a chance to celebrate yourself.",
  "🧁 Here's to a birthday that's relaxed, joyful, and just the way you like it.",
  "🍰 A birthday is the perfect excuse to pause, enjoy the moment, and have an extra slice of cake.",
  "🎈 Celebrating you today - may the year ahead bring plenty of small wins and big smiles.",
  "🎊 Happy birthday - take time to do something that makes you feel recharged and appreciated.",
  "🌟 Another year around the sun — wishing you steady progress, good health, and a few adventures along the way.",
  "🎁 Birthdays are for treating yourself — hope you find a moment today to do exactly that.",
  "🧁 Wishing you a day with space for joy, laughter, and maybe a little indulgence.",
  "💫 Here's to a year ahead that feels joyful, rewarding, and full of moments worth remembering."
];

/***** Script storage *****/
const STORE_KEY = 'BIRTHDAY_STORE_V2';

/********** MAIN: daily collector **********/
function runDaily() {
  const today = todayInTZ();
  const isFriday = today.getDay() === 5;
  const targets = [today];
  if (isFriday) {
    targets.push(addDays(today, 1), addDays(today, 2));
  }

  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
  const rows = getRows(sheet);

  const matches = [];
  rows.forEach(r => {
    if (!r.Name || !r.DOB) return;
    if ((r.Status || '').toLowerCase() !== 'active') return;
    if (!toBoolean(r.WantsCelebrated)) return;

    const dob = parseYMD(r.DOB);
    if (!dob) return;

    for (const d of targets) {
      if (dob.getMonth() === d.getMonth() && dob.getDate() === d.getDate()) {
        matches.push({
          id: Utilities.getUuid(),
          name: r.Name,
          handle: r.SlackHandleOrID || '',
          dob: r.DOB,
          postDateISO: toISODate(d),
          gif: pickGif(),
          blurb: nextBlurb()
        });
        break;
      }
    }
  });

  if (matches.length === 0) return;

  const store = getStore();
  const pending = store.pending || {};
  matches.forEach(m => pending[m.id] = m);
  saveStore({ pending, blurbBag: store.blurbBag || [] });

  matches.forEach(m => postDraftToPeopleTeam(m));
}

/********** APPROVE / REJECT endpoint **********/
function doGet(e) {
  try {
    const action = (e.parameter.action || '').toLowerCase();
    const id = e.parameter.id;
    if (!action || !id) return html('Missing parameters.');

    const store = getStore();
    const pending = store.pending || {};
    const item = pending[id];
    if (!item) return html('Someone already dealt with this request.');

    if (action === 'approve') {
      postFinalToCompany(item);
      postStatusToPeopleTeam(item, 'approved');
      delete pending[id];
      saveStore({ pending, blurbBag: store.blurbBag || [] });
      return html(`Posted birthday message for ${escapeHtml(item.name)} to the company channel. 🎉`);
    }
    if (action === 'reject') {
      postStatusToPeopleTeam(item, 'rejected');
      delete pending[id];
      saveStore({ pending, blurbBag: store.blurbBag || [] });
      return html(`Rejected. No post was made for ${escapeHtml(item.name)}.`);
    }

    if (action === 'reshuffle') {
      item.gif = pickGif();
      item.blurb = nextBlurb();

      pending[id] = item;
      saveStore({ pending, blurbBag: store.blurbBag || [] });

      postDraftToPeopleTeam(item);
      postStatusToPeopleTeam(item, 'reshuffled');
      return html(`Regenerated birthday message for ${escapeHtml(item.name)}. A new draft has been posted in the People Team channel.`);
    }

    return html('Unknown action.');
  } catch (err) {
    return html('Error: ' + escapeHtml(err.message));
  }
}

/********** Slack posting **********/
function postDraftToPeopleTeam(item) {
  const text = `Birthday draft for *${item.name}* (${item.postDateISO})`;
  const approveUrl = `${WEB_APP_BASE_URL}?action=approve&id=${encodeURIComponent(item.id)}`;
  const rejectUrl  = `${WEB_APP_BASE_URL}?action=reject&id=${encodeURIComponent(item.id)}`;

  const payload = {
    text,
    blocks: [
      { type: 'section', text: { type: 'mrkdwn', text: `*🎂 Birthday draft: ${item.name}*` } },
      { type: 'context', elements: [{ type: 'mrkdwn', text: `Target post date: *${item.postDateISO}*` }] },
      item.gif ? { type: 'image', image_url: item.gif, alt_text: 'birthday gif' } : null,
      { type: 'section', text: { type: 'mrkdwn', text: buildFinalText(item) } },
      {
        type: 'actions',
        elements: [
          { type: 'button', text: { type: 'plain_text', text: 'Approve ✅' }, url: approveUrl },
          { type: 'button', text: { type: 'plain_text', text: 'Reject ❌'  }, url: rejectUrl },
          { type: 'button', text: { type: 'plain_text', text: 'Regenerate 🔄' }, url: `${WEB_APP_BASE_URL}?action=reshuffle&id=${encodeURIComponent(item.id)}` }
        ]
      }
    ].filter(Boolean)
  };

  postToWebhook(PEOPLE_TEAM_DRAFT_WEBHOOK, payload);
}

function postFinalToCompany(item) {
  const todayISO  = toISODate(todayInTZ());
  const targetISO = item.postDateISO;
  const plainHeadline = (targetISO === todayISO)
    ? `🎉 Happy birthday, ${item.name}!`
    : `🎉 Happy birthday, ${item.name}, for when you're celebrating on the weekend!`;

  const payload = {
    text: plainHeadline,
    blocks: [
      { type: 'section', text: { type: 'mrkdwn', text: buildFinalText(item) } },
      item.gif ? { type: 'image', image_url: item.gif, alt_text: 'birthday gif' } : null
    ].filter(Boolean)
  };
  postToWebhook(COMPANY_CHANNEL_WEBHOOK, payload);
}

function buildFinalText(item) {
  const who = item.handle ? normalizeHandle(item.handle) : item.name;

  const todayISO  = toISODate(todayInTZ());
  const targetISO = item.postDateISO;

  const headline = (targetISO === todayISO)
    ? `🎉 *Happy Birthday ${who}!*`
    : `🎉 *Happy Birthday ${who} for when you celebrate this weekend!*`;

  return [
    headline,
    item.blurb
  ].join('\n');
}

/********** Blurb cycling (no repeats until all used) **********/
function nextBlurb() {
  const store = getStore();
  let bag = store.blurbBag || [];
  if (!Array.isArray(bag) || bag.length === 0) {
    bag = shuffle([...BLURBS]);
  }
  const blurb = bag.shift();
  saveStore({ pending: store.pending || {}, blurbBag: bag });
  return blurb;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/********** Utilities **********/
function postToWebhook(url, payload) {
  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
}

function getRows(sheet) {
  const range = sheet.getDataRange().getValues();
  if (range.length < 2) return [];
  const headers = range[0].map(String);
  const rows = [];
  for (let i = 1; i < range.length; i++) {
    const obj = {};
    headers.forEach((h, idx) => obj[h.trim()] = range[i][idx]);
    rows.push(obj);
  }
  return rows;
}

function todayInTZ() {
  const y = Number(Utilities.formatDate(new Date(), TIMEZONE, 'yyyy'));
  const m = Number(Utilities.formatDate(new Date(), TIMEZONE, 'MM'));
  const d = Number(Utilities.formatDate(new Date(), TIMEZONE, 'dd'));
  return new Date(y, m - 1, d);
}

function toISODate(d) { return Utilities.formatDate(d, TIMEZONE, 'yyyy-MM-dd'); }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }

function parseYMD(v) {
  if (Object.prototype.toString.call(v) === '[object Date]') return v;
  if (typeof v !== 'string') return null;
  const m = v.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

function toBoolean(v) {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'string') return ['true','yes','y','1'].includes(v.trim().toLowerCase());
  if (typeof v === 'number') return v !== 0;
  return false;
}

function getStore() {
  const raw = PropertiesService.getScriptProperties().getProperty(STORE_KEY);
  return raw ? JSON.parse(raw) : { pending: {}, blurbBag: [] };
}

function saveStore(obj) {
  PropertiesService.getScriptProperties().setProperty(STORE_KEY, JSON.stringify(obj));
}

function html(msg) {
  const t = HtmlService.createHtmlOutput(`<p>${escapeHtml(msg)}</p>`);
  return t;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function pickGif() {
  return GIFS[Math.floor(Math.random() * GIFS.length)];
}

function normalizeHandle(h) {
  if (!h) return '';
  const m = String(h).trim();
  if (/^<@U[A-Z0-9]+>$/.test(m)) return m;
  if (/^U[A-Z0-9]+$/.test(m))   return `<@${m}>`;
  return m;
}

function postStatusToPeopleTeam(item, status) {
  const emoji = status === 'approved' ? '✅'
              : status === 'rejected' ? '❌'
              : status === 'reshuffled' ? '🔄'
              : 'ℹ️';
  const text = `${emoji} Birthday message for ${item.name} (${item.postDateISO}) ${status}.`;
  postToWebhook(PEOPLE_TEAM_DRAFT_WEBHOOK, { text });
}
