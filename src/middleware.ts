// src/middleware.ts
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  // 1. まずStarlightに通常通りページを作らせる
  const response = await next()

  // 2. 出力されたデータがHTMLの場合のみ処理する
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('text/html')) {
    let html = await response.text()
    const pathname = context.url.pathname // 現在のページのURLパス

    // 3. Starlightが強制出力した「記事タイトル | NipoPlus」の形を狙い撃ちして置換
    if (pathname.includes('nipoplus/')) {
      html = html.replace(/<title>(.*?) \| NipoPlus<\/title>/, '<title>$1 | NipoPlus</title>')
    } else if (pathname.includes('legacy/')) {
      html = html.replace(/<title>(.*?) \| NipoPlus<\/title>/, '<title>$1 |【旧版Nipo】</title>')
    } else if (pathname.includes('tech/')) {
      html = html.replace(/<title>(.*?) \| NipoPlus<\/title>/, '<title>$1 | NipoPlus開発者ブログ</title>')
    } else {
      html = html.replace(/<title>(.*?) \| NipoPlus<\/title>/, '<title>$1 | NipoPlus</title>')
    }

    // 4. きれいに書き換えたHTMLをブラウザに返す
    return new Response(html, {
      status: response.status,
      headers: response.headers,
    })
  }

  return response
})
