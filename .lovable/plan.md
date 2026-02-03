
# 💕 Valentine's Proposal Website

## Overview
A romantic, elegant Valentine's page with a playful twist - featuring a personalized proposal and an "uncatchable" No button!

---

## Features

### 1. **Personalized URL & Question**
- URL format: `yoursite.com/[name]/valentine`
- Dynamic greeting: "*[Name], will you be my Valentine?*"
- The name from the URL will be displayed beautifully with elegant typography

### 2. **Visual Design (Romantic & Elegant)**
- Soft pink and rose color palette with subtle gradients
- Elegant script/serif fonts for the question
- Floating heart decorations in the background
- Soft, glowing effects around key elements
- Clean, centered layout focusing attention on the question

### 3. **Interactive Yes/No Buttons**
- Two beautifully styled buttons: "Yes" (prominent) and "No" (subtle)
- **No Button Magic:**
  - On desktop: moves to random position when hovered
  - On mobile: moves when touched/clicked
  - Smooth transition animation when moving
  - Stays within visible bounds of the screen

### 4. **Yes Button Celebration**
- When clicked, triggers a beautiful celebration:
  - Cascading hearts and/or flower petals animation
  - The question transforms into a sweet "Thank you!" or "I love you!" message
  - Confetti-style burst effect
  - Soft romantic background music option (muted by default)

---

## Pages
1. **Valentine Proposal Page** (`/:name/valentine`) - The main interactive experience
2. **Fallback Page** - If someone visits without a name, show a generic version or redirect

---

## User Experience Flow
1. You share the link with your girl's name in the URL
2. She sees her name with the romantic question
3. If she tries to click "No" - it playfully escapes!
4. When she inevitably clicks "Yes" - beautiful celebration animation plays
