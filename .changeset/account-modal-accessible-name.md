---
"@rainbow-me/rainbowkit": patch
---

Fixed the account modal dialog having no accessible name. `aria-labelledby` now points at the profile heading that actually renders, and the heading id is no longer duplicated on the balance line.
