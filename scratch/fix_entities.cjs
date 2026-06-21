const fs = require('fs');
const path = require('path');

const theoryDir = 'c:/Users/tmpAdmin/AntigravityProjects/Fizyka/src/pages/teoria';

const files = fs.readdirSync(theoryDir);

for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const filePath = path.join(theoryDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // We match any String.raw`...` block
    // Note: we can use a regex with a callback to perform the inner replacement
    const rawRegex = /String\.raw`([\s\S]*?)`/g;
    
    const newContent = content.replace(rawRegex, (match, rawBody) => {
        let cleanBody = rawBody.replace(/&gt;/g, '>').replace(/&lt;/g, '<');
        return `String.raw\`${cleanBody}\``;
    });
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Fixed entities in String.raw in: ${file}`);
    }
}
