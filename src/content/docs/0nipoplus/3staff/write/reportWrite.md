---
slug: nipoplus/staff/writereport
title: 日報を書く
description: 日常業務で最も頻繁に使用する機能です。使用するテンプレートを選択し、所定のテンプレートに沿って入力。提出先や日付を指定して提出するだけで日報の提出が完了します
sidebar:
  label: ✍️日報を書く
  badge:
    text: 基本
    variant: note
---

日常使う際に最も多く使う機能が本ページで解説している「日報の作成」でしょう。
簡単な手順で日報を作成できます。

## 日報を書く

1.  日報作成ボタンをクリック
2.  [使用するテンプレートの選択](#select_template)（1種類しか無い場合は省略）
3.  [テンプレートに沿って内容を記入](#write)
4.  [提出先や提出日などの情報をセット](#dist)
5.  [提出ボタンをクリック](#post)

## 1. 使用するテンプレートの選択 {#select_template}

日報作成ボタンをクリックすると、使用可能なテンプレートの一覧が表示されます。一覧から使用するテンプレートを選びましょう。
（※テンプレートが1種類の場合はこの画面は省略されます）

![使用するテンプレートを選ぶ](./img/report-template-select_tablet.png)

:::tip[今日何枚出したっけ？]
テンプレート選択画面では本日、何件提出したか表示されるので目安にご利用下さい。[提出枚数目安](/nipoplus/editor/template/#memo)が設定されている場合は、進捗バーで表示されます
:::

## 2. テンプレートに沿って内容を記入する {#write}

テンプレートを選ぶと入力画面に切り替わります。日報入力画面は2つのセクションに分離できます。

<dl class="basic">
  <dt>日報作成エリア</dt>
  <dd>実際に報告内容を書くエリアです。スマホでは見え方が変わります</dd>
  <dt>ヘッダーエリア</dt>
  <dd>提出日付や、<a href="/nipoplus/gainen/destination/">提出先共有先</a>、<a href="/nipoplus/reference/draft/">下書き</a>などの情報を設定します</dd>
</dl>

日報記入エリアについては所定の項目を適切に記入してください。
それぞれの入力方法については[入力フォームごとの入力方法](/nipoplus/reference/inputmethod)をご確認ください。

![日報作成画面](./img/write-report_tablet.png)

:::tip[タグも使えます]
日報作成画面でタグが表示されている場合はタグを付けて日報を提出することもできます。[検索や目印](/nipoplus/reference/searchreport)にもなるので積極的に使ってみましょう
:::

## 3. ヘッダーエリアを入力する {#dist}

ヘッダーエリアの入力を行います。

![日報の提出日や提出先を入力する](./img/report-header_tablet.png)

<dl class="basic">
  <dt><a href="/nipoplus/gainen/reportdate/">提出日時</a></dt>
  <dd>自動で本日の現在時刻が入ります。必要に応じて修正可能です</dd>
  <dt><a href="/nipoplus/gainen/destination/">提出先</a></dt>
  <dd>日報の提出先です。複数名設定した場合は指定された順に<a href="/nipoplus/reference/reportstate/#relay">承認のリレー</a>がおこなわれます</dd>
  <dt><a href="/nipoplus/gainen/destination/">他に読める人（共有先）</a></dt>
  <dd>承認はできませんが、この<a href="/nipoplus/reference/reportstate/#readed">日報を読める人</a>を指定します。複数名指定可能です。提出先に指定しているスタッフを共有先に指定する必要はありません</dd>
</dl>

:::note[提出先は編集者が固定可能]
[提出先は管理者が固定する](/nipoplus/editor/destinationlock)こともできます。これにより日報作成者の作業負担を軽減できます
:::

:::note[自動承認]
1番目の提出先を自分にすると「自動承認」が選択できます。ONにすると、提出と同時に承認が行われます。
:::

## 4. 提出ボタンをクリック {#post}

最後に提出ボタンをクリックして完了です。
提出した日報は[保存BOX](/nipoplus/reference/searchreport/#listbox)からアクセス可能です。

:::caution[ゲスト権限は書くだけ]
[権限がゲスト](/nipoplus/reference/userRank/#others)の場合、自分で書いた日報を読むことができません。
:::

:::note[提出ボタンが押せないときは？]
入力必須項目が残っていると提出ボタンが押せません。確認してみましょう
:::

日報の提出後は、次のアクションを選ぶ選択肢が出てきます。特にこれ以上やることがなければ、この時点でアプリを閉じてしまっても問題ありません。

<dl class="basic">
  <dt>続けて書く</dt>
  <dd>同じテンプレートを使用して日報を新規作成します</dd>
  <dt>テンプレートを変更</dt>
  <dd><a href="#select_template">テンプレート選択画面</a>に切り替わります</dd>
  <dt>提出した日報表示</dt>
  <dd>先程提出した日報を表示します（<a href="/nipoplus/reference/searchreport/">保存箱へ移動</a>）。提出内容を確認したい場合に便利です</dd>
  <dt>提出者にメールを送信する</dt>
  <dd>お使いのメールソフトが起動します。<a href="/nipoplus/reference/notify/#email">通知</a>とは別に、個別にメールを送りたいときにご利用ください</dd>
</dl>

## 書きかけデータのリカバリーについて {#hint}

![書きかけデータの復元](./img/tmpData.webp)

- 日報作成中に不慮の事態で画面を閉じてしまった場合、一時データとして端末内部に一時保存されます
- テンプレート選択時に復元するか破棄するか選択できます
- 復元を選択すると書きかけの内容を復元します
- 破棄を選ぶと当該データは削除されます

:::tip[下書きとはちがうの？]
[下書き](/nipoplus/reference/draft)はサーバ内に保存され、リカバリーは端末内部に一時保存されます。リカバリーは応急処置でありデータとしては非常に不安定です
:::

## 綴りについて

[綴り機能](/nipoplus/reference/tuduri)を使うことで異なるテンプレートの日報をまとめて提出することもできます。  
詳しくは綴り機能のページをご覧下さい。
