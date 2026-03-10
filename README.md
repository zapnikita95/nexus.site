# Нексус-Тех — ИИ-платформа для крупного бизнеса

Мультиагентная AI-платформа для enterprise. 100% on-premise.

## Как лить на прод

**Одна команда** из корня проекта (папка Мультиагент):
```bash
./nexus.site/deploy-to-prod.sh
```
Скрипт копирует `nexus.site/` в репо **zapnikita95/nexus.site**, пушит в main. Прод обновляется за 1–2 мин: https://xn----itbbsn0aajgy.xn--p1ai/

---

## Сайт

**Единственный источник** — эта папка `nexus.site`. Деплой: пуш в **origin (GitHub)**.

### Откуда пушится прод (xn----itbbsn0aajgy.xn--p1ai)

Прод отдаётся из репо **zapnikita95/nexus.site**: Deploy from a branch → main → / (root). Домен: нексус-тех.рф.

Разработка ведётся здесь, в **zapnikita95/nexus-tech**, в папке `nexus.site/`. Чтобы обновить прод, нужно скопировать содержимое этой папки в репо **nexus.site** и запушить:

```bash
# один раз: клонировать репо прода (если ещё нет)
git clone https://github.com/zapnikita95/nexus.site.git _deploy
cd _deploy

# при каждом обновлении: скопировать контент из nexus-tech и запушить
cp -r /path/to/nexus-tech/nexus.site/* .
git add -A && git status
git commit -m "обновление: статьи, даты, правки" && git push origin main
cd .. && rm -rf _deploy   # опционально
```

После пуша в **nexus.site** GitHub Pages подхватит изменения за 1–2 минуты.

**Скрипт из репо:** из корня проекта выполни `./nexus.site/deploy-to-prod.sh` — скрипт клонирует/обновляет репо nexus.site, копирует туда содержимое `nexus.site/`, коммитит и пушит. Нужны права на запись в zapnikita95/nexus.site.
