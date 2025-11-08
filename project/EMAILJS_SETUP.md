# EmailJS Kurulum Rehberi

Bu rehber, web sitenizde EmailJS entegrasyonunu tamamlamak için gerekli adımları açıklar.

## 1. EmailJS Hesabı Oluşturma

1. **EmailJS'e Git**: https://www.emailjs.com/ adresine gidin
2. **Hesap Oluştur**: "Sign Up" butonuna tıklayın
3. **Email Doğrulama**: Email adresinizi doğrulayın

## 2. Email Servisini Yapılandırma

### Gmail Kullanıyorsanız:
1. **Dashboard'a Git**: EmailJS dashboard'unuza giriş yapın
2. **Email Services**: Sol menüden "Email Services" seçin
3. **Add Service**: "Add Service" butonuna tıklayın
4. **Gmail Seç**: Gmail'i seçin
5. **Gmail Hesabı Bağla**: Gmail hesabınızla giriş yapın ve izinleri verin
6. **Service ID**: Otomatik oluşturulan Service ID'yi not alın (örn: `service_abc123`)

### Outlook/Hotmail Kullanıyorsanız:
1. Yukarıdaki adımları takip edin, ancak Gmail yerine Outlook'u seçin

## 3. Email Template'leri Oluşturma

### Randevu Template'i:
1. **Email Templates**: Sol menüden "Email Templates" seçin
2. **Create New Template**: "Create New Template" butonuna tıklayın
3. **Template Name**: "Randevu Talebi" yazın
4. **Template Content**: Aşağıdaki içeriği kopyalayın:

```
Konu: Yeni Randevu Talebi - {{from_name}}

Merhaba Dr. İlhan Karabıçak,

Yeni bir randevu talebi aldınız:

👤 Ad Soyad: {{from_name}}
📞 Telefon: {{from_phone}}
📧 Email: {{from_email}}
📅 Tarih: {{date}} - {{time}}
🏥 Talep Türü: {{request_type}}

💬 Mesaj:
{{message}}

---
Bu mesaj web sitenizden otomatik olarak gönderilmiştir.
```

5. **Template ID**: Oluşturulan Template ID'yi not alın (örn: `template_xyz789`)

### Bilgi Alma Template'i:
1. Yukarıdaki adımları tekrarlayın
2. **Template Name**: "Bilgi Alma Talebi" yazın
3. **Template Content**: Yukarıdaki içeriği kullanın (aynı template kullanılabilir)
4. **Template ID**: Bu template'in ID'sini de not alın

## 4. Public Key Alma

1. **Account**: Sol menüden "Account" seçin
2. **API Keys**: "API Keys" sekmesine gidin
3. **Public Key**: Public Key'i kopyalayın (örn: `user_abc123xyz`)

## 5. Konfigürasyon Dosyasını Güncelleme

`src/services/emailService.ts` dosyasını açın ve aşağıdaki değerleri güncelleyin:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Adım 2'den aldığınız Service ID
  TEMPLATE_ID_APPOINTMENT: 'template_xyz789', // Randevu template ID'si
  TEMPLATE_ID_CONTACT: 'template_xyz789', // Bilgi alma template ID'si (aynı olabilir)
  PUBLIC_KEY: 'user_abc123xyz' // Adım 4'ten aldığınız Public Key
};
```

## 6. Test Etme

1. **Web sitesini çalıştırın**: `npm run dev`
2. **Randevu butonuna tıklayın**: Header'daki veya ana sayfadaki randevu butonuna tıklayın
3. **Formu doldurun**: Test bilgileri ile formu doldurun
4. **Gönder**: "Randevu Talebini Gönder" butonuna tıklayın
5. **Email kontrolü**: Gmail/Outlook hesabınızı kontrol edin

## 7. Sorun Giderme

### Email Gelmiyor:
- **Spam klasörünü kontrol edin**
- **Service ID, Template ID ve Public Key'lerin doğru olduğundan emin olun**
- **Gmail/Outlook hesabının EmailJS'e bağlı olduğunu kontrol edin**

### Console Hataları:
- **Browser console'u açın** (F12)
- **Network sekmesini kontrol edin**
- **EmailJS API çağrılarının başarılı olup olmadığını kontrol edin**

### Template Değişkenleri:
Template'inizde kullanabileceğiniz değişkenler:
- `{{to_name}}`: Dr. İlhan Karabıçak
- `{{from_name}}`: Gönderenin adı
- `{{from_phone}}`: Gönderenin telefonu
- `{{from_email}}`: Gönderenin emaili
- `{{message}}`: Mesaj içeriği
- `{{request_type}}`: Talep türü (Randevu/Bilgi Alma)
- `{{date}}`: Gönderim tarihi
- `{{time}}`: Gönderim saati

## 8. Güvenlik Notları

- **Public Key'i paylaşmaktan çekinmeyin** - Bu frontend'de kullanılmak için tasarlanmıştır
- **Private Key'i asla frontend'de kullanmayın**
- **EmailJS ücretsiz planında aylık 200 email limiti vardır**
- **Daha fazla email için ücretli plana geçebilirsiniz**

## 9. Ek Özellikler

### Auto-Reply (Otomatik Yanıt):
EmailJS'te otomatik yanıt template'i oluşturarak, form gönderen kişiye otomatik teşekkür mesajı gönderebilirsiniz.

### Email Filtreleme:
Gmail'de EmailJS'ten gelen emailleri otomatik olarak belirli bir klasöre yönlendirebilirsiniz.

---

**Önemli**: Tüm adımları tamamladıktan sonra web sitenizi test etmeyi unutmayın!

Herhangi bir sorun yaşarsanız, EmailJS dokümantasyonunu kontrol edebilirsiniz: https://www.emailjs.com/docs/
