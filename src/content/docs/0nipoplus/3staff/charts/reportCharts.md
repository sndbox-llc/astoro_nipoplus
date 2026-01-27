---
slug: nipoplus/staff/charts
title: データの集計と分析
description: 日報に蓄積されたデータを可視化し、業務改善に活かすための集計・分析機能を網羅。売上や工数の「合計（SUM）」、異常発生や選択項目の「回数（COUNT）」を自動算出します。グラフ作成や目標進捗の管理など、現場の状況をリアルタイムで把握するための分析手法を解説します。
sidebar:
  label: 📊データの集計分析
---

![グラフ化の例](./img/chart_tablet.webp)

蓄積した日報データをもとに集計したり、グラフを作成することができます。
データ分析は電子化における最も大きなメリットの１つ。様々な集計分析機能があります。  
このページは概要として、どのような集計があるのかを軽く紹介します。それぞれの集計方式について詳しくはそれぞれのリンク先をご覧下さい。

## 集計できるデータの種類

集計可能な入力フォームは以下のとおりです。大きく2種類に分けることができます。

<dl class="basic">
<dt>回数の集計（COUNT）</dt>
<dd>
特定の項目が「選ばれた回数」や「チェックされた回数」を集計できます。文字列データ（選択肢）の傾向分析に特に有効です。
<ul>
<li><a href="/nipoplus/template/selects/#plain">選択入力（単一選択）フォーム</a>：「良好」「不良」「異常」といった選択肢の中で、「異常」が何回選ばれたかなど。</li>
<li><a href="/nipoplus/template/selects/#multiple">選択入力（複数選択）フォーム</a>：使用した機材の種類や、該当する不具合項目の選択回数など。</li>
<li><a href="/nipoplus/template/selects/#layerd">２層式選択（非推奨）フォーム</a>（※現在非推奨ですが集計は可能です）</li>
<li><a href="/nipoplus/template/digital/#rate">レート入力フォーム</a>：製品やサービスの評価（星の数）の合計や、各評価（星1、星5など）が何回選ばれたか。</li>
</ul>
</dd>
<dt>合計の集計（SUM）</dt>
<dd>
数値データを単純に合算して集計できます。売上合計、作業時間合計、生産数合計など、量的な分析に用います。
<ul>
<li><a href="/nipoplus/template/date_time/#range">日付と時刻（期間）入力フォーム</a> (単位は分：1時間半は90分として出力)。作業工数や設備稼働時間の合計など。</li>
<li><a href="/nipoplus/template/digital/#commonNumber">数値入力（汎用）フォーム</a>：売上高、訪問件数、生産数、測定値など。</li>
<li><a href="/nipoplus/template/digital/#slider">スライダ入力フォーム</a>：気温や湿度などの平均値や、測定範囲内の合計など。</li>
<li><a href="/nipoplus/template/digital/#calc">算術フォーム</a>：他のフォームから算出された計算結果（例：不良率、合計コスト）の合計など。</li>
</ul>
</dd>
</dl>

:::caution[閲覧可能な日報のみが集計対象です]
アクセス権限の足りない日報は集計されません。アクセス権限については<a href="/nipoplus/gainen/destination/">提出先または共有先</a>を御覧ください
:::

<dl class="basic">
<dt><a href="/nipoplus/reference/accumn/">データの累積</a></dt>
<dd>一定期間の合計値を集計したいときは累積機能をご利用下さい</dd>
<dt><a href="/nipoplus/reference/transition/">データの推移</a></dt>
<dd>一定期間におけるデータの増減推移を確認したいときは推移機能をご利用下さい</dd>
<dt><a href="/nipoplus/reference/chart/">データをグラフ化する</a></dt>
<dd>累積、推移のデータをグラフとして可視化したい場合は、グラフ機能をご利用下さい</dd>
<dt><a href="/nipoplus/reference/progress/">目標と実績の対比表</a></dt>
<dd>１ヶ月の目標値を設定し、それに対して現在どの程度進捗しているかを知りたいときは目標実績表をご利用下さい</dd>
<dt><a href="/nipoplus/reference/cross/">クロス集計</a></dt>
<dd>異なるテンプレート同士を一度に比較したいときはクロス集計をご利用下さい</dd>
<dt><a href="/excel/sales_report/">Excelを用いた集計・分析</a></dt>
<dd>NipoPlusの標準集計機能でカバーできない、より複雑な集計や分析が必要な場合は、日報データをCSV出力してExcelで集計や分析を行うことが可能です</dd>
</dl>
