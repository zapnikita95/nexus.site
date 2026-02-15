# Нексус-Тех — ИИ-платформа для крупного бизнеса

Мультиагентная AI-платформа для enterprise. 100% on-premise.

## Сайт

Статический лендинг. Открыть `index.html` локально или деплой на GitHub Pages.

### GitHub Pages

1. Создай репозиторий на GitHub (например `nexus.site` для ENT, или используй корневой репо проекта)
2. Включи Pages: Settings → Pages → Source: main branch, / (root)
3. Добавь remote и запушь:

```bash
git remote add origin https://github.com/ТВОЙ_USERNAME/nexus.site.git
git push -u origin main
```

Сайт ENT: `site-drafts/site/` (оставить только ENT on-prem).  
Сайт SMB: `site-drafts/site-smb/` — отдельно для WB/Ozon/Telegram (малый и средний бизнес).

### Прод (нексус-тех.рф / xn----itbbsn0aajgy.xn--p1ai)

Эта папка `nexus.site/` лежит в основном репо проекта. Чтобы на проде появились правки (таблица пресетов, SVG-схемы, тексты):

- Если прод тянется из **этого репо** — задеплой последний коммит (в котором есть nexus.site).
- Если прод настроен на **отдельный репо** (например только сайт) — скопируй содержимое `nexus.site/` в тот репо и запушь, либо переключи деплой на ветку/папку основного репо с nexus.site.
