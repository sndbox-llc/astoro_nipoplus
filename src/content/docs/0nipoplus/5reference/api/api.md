---
slug: nipoplus/reference/api
title: APIの使い方
description: APIキーを使用すると、外部システムやCurlなどのコマンドラインツールを通じて、日報データを直接取得できます。このガイドでは、APIキーの取得方法や無効化の手順について詳しく解説します。
sidebar:
  label: 🔌API
  badge:
    text: 応用
    variant: caution
---

## 🔑APIキーの取得

APIを使うとアプリを使わず直接日報のデータを取得することができます。
主に外部のシステムと連携するのに使用します。
APIキーで日報を読むことができるのでAPIキーは厳重に管理し、外部に漏洩しないように注意してください。

### APIキーを有効にする {#enable}

APIの有効無効設定は[管理者権限](/nipoplus/reference/userRank/)が必要です。

1. [左メニューから組織設定をクリック](/nipoplus/reference/userRank/#rootSettingBtn)
2. APIを有効にするスタッフを選択
3. APIの項目をクリックし、ボタンを緑色にする

![スタッフごとにAPIキーの利用可否設定可](./img/enable-api_tablet.png)

初期状態では全員無効（赤色ボタン）です。安全のためにも利用するスタッフは最小限にとどめてください

### APIキーの取得 {#get_key}

APIキーは上記手順で有効されたスタッフの画面から取得ができます。

1. 「アカウント」をクリック
2. APIセクションまでスクロール
3. ログインパスワードを入力
4. 「APIキーの取得」ボタンをクリック

![APIキーを取得するにはログインパスワードが必要](./img/apikeyGet_tablet.png)

上記の手順で正しいパスワードが入力されるとAPIキーが表示されます。コピーして保存します。

### APIキーを無効にする {#disable}

以下の場合はAPIキーを速やかに無効化してください。

- APIキーが外部に流出した可能性がある
- APIを使う必要が無くなった
- APIを使用しているスタッフが退職した

APIキーを無効にする最も簡単な方法は、管理者がAPI設定を赤色のボタン（無効）に戻すことです。

上記手順以外にAPIキーを無効にする方法もありますが、他の手順は無効化時にログアウトされます。

- スタッフアカウントのAPI発行画面の下部にある「APIの破壊」をクリック
- スタッフアカウントの状態が「無効」にされるとき
- ユーザアカウントが削除されたとき
- ユーザアカウントで大きな変更が検知された時（パスワードやメールアドレスの変更など）

---

## APIを使い日報のデータを取得する

APIの利用には少し技術者の知識が必要です。

- CURL
- JSON

このあたりの基本が理解できれば問題有りません。本ガイドはCURLを使用しています。コマンドが苦手な方は[Postman](https://www.postman.com/)などのGUIツールをご利用ください。

### APIへリクエストを投げる基本の形を日報取得の例から見る {#sample}

```bash {frame="none"}
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/【エンドポイント】 \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー（200文字程度)】" \
-d "{ "【パラメータ1】": "【値1】", "【パラメータ2】": "【値2】" }"
```

:::note[Mac/Linux向けのCurl記法です]
[Windows版](https://ascii.jp/elem/000/004/021/4021036/)は若干形式が変わる可能性があります
:::

【】で囲まれた部分には、独自の値を指定してください。

#### 【エンドポイント】 {#endpoint}

ここでは日報の取得に関するエンドポイントのみ紹介します。以下のいづれかの値を指定します。必須です。

<dl class="basic">
  <dt>reports/admin</dt>
  <dd>管理者のみ実行可能。全ての日報を取得できるAPI</dd>
  <dt>reports/outbox</dt>
  <dd>自分が送信した日報のデータのみ取得できるAPI</dd>
  <dt>reports/inbox</dt>
  <dd>自分が受信した日報のデータのみ取得できるAPI</dd>
  <dt>report/:日報のID</dt>
  <dd>IDを指定して1件の日報を取得できるAPI</dd>
</dl>

他のエンドポイントについては本ページ末尾で解説します。

#### 【パラメータ】・【値】 {#param}

日報取得に感るうパラメータを紹介します。
パラメータをセットします。グループIDは必須です。必要に応じて複数パラメータを指定できます。

| 属性名    | 型           | 説明                                                                              |
| --------- | ------------ | --------------------------------------------------------------------------------- |
| groupId   | String(必須) | 取得するグループのID                                                              |
| size      | Number       | 取得する日報の件数。1〜1000の間で指定します。未指定の場合は10が自動で適用されます |
| from      | String       | 期間（開始) 2022/08/01 00:00:00のような形で指定。必ずtoとセットで使用             |
| to        | String       | 期間（終了) 2022/09/31 23:59:59のような形で指定。必ずfromとセットで使用           |
| tags      | String配列   | タグのIDを配列で指定                                                              |
| states    | String配列   | 日報の状態で絞り込み。["承認", "棄却", "修正", "新規", "進行"]のように指定        |
| templates | String配列   | 使用したテンプレートのIDで絞り込み。テンプレートIDの配列で指定                    |
| owners    | String配列   | 日報作成者IDで絞り込み。スタッフのIDを配列で指定                                  |

### 【取得したAPIキー】 {#auth}

取得したAPIキーをCurlに含めてください。長いので必ずコピーペーストして使用してください。
APIキーの取得が済んでいないかたは先にAPIキーの取得を行ってください。

[APIキーの取得](/nipoplus/reference/api/)

本ガイドではこれ以降も実際のAPIキーは使用せず解説します。

#### エンドポイントとパラメータを指定した最小限のCurl {#smallest}

```bash {frame="none"}
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{"groupId": "nipodefaultgroup" }"
```

このコマンドは日報を取得する命令を送っています。パラメータに期間の指定が無いため、直近10件の日報がAPI経由で取得できます。

#### パラメータを色々指定した実用性のあるCurl {#long_sample}

設定可能なパラメータを追加した例です。

```bash {frame="none"}
# パラメータが多いためヒアドキュメントを使っています
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d @- <<EOS
{
  "groupId": "nipodefaultgroup",
  "size": 1000,
  "from": "2022/08/01 00:00:00",
  "to": "2022/09/30 23:59:59",
  "tags": ["oSGoygpZYCBlldTWGewA", "bo6wwrUSVrE6UbqlJjkf"]
  "states": ["新規", "進行", "棄却"],
  "templates": ["iELPWHa3ZjXYJS62Hn3N"],
  "owners": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"]
}
EOS
```

:::note[見やすさを重視してヒアドキュメント（EOSの箇所）を使っています。]
:::

この例を少し詳しく見てみます

<dl class="basic">
<dt>groupId</dt>
<dd>グループIDを指定します。グループIDはグループ全般やURLから確認できます</dd>
<dt>size</dt>
<dd>日報を1000件リクエストしています</dd>
<dt>from・to</dt>
<dd>検索期間を2022年8月1日〜2022年9月30日に指定しています　</dd>
<dt>tags</dt>
<dd>タグによるフィルタを使う場合に指定します。タグ名ではなくタグのIDで指定します。タグのIDは<a href="/nipoplus/editor/tagManagement/">タグ管理</a>から確認できます</dd>
<dt>states</dt>
<dd>日報の状態によるフィルタを使う場合に指定します。この例では新規、進行、棄却の日報のみを取得します（承認や修正の日報は除外）</dd>
<dt>templates</dt>
<dd>テンプレートによるフィルタを使う場合に指定します。テンプレートIDを指定します。複数件指定できるため配列です</dd>
<dt>owners</dt>
<dd>日報を書いたスタッフによるフィルタを使う場合に指定します。スタッフIDを指定します</dd>
</dl>

補足：URLからグループIDを確認する際はURLの意味を見てください。

```http
https://nipoplus.sndbox.jp/#/room/組織ID/グループID/__/path/to/any...
```

例えばURLが次のようなデータだった場合

```http
https://nipoplus.sndbox.jp/#/room/BLyx3SG72rId24BnKcGC/eZu8bXFNh73YtVoR83ic/teal/home/PageNameGroupSettingAbout
```

グループIDは「eZu8bXFNh73YtVoR83ic」となります。

### その他のエンドポイント {#other}

日報の取得以外に用意されているエンドポイントとパラメータについてまとめています。

#### テンプレートの取得エンドポイント {#template}

<dl class="basic">
  <dt>/templtes</dt>
  <dd>パラメータで指定したグループ内の全てのテンプレートを取得します</dd>
  <dt>/template/:テンプレートのID</dt>
  <dd>IDで指定された1件のテンプレートを取得します</dd>
</dl>

パラメータ:

| 名称    | 型     | 説明                 | 必須 |
| ------- | ------ | -------------------- | ---- |
| groupId | String | 取得するグループのID | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/templates \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{ "groupId": "nipodefaultgroup" }"
```

#### ログデータ取得エンドポイント {#log}

<dl class="basic">
<dt>/logs</dt>
<dd>ログデータを取得する</dd>
</dl>

パラメータ:

| 名称    | 型     | 説明                                                            | 必須 |
| ------- | ------ | --------------------------------------------------------------- | ---- |
| groupId | String | 取得するグループのID                                            | ○    |
| size    | Number | 取得する日報の件数。1〜1000の間で指定                           | ○    |
| from    | String | 取得する日報の期間（開始点) 2022/08/01 00:00:00のような形で指定 | ○    |
| to      | string | 取得する日報の期間（終了点) 2022/09/31 23:59:59のような形で指定 | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/logs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{"groupId": "nipodefaultgroup", "size": 1000, "from": "2022/08/01 10:00:00", "to": "2022/08/01 10:59:59"}"
```

#### スタッフ取得エンドポイント {#staff}

<dl class="basic">
<dt>/staffs</dt>
<dd>スタッフ情報を取得する</dd>
</dl>

| 名称    | 型     | 説明                 | 必須 |
| ------- | ------ | -------------------- | ---- |
| groupId | String | 取得するグループのID | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{ "groupId": "nipodefaultgroup" }"
```

#### タイムカード取得エンドポイント {#timecard}

<dl class="basic">
<dt>/timecards/取得するスタッフのID</dt>
<dd>指定したスタッフのタイムカード情報を取得します</dd>
</dl>

| 名称    | 型     | 説明                                                                    | 必須 |
| ------- | ------ | ----------------------------------------------------------------------- | ---- |
| groupId | String | 取得するグループのID                                                    | ○    |
| size    | Number | 取得するタイムカードの件数。1〜1000の間で指定。未指定の場合は1000となる |      |
| from    | String | 取得するタイムカードの期間（開始点) 2022/08/01 00:00:00のような形で指定 | ○    |
| to      | string | 取得するタイムカードの期間（終了点) 2022/09/31 23:59:59のような形で指定 | ○    |

このAPIポイントは「編集者権限」以上が必要です。
タイムカードの制限解除がされていない場合、取得件数は5件で固定されます（指定が5未満でも5になります）
タイムカードの制限解除がされている場合、取得件数は1〜1000の間で任意に指定できます。
Sizeの指定が無い場合は1000として扱われます。

```bash {frame="none"}
# 記述例（パラメータを改行する場合はこんな感じでEOSつければOK。お好みで）

curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/timecards/mMSejOQa21d9OtXo1BtjFzrEt6J3 \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d @- <<EOS
{
  "groupId": "0XRC0tEQXvcMb2zRFKYj",
  "size": 10,
  "from": "2024/08/01 10:10:10",
  "to": "2025/06/30 23:59:59"
}
EOS

```

#### 組織全体のエンドポイント {#org}

組織全体に関する情報のためアクセスには[管理者権限](/nipoplus/reference/userRank/)が必要です。

<dl class="basic">
  <dt>/staffs/admin</dt>
  <dd>組織に所属している全スタッフのデータを取得します</dd>
  <dt>/group/admin</dt>
  <dd>組織内に作成された全てのグループを取得します</dd>
</dl>

パラメータはありません。

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs/admin \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
```

### エラーの種類と対策 {#error}

WebAPIにリクエストを投げたとき、戻り値に{ error: true }がかえってきたときは何かしらのエラーが発生しています。
エラーの内容が messageプロパティにセットされていますので、メッセージを確認の上正しいパラメータを設定してください。

以下は代表的なエラーの例です

<dl class="basic">
  <dt>トークンの更新に失敗</dt>
  <dd>Bearerトークンが失効しています.<a href="/nipoplus/reference/api/">APIキーの管理</a>から再度取得してください</dd>
  <dt>グループIDが不正です</dt>
  <dd>パラメータ groupIdに誤りがあります。groupIdを見直してください</dd>
  <dt>このグループに対する権限がありません</dt>
  <dd>指定したgroupIdに所属していないと権限不足が発生します。グループに所属してください</dd>
  <dt>権限が足りません</dt>
  <dd>エンドポイントの中にadminが含まれるものは管理者権限のBearerトークンでアクセスする必要があります</dd>
  <dt>日付不正</dt>
  <dd>パラメータ from / toの指定が誤っています。必ず yyyy/MM/dd hh:mm:ss の形式で指定する必要があります</dd>
  <dt>データベースアクセスエラー</dt>
  <dd>何らかの原因でデータベースへの問い合わせに失敗しました。少し時間を追いてリトライしてください</dd>
  <dt>文法に誤りがあります</dt>
  <dd>正しい文法に修正してください。json最後の , を消し忘れるなど初歩的なミスである場合が多いです</dd>
  <dt>Expected X, received Y</dt>
  <dd>パラメータが間違っています。Xの型を要求しているのにY型を渡されたという意味です。正しい型を指定してください</dd>
  <dt>Number must be less than or equal to X</dt>
  <dd>指定された数値が大きすぎます。X以下になるように指定します</dd>
</dl>

---

## APIで取得されるデータの構造

普段見慣れた日報の形ではなくJSON形式で取得されます。
JSON形式は { key: value }の形で表現されたデータ構造です。

### 日報のJSON構造 {#report}

| キー       | 型               | 説明                                                                                                                                                                 |
| ---------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | String           | 20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない)                                                                               |
| no         | NumberまたはNull | 日報に採番された番号です。連番は日報作成後に非同期で振られるためタイミングによってはNull                                                                             |
| body       | Object           | 日報文書本体                                                                                                                                                         |
| createTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報がサーバに初回保存された時刻                                                                                         |
| updateTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報が最後に更新された時刻                                                                                               |
| userTs     | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報作成者が指定した表示上の日時                                                                                         |
| distId     | String           | 今現在その日報を承認・棄却出来る権限のスタッフID                                                                                                                     |
| dists      | String配列       | 日報の提出先スタッフIDの配列です。配列の序列順に承認を行います。承認や棄却ができるのは上記のdistIdに一致したスタッフのみ                                             |
| observer   | String配列       | その日報を読むことができるスタッフのID郡です。承認や棄却の権限はありません。                                                                                         |
| readed     | String配列       | その日報を読んだフラグを立てたスタッフIDの配列です。承認や棄却をしたスタッフもreadedに含まれます                                                                     |
| tags       | String配列       | 日報に付けられたタグのID配列                                                                                                                                         |
| sign       | コレクション     | 承認や棄却日時を記録したコレクションです。コードで書くと sign:{ uid: string, ts: number, agree: boolean}[]です。承認した日時や承認者IDを確認可能                     |
| state      | String           | 承認・棄却・修正・新規・進行　いづれかの文字                                                                                                                         |
| owner      | String           | 日報を作成したスタッフのID。[共用](/nipoplus/reference/staffshare/)を使うときに作成者IDとしてセットされる。共用を使わない場合は後述する「account」と常に同じ値が入る |
| account    | String           | 日報を作成したFirebase上のユーザID                                                                                                                                   |
| templateId | String           | その日報を作成するために使用されたテンプレートのID                                                                                                                   |
| taskId     | String           | 日報と予定を紐付けられたとき、予定のIDがセットされる                                                                                                                 |

