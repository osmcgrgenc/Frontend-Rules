# Kod Geliştirme Kuralları

## 1. Genel Kurallar

### 1.1. Kodun Anlaşılabilirliği  
✅ **Değişken ve Fonksiyon İsimlendirme**
- Açık ve anlaşılır değişken, fonksiyon ve sınıf isimleri kullanılmalı.
- Değişken isimleri camelCase formatında olmalı: `userProfile`, `cartItems`.
- Bileşen isimleri PascalCase formatında olmalı: `UserProfile`, `CartItem`.
- Boolean değişkenler genellikle `is`, `has`, `should` gibi ön eklerle başlamalı: `isActive`, `hasPermission`.

✅ **Kod Organizasyonu**
- Magic number (sabitsiz doğrudan kullanılan sayılar) yerine değişken tanımlanmalı.
- Fonksiyonlar tek bir iş yapmalı (Single Responsibility Principle - SRP).
- Gereksiz yorum satırları olmamalı, ancak karmaşık yerler için açıklayıcı yorumlar eklenmeli.
- Fonksiyonlar 50 satırı geçmemeye çalışılmalı, geçiyorsa bölünmeli.

### 1.2. Kodun Düzeni ve Formatı  
✅ **Linting ve Formatting**
- ESLint ve Prettier gibi araçlarla kod biçimlendirilmiş olmalı.
- Proje genelinde tutarlı bir kod stili kullanılmalı.
- Boşluklar, girintiler ve satır sonları tutarlı olmalı.

✅ **Dosya Yapısı**
- Modüler ve mantıklı bir şekilde organize edilmeli.
- İlgili dosyalar aynı klasörde bulunmalı.
- Dosya isimleri açıklayıcı olmalı ve içeriğini yansıtmalı.

✅ **Imports ve Exports**
- Kullanılmayan import'lar olmamalı.
- Import sıralaması belirlenmeli (örn: önce 3rd party kütüphaneler, sonra proje içi modüller).
- Mümkün olduğunca named export kullanılmalı, default export'tan kaçınılmalı.

✅ **Tür Güvenliği**
- TypeScript projelerinde `any` yerine kesin tipler tanımlanmalı.
- Interface ve type tanımları açıklayıcı olmalı.
- Generic tipler gerektiğinde kullanılmalı.

## 2. Framework Spesifik Kurallar

### 2.1. Angular İçin Özel Kurallar
✅ **Bileşen Yönetimi**  
- Komponentler **tek bir sorumluluğa** sahip olmalı.  
- Smart & Dumb Component yapısına uygun olmalı.
  - Smart (Container) komponentler: Veri yönetimi ve iş mantığı
  - Dumb (Presentational) komponentler: Sadece UI ve kullanıcı etkileşimi
- Template içindeki kodlar minimal tutulmalı, mümkün olduğunca `TypeScript` tarafına taşınmalı.
- OnPush Change Detection stratejisi tercih edilmeli.

✅ **Servis Kullanımı**  
- İş mantığı ve API çağrıları servisler içinde olmalı.  
- Store yönetimi kullanılıyorsa (NgRx, Akita, vs.), servisler direkt bileşen içinde kullanılmamalı.
- Dependency Injection prensipleri doğru uygulanmalı.
- Servisler mümkün olduğunca modüler ve yeniden kullanılabilir olmalı.

✅ **Angular Modülleri ve Yapılar**  
- Lazy loading kullanılmalı.  
- Component selector'lar `app-` prefix'i ile başlamalı.  
- ViewChild ve ViewChildren kullanılmadan önce performans açısından incelenmeli.
- RxJS operatörleri doğru kullanılmalı ve memory leak'ler önlenmeli.
- Subscription'lar component destroy olduğunda temizlenmeli.

✅ **Angular Best Practices**
- Reactive Forms tercih edilmeli.
- Async pipe kullanımı teşvik edilmeli.
- Trackby fonksiyonu ngFor direktiflerinde kullanılmalı.
- Büyük formlar için FormBuilder kullanılmalı.
- HttpClient interceptor'ları merkezi hata yönetimi için kullanılmalı.

### 2.2. React ve Next.js İçin Özel Kurallar
✅ **Bileşen Yönetimi**  
- Fonksiyonel bileşenler tercih edilmeli.  
- `useEffect` ve `useState` bağımlılık listeleri dikkatlice kontrol edilmeli.  
- `memo`, `useCallback`, `useMemo` gibi performans optimizasyonu sağlayan hook'lar gerektiğinde kullanılmalı.
- Prop drilling'den kaçınılmalı, Context API veya state yönetim kütüphaneleri kullanılmalı.

