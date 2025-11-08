# Doç. Dr. İlhan Karabıçak - Web Sitesi

Doç. Dr. İlhan Karabıçak'ın profesyonel web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- Modern ve profesyonel tasarım
- Responsive design (mobil uyumlu)
- Smooth scroll animasyonları
- Counter animasyonları
- EmailJS entegrasyonu (form gönderimi)
- Google Maps entegrasyonu
- Sosyal medya linkleri
- SEO optimizasyonu

## 🛠️ Teknolojiler

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **EmailJS** - Form handling

## 📦 Kurulum

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🌐 GitHub Pages Deployment

Proje GitHub Pages için hazırlanmıştır. Deployment otomatik olarak yapılır:

1. **GitHub Repository Settings**:
   - Settings → Pages
   - Source: "GitHub Actions"

2. **Otomatik Deployment**:
   - `main` branch'ine push yapıldığında otomatik deploy edilir
   - GitHub Actions workflow'u build ve deploy işlemini yapar

3. **Manuel Deployment**:
   - GitHub Actions tab'ından "Deploy to GitHub Pages" workflow'unu manuel olarak çalıştırabilirsiniz

4. **Site URL**:
   - Site şu adreste yayınlanır: `https://yusufsenyer.github.io/ilhankarabicak_web_sayfasi_v2/`

## 📁 Proje Yapısı

```
src/
├── components/          # React component'leri
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── About.tsx
│   ├── Specialties.tsx
│   ├── Timeline.tsx
│   ├── Publications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── AppointmentModal.tsx
│   └── Toast.tsx
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useCounterAnimation.ts
├── App.tsx             # Ana component
└── main.tsx            # Entry point
```

## 🎨 Tasarım Branch'leri

Projede 3 farklı tasarım branch'i mevcuttur:

1. **main** - Ana branch
2. **professional-redesign-navy** - İlk profesyonel tasarım
3. **alternative-medical-design** - Alternatif minimalist tasarım
4. **creative-medical-design** - Kreatif dark tasarım (aktif)

## 📝 EmailJS Yapılandırması

Form gönderimi için EmailJS kullanılmaktadır:

- **Service ID**: `service_jicp0ow`
- **Template ID (Contact)**: `template_sz27jkh`
- **Template ID (Appointment)**: `template_g4eleok`
- **Public Key**: `qOZwShjgHLeBuUbJk`

## 🔧 Geliştirme

```bash
# Lint kontrolü
npm run lint

# Build test
npm run build
```

## 📄 Lisans

Bu proje özel bir projedir.

## 👨‍⚕️ İletişim

**Doç. Dr. İlhan Karabıçak**
- Medical Park Samsun Hastanesi
- Kılıçdede Mah. Liman Cad. No:1, İlkadım/Samsun
- Tel: +90 362 444 55 66