以下は実際にAPIを使ってロードした日報のデータのサンプルです。

```javascript
{
  "readed": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "id": "V9MGSesp0LUgXUPo0Skv",
  "taskId": "none",
  "no": 3,
  "tags": [],
  "owner": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "updateTs": 1659400505426,
  "account": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "templateId": "uDE74jrGtn90vZZqsaci",
  "distId": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "userTs": 1659400505425,
  "sign": [],
  "createTs": 1659400505426,
  "body": {
    "B2x": "あお",
    "SAl": ["いちご","ごはん","餃子","干瓢"],
    "1ST": ["餃子","うどん","焼きそば","牛乳","ごはん"],
    "N70": ["いちご","干瓢","メロン"],
    "iif": "あか"
  },
  "observer": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "dists": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "state": "新規"
};
```

### タイムカードのJSON構造 {#timecard}

| キー          | 型             | 説明                                                                                   |
| ------------- | -------------- | -------------------------------------------------------------------------------------- |
| id            | String（任意） | 20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない) |
| date          | String         | 日付を表す文字列。形式は "YYYY-MM-DD"（例: "2023-03-21"）                              |
| day           | Number         | 日付のUnixタイムスタンプ（ミリ秒）。JSTの0時基準                                       |
| start         | String         | 出勤時刻。\"08:00\" のような文字列                                                     |
| end           | String         | 退勤時刻。\"17:00\" のような文字列                                                     |
| breaks        | Array<Object>  | 休憩時間の配列。各要素は `{ start: string, end: string }` 形式                         |
| redacted      | Boolean        | 編集済みフラグ。ユーザーが編集した場合 true                                            |
| isHolydayWork | Boolean        | 休日出勤フラグ。休日に勤務した場合 true                                                |
| memo          | String         | 備考欄の文字列。自由記述                                                               |
| generator     | String         | このタイムカードを作成したスタッフID                                                   |
| staffId       | String         | このタイムカードの対象スタッフのID                                                     |
| createTs      | Number         | 初回作成日時。Unixタイムスタンプ（ミリ秒）                                             |
| updateTs      | Number         | 最終更新日時。Unixタイムスタンプ（ミリ秒）                                             |
| calcData      | Object         | 下記の計算結果データ（打刻や休憩などを元に算出された集計値）                           |

