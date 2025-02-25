# Dokümantasyon Kuralları

## 1. Kod Dokümantasyonu

### 1.1. Kod İçi Yorumlar
✅ **Yorum Yazma Prensipleri**
- Yorumlar kodu açıklamalı, kodu tekrarlamamalı.
- Karmaşık algoritmaları ve iş mantığını açıklayın.
- "Neden" sorusuna cevap verin, "ne" sorusu genellikle koddan anlaşılır.
- Kısa ve öz yorumlar yazın.

✅ **Yorum Formatı**
- Tek satırlık yorumlar için `//` kullanın.
- Çok satırlı yorumlar için `/* */` kullanın.
- JSDoc, TSDoc veya benzer standartları kullanın.

✅ **Örnek Yorum Formatları**
```javascript
// İyi bir yorum örneği: Karmaşık bir hesaplama açıklanıyor
function calculateDiscount(price, quantity) {
  // Miktar 10'dan fazlaysa, ekstra %5 indirim uygula
  const baseDiscount = 0.1; // Temel %10 indirim
  const bulkDiscount = quantity > 10 ? 0.05 : 0;
  return price * (1 - (baseDiscount + bulkDiscount));
}

/**
 * Kullanıcı profil bilgilerini getirir
 * @param {string} userId - Kullanıcı ID'si
 * @returns {Promise<UserProfile>} - Kullanıcı profil bilgileri
 * @throws {ApiError} - API hatası durumunda
 */
async function getUserProfile(userId) {
  // ...
}
```

### 1.2. Fonksiyon ve Sınıf Dokümantasyonu
✅ **Fonksiyon Dokümantasyonu**
- Fonksiyonun amacını açıklayın.
- Parametreleri ve dönüş değerlerini belirtin.
- Fırlatılan hataları belirtin.
- Örnek kullanımlar ekleyin.

✅ **Sınıf Dokümantasyonu**
- Sınıfın amacını açıklayın.
- Public metodları dokümante edin.
- Sınıfın nasıl kullanılacağına dair örnekler ekleyin.
- Inheritance ve dependency ilişkilerini belirtin.

✅ **TypeScript Interface ve Type Dokümantasyonu**
- Interface ve type'ların amacını açıklayın.
- Her property'nin ne işe yaradığını belirtin.
- Örnek kullanımlar ekleyin.

## 2. Proje Dokümantasyonu

### 2.1. README Dosyası
✅ **README İçeriği**
- Projenin adı ve kısa açıklaması
- Kurulum adımları
- Kullanım örnekleri
- Katkıda bulunma kuralları
- Lisans bilgisi
- İletişim bilgileri

✅ **README Formatı**
- Markdown formatında yazılmalı.
- Başlıklar, listeler ve kod blokları kullanılmalı.
- Görsel öğeler (logo, ekran görüntüleri) eklenebilir.
- İçindekiler bölümü olmalı (büyük projeler için).

✅ **Örnek README Yapısı**
```markdown
# Proje Adı

Kısa proje açıklaması ve amacı.

## İçindekiler
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## Kurulum
```bash
npm install
npm start
```

## Kullanım
Kullanım örnekleri ve kod parçacıkları.

## Katkıda Bulunma
Katkıda bulunma kuralları ve adımları.

## Lisans
MIT
```

### 2.2. Proje Yapısı Dokümantasyonu
✅ **Proje Yapısı**
- Klasör yapısını açıklayın.
- Her klasörün amacını belirtin.
- Önemli dosyaları ve işlevlerini açıklayın.

✅ **Örnek Proje Yapısı Dokümantasyonu**
```markdown
## Proje Yapısı

```
src/
├── components/     # UI bileşenleri
├── pages/          # Sayfa bileşenleri
├── services/       # API ve servis katmanı
├── store/          # State yönetimi
├── utils/          # Yardımcı fonksiyonlar
└── App.tsx         # Ana uygulama bileşeni
```

### Klasör Açıklamaları

- **components**: Yeniden kullanılabilir UI bileşenleri
- **pages**: Sayfa bileşenleri ve route'lar
- **services**: API çağrıları ve servis katmanı
- **store**: Redux/Context state yönetimi
- **utils**: Yardımcı fonksiyonlar ve sabitler
```

### 2.3. Geliştirme Kılavuzları
✅ **Geliştirme Kılavuzu İçeriği**
- Geliştirme ortamının kurulumu
- Kod standartları ve stil kuralları
- Git workflow ve branch stratejisi
- Test yazma kuralları
- Build ve deployment süreci

