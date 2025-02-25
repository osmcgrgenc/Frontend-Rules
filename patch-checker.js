#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { Command } from 'commander';

const program = new Command();

program
  .name('patch-checker')
  .description('Frontend kod değişikliklerini kontrol eden bir araç')
  .version('1.0.0')
  .option('--rules <path>', 'Kurallar dosyasının yolu', 'cursorrules.json')
  .option('--patch <path>', 'Patch dosyasının yolu')
  .parse(process.argv);

const options = program.opts();

if (!options.patch) {
  console.error(chalk.red('Hata: Patch dosyası belirtilmedi!'));
  console.log('Kullanım: node patch-checker.js --patch <patch-dosyası> [--rules <kurallar-dosyası>]');
  process.exit(1);
}

// Dosyaların var olup olmadığını kontrol et
if (!fs.existsSync(options.patch)) {
  console.error(chalk.red(`Hata: ${options.patch} dosyası bulunamadı!`));
  process.exit(1);
}

if (!fs.existsSync(options.rules)) {
  console.error(chalk.red(`Hata: ${options.rules} dosyası bulunamadı!`));
  process.exit(1);
}

// Kuralları yükle
const rules = JSON.parse(fs.readFileSync(options.rules, 'utf8'));
console.log(chalk.blue('Kurallar yüklendi:', options.rules));

// Patch dosyasını oku
const patchContent = fs.readFileSync(options.patch, 'utf8');
console.log(chalk.blue('Patch dosyası yüklendi:', options.patch));

// Patch dosyasını parse et
const filesChanged = parsePatchFile(patchContent);
console.log(chalk.green(`${filesChanged.length} dosya değişikliği tespit edildi.`));

// Her dosya değişikliğini incele
let totalIssues = 0;
const issuesBySeverity = { error: 0, warning: 0, info: 0 };

filesChanged.forEach(file => {
  console.log(chalk.yellow('\n---------------------------------'));
  console.log(chalk.yellow('Dosya:', file.filename));
  console.log(chalk.yellow('---------------------------------'));
  
  const issues = checkFileAgainstRules(file, rules);
  
  if (issues.length === 0) {
    console.log(chalk.green('✓ Bu dosyada sorun bulunamadı.'));
  } else {
    issues.forEach(issue => {
      const severityColor = issue.severity === 'error' ? 'red' : 
                           issue.severity === 'warning' ? 'yellow' : 'blue';
      
      console.log(chalk[severityColor](`${issue.severity.toUpperCase()}: ${issue.message}`));
      if (issue.line) {
        console.log(chalk.gray(`  Satır ${issue.line}: ${issue.content}`));
      }
      
      issuesBySeverity[issue.severity]++;
      totalIssues++;
    });
  }
});

// Kontrol listesi öğelerini kontrol et
console.log(chalk.yellow('\n---------------------------------'));
console.log(chalk.yellow('Kontrol Listesi Değerlendirmesi'));
console.log(chalk.yellow('---------------------------------'));

rules.checklist.forEach(category => {
  console.log(chalk.cyan(`\n${category.category}:`));
  category.items.forEach(item => {
    // Bu örnekte kontrol listesi öğelerini otomatik olarak değerlendirmiyoruz
    // Gerçek bir uygulamada, bu öğeleri incelemek için daha karmaşık mantık gerekebilir
    console.log(chalk.gray(`[ ] ${item}`));
  });
});

// Özet bilgileri yazdır
console.log(chalk.yellow('\n---------------------------------'));
console.log(chalk.yellow('Özet'));
console.log(chalk.yellow('---------------------------------'));
console.log(`Toplam sorun: ${totalIssues}`);
console.log(chalk.red(`Hatalar: ${issuesBySeverity.error}`));
console.log(chalk.yellow(`Uyarılar: ${issuesBySeverity.warning}`));
console.log(chalk.blue(`Bilgiler: ${issuesBySeverity.info}`));

// Patch dosyasını parse etme fonksiyonu
function parsePatchFile(patchContent) {
  const files = [];
  const fileRegex = /^Index: (.+)$/gm;
  const diffStartRegex = /^diff --git/m;
  
  let match;
  while ((match = fileRegex.exec(patchContent)) !== null) {
    const filename = match[1];
    const startIndex = match.index;
    
    // Bir sonraki dosyanın başlangıcını bul
    const nextMatch = fileRegex.exec(patchContent);
    const endIndex = nextMatch ? nextMatch.index : patchContent.length;
    fileRegex.lastIndex = startIndex + 1; // Regex indeksini geri al
    
    const filePatch = patchContent.substring(startIndex, endIndex);
    
    // Parse diff lines
    const diffLines = [];
    const lines = filePatch.split('\n');
    let inDiff = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(diffStartRegex)) {
        inDiff = true;
        continue;
      }
      
      if (inDiff) {
        if (line.startsWith('+') || line.startsWith('-')) {
          diffLines.push({
            type: line.startsWith('+') ? 'added' : 'removed',
            content: line.substring(1),
            lineNumber: null // Gerçek line numarası tespit etmek daha karmaşık
          });
        }
      }
    }
    
    files.push({
      filename,
      patch: filePatch,
      diffLines
    });
  }
  
  return files;
}

