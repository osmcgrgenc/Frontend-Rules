# Pull Request ve Code Review Kuralları

## 1. Pull Request (PR) Açma Kuralları

### 1.1. PR Hazırlama
✅ **PR Açmadan Önce**
- Kodunuzu gözden geçirin ve gereksiz değişiklikleri temizleyin.
- Linter ve formatter çalıştırın.
- Testleri çalıştırın ve tüm testlerin geçtiğinden emin olun.
- Branch'inizi güncelleyin: `git pull --rebase origin develop`

✅ **PR Boyutu**
- PR'lar mümkün olduğunca küçük tutulmalı (ideal olarak 300-500 satır değişiklik).
- Büyük değişiklikler birden fazla PR'a bölünmeli.
- Tek bir PR'da birden fazla bağımsız değişiklik olmamalı.

### 1.2. PR Açma
✅ **PR Başlığı**
- PR başlığı açıklayıcı olmalı.
- Conventional Commits formatına uygun olmalı: `feat(component): Add new feature`
- Başlık, yapılan değişikliği kısaca özetlemeli.

✅ **PR Açıklaması**
- Değişikliğin amacını açıklayın.
- Yapılan değişiklikleri maddeler halinde listeyin.
- Varsa ilgili issue numaralarını belirtin.
- Ekran görüntüleri veya GIF'ler ekleyin (UI değişiklikleri için).

✅ **PR Template Örneği**
```markdown
## Açıklama
Bu PR, kullanıcı profil sayfasına yeni bir özellik ekler.

## Yapılan Değişiklikler
- Profil sayfasına avatar yükleme özelliği eklendi
- Avatar yükleme için API entegrasyonu yapıldı
- Responsive tasarım iyileştirmeleri yapıldı

## İlgili Issue
Fixes #123

## Ekran Görüntüleri
![Ekran görüntüsü](link-to-screenshot)

## Test Edildi mi?
- [x] Unit testler yazıldı
- [x] Manuel test edildi
- [x] Responsive tasarım kontrol edildi
```

### 1.3. PR Etiketleme ve Atama
✅ **Etiketler ve Atamalar**
- PR'a uygun etiketler ekleyin (bug, feature, documentation vb.).
- İlgili kişileri reviewer olarak atayın.
- Gerekirse belirli kişileri mention edin (@username).

## 2. Code Review Süreci

### 2.1. Reviewer Sorumlulukları
✅ **Review Zamanlaması**
- PR'lar 24 saat içinde review edilmeli.
- Acil PR'lar öncelikli olarak ele alınmalı.
- Review yapamayacak durumda iseniz, başka bir reviewer atanmasını isteyin.

✅ **Review Kapsamı**
- Kod kalitesi ve standartlara uygunluk kontrol edilmeli.
- Mimari ve tasarım kararları değerlendirilmeli.
- Performans ve güvenlik sorunları tespit edilmeli.
- Testlerin yeterliliği kontrol edilmeli.

### 2.2. Feedback Verme
✅ **Yapıcı Feedback**
- Eleştiriler yapıcı ve saygılı olmalı.
- Sorunları açıkça belirtin ve çözüm önerileri sunun.
- Övgüyü esirgemeyin, iyi yapılmış işleri takdir edin.

✅ **Feedback Formatı**
- Önemli sorunlar için "Blocker" etiketini kullanın.
- Öneriler için "Suggestion" etiketini kullanın.
- Sorular için "Question" etiketini kullanın.
- Övgüler için "Praise" etiketini kullanın.

✅ **Örnek Feedback Mesajları**
- ❌ "Bu kod kötü."
- ✅ "Bu fonksiyon çok uzun ve karmaşık. Daha küçük fonksiyonlara bölmek okunabilirliği artırabilir."
- ❌ "Neden böyle yazdın?"
- ✅ "Bu yaklaşımı seçme nedeniniz nedir? Alternatif olarak X yaklaşımı daha performanslı olabilir."

### 2.3. Feedback Alma
✅ **Feedback'e Yanıt Verme**
- Tüm feedback'lere yanıt verin.
- Katılmadığınız noktalarda nedenlerinizi açıklayın.
- Değişiklik yaptığınızda "Fixed" veya "Done" ile belirtin.

