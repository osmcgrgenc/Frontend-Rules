# Git ve Versiyon Kontrol Kuralları

## 1. Commit Atma Kuralları

### 1.1. Commit Mesaj Formatı
✅ **Conventional Commits Kullanılmalı**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

✅ **Commit Tipleri**
- `feat`: Yeni bir özellik eklendi.
- `fix`: Bir hata düzeltildi.
- `refactor`: Kod düzenlemesi yapıldı, ancak işlevsellik değişmedi.
- `style`: Sadece stil düzenlemeleri yapıldı (boşluk, format, noktalama vb.).
- `docs`: Dokümantasyon güncellendi.
- `test`: Testler eklendi veya güncellendi.
- `chore`: Build ve yapılandırma dosyaları güncellendi.
- `perf`: Performans iyileştirmeleri yapıldı.

✅ **Scope (Kapsam)**
- Commit'in hangi modül, bileşen veya alanı etkilediğini belirtir.
- Örnek: `feat(auth):`, `fix(cart):`, `refactor(product-list):`

✅ **Örnek Doğru Commit Mesajları**  
✔️ `feat(cart): Sepete ürün ekleme özelliği eklendi.`  
✔️ `fix(auth): Giriş yaparken token hatası giderildi.`  
✔️ `refactor(product-list): Kod düzenlendi ve performans iyileştirildi.`  

✅ **Yanlış Kullanımlar**  
❌ `fixed bug`  
❌ `update file`  
❌ `some changes`

### 1.2. Commit İçeriği
✅ **Commit Boyutu**
- Her commit tek bir mantıksal değişikliği içermeli.
- Çok büyük commit'lerden kaçınılmalı.
- İlgisiz değişiklikler aynı commit'te olmamalı.

✅ **Commit Sıklığı**
- Sık sık commit yapılmalı.
- Uzun süre commit yapmadan çalışmaktan kaçınılmalı.
- Her anlamlı değişiklik sonrası commit yapılmalı.

✅ **Commit Öncesi Kontroller**
- Commit edilecek değişiklikleri `git diff` ile kontrol edin.
- Gereksiz dosyaları (build dosyaları, node_modules vb.) commit etmeyin.
- Commit öncesi linter ve testleri çalıştırın.

## 2. Branch Oluşturma Kuralları

### 2.1. Branch Tipleri
✅ **Ana Branch'ler**
- **main / master** → Production ortamı
- **develop** → Geliştirme ortamı

✅ **Geçici Branch'ler**
- **feature/xxx** → Yeni özellik geliştirme
- **bugfix/xxx** → Hata düzeltmeleri
- **hotfix/xxx** → Acil müdahale gerektiren düzeltmeler
- **release/xxx** → Sürüm hazırlığı

### 2.2. Branch İsimlendirme
✅ **İsimlendirme Formatı**
- Küçük harfler ve tire (-) kullanılmalı.
- İsimler açıklayıcı olmalı.
- Çok uzun isimlerden kaçınılmalı.

✅ **Örnek Branch İsimleri**
- `feature/user-authentication`
- `bugfix/login-validation`
- `hotfix/security-vulnerability`
- `release/v1.2.0`

### 2.3. Branch Yaşam Döngüsü
✅ **Branch Oluşturma**
- Yeni branch'ler her zaman güncel `develop` branch'inden oluşturulmalı.
- Hotfix'ler `main` branch'inden oluşturulabilir.

✅ **Branch Temizliği**
- Merge edilen branch'ler silinmeli.
- Uzun süre açık kalan branch'ler düzenli olarak güncel tutulmalı.

## 3. Merge ve Rebase Stratejileri

### 3.1. Merge Stratejileri
✅ **Merge Commit vs. Squash Merge**
- Feature branch'leri genellikle squash merge ile birleştirilmeli.
- Squash merge, birden fazla commit'i tek bir commit'e sıkıştırır.
- Büyük feature'lar için merge commit tercih edilebilir.

✅ **Merge Conflict Çözümü**
- Conflict'ler dikkatli bir şekilde çözülmeli.
- Conflict çözümünde ilgili ekip üyeleriyle iletişim kurulmalı.
- Conflict çözümü sonrası testler çalıştırılmalı.

### 3.2. Rebase Kullanımı
✅ **Rebase Ne Zaman Kullanılmalı**
- Branch'inizi güncel tutmak için `git pull --rebase origin develop`
- Commit geçmişini temizlemek için `git rebase -i HEAD~n`
- Merge conflict'leri azaltmak için

✅ **Rebase Kuralları**
- Public branch'lerde rebase kullanmaktan kaçının.
- Rebase sonrası force push gerekiyorsa, `-f` yerine `--force-with-lease` kullanın.
- Rebase işlemi öncesi branch'inizi yedekleyin.

### 3.3. Rebase & Squash Kullanımı
- `git pull --rebase origin develop` ile branch'inizi güncelleyin.
- `git rebase -i HEAD~3` ile son 3 commit'i birleştirin.
- Commit mesajlarını düzenleyin ve gereksiz commit'leri kaldırın.

## 4. Git Workflow

### 4.1. Gitflow Workflow
✅ **Gitflow Adımları**
1. `develop` branch'inden feature branch oluştur: `git checkout -b feature/xxx develop`
2. Feature üzerinde çalış ve commit'le
3. Feature tamamlandığında `develop` branch'ini güncelle: `git pull --rebase origin develop`
4. Conflict'leri çöz
5. Feature branch'ini push et: `git push origin feature/xxx`
6. PR aç ve review sürecini başlat
7. PR onaylandıktan sonra `develop` branch'ine merge et

### 4.2. Trunk-Based Development
✅ **Trunk-Based Development Adımları**
1. `main` branch'inden kısa ömürlü feature branch oluştur
2. Küçük, sık commit'ler yap
3. Feature tamamlandığında PR aç
4. PR onaylandıktan sonra `main` branch'ine merge et
5. Feature flag'ler ile tamamlanmamış özellikleri gizle

## 5. Git Hooks ve CI/CD Entegrasyonu

✅ **Pre-commit Hooks**
- Linting ve kod formatı kontrolü
- Testlerin çalıştırılması
- Commit mesaj formatı kontrolü

✅ **CI/CD Entegrasyonu**
- Her PR için otomatik test çalıştırma
- Build sürecini otomatikleştirme
- Deployment sürecini otomatikleştirme

## 6. Git İyi Uygulamalar

✅ **Genel İyi Uygulamalar**
- `.gitignore` dosyasını doğru yapılandırın.
- Sensitive bilgileri (API anahtarları, şifreler vb.) commit etmeyin.
- Git geçmişini temiz tutun.
- Düzenli olarak `git fetch` ve `git pull` yapın.
- Büyük binary dosyaları Git LFS ile yönetin. 