✅ **State Yönetimi**  
- Redux Toolkit, Zustand, Recoil gibi state yönetimi kütüphaneleri kullanılıyorsa, **tek yönlü veri akışı** korunmalı.  
- Global state sadece gerekli olduğunda kullanılmalı.
- Immutable state güncellemeleri yapılmalı.
- Selector'lar verimli kullanılmalı.

✅ **Next.js Özel Kurallar**  
- **getServerSideProps / getStaticProps** kullanımı SEO ve performans açısından değerlendirilmiş olmalı.  
- API route'lar sadece gerekli olduğunda kullanılmalı.  
- Sayfa bazlı yönlendirmelerde `next/link` ve `next/router` tercih edilmeli.
- Image optimizasyonu için `next/image` kullanılmalı.
- Middleware'ler doğru şekilde yapılandırılmalı.

✅ **React Best Practices**
- Controlled components tercih edilmeli.
- Key prop'ları liste render'larında doğru kullanılmalı.
- Error boundary'ler uygulanmalı.
- React.Fragment kullanımı teşvik edilmeli.
- Custom hook'lar ile kod tekrarı önlenmeli.

### 2.3. SAP Hybris Spartacus İçin Özel Kurallar
✅ **Bileşen Yönetimi**  
- Angular bileşen yapısına uygun olmalı.  
- **Storefront Module** yerine özel modüller oluşturulmalı.  
- Spartacus'un CMS ve routing mekanizmasına uygun şekilde geliştirme yapılmalı.
- Spartacus'un sağladığı outlet'ler doğru kullanılmalı.

✅ **State Yönetimi**  
- NgRx kullanılıyorsa **Actions, Reducers, Selectors** ayrı ayrı tanımlanmalı.  
- Store'da **tek bir state kaynağı** (single source of truth) korunmalı.
- Spartacus'un sağladığı facade'ler doğru kullanılmalı.

✅ **Spartacus Özel Kurallar**
- Spartacus'un sağladığı servisler extend edilmeli, override edilmemeli.
- Özelleştirmeler için Spartacus'un sağladığı konfigürasyon mekanizmaları kullanılmalı.
- Spartacus versiyonu güncel tutulmalı.
- Spartacus'un sağladığı i18n mekanizması kullanılmalı.

## 3. Performans Optimizasyonu

✅ **Genel Performans İlkeleri**
- Gereksiz render'lar önlenmeli.
- Büyük paketler lazy loading ile yüklenmeli.
- Resimler optimize edilmeli.
- API çağrıları minimize edilmeli ve caching kullanılmalı.
- Bundle size analizi yapılmalı ve gereksiz paketler temizlenmeli.

✅ **Framework Spesifik Optimizasyonlar**
- Angular: OnPush Change Detection, TrackBy, Lazy Loading
- React: React.memo, useCallback, useMemo, Code Splitting
- Next.js: Image Optimization, Static Generation, Incremental Static Regeneration

## 4. Güvenlik Önlemleri

✅ **Frontend Güvenlik Kuralları**
- XSS (Cross-Site Scripting) önlemleri alınmalı.
- CSRF (Cross-Site Request Forgery) koruması uygulanmalı.
- Sensitive bilgiler client-side'da saklanmamalı.
- Input validation client-side'da yapılmalı (server-side validation'a ek olarak).
- Authentication ve authorization doğru uygulanmalı.

## 5. Erişilebilirlik (Accessibility)

✅ **Erişilebilirlik Standartları**
- WCAG 2.1 standartlarına uyulmalı.
- Semantic HTML kullanılmalı.
- Klavye navigasyonu desteklenmeli.
- Renk kontrastı yeterli olmalı.
- Screen reader'lar için ARIA attribute'ları kullanılmalı.

## 6. Test Yazma Kuralları

✅ **Test Stratejileri**
- Unit testler yazılmalı (Jest, Jasmine, Karma).
- Integration testler yazılmalı.
- E2E testler yazılmalı (Cypress, Playwright).
- Test coverage belirli bir seviyenin üzerinde olmalı.
- TDD (Test Driven Development) yaklaşımı teşvik edilmeli. 