✅ **Yapıcı Tartışma**
- Tartışmaları kişiselleştirmeden, teknik düzeyde tutun.
- Anlaşmazlıkları çözmek için üçüncü bir kişinin görüşünü alın.
- Tartışmaları PR üzerinde tutun, özel mesajlara taşımayın.

## 3. Code Review Kontrol Listesi

### 3.1. Kod Standartlarına Uygunluk
✅ **Genel Kontroller**
- [ ] Kod ESLint ve Prettier tarafından temizlenmiş mi?
- [ ] Dosya ve klasör yapısı mantıklı mı?
- [ ] Değişken ve fonksiyon isimleri anlaşılır mı?
- [ ] Gereksiz console.log veya yorum satırları kaldırılmış mı?

### 3.2. Performans ve Optimizasyon
✅ **Performans Kontrolleri**
- [ ] Gereksiz tekrar eden kodlar var mı?
- [ ] API çağrıları optimize edilmiş mi?
- [ ] Gereksiz render'lar önlenmiş mi?
- [ ] Büyük veri yapıları verimli şekilde işleniyor mu?

### 3.3. State Yönetimi
✅ **State Yönetimi Kontrolleri**
- [ ] Redux / NgRx gibi state yönetimi doğru kullanılmış mı?
- [ ] State güncellemeleri gereksiz render tetikliyor mu?
- [ ] Global state yerine local state mi tercih edilmiş?
- [ ] Immutable state güncellemeleri yapılmış mı?

### 3.4. Güvenlik ve Veri Doğrulama
✅ **Güvenlik Kontrolleri**
- [ ] Kullanıcı girdileri doğru şekilde doğrulanıyor mu?
- [ ] XSS, CSRF gibi güvenlik açıklarına karşı önlem alınmış mı?
- [ ] Sensitive bilgiler client-side'da saklanmıyor mu?
- [ ] API anahtarları ve şifreler güvenli şekilde yönetiliyor mu?

### 3.5. Testler ve Hata Yönetimi
✅ **Test Kontrolleri**
- [ ] Unit testler yazılmış mı?
- [ ] Test coverage yeterli mi?
- [ ] Edge case'ler test edilmiş mi?
- [ ] API hataları ele alınmış mı?
- [ ] UI'de hata mesajları düzgün gösteriliyor mu?

### 3.6. Git ve Commit Mesajları
✅ **Git Kontrolleri**
- [ ] Commit mesajları kurallara uygun mu?
- [ ] Gereksiz dosyalar commit'e eklenmiş mi?
- [ ] Büyük binary dosyalar commit edilmiş mi?
- [ ] Merge conflict artıkları kalmış mı?

### 3.7. Dokümantasyon ve Kod Açıklamaları
✅ **Dokümantasyon Kontrolleri**
- [ ] Readme veya dökümantasyon güncellendi mi?
- [ ] Karmaşık fonksiyonlar açıklanmış mı?
- [ ] API değişiklikleri dokümante edilmiş mi?
- [ ] Yeni eklenen özellikler için kullanım örnekleri var mı?

## 4. PR Onaylama ve Merge Etme

### 4.1. PR Onaylama Kriterleri
✅ **Onay İçin Gereksinimler**
- Tüm blocker sorunlar çözülmüş olmalı.
- En az bir onay alınmış olmalı (ideal olarak iki).
- Tüm CI/CD kontrolleri geçmiş olmalı.
- Tüm tartışmalar çözülmüş olmalı.

### 4.2. Merge Etme Süreci
✅ **Merge Öncesi Kontroller**
- Branch'inizi güncelleyin: `git pull --rebase origin develop`
- Conflict'leri çözün.
- Testleri tekrar çalıştırın.

✅ **Merge Stratejileri**
- Squash merge: Küçük feature'lar için
- Merge commit: Büyük feature'lar için
- Rebase and merge: Temiz bir commit geçmişi için

### 4.3. Merge Sonrası
✅ **Merge Sonrası İşlemler**
- Feature branch'ini silin.
- İlgili issue'ları kapatın.
- Deployment gerekiyorsa, deployment sürecini başlatın.
- Ekip üyelerine bilgi verin. 