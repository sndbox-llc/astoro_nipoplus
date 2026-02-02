---
slug: nipoplus/system/mobile-install
title: NipoPlusをスマホ・PC・タブレットで使う
description: NipoPlusはWebブラウザで動作するため、お手持ちのスマホ（iOS/Android）、PC、タブレットからいつでも利用できます。推奨のPWAインストール方法から、ストア版アプリでの利用まで、デバイスごとの最適な使い方を解説します。
sidebar:
  label: 🍏iOS・🤖Android・PCで使う
---

NipoPlusはWebアプリのため、ブラウザがある端末ならスマホでもPCでも利用できます。  
Android / iosはそれぞれ専用アプリも用意しています。
NipoPlusのダウンロード用QRコードも用意しています。印刷の上ご活用下さい。

[印刷用PDFファイルはこちら](/pdf/link2.pdf)

---

## PCで使う場合 {#pc_usage}

▼以下のリンクをクリックするだけです。

[NipoPlusを起動](https://nipoplus.sndbox.jp/)

:::tip[ブックマークしておこう]
https://nipoplus.sndbox.jp/ をブックマークしておくと次回アクセスが楽です
:::

<dl class="basic">
<dt>OS</dt>
<dd>Windows / macOS / iOS / Android</dd>
<dt>推奨ブラウザ</dt>
<dd><a href="https://www.google.co.jp/chrome/" target="_blank">Google Chrome</a> / <a href="https://www.apple.com/jp/safari/" target="_blank">Safari</a></dd>
<dt>その他のブラウザ</dt>
<dd><a href="https://www.microsoft.com/ja-jp/windows/microsoft-edge" target="_blank">Microsoft Edge</a> / <a href="https://www.mozilla.org/ja/firefox/new/" target="_blank">FireFox</a> / <a href="https://www.opera.com/ja" target="_blank">Opera</a></dd>
<dt>その他</dt>
<dd>
<div>
    <ul>
        <li>モニターサイズは13インチ以上を推奨します。</li>
        <li>タッチ対応ディスプレイのPCでは、手書き機能も活用できます。</li>
    </ul>
</div>
</dd>
</dl>

---

## Androidで使う場合 {#android_usage}

Google Play Storeからインストールするか、PWAとしてインストールする方法があります。

### PWAインストール【推奨】 {#android_pwa_install}

:::note[PWAとは？]
Webアプリが、ネイティブアプリのように振る舞う技術のことです。ネイティブと比較しても遜色ありません
:::

1.  Google Chromeで[NipoPlusのウェブサイト](https://nipoplus.sndbox.jp/)を開く
2.  画面下部に表示される「ホーム画面にNipoPlusを追加」バナーをタップ（表示されない場合は、次の手順へ）
3.  画面右上のメニューアイコン（︙）をタップ
4.  メニューの中から「アプリをインストール」をタップ
5.  ホーム画面にNipoPlusのアイコンが追加される

![Androidにインストールする手順図解](./img/android-install-pwa.png)

### Google Playストアからインストール {#android_usage}

一般的に広く知られている方法です。Google PlayストアからNipoPlusアプリをダウンロードできます。

<div style="max-width:300px">

[![google play](./img/google-play-badge.png)](https://play.google.com/store/apps/details?id=jp.sndbox.nipoplus)

</div>

<dl class="basic">
    <dt>対応Androidバージョン</dt>
    <dd>Pie(API Lv28)以上</dd>
    <dt>必要なストレージ容量</dt>
    <dd>約8MB</dd>
    <dt>推奨モニターサイズ</dt>
    <dd>スマートフォン：4インチ以上<br>タブレット：9.7インチ以上</dd>
</dl>

---

## iOSで使う場合 {#ios_usage}

App Storeからインストールするか、PWAとしてインストールする方法があります。

### PWAインストール【推奨】 {#ios_pwa_add_home}

iOSではSafariブラウザの機能を使って、NipoPlusをアプリのようにホーム画面に追加できます。

1.  Safariブラウザで[NipoPlusのウェブサイト](https://nipoplus.sndbox.jp/)を開く
2.  画面下部にある 「共有」アイコン（↑が四角から出るようなアイコン）をタップ
3.  メニューの中から「ホーム画面に追加」をタップ
4.  追加するアイコンの名前を任意で決め、画面右上の「追加」をタップ
5.  ホーム画面にNipoPlusのアイコンが追加されたことを確認する

![IOSではSafariを使ってPWAインストール](./img/ios-pwa-install1.png)

これでインストールは完了です。アイコンを長押しすると、通常のアプリと同様に削除できます。

### App Storeからインストール {#ios_appstore_install}

一般的に広く知られている方法です。App StoreからNipoPlusアプリをダウンロードできます。

[![app store](/images/apple.svg)](https://apps.apple.com/jp/app/id1625797169)

<dl class="basic">
    <dt>対応iOSバージョン</dt>
    <dd>iOS 14.0以上</dd>
    <dt>必要なストレージ容量</dt>
    <dd>約8MB</dd>
    <dt>推奨モニターサイズ</dt>
    <dd>iPhone：5.4インチ以上（iPhone SE2のサイズ）<br>iPad：9.7インチ以上<br>（これ以下のサイズでは操作性が低下する場合があります）</dd>
</dl>

---

## ストア版専用アプリの制限事項 {#store_app_limitations}

App Store版・Google Play版のNipoPlusは、ストアの規約や技術的な制約により、Web版（PWA含む）と比べていくつかの機能が制限されます。

- CSV出力など、ファイルの「ダウンロード」を伴う処理ができません
- [GOLDPLAN](/nipoplus/price/#fee)のお申し込みや解約など、決済に関する操作ができません
- 操作ガイドへのリンクボタンなど、一部のWebサイトへの直接リンクが表示されません
- [システム更新](/nipoplus/system/release-note/)の反映がPWA版に比べて遅れる場合があります

以上の理由から、フル機能が利用でき、常に最新版が使えるWeb版（PWAとしてインストール）を推奨しています。
