# Unit 4 static site deployment

## Files
Upload all files in this folder to your GitHub repo root (or the lesson subfolder you want to publish).

## Before publishing
1. Replace every `YOUR_GOOGLE_FORM_URL` with your actual Google Form link.
2. Put audio files in an `audio/` folder:
   - `audio/reading_4_0.mp3`
   - `audio/reading_4_0b.mp3`
3. Keep filenames exactly the same as the html links.

## Suggested repo structure
```
index.html
lesson-4-0-word.html
smart_reading_4_0.html
smart_reading_4_0b.html
exercises-4-0.html
style.css
app.js
audio/
  reading_4_0.mp3
  reading_4_0b.mp3
```

## GitHub steps
1. Open your repo: `advanced-chinese-humanities3-4-ai` or your new repo.
2. Upload/replace these files.
3. Commit to `main`.

## Cloudflare Pages steps
1. Cloudflare Dashboard → Workers & Pages → Create application → Pages.
2. Connect to GitHub.
3. Select your repo.
4. Framework preset: **None**.
5. Build command: leave blank.
6. Build output directory: leave blank or `/`.
7. Deploy.

## Why this version is safer
- No Supabase
- No worker / backend dependency
- Static HTML/CSS/JS only
- Google Form used for feedback collection

## Optional next step
If later you still want AI features, we can add a separate Cloudflare Worker again without changing the reading/exercise pages.
