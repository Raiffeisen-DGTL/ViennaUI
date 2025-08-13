
/**
 * 
 * Скрипт для обработки MDX-файлов компонентов из techhub и обновления ими README.md в ViennaUI
 * Может криво копировать таблицы пропсов 
 * Лучше запускать из папки, где лежат оба проекта
 */
const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, 'techhub', 'docs', 'web', 'components');
const targetDir = path.resolve(__dirname, 'ViennaUI', 'src');

const frontMatterRegex = /^---[\s\S]*?---[\r\n]?/; // Frontmatter
const importRegex = /^[ \t]*import[\s\S]*?\n\n/gm; // Импорты в начале MDX
const playgroundRegex = /<Playground[^>]*>|<\/Playground>/g; // <Playground> и </Playground>
const metaRegex = /<Meta[\s\S]*?\/>|Meta[\s\S]*?>([\s\S]*?<\/Meta>)/g; // <Meta> и <Meta ... />
const importSectionRegex = /## Импорт\s+```(?:jsx|js|tsx|ts)?\s*[\s\S]*?```/g; // Секция импорта

// Регулярное выражение для поиска всех таблиц пропсов
const propsTableRegex = /(?:##.*\n)?\|?\s*Prop\s*\|\s*Type\s*\|\s*Default\s*\|.*?\n\|.*?\n(?:\|.*\|.*\|.*\|.*\|.*\n?)+/g;

/**
 * Извлекает содержимое из MDX, убирая лишнее
 */
function extractContentFromMDX(content) {
    content = content.replace(frontMatterRegex, '');

    content = content.replace(importRegex, '');

    content = content.replace(metaRegex, '');

    // Заменяем <Playground> на тройные кавычки
    content = content.replace(playgroundRegex, '```');

    return content.trim();
}

/**
 * Обновляет README.md, сохраняя:
 * - Секцию импорта
 * - Все таблицы Prop | Type | Default | Description
 * - И вставляет новое содержимое после них
 */
function updateReadme(oldReadme, newContent) {
    // Ищем секцию импорта
    const importSectionMatch = oldReadme.match(/## Импорт\s+```(?:jsx|js|tsx|ts)?\s*[\s\S]*?```/g);
    const importSection = importSectionMatch ? importSectionMatch[0] : '';

    // Ищем все таблицы Prop | Type | Default | Description
    const propsTables = oldReadme.match(propsTableRegex) || [];

    // Находим, где заканчиваются импорт и таблицы
    let headerEndIndex = 0;

    if (importSection) {
        const importIndex = oldReadme.indexOf(importSection);
        if (importIndex !== -1) {
            headerEndIndex = importIndex + importSection.length;
        }
    }

    if (propsTables.length > 0) {
        const lastTable = propsTables[propsTables.length - 1];
        const lastTableIndex = oldReadme.indexOf(lastTable);
        if (lastTableIndex !== -1) {
            headerEndIndex = lastTableIndex + lastTable.length;
        }
    }

    if (headerEndIndex === 0) {
        // Если нет импорта и таблиц — вставляем после заголовка
        const firstNewLine = oldReadme.split('\n').findIndex(line => line.trim() !== '');
        if (firstNewLine !== -1) {
            headerEndIndex = oldReadme.indexOf('\n', firstNewLine) + 1;
        } else {
            headerEndIndex = oldReadme.length;
        }
    }

    // Убираем всё, что после импорта и таблиц
    const readmeHeader = oldReadme.slice(0, headerEndIndex);
    const finalReadme = readmeHeader + '\n\n' + newContent;

    return finalReadme.trim();
}

/**
 * Обрабатывает один MDX-файл и обновляет README.md
 */
function processComponentFile(filename) {
    const componentName = path.basename(filename, '.mdx');
    const sourcePath = path.join(sourceDir, filename);
    const targetComponentDir = path.join(targetDir, componentName);
    const targetReadmePath = path.join(targetComponentDir, 'README.md');

    // Создаём папку компонента, если её нет
    if (!fs.existsSync(targetComponentDir)) {
        fs.mkdirSync(targetComponentDir, { recursive: true });
        console.log(`📁 Создана папка для компонента ${componentName}`);
    }

    // Читаем содержимое MDX
    if (!fs.existsSync(sourcePath)) {
        console.warn(`⚠️ MDX-файл для ${componentName} не найден`);
        return;
    }

    const mdxContent = fs.readFileSync(sourcePath, 'utf-8');
    const newReadmeContent = extractContentFromMDX(mdxContent);

    // Читаем старый README или создаём новый
    let oldReadmeContent = fs.existsSync(targetReadmePath)
        ? fs.readFileSync(targetReadmePath, 'utf-8')
        : `# ${componentName}\n\n`;

    // Обновляем README
    const finalReadmeContent = updateReadme(oldReadmeContent, newReadmeContent);

    fs.writeFileSync(targetReadmePath, finalReadmeContent);
    console.log(`✅ README.md для компонента ${componentName} обновлён`);
}


function main() {
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error('❌ Ошибка чтения папки с MDX-файлами:', err);
            return;
        }

        files
            .filter(file => file.endsWith('.mdx'))
            .forEach(processComponentFile);
    });
}

main();
