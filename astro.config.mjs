// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import rehypeFigure from 'rehype-figure'
import starlightImageZoom from 'starlight-image-zoom'
import remarkHeadingId from 'remark-heading-id'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLinksValidator from 'starlight-links-validator'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  // site: 'https://test5.sndbox.jp',
  site: 'https://nipo-plus-doc.sndbox.jp',
  // プリフェッチ設定を有効化
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // 画面内に入ったら読み込み開始
  },
  image: {
    breakpoints: [500, 1000, 2000],
  },
  integrations: [
    starlight({
      title: 'NipoPlus',
      favicon: '/images/favicon.svg',
      // head: [],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'images/nipoplus.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'images/nipoplus.png' },
        },
      ],

      components: {
        Head: './src/components/CustomHeader.astro',
        Footer: './src/components/CustomFooter.astro',
        Banner: './src/components/LegacyNotice.astro',
        Pagination: './src/components/CustomPagination.astro',
        SiteTitle: './src/components/CustomSiteTitle.astro',
      },
      customCss: [
        './src/styles/main.scss', // ここにSCSSファイルを指定
      ],
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(), // 2. プラグインを追加
        starlightSidebarTopics([
          {
            label: 'お問い合わせ',
            icon: 'phone',
            link: 'inquery',
            items: [],
          },
          {
            label: 'NipoPlus ドキュメント',
            link: 'nipoplus/admin/quickstart',
            icon: 'document',

            items: [
              {
                label: '管理者のやるべきこと',
                items: [
                  //
                  { slug: 'nipoplus/admin/quickstart' },
                  { slug: 'nipoplus/admin/about' },
                ],
              },
              {
                label: '編集者ガイド',
                items: [
                  //
                  { slug: 'nipoplus/editor/about' },
                  { slug: 'nipoplus/editor/groupmanage' },
                  { slug: 'nipoplus/editor/staffmanage' },
                  { slug: 'nipoplus/editor/destinationlock' },
                  { slug: 'nipoplus/editor/limitedTemplate' },
                  { slug: 'nipoplus/editor/template' },

                  { slug: 'nipoplus/editor/tagManagement' },
                  { slug: 'nipoplus/editor/wordBookManagement' },
                  { slug: 'nipoplus/editor/inventory' },
                ],
              },
              {
                label: '日常ガイド',
                items: [
                  //
                  { slug: 'nipoplus/staff/writereport' },
                  { slug: 'nipoplus/staff/readreport' },
                  { slug: 'nipoplus/staff/csv' },
                  { slug: 'nipoplus/staff/pdf' },
                  { slug: 'nipoplus/staff/charts' },
                ],
              },
              {
                label: 'テンプレートパーツ',
                collapsed: true,

                items: [
                  //
                  { slug: 'nipoplus/template/text' },
                  { slug: 'nipoplus/template/selects' },
                  { slug: 'nipoplus/template/date_time' },
                  { slug: 'nipoplus/template/binarys' },
                  { slug: 'nipoplus/template/digital' },
                  { slug: 'nipoplus/template/mod' },
                  { slug: 'nipoplus/template/array' },
                  { slug: 'nipoplus/template/directory' },
                  { slug: 'nipoplus/template/manage' },
                  { slug: 'nipoplus/template/key' },
                ],
              },
              {
                label: '日報以外のデータ管理',
                collapsed: true,

                items: [
                  //
                  { slug: 'nipoplus/other/customer' },
                  { slug: 'nipoplus/other/schedule' },
                  { slug: 'nipoplus/other/project' },
                ],
              },
              {
                label: '詳細リファレンス',
                collapsed: true,

                items: [
                  // Added label 'API' to match recent edits
                  { slug: 'nipoplus/reference/userRank' },
                  // 日報関係
                  { slug: 'nipoplus/reference/searchreport' },
                  { slug: 'nipoplus/reference/reportstate' },
                  { slug: 'nipoplus/reference/redacted' },
                  { slug: 'nipoplus/reference/tuduri' },
                  { slug: 'nipoplus/reference/draft' },
                  { slug: 'nipoplus/reference/copymake' },
                  { slug: 'nipoplus/reference/relation' },
                  { slug: 'nipoplus/reference/removereport' },
                  { slug: 'nipoplus/reference/inputmethod' },

                  // 外部共有
                  { slug: 'nipoplus/reference/outsidewrite' },
                  { slug: 'nipoplus/reference/outsideread' },
                  // 集計

                  { slug: 'nipoplus/reference/csvsettings' },
                  { slug: 'nipoplus/reference/chart' },
                  { slug: 'nipoplus/reference/transition' },
                  { slug: 'nipoplus/reference/accumn' },
                  { slug: 'nipoplus/reference/progress' },
                  { slug: 'nipoplus/reference/cross' },
                  { slug: 'nipoplus/reference/calendar' },

                  { slug: 'nipoplus/reference/notify' },

                  // 管理者編集者向け
                  { slug: 'nipoplus/reference/makestaff' },
                  { slug: 'nipoplus/reference/tokumei' },
                  { slug: 'nipoplus/reference/signin' },

                  // その他
                  { slug: 'nipoplus/reference/account' },
                  { slug: 'nipoplus/reference/timecard' },
                  { slug: 'nipoplus/reference/shift' },
                  { slug: 'nipoplus/reference/log' },
                  { slug: 'nipoplus/reference/staffshare' },
                  { slug: 'nipoplus/reference/api' },
                  { slug: 'nipoplus/reference/withdrawal' },
                ],
              },
              {
                label: '概念説明',
                collapsed: true,
                items: [
                  //
                  { slug: 'nipoplus/gainen/destination' },
                  { slug: 'nipoplus/gainen/reportStorage' },
                  { slug: 'nipoplus/gainen/reportdate' },
                  { slug: 'nipoplus/gainen/sosiki' },
                  { slug: 'nipoplus/gainen/faq' },
                ],
              },

              {
                label: '料金',
                collapsed: true,

                items: [
                  //
                  { slug: 'nipoplus/price' },
                  { slug: 'nipoplus/price/subscription' },
                  { slug: 'nipoplus/price/invoice' },
                  { slug: 'nipoplus/price/free' },
                  { slug: 'nipoplus/price/receipt' },
                ],
              },
              {
                label: '規約等',
                collapsed: true,
                items: [
                  //
                  { slug: 'nipoplus/system/mobile-install' },
                  { slug: 'nipoplus/system/release-note' },
                  { slug: 'nipoplus/system/load-map' },
                  { slug: 'nipoplus/system/security' },
                  { slug: 'nipoplus/system/fix' },
                  { slug: 'nipoplus/system/business-deal' },
                  { slug: 'nipoplus/system/agree' },
                  { slug: 'nipoplus/system/privacy-policy' },
                  { slug: 'nipoplus/system/credit' },
                ],
              },
            ],
          },

          {
            label: '旧Nipoドキュメント',
            link: 'legacy/about/diff',
            icon: 'document',
            items: [
              {
                label: '旧バージョンについて',
                items: [
                  //
                  { slug: 'legacy/about/diff' },
                  { slug: 'legacy/about/warning' },
                  { slug: 'legacy/about/quick' },
                ],
              },
              {
                label: '旧Nipo操作ガイド',
                items: [
                  //
                  { slug: 'legacy/manual/email-verify' },
                  { slug: 'legacy/manual/group' },
                  { slug: 'legacy/manual/staff-manage' },
                  { slug: 'legacy/manual/template' },
                  { slug: 'legacy/manual/write-report' },
                  { slug: 'legacy/manual/postbox' },
                  { slug: 'legacy/manual/calendar' },
                  { slug: 'legacy/manual/group-self' },
                  { slug: 'legacy/manual/edit-login' },
                  { slug: 'legacy/manual/timecards' },
                  { slug: 'legacy/manual/delete' },
                  { slug: 'legacy/manual/project' },
                  { slug: 'legacy/manual/leave-account' },
                  { slug: 'legacy/manual/anonymouse' },
                ],
              },
              {
                label: '各種入力フォーム',
                items: [
                  //
                  { slug: 'legacy/parts/text' },
                  { slug: 'legacy/parts/select' },
                  { slug: 'legacy/parts/sign' },
                  { slug: 'legacy/parts/date' },
                  { slug: 'legacy/parts/math' },
                  { slug: 'legacy/parts/dictionaly' },
                ],
              },
              {
                label: 'Nipoシステム概要',
                items: [
                  //
                  { slug: 'legacy/system/price' },
                  { slug: 'legacy/system/mobile-install' },
                  { slug: 'legacy/system/agree' },
                  { slug: 'legacy/system/privacypolicy' },
                ],
              },
            ],
          },
          {
            label: 'エクセル活用術',
            link: 'excel',
            icon: 'seti:xls',
            items: [
              //
              { slug: 'excel/ref' },
              { slug: 'excel/countif' },
              { slug: 'excel/sumif' },
              { slug: 'excel/time' },
              { slug: 'excel/sales_report' },
            ],
          },
          {
            label: 'コラム記事',
            link: 'tips',
            icon: 'information',
            items: [
              //
              { slug: 'tips/templatemake' },

              { slug: 'tips/templatesample' },
              { slug: 'tips/usecase' },
              { slug: 'tips/analytics' },
              { slug: 'tips/csvsc' },
            ],
          },
          {
            label: '技術系ブログ',
            link: 'tech',
            icon: 'information',
            items: [
              {
                label: 'Firebase関係',
                items: [
                  //
                  { slug: 'tech/firebase/coldstart' },
                  { slug: 'tech/firebase/cors-error' },
                  { slug: 'tech/firebase/elasticsearch' },
                  { slug: 'tech/firebase/fulltext' },
                  { slug: 'tech/firebase/typesense' },
                  { slug: 'tech/firebase/storage' },
                  { slug: 'tech/firebase/emailverified' },
                  { slug: 'tech/firebase/firestore-backup' },
                  { slug: 'tech/firebase/onauthstatechanged' },
                  { slug: 'tech/firebase/separate-files' },
                ],
              },
              {
                label: 'Javascript関係',
                items: [
                  //
                  { slug: 'tech/js/androidapp' },
                  { slug: 'tech/js/asyncawaiterror' },
                  { slug: 'tech/js/capacitor4' },
                  { slug: 'tech/js/chart-js' },
                  { slug: 'tech/js/flexheight' },
                  { slug: 'tech/js/gapi' },
                  { slug: 'tech/js/infixtopostfix' },
                  { slug: 'tech/js/ios-photo-rotate' },
                  { slug: 'tech/js/pdf' },
                  { slug: 'tech/js/pdfmake' },
                  { slug: 'tech/js/proptype' },
                  { slug: 'tech/js/pwa' },
                  { slug: 'tech/js/scroll-modal' },
                  { slug: 'tech/js/vuefilter' },
                ],
              },
              {
                label: 'その他',
                items: [
                  //
                  { slug: 'tech/other/mojibake' },
                  { slug: 'tech/other/hhkb' },
                  { slug: 'tech/other/m1macbook' },
                  { slug: 'tech/other/momentjs' },
                ],
              },
            ],
          },
        ]),
      ],
      locales: {
        root: {
          label: 'Japanese',
          lang: 'ja',
        },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sndbox-llc/astoro_nipoplus' }],
    }),
    sitemap(),
  ],
  markdown: {
    // ここに remarkPlugins を追加
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [[rehypeFigure, { className: 'custom-figure' }]],
  },
})
