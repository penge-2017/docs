import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, '../../');

const IGNORE_FOLDERS = ['assets', 'public', 'components'];
const IGNORE_FILES = ['index.md', 'README.md'];

/**
 * 递归地为所有包含内容的子目录生成侧边栏配置
 * @param {string} currentPath - 当前处理的目录的绝对路径
 * @returns {import('vitepress').DefaultTheme.Sidebar} - 返回一个包含所有路径及其侧边栏配置的对象
 */
function generateSidebarsForDirectory(currentPath) {
    let sidebars = {};
    const entries = fs.readdirSync(currentPath);

    const subDirs = [];
    const files = [];

    // 1. 分离文件夹和文件
    for (const entry of entries) {
        const fullPath = path.join(currentPath, entry);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory() && !IGNORE_FOLDERS.includes(entry)) {
            subDirs.push({ text: entry, fullPath });
        } else if (stats.isFile() && entry.endsWith('.md') && !IGNORE_FILES.includes(entry)) {
            const text = path.basename(entry, '.md');
            const link = path.join('/', path.relative(docsRoot, fullPath)).replace(/\\/g, '/').replace(/\.md$/, '');
            files.push({ text, link });
        }
    }

    // 2. 为当前目录生成侧边栏（如果它包含任何内容）
    if (subDirs.length > 0 || files.length > 0) {
        // 排序：文件夹在前，文件在后
        subDirs.sort((a, b) => a.text.localeCompare(b.text));
        files.sort((a, b) => a.text.localeCompare(b.text));

        const sidebarItems = [
            ...subDirs.map(dir => ({
                text: dir.text,
                items: generateSidebarItemsForSingleDir(dir.fullPath), // 为子目录生成其内部的条目
                collapsible: true,
                collapsed: false,
            })),
            ...files,
        ];

        // 生成 VitePress 配置的 key，即 URL 路径前缀
        const sidebarKey = `/${path.relative(docsRoot, currentPath).replace(/\\/g, '/')}/`;

        // 如果顶级目录只有一个分组，可以考虑展开它
        sidebars[sidebarKey] = [{
            text: '本章目录', // 可以根据路径动态生成，例如 path.basename(currentPath)
            items: sidebarItems
        }];
    }

    // 3. 递归处理所有子目录
    for (const dir of subDirs) {
        const subSidebars = generateSidebarsForDirectory(dir.fullPath);
        Object.assign(sidebars, subSidebars);
    }

    return sidebars;
}

/**
 * 辅助函数：只为单个目录生成其直接子项的列表（非递归）
 * @param {string} dirPath - 目标目录的绝对路径
 */
function generateSidebarItemsForSingleDir(dirPath) {
    const entries = fs.readdirSync(dirPath);
    const items = [];
    for (const entry of entries) {
        if (entry.endsWith('.md') && !IGNORE_FILES.includes(entry)) {
            const text = path.basename(entry, '.md');
            const link = path.join('/', path.relative(docsRoot, path.join(dirPath, entry))).replace(/\\/g, '/').replace(/\.md$/, '');
            items.push({ text, link });
        }
    }
    return items.sort((a, b) => a.text.localeCompare(b.text));
}

// --- 真正导出的侧边栏配置 ---
const zhNotesPath = path.join(docsRoot, 'notes');

export const sidebar = {
    ...generateSidebarsForDirectory(zhNotesPath),
};
