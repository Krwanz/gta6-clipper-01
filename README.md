# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Krwanz/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Krwanz/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 38-second vertical YouTube Short for the make.fun bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
Rockstar's Grand Theft Auto VI Trailer 2, cut into a fast 1-second-scene
montage, then a simulated phone screen where a prompt typed into make.fun
becomes a playable open-world Jakarta game — and an end card that says it
plainly: make.fun, buat game lu sendiri. Places go by the video's YouTube
views; the top 20 share $500.

## The clip

- **0–3s — the hook.** The trailer's biggest fireball: a car explodes and
  flips as police converge, under the text "JANGAN BELI GTA 6 DULU SEBELUM
  LIHAT INI!" — the moment the viewer came for, in the first frame.
- **3–10s — the montage.** One-second cuts with constant zoom: neon night
  Vice City, highway driving, a bike and a plane, a boat chase, the club,
  a fight, the sunset skyline.
- **10–28s — the pitch.** A simulated phone recording (drawn in code, not a
  real phone): the prompt "Bikin game open world Jakarta, bisa naik motor,
  dikejar polisi" is typed into make.fun, the AI builds it, and the game
  plays — a top-down road chase with a police car behind. Voiceover in
  Bahasa Indonesia gaul carries the script; big yellow subtitles run the
  whole time.
- **28–38s — the end card.** "MAKE.FUN — BUAT GAME LU SENDIRI", with the
  pitch in words: bikin klip kayak gini pake AI, dapet duit di make.fun.
  The last second flashes the hook text again, so the loop replays
  seamlessly into the opening.
- **Sound.** An original drill/trap beat synthesized in the session (140
  BPM, 808s, hi-hat rolls), an Indonesian text-to-speech voiceover, and
  synthesized explosion, siren, brake and boom effects. No bought views,
  no bots — the video earns its views.

The clip file itself is not in this repository; it is handed to the
channel owner to upload. The upload pack (title, description with the
bounty's line and the play code, hashtags) lives beside the clip.

## The video is the entry

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The placeholder above is no video's address, so the gate refuses it as it
stands — replace it with the real address once the clip is public on
YouTube, and submit again. `main.ts` (Node 22, standard library only)
copies `VIDEO.json` to the output directory; that is all it does.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## The video's description must carry

The bounty's line, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus one of the account's play codes (`makefun-jacket-sugar-sorbet`).
Only the description is read for them — never the title, the captions or
the picture. Keep the video public until the results are out.