#### calcData の中身 {#document_details}

| キー               | 型     | 説明                              |
| ------------------ | ------ | --------------------------------- |
| editStart          | String | 丸め後の出勤時刻（例: \"08:00\"） |
| editEnd            | String | 丸め後の退勤時刻（例: \"17:00\"） |
| dayWork            | Number | 日勤労働時間（分）                |
| nightWork          | Number | 夜勤労働時間（分）                |
| totalWorkTime      | Number | 実労働時間（分）。日勤＋夜勤−休憩 |
| overWorkTime       | Number | 超過労働時間（分）                |
| calcBreakTimeDay   | Number | 日勤中の休憩時間（分）            |
| calcBreakTimeNight | Number | 夜勤中の休憩時間（分）            |
| dayWorkHolyDay     | Number | 休日の日勤労働時間（分）          |
| nightWorkHolyDay   | Number | 休日の夜勤労働時間（分）          |

#### 📌 備考 {#columns_info}

- `calcData` はサーバ側で勤務情報から自動算出される集計値
- `breaks` に複数の休憩時間がある場合も、`calcBreakTimeDay` や `calcBreakTimeNight` に反映されます
- `isHolydayWork` が true のとき、`dayWorkHolyDay` や `nightWorkHolyDay` に値が入る場合があります
- `memo` や `redacted` はユーザー操作により変更される要素です

