#!/bin/bash
# hiiragi モノレポ側の修正を hiiragi-portfolio-site に反映する
# 対応関係:
#   frontend/** -> hiiragi-portfolio-site/frontend/**
#   api/**      -> hiiragi-portfolio-site/backend/**
# portfolio-site 側に同じパスのファイルが存在する場合のみ上書きコピーする
# (portfolio-site にしか無いファイルや、api 固有の Laravel 雛形は触らない)

set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/hiiragi-portfolio-site"
[ -d "$DEST" ] || exit 0

synced=0
sync_pair() {
  local src_dir="$1" dest_dir="$2"
  [ -d "$ROOT/$src_dir" ] || return 0
  while IFS= read -r -d '' src; do
    rel="${src#"$ROOT/$src_dir/"}"
    dest="$DEST/$dest_dir/$rel"
    if [ -f "$dest" ] && ! cmp -s "$src" "$dest"; then
      cp "$src" "$dest"
      echo "synced: $src_dir/$rel -> hiiragi-portfolio-site/$dest_dir/$rel"
      synced=1
    fi
  done < <(find "$ROOT/$src_dir" -type f \
             -not -path '*/node_modules/*' -not -path '*/.next/*' \
             -not -path '*/vendor/*' -not -path '*/storage/*' -print0)
}

sync_pair frontend frontend
sync_pair api backend

[ "$synced" -eq 0 ] || echo "→ hiiragi-portfolio-site 側でコミットを忘れずに"
exit 0
