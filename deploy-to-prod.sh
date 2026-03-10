#!/usr/bin/env bash
# Деплой сайта на прод (zapnikita95/nexus.site).
# Запускать из корня репо Мультиагент (родитель папки nexus.site).

set -e
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_DIR="${REPO_ROOT}/_deploy_nexus_site"
SITE_SOURCE="${REPO_ROOT}/nexus.site"

if [[ ! -d "$SITE_SOURCE" ]]; then
  echo "Папка nexus.site не найдена: $SITE_SOURCE"
  exit 1
fi

if [[ -d "$DEPLOY_DIR" ]]; then
  echo "Обновляю существующий клон..."
  (cd "$DEPLOY_DIR" && git fetch origin && git checkout main && git pull origin main)
else
  echo "Клонирую zapnikita95/nexus.site..."
  git clone https://github.com/zapnikita95/nexus.site.git "$DEPLOY_DIR"
  cd "$DEPLOY_DIR" && git checkout main && cd "$REPO_ROOT"
fi

echo "Копирую контент из nexus.site/..."
rsync -a --delete --exclude '.git' --exclude 'README.md' "$SITE_SOURCE/" "$DEPLOY_DIR/"
cp "$SITE_SOURCE/README.md" "$DEPLOY_DIR/" 2>/dev/null || true

cd "$DEPLOY_DIR"
if git status --short | grep -q .; then
  git add -A
  git status --short
  git commit -m "деплой: обновление из nexus-tech ($(date +%Y-%m-%d))"
  git push origin main
  echo "Готово. Прод обновится через 1–2 минуты: https://xn----itbbsn0aajgy.xn--p1ai/"
else
  echo "Изменений нет, пуш не нужен."
fi

echo "Клон оставлен в $DEPLOY_DIR (можно удалить: rm -rf $DEPLOY_DIR)"
