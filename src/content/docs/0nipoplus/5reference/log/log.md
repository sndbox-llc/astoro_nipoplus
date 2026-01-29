---
slug: nipoplus/reference/log
title: ログデータ
description: 様々な挙動をログとして自動収集しています。必要に応じてエクスポートが可能です。改ざん防止のためログデータの削除はできません。
sidebar:
  label: 📚ログデータ
---

:::note[[メニューに無いときはグループ設定から機能を有効にしてください](/nipoplus/editor/groupmanage/#optionalFunction)]
:::

グループ内の様々な出来事はログデータとして自動保存されます。ログは改ざん防止のため読み取り専用であり、管理者であってもログの書き換えや削除はできません。
ログデータは2年以上保存されます。それを超えた古いログは一定期間ごとに削除されます。

### ログの取得対象 {#target}

ログは以下のアクションに対して記録を残します

1. [タイムカードが削除](/nipoplus/reference/timecard)されたとき
2. 日報や予定に[コメントが書かれた](/nipoplus/staff/readreport/#comment)とき
3. 日報や予定からコメントが削除されたとき
4. [日報が削除](/nipoplus/reference/removereport/)されたとき
5. [日報が作成されたとき](/nipoplus/staff/writereport/)
6. 日報が既読・[承認](/nipoplus/reference/reportstate/#agree)・[棄却](/nipoplus/reference/reportstate/#reject)されたとき
7. 日報にタグがセット・解除されたとき
8. 予定が作成されたとき
9. 予定の状態が変化したとき
10. 予定にタグがセット・解除されたとき

特に削除に対するログは改ざん防止の意味でも抑止力となります。
