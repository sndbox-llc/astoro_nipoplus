// src/content/config.ts
import { defineCollection } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { z } from 'astro/zod' // 👈 追加

export const collections = {
  docs: defineCollection({
    loader: docsLoader(), // 👈 これを残すのが正解でした！
    schema: docsSchema({
      // 👈 docsSchemaの中に extend を追加します
      extend: z.object({
        hide_breadcrumbs: z.boolean().optional(),
      }),
    }),
  }),
}

// 環境変数の型定義（こちらもそのまま残して大丈夫です）
interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_ACCESS_TOKEN: string
}
