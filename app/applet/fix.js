const fs = require('fs');
const content = fs.readFileSync('src/i18n.ts', 'utf8');
const lines = content.split('\n');
lines[198] = '      "We aim to simplify complex financial processes through an intuitive and reliable platform that offers services such as digital payments, money transfer, AEPS, bill payments, micro-ATM solutions, recharges, and other value-added financial products. By equipping retailers and distribution partners with robust tools and infrastructure, we enable them to become local financial service hubs within their communities.": "हमारा लक्ष्य एक सहज और विश्वसनीय मंच के माध्यम से जटिल वित्तीय प्रक्रियाओं को सरल बनाना है जो डिजिटल भुगतान, धन हस्तांतरण, एईपीएस, बिल भुगतान, माइक्रो-एटीएम समाधान, रिचार्ज और अन्य मूल्य वर्धित वित्तीय उत्पादों जैसी सेवाएं प्रदान करता है। खुदरा विक्रेताओं और वितरण भागीदारों को मजबूत उपकरणों और बुनियादी ढांचे से लैस करके, हम उन्हें अपने समुदायों के भीतर स्थानीय वित्तीय सेवा केंद्र बनने में सक्षम बनाते हैं।"';
lines.splice(199, 0, '    }', '  },', '  kn: {');
fs.writeFileSync('src/i18n.ts', lines.join('\n'));
