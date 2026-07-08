# // TODO_

Terminal temalı, minimal bir yapılacaklar (to-do) uygulaması. Kurulum gerektirmez, tarayıcıda çalışır ve telefona/masaüstüne uygulama gibi eklenebilir.

**Canlı adres:** https://burakkurt6.github.io/to-do/

> **English version below ↓** — [Go to English](#-todo_-english)

---

## Özellikler

**Günlük ve haftalık görevler.** İki ayrı liste: bugüne özel işler ve bu haftaya yayılan işler. Her listenin kendi ilerleme çubuğu ve sayacı var (örn. 5/8).

**Otomatik erteleme.** Gün ya da hafta bitiminde tamamlanmamış görevler kaybolmaz — günlük görevler ertesi güne, haftalık görevler bir sonraki haftaya otomatik taşınır. Böylece yarım kalan iş takipten düşmez.

**Tekrarlı görevler.** Bir kez yazarsın (örneğin "diş fırçala" ya da "30 sayfa kitap oku"), her gün otomatik olarak günlük listene düşer ve o günün toplamına dahil edilir. Sen silene kadar her gün tekrar gelir. Bu görevler ayrı bir panelden yönetilir.

**Takvim ve ilerleme.** Takvim, geçmiş günlerde ne kadar görev tamamladığını oran olarak gösterir (örn. 5/7). Böylece hangi gün ne kadar verimli olduğunu geriye dönük görebilirsin.

**Tamamlanma animasyonu.** Bir görevi işaretlediğinde kutu yumuşak bir geçişle yeşile döner ve "yapılanlar" listesine kayar. Günün tüm görevlerini bitirdiğinde küçük bir kutlama efekti çıkar.

**Tema ve ses.** Aydınlık/karanlık tema geçişi ve görev tamamlandığında çalan (istersen kapatabileceğin) kısa bir ses.

**Verilerin sende kalır.** Her şey tarayıcının kendi hafızasında (localStorage) saklanır — sunucu yok, hesap yok, veri kimseyle paylaşılmaz.

---

## Nasıl kurulur

Uygulama bir PWA'dır (Progressive Web App), yani tarayıcıdan gerçek bir uygulama gibi kurulabilir. İndirmek için mağazaya gerek yok.

**Masaüstü (Chrome / Edge):**
Adrese git → adres çubuğunun sağındaki "Yükle" simgesine tıkla → uygulama kendi penceresinde, kendi ikonuyla açılır.

**Telefon:**
- **Android (Chrome):** Adrese git → menü (⋮) → "Uygulamayı yükle" / "Ana ekrana ekle".
- **iPhone (Safari):** Adrese git → paylaş simgesi → "Ana Ekrana Ekle".

Kurduktan sonra ana ekranındaki ikondan normal bir uygulama gibi açabilirsin.

---

## Teknik

Bağımlılık yok, build adımı yok. Tek bir `index.html` içinde saf HTML, CSS ve JavaScript. Veri saklama için `localStorage`, ses için Web Audio API, ikonlar için inline SVG kullanılır. GitHub Pages üzerinde yayınlanır.

---
---

# // TODO_ (English)

A minimal, terminal-themed to-do app. No installation needed — it runs in the browser and can be added to your phone or desktop like a native app.

**Live:** https://burakkurt6.github.io/to-do/

> **Türkçe için yukarı çık ↑** — [Türkçeye dön](#-todo_)

---

## Features

**Daily and weekly tasks.** Two separate lists: things for today and things spread across this week. Each list has its own progress bar and counter (e.g. 5/8).

**Automatic carry-over.** At the end of a day or week, unfinished tasks don't disappear — daily tasks roll over to the next day, weekly tasks to the next week. Nothing half-done falls off your radar.

**Recurring tasks.** Write it once (e.g. "brush teeth" or "read 30 pages") and it's automatically added to your daily list every day, counting toward that day's total. It keeps coming back until you delete it. These are managed from a separate panel.

**Calendar and progress.** The calendar shows how many tasks you completed on past days as a ratio (e.g. 5/7), so you can look back and see how productive each day was.

**Completion animation.** When you check a task, its box smoothly turns green and slides into the "done" list. When you finish all of the day's tasks, a small celebration effect plays.

**Theme and sound.** Light/dark theme toggle and a short completion sound (which you can mute).

**Your data stays with you.** Everything is stored in the browser's own storage (localStorage) — no server, no account, nothing shared.

---

## How to install

This is a PWA (Progressive Web App), so it installs like a real app straight from the browser. No app store needed.

**Desktop (Chrome / Edge):**
Open the link → click the "Install" icon on the right side of the address bar → the app opens in its own window with its own icon.

**Phone:**
- **Android (Chrome):** Open the link → menu (⋮) → "Install app" / "Add to Home screen".
- **iPhone (Safari):** Open the link → share icon → "Add to Home Screen".

After installing, launch it from your home screen like any other app.

---

## Tech

No dependencies, no build step. Plain HTML, CSS, and JavaScript in a single `index.html`. Uses `localStorage` for persistence, the Web Audio API for sound, and inline SVG for icons. Hosted on GitHub Pages.
