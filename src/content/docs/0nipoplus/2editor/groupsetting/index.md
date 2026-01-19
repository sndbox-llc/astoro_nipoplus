---
slug: docs/editor/groupmanage
title: ⚙️グループの基本設定
description: ⚙️グループの基本設定
sidebar:
  label: ⚙️グループの基本設定
---

NipoPlusの各グループは、独立した小さなチームのように、そのグループ内でのみ適用される独自の設定を行えます。

## 現在のグループを確認する

現在、どのグループで作業しているかは、画面上部のバーに表示されています。複数のグループに所属している場合は、必要に応じて作業するグループを切り替えることができます。

:::caution[所属グループが1つの場合は表示されない]
この切替が表示されるのは複数グループに所属している場合のみです。
:::

1.  画面左上の「切替」をクリック
2.  所属しているグループの一覧が表示されます。
3.  作業したいグループ名をクリック

![作業グループの切り替えは画面左上のスイッチから行います](./img/switch_tablet.png)

## グループ設定画面 {#edit}

メニューから「グループ設定」をクリックすると、そのグループに関する様々な設定項目が表示されます。

![グループ設定は編集者権限以上で表示されます](./img/group-manage_tablet.png)

この画面には、以下のような設定カテゴリがまとまっています。

<dl class="basic">
<dt>グループ全般</dt>
<dd>グループの名前やテーマカラーなど、基本的な設定を行います</dd>
<dt><a href="/docs/editor/staffmanage/">スタッフ管理</a></dt>
<dd>このグループに所属しているスタッフに対する各種設定を行います</dd>
<dt><a href="/docs/editor/template/">テンプレート管理</a></dt>
<dd>このグループで使用する日報やチェックシートのテンプレートの管理を行います</dd>
<dt><a href="/docs/editor/tagManagement/">タグ管理</a></dt>
<dd>このグループで使用するタグ（分類ラベル）の管理を行います。</dd>
<dt><a href="/docs/editor/inventory/">商品管理</a></dt>
<dd>商品などの在庫状況を簡易的に管理します。<a href="/docs/template/mod/">商品入力フォーム</a>と組み合わせて使用します。</dd>
<dt><a href="/docs/editor/wordBookManagement/">語録管理</a></dt>
<dd><a href="/docs/template/selects/">選択式入力フォーム</a>で使える「語録」（定型文や選択肢リスト）を管理します。</dd>
<dt><a href="/docs/other/customer/">顧客管理</a></dt>
<dd>顧客のテンプレートを設定します</dd>
<dt><a href="/docs/reference/removereport/">一括削除</a></dt>
<dd>このグループ内の日報をまとめて削除する機能です。</dd>
</dl>

## グループの基本情報と外観を設定する {#summary}

ここでは、グループの基本的な情報や、見た目に関する設定を変更できます。

<dl class="basic">
<dt>グループ名</dt>
<dd>グループの名称です。左上のグループ切替ボタンなどで表示されます。</dd>
<dt>テーマカラー</dt>
<dd>グループのテーマカラーを変更できます。アイコンの色やタイトルバーの色などが、指定したテーマカラーに一括で変わります。</dd>
</dl>

## 日報の共有設定を変更する {#reportShare}

この設定では、グループ内で日報がどのように共有されるかを定義します。

<dl class="basic">
<dt>通常モード</dt>
<dd>日報の<a href="/docs/gainen/destination/">提出先や共有先</a>を、日報作成時に細かく指定できます</dd>
<dt>共有モード</dt>
<dd>日報の提出先は指定できますが、共有先は自動的にグループ内の全員に設定されます。</dd>
</dl>

全員が全員の日報を読みたい場合は「共有モード」がおすすめです。

:::caution[権限が低すぎると日報は読めません]
「共有モード」でも[書き込みのみ権限・ゲスト権限](/docs/reference/userRank/#others)は他人の日報を読めません
:::

## お知らせ（バナー）を設定する {#banner}

グループの画面上部に、任意のお知らせ（アナウンス）を表示できます。

1. 画面上部にバナーを表示するのチェックをONにする
2. 表示するテキストを入力
3. OKボタンをクリック

## 機能の有効・無効を切り替える {#optionalFunction}

不要な機能はOFFにすることで左メニューをスッキリできます。

![使わない機能はOFFにしておくと見た目がスッキリ](./img/functions_tablet.webp)

左メニューに追加される以外にも、軽微な変化が起こります。

<dl class="basic">
<dt><a href="/docs/other/project/">案件</a></dt>
<dd>日報作成時に対象となる案件を入力する欄が追加されます。集計時に「案件集計」機能が利用可能になります。</dd>
<dt><a href="/docs/other/schedule/">予定</a></dt>
<dd>カレンダーの表示設定に「予定」が追加されます。</dd>
<dt><a href="/docs/reference/timecard/">タイムカード</a></dt>
<dd>日報作成画面にタイムカード打刻ボタンが追加されます。</dd>
<dt><a href="/docs/reference/calendar/">カレンダー</a></dt>
<dd> メニュー追加以外に変化は有りません</dd>
<dt><a href="/docs/staff/charts/">集計/CSV出力</a></dt>
<dd> メニュー追加以外に変化は有りません</dd>
<dt><a href="/docs/reference/shift/">シフト管理</a></dt>
<dd> 提出簿において未提出者にメールを送る機能が有効化されます</dd>
<dt><a href="/docs/reference/log/">ログ</a></dt>
<dd> 左メニューにログが追加されます</dd>
<dt><a href="/docs/reference/relation/">引継ぎ</a></dt>
<dd> 日報作成時に「引継先」を指定する欄が追加されます</dd>
<dt><a href="/docs/other/customer/">顧客管理</a></dt>
<dd> 編集者ページに「顧客テンプレート」の欄が追加されます</dd>
</dl>

:::danger[保存を忘れずに]
設定した値は保存を押さない限り反映されません。
:::
