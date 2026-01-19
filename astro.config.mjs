// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import rehypeFigure from 'rehype-figure'
import starlightImageZoom from 'starlight-image-zoom'
import remarkHeadingId from 'remark-heading-id'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
  site: 'https://test5.sndbox.jp',
  // site: 'https://nipo-plus-doc.sndbox.jp',
  integrations: [
    starlight({
      title: 'NipoPlus',

      components: {
        // ここでコンポーネントを上書き（オーバーライド）
        // Header: './src/components/Header.astro',
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
            link: 'docs/admin/quickstart',
            icon: 'document',

            items: [
              {
                label: '管理者のやるべきこと',
                items: [
                  //
                  { slug: 'docs/admin/quickstart' },
                  { slug: 'docs/admin/about' },
                ],
              },
              {
                label: '編集者ガイド',
                items: [
                  //
                  { slug: 'docs/editor/about' },
                  { slug: 'docs/editor/groupmanage' },
                  { slug: 'docs/editor/staffmanage' },
                  { slug: 'docs/editor/destinationlock' },
                  { slug: 'docs/editor/limitedTemplate' },
                  { slug: 'docs/editor/template' },

                  { slug: 'docs/editor/tagManagement' },
                  { slug: 'docs/editor/wordBookManagement' },
                  { slug: 'docs/editor/inventory' },
                ],
              },
              {
                label: '日常ガイド',
                items: [
                  //
                  { slug: 'docs/staff/writereport' },
                  { slug: 'docs/staff/readreport' },
                  { slug: 'docs/staff/csv' },
                  { slug: 'docs/staff/pdf' },
                  { slug: 'docs/staff/charts' },
                ],
              },
              {
                label: '日報以外のデータ管理',
                collapsed: true,

                items: [
                  //
                  { slug: 'docs/other/customer' },
                  { slug: 'docs/other/schedule' },
                  { slug: 'docs/other/project' },
                ],
              },
              {
                label: '詳細リファレンス',
                collapsed: true,

                items: [
                  // Added label 'API' to match recent edits
                  { slug: 'docs/reference/userRank' },
                  // 日報関係
                  { slug: 'docs/reference/searchreport' },
                  { slug: 'docs/reference/reportstate' },
                  { slug: 'docs/reference/removereport' },
                  { slug: 'docs/reference/redacted' },
                  { slug: 'docs/reference/tuduri' },
                  { slug: 'docs/reference/draft' },
                  { slug: 'docs/reference/copymake' },
                  { slug: 'docs/reference/relation' },
                  { slug: 'docs/reference/inputmethod' },

                  // 外部共有
                  { slug: 'docs/reference/outsidewrite' },
                  { slug: 'docs/reference/outsideread' },
                  // 集計

                  { slug: 'docs/reference/csvsettings' },
                  { slug: 'docs/reference/chart' },
                  { slug: 'docs/reference/transition' },
                  { slug: 'docs/reference/accumn' },
                  { slug: 'docs/reference/progress' },
                  { slug: 'docs/reference/cross' },
                  { slug: 'docs/reference/calendar' },

                  { slug: 'docs/reference/notify' },

                  // 管理者編集者向け
                  { slug: 'docs/reference/makestaff' },
                  { slug: 'docs/reference/tokumei' },

                  // その他
                  { slug: 'docs/reference/account' },
                  { slug: 'docs/reference/timecard' },
                  { slug: 'docs/reference/shift' },
                  { slug: 'docs/reference/log' },
                  { slug: 'docs/reference/staffshare' },
                  { slug: 'docs/reference/api' },
                  { slug: 'docs/reference/withdrawal' },
                ],
              },
              {
                label: '概念説明',
                collapsed: true,
                items: [
                  //
                  { slug: 'docs/gainen/destination' },
                  { slug: 'docs/gainen/reportdate' },
                  { slug: 'docs/gainen/sosiki' },
                ],
              },
              {
                label: 'テンプレートパーツ',
                collapsed: true,

                items: [
                  //
                  { slug: 'docs/template/make' },
                  { slug: 'docs/template/text' },
                  { slug: 'docs/template/selects' },
                  { slug: 'docs/template/date_time' },
                  { slug: 'docs/template/binarys' },
                  { slug: 'docs/template/binarys' },
                  { slug: 'docs/template/digital' },
                  { slug: 'docs/template/mod' },
                  { slug: 'docs/template/array' },
                  { slug: 'docs/template/directory' },
                  { slug: 'docs/template/manage' },
                  { slug: 'docs/template/key' },
                ],
              },
              {
                label: '料金',
                collapsed: true,

                items: [
                  //
                  { slug: 'docs/price' },
                  { slug: 'docs/price/subscription' },
                  { slug: 'docs/price/invoice' },
                  { slug: 'docs/price/free' },
                  { slug: 'docs/price/receipt' },
                ],
              },
              {
                label: '規約等',
                collapsed: true,
                items: [
                  //
                  { slug: 'docs/system/mobile-install' },
                  { slug: 'docs/system/release-note' },
                  { slug: 'docs/system/load-map' },
                  { slug: 'docs/system/security' },
                  { slug: 'docs/system/fix' },
                  { slug: 'docs/system/faq' },
                  { slug: 'docs/system/business-deal' },
                  { slug: 'docs/system/agree' },
                  { slug: 'docs/system/privacy-policy' },
                  { slug: 'docs/system/credit' },
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
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
    }),
    sitemap(),
  ],
  markdown: {
    // ここに remarkPlugins を追加
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [[rehypeFigure, { className: 'custom-figure' }]],
  },
})
