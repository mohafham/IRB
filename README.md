# Irram Fatima — Chapter 21

A responsive, vintage-scrapbook birthday memory website built with plain HTML, CSS and JavaScript.

## Preview locally
1. Extract this folder.
2. Open `index.html` in a browser. For the best experience, run a local static server (for example, VS Code Live Server).

## Add your photos
Put your real photos in `assets/photos/` using these exact filenames:
- `cover.jpg` — hero portrait (also update the `data-photo` placeholder in `index.html`; see note below)
- `childhood-01.jpg` through `childhood-05.jpg`
- `family-01.jpg`
- `relatives-01.jpg`
- `friends-01.jpg`

The photo frames are currently styled placeholders. To display real photos, replace each element's `photo-placeholder` class with `photo-fill` and add an inline background image, for example:
`style="background-image:url('assets/photos/childhood-01.jpg')"`.

For the cover photo, change:
`class="hero-photo photo-placeholder"` to `class="hero-photo photo-fill"` and add:
`style="background-image:url('assets/photos/cover.jpg')"`.

## Add audio
Place these files in `assets/audio/`:
- `mom-wish.mp3`
- `dad-wish.mp3`
- `background-music.mp3` (optional; use music you have permission to share)

The audio players and optional play/pause music control are already wired up. Audio starts only after a visitor presses play.
The background player uses `background-music.mp3` and stops automatically when a birthday video starts.

## Add birthday videos
Place up to five birthday recordings in `assets/videos/` using these filenames:
- `birthday-01.mp4` through `birthday-05.mp4`

The “Little films, big love” gallery displays each recording with native video controls.
The first recording uses the browser-optimized `birthday-01-web.mp4` copy so its audio plays reliably.

## Personalise
- Edit the timeline years and captions in `index.html`.
- Edit the three surprise-note messages in the `data-message` attributes in `index.html`.
- Update photo captions and section text in `index.html`.
- Replace the generic timeline dates with her actual milestones. The current 2005 birth-year entry is only a sample and should be corrected if needed.

## Deploy
This is a static website. You can deploy the folder using Vercel (New Project → import a Git repository) or Netlify (Add new site → deploy manually). Keep the `index.html`, `styles.css`, `script.js`, and `assets` folder together.
Anyone with the public link can view the site. Do not upload private or sensitive photos if you are not comfortable making them accessible to anyone with the link.
