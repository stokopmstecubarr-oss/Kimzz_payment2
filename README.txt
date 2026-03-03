# KIMZZ PAYMENT SYSTEM

## Struktur Folder
- index.html → halaman web payment
- style.css → styling
- script.js → logic web, load produk & kirim ke telegram
- data.json → data stock produk, owner, total uang
- bot.py → bot telegram untuk stock, list uang, tambah owner

## Cara Deploy
1. Install Python 3 & pip
2. Install library Telegram:
   pip install pyTelegramBotAPI
3. Jalankan bot:
   python bot.py
4. Buka index.html di browser (atau deploy ke server untuk diakses publik)
5. Update stock / tambah produk via bot
6. Upload bukti transfer di web -> otomatis dikirim ke Telegram owner

## Catatan
- Web membaca stock produk dari `data.json`
- Owner bisa menutup produk sementara dengan bot
- Nominal, nama, catatan dikirim ke Telegram