✅ **Örnek Geliştirme Kılavuzu**
```markdown
# Geliştirme Kılavuzu

## Geliştirme Ortamı Kurulumu
1. Node.js 14+ yükleyin
2. Repo'yu klonlayın: `git clone ...`
3. Bağımlılıkları yükleyin: `npm install`
4. Geliştirme sunucusunu başlatın: `npm start`

## Kod Standartları
- ESLint ve Prettier kullanılmalı
- TypeScript strict mode açık olmalı
- Unit testler yazılmalı

## Git Workflow
- Feature branch'leri `feature/xxx` formatında olmalı
- PR açmadan önce testler çalıştırılmalı
- Commit mesajları [Conventional Commits](https://www.conventionalcommits.org/) formatında olmalı
```

## 3. API Dokümantasyonu

### 3.1. API Endpoint Dokümantasyonu
✅ **API Dokümantasyon İçeriği**
- Endpoint URL'i ve HTTP metodu
- Request parametreleri ve body
- Response formatı ve status kodları
- Hata durumları ve hata mesajları
- Örnek request ve response

✅ **API Dokümantasyon Formatı**
- Swagger/OpenAPI kullanılabilir
- Markdown formatında yazılabilir
- Postman koleksiyonu olarak paylaşılabilir

✅ **Örnek API Dokümantasyonu**
```markdown
## Kullanıcı Profili Getirme

**URL:** `/api/users/:id`  
**Method:** `GET`  
**Auth Required:** Yes (Bearer Token)

### URL Parametreleri
| Parametre | Tip     | Açıklama      |
|-----------|---------|---------------|
| id        | string  | Kullanıcı ID'si |

### Başarılı Response
**Status Code:** 200 OK
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2023-01-01T00:00:00Z"
}
```

### Hata Durumları
| Status Code | Açıklama           |
|-------------|--------------------|
| 404         | Kullanıcı bulunamadı |
| 401         | Yetkilendirme hatası |
| 500         | Sunucu hatası      |
```

### 3.2. Component Dokümantasyonu
✅ **Component Dokümantasyonu İçeriği**
- Component'in amacı ve kullanımı
- Props ve state açıklamaları
- Örnek kullanımlar
- Varyasyonlar ve özel durumlar

✅ **Component Dokümantasyon Araçları**
- Storybook kullanılabilir
- Markdown formatında yazılabilir
- Özel dokümantasyon araçları kullanılabilir

✅ **Örnek Component Dokümantasyonu**
```markdown
## Button Component

Temel buton bileşeni, çeşitli boyut ve varyasyonlarla kullanılabilir.

### Props
| Prop      | Tip                       | Default   | Açıklama                |
|-----------|---------------------------|-----------|-------------------------|
| variant   | 'primary' \| 'secondary'  | 'primary' | Buton varyasyonu        |
| size      | 'sm' \| 'md' \| 'lg'      | 'md'      | Buton boyutu            |
| disabled  | boolean                   | false     | Butonun disabled durumu |
| onClick   | function                  | -         | Tıklama event handler'ı |

### Örnek Kullanım
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Kaydet
</Button>
```

### Varyasyonlar
- **Primary**: Ana aksiyon için kullanılır
- **Secondary**: İkincil aksiyonlar için kullanılır
```

## 4. Dokümantasyon Bakımı

### 4.1. Dokümantasyon Güncelliği
✅ **Güncelleme Kuralları**
- Kod değişikliği yapıldığında ilgili dokümantasyon da güncellenmelidir.
- PR'larda dokümantasyon güncellemeleri de kontrol edilmelidir.
- Düzenli aralıklarla dokümantasyon gözden geçirilmelidir.

✅ **Versiyon Kontrolü**
- Önemli değişiklikler için dokümantasyon versiyonlanmalıdır.
- Breaking change'ler dokümantasyonda açıkça belirtilmelidir.
- Eski versiyonlar arşivlenmelidir.

### 4.2. Dokümantasyon Araçları
✅ **Önerilen Araçlar**
- Markdown editörleri (VS Code, Typora)
- Dokümantasyon siteleri (GitBook, Docusaurus, VuePress)
- API dokümantasyon araçları (Swagger, Postman)
- Component dokümantasyon araçları (Storybook)

### 4.3. Dokümantasyon İyi Uygulamaları
✅ **Genel İyi Uygulamalar**
- Dokümantasyonu kod ile aynı repo'da tutun.
- Görsel öğeler kullanın (diyagramlar, ekran görüntüleri).
- Arama özelliği olan dokümantasyon araçları kullanın.
- Dokümantasyonu basit ve anlaşılır tutun.
- Teknik olmayan ekip üyelerinin de anlayabileceği şekilde yazın. 