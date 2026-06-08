// src/middleware.ts
// サイトのタイトル末尾の「| NipoPlus」を、ページごとに適切なものに置き換えるミドルウェア

import { defineMiddleware } from 'astro:middleware'

// =========================================================================
// 💡 【設定エリア】今後タイトルを増やしたい時は、この配列の中に足すだけ！
// =========================================================================
const TITLE_RULES = [
  { path: 'nipoplus/admin/', suffix: 'NipoPlus 管理者ガイド' },
  { path: 'nipoplus/editor/', suffix: 'NipoPlus 編集者ガイド' },
  { path: 'nipoplus/template/', suffix: 'NipoPlus テンプレート編集ガイド' },
  { path: 'nipoplus/price/', suffix: 'NipoPlus 料金ガイド' },
  { path: 'nipoplus/system/', suffix: 'NipoPlus システム概要' },
  { path: 'nipoplus/', suffix: 'NipoPlus 操作ガイド' },
  { path: 'legacy/', suffix: '【旧版Nipo】' },
  { path: 'tech/', suffix: 'NipoPlus 開発者ブログ' },
  { path: 'excel/', suffix: 'NipoPlus エクセル活用ガイド' },

  // 例：将来的にさらに深い階層（孫階層）を足したくなったらこう書くだけ
  // { path: 'tech/firebase/',   suffix: 'Firebase技術ブログ' },
]

// 文字数が長いルール（＝より深い階層のパス）を自動的に優先して並び替える
const sortedRules = [...TITLE_RULES].sort((a, b) => b.path.length - a.path.length)

export const onRequest = defineMiddleware(async (context, next) => {
  // 1. まずStarlightに通常通りページを作らせる
  const response = await next()

  // 2. 出力されたデータがHTMLの場合のみ処理する
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('text/html')) {
    let html = await response.text()
    const pathname = context.url.pathname // 現在のページのURLパス

    // デフォルトのサフィックス（どの条件にも合致しない、または何もない時）
    let targetSuffix = 'NipoPlus'

    // 3. ルール配列を上から順にチェック（深い階層から順に判定されます）
    for (const rule of sortedRules) {
      if (pathname.includes(rule.path)) {
        targetSuffix = rule.suffix
        break // マッチしたらその時点でループを終了
      }
    }

    // 4. Starlightが強制出力した「記事タイトル | NipoPlus」の形を狙い撃ちして置換
    // ※ targetSuffix に合わせた形に綺麗に書き換えます
    const titleRegex = /<title>(.*?) \| NipoPlus<\/title>/
    html = html.replace(titleRegex, `<title>$1 | ${targetSuffix}</title>`)

    // 5. きれいに書き換えたHTMLをブラウザに返す
    return new Response(html, {
      status: response.status,
      headers: response.headers,
    })
  }

  return response
})