#### タイムカードのAPIレスポンス例 {#timecard_result}

```json
{
  "error": false,
  "result": {
    "data": [
      {
        "id": "vY8ovmFPaaz3z41GzKAy",
        "date": "2023-03-21",
        "breaks": [{ "start": "12:00", "end": "13:00" }],
        "redacted": false,
        "isHolydayWork": false,
        "start": "08:00",
        "generator": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
        "memo": "",
        "createTs": 1679400813656,
        "end": "17:00",
        "day": 1679353200000,
        "updateTs": 1679400813656,
        "staffId": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
        "calcData": {
          "calcBreakTimeDay": 60,
          "calcBreakTimeNight": 0,
          "dayWorkHolyDay": 0,
          "nightWorkHolyDay": 0,
          "dayWork": 480,
          "nightWork": 0,
          "totalWorkTime": 480,
          "overWorkTime": 0,
          "editStart": "08:00",
          "editEnd": "17:00"
        }
      }
    ],
    "count": 10,
    "totalCalc": {
      "totalWorkTime": 5040,
      "overWorkTime": 240,
      "dayWorkHolyDay": 0,
      "nightWorkHolyDay": 0,
      "dayWork": 5040,
      "nightWork": 0,
      "calcBreakTimeDay": 540,
      "calcBreakTimeNight": 0
    }
  }
}
```

