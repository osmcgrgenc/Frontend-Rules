## **1. Kod Yazım Kuralları (Coding Standards)**

### **1.1. Genel Kurallar**
✅ **Kodun Anlaşılabilirliği**  
- Açık ve anlaşılır değişken, fonksiyon ve sınıf isimleri kullanılmalı.  
- Magic number (sabitsiz doğrudan kullanılan sayılar) yerine değişken yada sabit tanımlanmalı.  
- Fonksiyonlar tek bir iş yapmalı (Single Responsibility Principle - SRP).  
- Gereksiz yorum satırları olmamalı, ancak karmaşık yerler için açıklayıcı yorumlar eklenmeli. Method ve değişkenin adı ne iş yaptığını anlatabilmeli.

✅ **Kodun Düzeni ve Formatı**  
- **Linting ve Formatting:** ESLint ve Prettier gibi araçlarla kod biçimlendirilmiş olmalı.  
- **Dosya Yapısı:** Modüler ve mantıklı bir şekilde organize edilmeli.  
- **Imports:** Kullanılmayan import'lar olmamalı, import sıralaması belirlenmeli ve relative path kullanımından kaçınılmalı, absolute path kullanılmalı.   
- **Tip Güvenliği:** TypeScript projelerinde `any` yerine kesin tipler tanımlanmalı.

### **1.2. Angular İçin Özel Kurallar**
✅ **Bileşen Yönetimi**  
- Komponentler **tek bir sorumluluğa** sahip olmalı.  
- Smart & Dumb Component yapısına uygun olmalı.  
- Template içindeki kodlar minimal tutulmalı, mümkün olduğunca `TypeScript` tarafına taşınmalı.

✅ **Servis Kullanımı**  
- İş mantığı ve API çağrıları servisler içinde olmalı.  
- Store yönetimi kullanılıyorsa (NgRx, Akita, vs.), servisler direkt bileşen içinde kullanılmamalı.

✅ **Angular Modülleri ve Yapılar**  
- Lazy loading kullanılmalı.  
- Component selector’lar `app-` prefix’i ile başlamalı. Projeye göre özelleştiriledebilir ancak prefix kullanılmalı.  
- ViewChild ve ViewChildren kullanılmadan önce performans açısından incelenmeli.

### **1.3. React ve Next.js İçin Özel Kurallar**
✅ **Bileşen Yönetimi**  
- Fonksiyonel bileşenler tercih edilmeli.  
- `useEffect` ve `useState` bağımlılık listeleri dikkatlice kontrol edilmeli.  
- `memo`, `useCallback`, `useMemo` gibi performans optimizasyonu sağlayan hook'lar gerektiğinde kullanılmalı.

✅ **State Yönetimi**  
- Redux Toolkit, Zustand, Recoil gibi state yönetimi kütüphaneleri kullanılıyorsa, **tek yönlü veri akışı** korunmalı.  
- Global state sadece gerekli olduğunda kullanılmalı.

✅ **Next.js Özel Kurallar**  
- **`getServerSideProps` / `getStaticProps` / `generateMetadata`** kullanımı SEO ve performans açısından değerlendirilmiş olmalı.  
- API route'lar sadece gerekli olduğunda kullanılmalı.  
- Sayfa bazlı yönlendirmelerde `next/link` ve `next/router` tercih edilmeli.
- Resimler Image komponenti kullanılarak optimize edilmeli.

### **1.4. SAP Hybris Spartacus İçin Özel Kurallar**
✅ **Bileşen Yönetimi**  
- Angular bileşen yapısına uygun olmalı.  
- **Storefront Module** yerine özel modüller oluşturulmalı.  
- Spartacus'un CMS ve routing mekanizmasına uygun şekilde geliştirme yapılmalı.

✅ **State Yönetimi**  
- NgRx kullanılıyorsa **Actions, Reducers, Selectors** ayrı ayrı tanımlanmalı.  
- Store'da **tek bir state kaynağı** (single source of truth) korunmalı.

---

## **2.🚀 Commit Mesajı Standartları**

Commit mesajları, **Conventional Commits** kurallarıyla uyumlu olarak yazılmalı ve ilgili JIRA ticket numarası vb. eklenmelidir.

### 📌 Format

```plaintext
<type>(<scope>): [<JIRA-XXX>] Kısa açıklama
```

- **`<type>`** → Commit türü (feat, fix, chore, refactor, docs, test, ci, perf, vb.)  
- **`<scope>`** → (Opsiyonel) Etkilenen modül veya bileşen  
- **`[JIRA-XXX]`** → İlgili JIRA ticket numarası  
- **Kısa Açıklama** → Yapılan değişikliği net şekilde açıklayan mesaj  

### 🔹 Commit Türleri ve Örnekler

#### ✨ Yeni Özellik (feat)
```
feat(auth): [JIRA-123] Google ile giriş özelliği eklendi
```
➡ **Açıklama:** Auth modülüne Google ile giriş desteği eklendi.