// Dosyayı kurallarla karşılaştırma fonksiyonu
function checkFileAgainstRules(file, rules) {
  const issues = [];
  const fileExtension = path.extname(file.filename).substring(1);
  
  // Dosya türüne göre kurallar uygula
  if (fileExtension === 'ts' || fileExtension === 'js') {
    checkTypeScriptRules(file, rules, issues);
  } else if (fileExtension === 'html') {
    checkHtmlRules(file, rules, issues);
  } else if (fileExtension === 'scss' || fileExtension === 'css') {
    checkCssRules(file, rules, issues);
  }
  
  // Genel kuralları kontrol et
  checkGeneralRules(file, rules, issues);
  
  return issues;
}

function checkTypeScriptRules(file, rules, issues) {
  const tsRules = rules.rules.typescript;
  
  // Örnek: 'any' tipi kullanımı kontrolü
  if (tsRules.typing.noAny) {
    file.diffLines.forEach(line => {
      if (line.type === 'added' && line.content.includes(': any')) {
        issues.push({
          severity: tsRules.typing.severity,
          message: "'any' tipi kullanılmamalı. Belirli bir tip tanımlayın.",
          line: line.lineNumber,
          content: line.content
        });
      }
    });
  }
  
  // İsim kuralları kontrolü
  file.diffLines.forEach(line => {
    if (line.type === 'added') {
      // Component ismi kontrolü
      if (line.content.includes('@Component') || line.content.includes('Component {')) {
        const componentNameMatch = /class\s+(\w+)/.exec(line.content);
        if (componentNameMatch && !componentNameMatch[1].match(/^[A-Z][a-zA-Z0-9]*Component$/)) {
          issues.push({
            severity: rules.rules.general.naming.severity,
            message: `Component isimleri PascalCase ve 'Component' son eki ile olmalı: ${componentNameMatch[1]}`,
            line: line.lineNumber,
            content: line.content
          });
        }
      }
      
      // Değişken ismi kontrolü
      const varDeclaration = /\b(const|let|var)\s+(\w+)\s*[=:]/.exec(line.content);
      if (varDeclaration) {
        const varName = varDeclaration[2];
        if (!varName.match(/^[a-z][a-zA-Z0-9]*$/)) {
          issues.push({
            severity: rules.rules.general.naming.severity,
            message: `Değişken isimleri camelCase olmalı: ${varName}`,
            line: line.lineNumber,
            content: line.content
          });
        }
      }
    }
  });
}

function checkHtmlRules(file, rules, issues) {
  // HTML içeriklerini kontrol et
  file.diffLines.forEach(line => {
    if (line.type === 'added') {
      // Hard-coded string kontrolü
      if (line.content.match(/>[\w\s]+</)) {
        issues.push({
          severity: 'warning',
          message: "Tüm metin içerikleri i18n ile çevrilmelidir.",
          line: line.lineNumber,
          content: line.content
        });
      }
      
      // İç içe div kontrolü
      const divCount = (line.content.match(/<div/g) || []).length;
      if (divCount > 3) {
        issues.push({
          severity: 'warning',
          message: "Çok fazla iç içe div kullanımı. Daha semantik HTML kullanın.",
          line: line.lineNumber,
          content: line.content
        });
      }
    }
  });
}

function checkCssRules(file, rules, issues) {
  const cssRules = rules.rules.css;
  
  // CSS sınıf isimlerini kontrol et
  file.diffLines.forEach(line => {
    if (line.type === 'added') {
      const classMatch = /\.([a-zA-Z0-9-_]+)\s*\{/.exec(line.content);
      if (classMatch) {
        const className = classMatch[1];
        if (cssRules.naming.classes === 'kebab-case' && !className.match(/^[a-z][a-z0-9-]*$/)) {
          issues.push({
            severity: cssRules.naming.severity,
            message: `CSS sınıf isimleri kebab-case olmalı: .${className}`,
            line: line.lineNumber,
            content: line.content
          });
        }
      }
      
      // CSS birimlerini kontrol et
      const pxMatch = /: \d+px/.exec(line.content);
      if (pxMatch && cssRules.units.avoid.includes('px')) {
        issues.push({
          severity: cssRules.units.severity,
          message: "px yerine tercih edilen birimleri kullanın (rem, em, %).",
          line: line.lineNumber,
          content: line.content
        });
      }
    }
  });
}

function checkGeneralRules(file, rules, issues) {
  const generalRules = rules.rules.general;
  
  // Satır uzunluğu kontrolü
  file.diffLines.forEach(line => {
    if (line.type === 'added' && line.content.length > generalRules.lineLength.maxChars) {
      issues.push({
        severity: generalRules.lineLength.severity,
        message: `Satır uzunluğu ${generalRules.lineLength.maxChars} karakteri aşmamalı.`,
        line: line.lineNumber,
        content: line.content
      });
    }
  });
  
  // Patch boyutu kontrolü
  if (file.diffLines.length > rules.patchAnalysis.thresholds.maxComplexityIncrease) {
    issues.push({
      severity: 'info',
      message: `Bu dosyada çok sayıda değişiklik var (${file.diffLines.length} satır). Daha küçük parçalara bölerek değişiklik yapmayı düşünün.`
    });
  }
} 