### テンプレートのJSON構造 {#template}

| キー   | 型         | 説明                                                       |
| ------ | ---------- | ---------------------------------------------------------- |
| ts     | Number     | テンプレートが作成された日（ミリ秒含むUnixタイムスタンプ） |
| prefix | String     | 文書番号の前に付される記号。初期値は"No."                  |
| active | Boolean    | テンプレートが有効な場合はTrue。無効にするとFalse          |
| memo   | String     | テンプレート自体に付されたメモ。初期値は"テンプレートメモ" |
| name   | String     | テンプレートの大見出し                                     |
| noruma | Number?    | １日あたりの提出枚数目安。初期値は0                        |
| id     | String     | テンプレートのID                                           |
| tags   | String[]   | テンプレートに付与したタグのID                             |
| body   | Collection | テンプレートの本体とも言える項目。詳細は次章               |

#### テンプレート内のBody構造 {#body}

Bodyはテンプレートの入力フォームを束ねたオブジェクトでCollection（オブジェクトの配列）の構造をしています

| キー       | 型         | 説明                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------- |
| labelSize  | String     | 見出しの文字サイズ。label_sのような値が入る                                                 |
| label      | String     | 見出しの文字列                                                                              |
| key        | String     | 入力のデータとテンプレートを紐付けるための鍵。この値が日報本体データ上のKeyとして使用される |
| labelColor | 見出しの色 |
| req        | Boolean    | 入力必須ならTrue                                                                            |
| type       | String     | 文字入力や数値入力など、データの構造に応じた値が入る                                        |
| w          | Number     | テンプレートで専有する幅 1〜12                                                              |
| any        | any        | その他、入力フォームに応じて必要なパラメータが追加されます...                               |

#### テンプレートと日報本文の対応 {#map}

例えば次のようなテンプレートがあったとします。説明のためBodyのみで、かつ内容も大幅に簡略化しています。

```json
"body": [
  {
      "label": "今日の夜食",
      "key": "N70",
      "type": "text",
      "w": 4
  },
  {
      "label": "担当職員名",
      "key": "1ST",
      "type": "text",
      "w": 4
  },
  {
    "label": "スコア",
    "key": "A4x",
    "type": "number",
    "w": 4
  }
]
```

このテンプレートを使って作成された日報のBodyは次のようになります

```json
"body": {
  "N70": "やきうどん",
  "1ST": "長谷川研究員",
  "A4x": 100
}
```

テンプレート上の keyが、日報本文のキーとして使われています。
