---
slug: nipoplus/staff/csv
title: 日報のCSV出力
description: NipoPlusに蓄積された日報データを1枚のCSVに一括出力する方法を解説します。月単位の集計やスタッフ別・日別の分割出力に対応。Excelでの高度な分析、長期バックアップ、ペーパーレス化に役立ちます。※本機能はWeb版のみ対応しています。
sidebar:
  label: 🗂️CSV出力
---

:::note[[CSV出力設定も合わせてご覧下さい](/nipoplus/reference/csvsettings)]
:::

:::caution[Web版のみ対応]
スマホアプリ版（<a href="/nipoplus/system/mobile-install/#android_usage">Android</a> / <a href="/nipoplus/system/mobile-install/#ios_usage">iOS</a>版）では利用できません。<a href="/nipoplus/system/mobile-install/#pc_usage">Web版NipoPlus</a>をご利用ください
:::

:::note[[メニューに無いときはグループ設定から機能を有効にしてください](/nipoplus/editor/groupmanage/#optionalFunction)]
:::

## 複数の日報を1枚のCSVに出力するメリット {#monthly}

一定期間の日報を1枚のCSVデータにまとめて出力することが可能です。1枚にまとめることで多くのメリットがあります

- Excelなどの表計算ソフトのデータソースに最適
- 蓄積されたデータの定期的なバックアップに便利
- 収納場所の節約とペーパーレス化に貢献
- 一括出力されたデータは、過去の業務記録の監査証跡としても利用できます

## 1ヶ月分の日報を一括CSV出力する手順 {#csv_export_steps}

1.  左メニューの「集計・CSV出力」をクリック
2.  「期間」を選択（初期値は今月）
3.  画面右側にある「CSV出力」ボタンをクリック

![複数の日報を1枚のCSVにまとめて出力可能](./img/report-csv-export1_tablet.png)

- CSVファイルは、テンプレートごとに分けて出力されます
- 指定期間内に1度も使用されなかったテンプレートは、CSV出力の対象から自動で除外されます
- [無効化したテンプレート](/nipoplus/template/manage/#delete_template)でも集計期間内にデータが存在する場合は出力対象となります
- 出力対象のファイルが2つ以上ある場合はZIPでまとめた形で出力されます
- 出力されたCSVファイルはExcelなどの表計算ソフトで開くことができます
- <a href="/excel/">Excel加工テクニック集</a>も併せてご覧ください

## スタッフ別や日別に分けてCSV出力する {#splid_download}

1.  左メニューの「集計・CSV出力」をクリック
2.  「期間」を選択（初期値は今月）
3.  「テンプレート」を1種類選択（複数選択不可）
4.  画面右側にある「スタッフ別ダウンロード」または「日別ダウンロード」ボタンをクリック

![日付またはスタッフで分けて出力可能](./img/selectable-csv-download_tablet.png)

## CSVを解凍すると文字化けする場合 {#text_shaking}

特にWindowsで古い解凍ソフトを使用すると文字化けする可能性があります。詳しくは<a href="/tech/other/mojibake/">ダウンロードしたファイルが文字化けする原因と解決策</a>を御覧ください。

## 複数のCSVファイルを連結させる {#csvsc}

毎月月末にCSVファイルをダウンロードすると、テンプレートごとにCSVファイルが増えていきます。
これらの複数のCSVファイルを1つにまとめたい場合は、NipoPlusが提供する「CSVSC」というWebアプリをぜひご利用ください。

- ドラッグ＆ドロップ操作で簡単にCSVをまとめることができます
- 無料で使えるWebアプリです
- ブラウザで動作するためインストール不要です
- NipoPlusで出力されたCSVだけでなく、Nipo（旧版）やNipoPlus以外のCSVファイルも利用可能です

<a href="/tips/csvsc/">CSVSCのWebアプリはこちらからご利用ください</a>
