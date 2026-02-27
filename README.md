# Нексус-Тех — ИИ-платформа для крупного бизнеса

Мультиагентная AI-платформа для enterprise. 100% on-premise.

## Сайт

Статический лендинг. Открыть `index.html` локально или деплой на GitHub Pages.

### GitHub Pages

Сайт выкладывается в репо **zapnikita95/nexus.site**. Эта папка в .gitignore основного проекта — рабочая копия.

**Релиз в прод:** скопировать содержимое этой папки в клон репо и запушить:

```bash
cd /path/to/workspace
git clone https://github.com/zapnikita95/nexus.site.git _np
cp -r nexus.site/* _np/
cd _np && git add -A && git status
git commit -m "описание изменений" && git push origin main
rm -rf ../_np
```

1. Создай репозиторий на GitHub (например `nexus.site` для ENT, или используй корневой репо проекта)
2. Включи Pages: Settings → Pages → Source: main branch, / (root)
3. Добавь remote и запушь:

```bash
git remote add origin https://github.com/ТВОЙ_USERNAME/nexus.site.git
git push -u origin main
```

Сайт ENT: `site-drafts/site/` (оставить только ENT on-prem).  
Сайт SMB: `site-drafts/site-smb/` — отдельно для WB/Ozon/Telegram (малый и средний бизнес).
