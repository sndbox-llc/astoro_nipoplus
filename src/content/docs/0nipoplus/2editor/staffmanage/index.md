---
slug: nipoplus/editor/staffmanage
title: 👤グループ内のスタッフ管理
description: 👤グループ内のスタッフ管理
sidebar:
  label: 👤グループ内のスタッフ管理
---

:::tip[組織のスタッフ管理との違い]
[組織のスタッフ管理についてはこちら](/nipoplus/admin/about/)です
:::

グループに所属しているスタッフの各種設定を行いましょう。グループにスタッフを追加するには[組織のスタッフ管理](/nipoplus/admin/about/)から行います。
[組織設定からグループへの所属](/nipoplus/reference/makestaff/)させることができます。

組織のスタッフとグループのスタッフは同じアカウントですが適用される設定範囲が異なります。詳しくは[組織とグループの概念](/nipoplus/gainen/sosiki/)を御覧ください

## グループ所属のスタッフを確認 {#showStaffList}

所属中のアカウントを確認するには以下の手順で操作します。

1.  左メニューから「グループ設定」をクリック
2.  上部メニューの「スタッフ管理」をクリック

![グループ設定▶スタッフ管理の順にクリック](./img/staff-local_tablet.png)

スタッフリストの各項目の詳細です。

:::note[表示項目は切替可能]
お探しの項目が画面上に表示されていない場合は表右上の「項目」から表示項目をONに
:::

<dl class="basic">
<dt>名前</dt>
<dd>名前です。変更は<a href="/nipoplus/reference/makestaff/#change_staff_data">組織管理</a>から行います</dd>
<dt><a href="/nipoplus/reference/userRank/">権限</a></dt>
<dd>権限です。変更は<a href="/nipoplus/reference/makestaff/#change_staff_data">組織管理</a>から行います</dd>
<dt><a href="/nipoplus/reference/makestaff/#stop_remove">状態</a></dt>
<dd>状態（有効：緑 / 無効：赤）を示します。変更は<a href="/nipoplus/reference/makestaff/#disable">組織管理</a>から行います</dd>
<dt>E-mail</dt>
<dd>ログインに使用するメールアドレスです。変更は<a href="/nipoplus/reference/account/">当該スタッフ自身で行います</a></dd>
<dt><a href="/nipoplus/editor/destinationlock/">提出先の固定</a></dt>
<dd>日報を作成する際の提出先を固定します（設定を推奨）</dd>
<dt><a href="/nipoplus/editor/limitedTemplate/">テンプレートの制限</a></dt>
<dd>利用できるテンプレートの種類を制限します。</dd>
<dt><a href="#bang">追放</a></dt>
<dd>グループからスタッフを追放します。アカウントの削除ではなく、このグループへのアクセス権を失効させるだけです。アカウント自体の削除は<a href="/nipoplus/reference/makestaff/#remove">組織管理</a>から行います。</dd>
<dt>重役</dt>
<dd>提出先の設定に影響されずグループ内のすべての日報を閲覧可能になります。</dd>
<dt><a href="/nipoplus/reference/staffshare/">共用</a></dt>
<dd>1つのアカウントを複数人で使い回す際に使用します</dd>
</dl>

## スタッフの活動実績を確認する {#activity}

グループ内で各スタッフがどれくらい活動しているか、その実績を月ごとに確認できます。

1.  左メニューから「グループ設定」をクリック
2.  上部メニューの「スタッフ管理」をクリック
3.  画面下部にある活動実績の表を確認します。

![グループ内で行ったアクティビティを集計表示](./img/staff-activity_tablet.png)

<dl class="basic">
<dt><a href="/nipoplus/reference/reportstate/#agree">承認</a></dt>
<dd>1ヶ月間に日報を承認した回数</dd>
<dt><a href="/nipoplus/reference/reportstate/#reject">棄却</a></dt>
<dd>1ヶ月間に日報を棄却した回数</dd>
<dt><a href="/nipoplus/staff/writereport/">日報</a></dt>
<dd>1ヶ月間に日報を作成した回数</dd>
<dt><a href="/nipoplus/reference/reportstate/#readed">既読</a></dt>
<dd>1ヶ月間に日報を既読した回数</dd>
<dt><a href="/nipoplus/other/schedule/">予定作成</a></dt>
<dd>1ヶ月間に予定を作成した回数</dd>
<dt>予定完了</dt>
<dd>1ヶ月間に予定を完了済みにした回数</dd>
<dt><a href="/nipoplus/staff/readreport/#comment">コメント</a></dt>
<dd>1ヶ月間に日報や予定にコメントを書き込んだ回数</dd>
</dl>

集計する期間は1ヶ月単位で切り替えができます。

## グループからスタッフを追放 {#bang}

スタッフをグループから追放することで、そのスタッフはグループ内の日報データにアクセス出来なくなります。

:::tip[ボタンは非表示]
誤って追放しないようにするため、追放アイコンは「非表示」の状態になっています。
:::

1. 追放アイコンを表示する
2. 追放アイコンをクリックする

![追放しても組織にアカウントは残る](./img/bang_tablet.webp)

:::tip[再加入させるには？]
[組織設定から該当グループに再アサイン](/nipoplus/admin/about/#join_staff)できます。
:::

## グループの管理画面からスタッフを作成する {#createStaff}

通常は[組織管理](/nipoplus/admin/about/)からアカウントを作成しますがグループ内から作成もできます。

:::caution[管理者権限が必要]
アカウント作成は管理者権限が必要です
:::

詳しくは[グループ設定からアカウントを１件追加](/nipoplus/reference/makestaff/#make_group)を御覧ください。
