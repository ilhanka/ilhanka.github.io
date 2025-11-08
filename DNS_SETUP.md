# Custom Domain DNS Kurulum Rehberi

## 🚨 Mevcut Durum

Domain'iniz (`ilhankarabicak.com`) şu anda GitHub Pages IP'lerine işaret etmiyor. DNS kayıtlarınızı düzeltmeniz gerekiyor.

## 📋 DNS Kayıtları

### Seçenek 1: CNAME Kaydı (Önerilen - En Kolay)

Domain sağlayıcınızda (GoDaddy, Namecheap, Cloudflare, vb.) şu kaydı ekleyin:

```
Type: CNAME
Name: @ (veya boş bırakın - root domain için)
Value: yusufsenyer.github.io
TTL: 3600 (veya varsayılan)
```

**Not:** Bazı domain sağlayıcıları root domain (@) için CNAME kaydına izin vermez. Bu durumda Seçenek 2'yi kullanın.

### Seçenek 2: A Kayıtları (Root Domain İçin)

Eğer CNAME kaydı kullanamıyorsanız, şu A kayıtlarını ekleyin:

```
Type: A
Name: @ (veya boş bırakın)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (veya boş bırakın)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (veya boş bırakın)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (veya boş bırakın)
Value: 185.199.111.153
TTL: 3600
```

**ÖNEMLİ:** Mevcut A kayıtlarınızı (3.33.130.190 ve 15.197.148.33) silin veya değiştirin!

### Seçenek 3: www Alt Domain İçin

Eğer `www.ilhankarabicak.com` kullanmak istiyorsanız:

```
Type: CNAME
Name: www
Value: yusufsenyer.github.io
TTL: 3600
```

## 🔧 Popüler Domain Sağlayıcıları İçin Adımlar

### GoDaddy

1. GoDaddy hesabınıza giriş yapın
2. "My Products" → "DNS" seçin
3. Mevcut A kayıtlarını silin (3.33.130.190 ve 15.197.148.33)
4. Yeni kayıt ekleyin:
   - Type: CNAME
   - Name: @
   - Value: yusufsenyer.github.io
   - TTL: 1 Hour
5. Kaydet

### Namecheap

1. Namecheap hesabınıza giriş yapın
2. "Domain List" → Domain'inizi seçin → "Advanced DNS"
3. Mevcut A kayıtlarını silin
4. "Add New Record" → CNAME Record:
   - Host: @
   - Value: yusufsenyer.github.io
   - TTL: Automatic
5. Kaydet

### Cloudflare

1. Cloudflare dashboard'a giriş yapın
2. Domain'inizi seçin → "DNS" → "Records"
3. Mevcut A kayıtlarını silin
4. "Add record":
   - Type: CNAME
   - Name: @
   - Target: yusufsenyer.github.io
   - Proxy status: DNS only (turuncu bulut kapalı)
5. Kaydet

## ⏱️ DNS Yayılımı

DNS değişikliklerinin yayılması genellikle:
- **Minimum:** 5-10 dakika
- **Ortalama:** 1-2 saat
- **Maksimum:** 24-48 saat

## ✅ Kontrol

DNS kayıtlarınızı kontrol etmek için:

```bash
# CNAME kaydı kontrolü
nslookup ilhankarabicak.com

# GitHub Pages IP'lerine işaret etmeli:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

## 🔍 GitHub Pages Kontrolü

1. GitHub repository'nize gidin
2. Settings → Pages
3. Custom domain bölümünde:
   - Domain: `ilhankarabicak.com` yazın
   - "Save" butonuna tıklayın
4. DNS yayılımı tamamlandıktan sonra:
   - "Enforce HTTPS" seçeneğini işaretleyin
   - Yeşil tik işareti görünmeli

## ⚠️ Önemli Notlar

1. **Mevcut A kayıtlarını silin:** 3.33.130.190 ve 15.197.148.33 IP'leri GitHub Pages'e ait değil
2. **DNS yayılımını bekleyin:** Değişiklikler hemen görünmeyebilir
3. **CNAME dosyası:** `public/CNAME` dosyası zaten oluşturuldu ve GitHub'a push edildi
4. **SSL sertifikası:** GitHub Pages otomatik olarak SSL sertifikası oluşturur (24 saat sürebilir)

## 🆘 Sorun Giderme

### Domain hala çalışmıyorsa:

1. DNS kayıtlarınızı tekrar kontrol edin
2. 24 saat bekleyin (DNS yayılımı için)
3. GitHub Pages settings'te domain durumunu kontrol edin
4. Browser cache'i temizleyin
5. Farklı bir DNS server kullanarak test edin (8.8.8.8 - Google DNS)

### Hata mesajları:

- **"Domain does not resolve"**: DNS kayıtları henüz yayılmamış veya yanlış yapılandırılmış
- **"NotServedByPagesError"**: Domain GitHub Pages IP'lerine işaret etmiyor
- **"DNS check failed"**: DNS kayıtları eksik veya yanlış

## 📞 Yardım

DNS ayarlarını yaptıktan sonra 24 saat içinde domain'iniz çalışmaya başlamalı. Eğer sorun devam ederse, domain sağlayıcınızın destek ekibiyle iletişime geçin.

