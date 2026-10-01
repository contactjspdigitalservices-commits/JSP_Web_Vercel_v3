# Vercel deployment

1. Upload the complete contents of this folder to the repository root (including dotfiles).
2. In Vercel, use the Vite preset and root directory `./`.
3. Add `VITE_BASE44_APP_ID` with your Base44 app ID in Vercel Environment Variables.
4. Do not put a Base44 personal access token in any `VITE_` variable; Vite variables are browser-visible.
5. Deploy and test all pages and the contact/enquiry flow before connecting the custom domain.

`VITE_BASE44_APP_BASE_URL` is intentionally not hard-coded. The Base44 Vite plugin can build without its proxy; only add a value if Base44 provides the correct URL for this app.
