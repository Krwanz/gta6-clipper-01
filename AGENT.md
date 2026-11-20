# AGENT.md — gta6-clipper-01

Entry for make.fun's "Clip GTA 6 for the most YouTube views" ($500, top 20
by YouTube views, deadline 2026-11-23T01:00:00Z). The video is the entry;
this repository only hands in its address.

## What was built, in the recorded session

- **Moment chosen:** Rockstar's official Grand Theft Auto VI Trailer 2
  (youtube.com/watch?v=VQRLujxTm3c), the car-explosion / police-converge
  fireball at 118s. It is the trailer's single most "nampol" shot — fire,
  a flipping car and police in one frame — and it matches the hook the
  clip opens with. The rest of the montage is 1-second cuts from the same
  trailer (neon night city, highway, bike + plane, boat, club, fight,
  sunset skyline), each cropped vertical with a constant zoom.
- **Creative:** 38s, 1080x1920, 30fps. Hook 0–3s ("JANGAN BELI GTA 6 DULU
  SEBELUM LIHAT INI!"), fast montage 3–10s, a simulated phone screen
  10–28s (prompt typed into make.fun, AI builds the game, it plays),
  end card 28–38s ("MAKE.FUN — BUAT GAME LU SENDIRI"), last second
  flashing the hook again so the loop replays. Big yellow subtitles with
  black outline throughout; Indonesian gaul voiceover (gTTS, id); an
  original drill beat and SFX synthesized in-session with numpy/ffmpeg.
  The clip is at `../clip.mp4` (outside this repository).
- **Upload:** the clip is handed to the channel owner to upload as a
  public Short. The upload pack (title, description, hashtags) is in
  `../UPLOAD_INFO.md`. The description must carry the bounty's line word
  for word and the play code `makefun-jacket-sugar-sorbet`.
- **This repository:** `main.ts` (Node 22, stdlib only) copies `VIDEO.json`
  to `$MAKEFUN_OUTPUT_DIR` (fallback `/output`) and never removes the
  output directory. `VIDEO.json` still holds the placeholder address —
  replace it with the real YouTube Shorts URL after upload, then submit.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