#### 🐞 Hata Düzeltme (fix)
```
fix(cart): [JIRA-456] Sepette yanlış fiyat hesaplama sorunu giderildi
```
➡ **Açıklama:** Sepette toplam fiyatın hatalı hesaplanması düzeltildi.

#### 🔧 Refactoring (refactor)
```
refactor(api): [JIRA-789] Kullanıcı servisi yeniden düzenlendi
```
➡ **Açıklama:** API yapısı daha okunaklı hale getirildi, ancak işlevsellik değişmedi.

#### 📖 Dokümantasyon Güncellemesi (docs)
```
docs(readme): [JIRA-101] Kurulum adımları eklendi
```
➡ **Açıklama:** Proje README dosyasına kurulum talimatları eklendi.

#### 🛠 Yapısal Değişiklikler (chore)
```
chore(deps): [JIRA-202] Proje bağımlılıkları güncellendi
```
➡ **Açıklama:** Güncel bağımlılıklar projeye entegre edildi.

#### 🚀 Performans İyileştirmesi (perf)
```
perf(query): [JIRA-303] SQL sorguları optimize edildi
```
➡ **Açıklama:** Büyük veri sorgularında performans artırıldı.

#### 🧪 Testler (test)
```
test(auth): [JIRA-404] Kullanıcı girişi için unit test eklendi
```
➡ **Açıklama:** Auth modülü için test senaryoları yazıldı.

#### 🔥 Acil Düzeltme (hotfix)
```
hotfix(payment): [JIRA-505] Prod ortamında ödeme hatası giderildi
```
➡ **Açıklama:** Ödeme işlemlerinde yaşanan kritik hata düzeltildi.

### 📌 Merge Commit Örneği
```
merge: [JIRA-606] Development branch yeni özellikler eklendi
```

Bu kurallar, commit mesajlarının **daha düzenli, okunaklı ve takip edilebilir** olmasını sağlayacaktır. 🚀`  

### ❌ Yanlış Kullanımlar 
❌ `fixed bug`  
❌ `update file`  
❌ `some changes`

---

## **3. Git Kullanım Kuralları (Git Workflow Rules)**

✅ **Branch Kullanımı**  
- **main / master** → Production  
- **development** → Geliştirme ortamı  
- **feature/xxx** → Yeni özellik geliştirme  
- **bugfix/xxx** → Hata düzeltmeleri  
- **hotfix/xxx** → Acil müdahale gerektiren düzeltmeler  

✅ **Merge & PR Kuralları**  
- **Pull Request (PR) açılmadan önce kod gözden geçirilmeli.**  
- **PR mesajı açıklayıcı olmalı.**  
- **PR review sürecinden geçmeden merge yapılmamalı.**  
- **Rebase ile temiz bir commit geçmişi oluşturulmalı.**  
- **Rebase dikkatsizce kullanılmamalı.**
- **PR'a gerekli label'lar eklenmeli. Madde numarası, scope, merge vs.

✅ **Rebase & Squash Kullanımı**  
- `git pull --rebase origin develop`  
- `git rebase -i HEAD~3` ile commit'ler birleştirilmeli.

---

## **4. Code Review Checklist (Kod İnceleme Kontrol Listesi)**

✅ **Kod Standartlarına Uygunluk**  
- [ ] Kod ESLint ve Prettier tarafından temizlenmiş mi?  
- [ ] Dosya ve klasör yapısı mantıklı mı?  
- [ ] Değişken ve fonksiyon isimleri anlaşılır mı?  

✅ **Performans ve Optimizasyon**  
- [ ] Gereksiz tekrar eden kodlar var mı?  
- [ ] API çağrıları optimize edilmiş mi?  
- [ ] Gereksiz render'lar önlenmiş mi?  

✅ **State Yönetimi**  
- [ ] Redux / NgRx gibi state yönetimi doğru kullanılmış mı?  
- [ ] State güncellemeleri gereksiz render tetikliyor mu?  
- [ ] Global state yerine local state mi tercih edilmiş?  

✅ **Güvenlik ve Veri Doğrulama**  
- [ ] Kullanıcı girdileri doğru şekilde doğrulanıyor mu?  
- [ ] XSS, CSRF gibi güvenlik açıklarına karşı önlem alınmış mı?  

✅ **Testler ve Hata Yönetimi**  
- [ ] Unit testler yazılmış mı?  
- [ ] API hataları ele alınmış mı?  
- [ ] UI'de hata mesajları düzgün gösteriliyor mu?  

✅ **Git ve Commit Mesajları**  
- [ ] Commit mesajları kurallara uygun mu?  
- [ ] Gereksiz dosyalar veya satırlar commit’e eklenmiş mi?  

✅ **Dokümantasyon ve Kod Açıklamaları**  
- [ ] Readme veya dökümantasyon güncellendi mi?  
- [ ] Karmaşık fonksiyonlar açıklanmış mı?  

---

## **5. Patch Checker**

✅ **Patch Checker Kullanımı**  

```bash
node patch-checker.js --patch ECO-348__Bottomsheet_added1.patch --rules cursorrules.json
```

