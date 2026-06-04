---
slug: inquery
title: 📩NipoPlusへのお問い合わせ・ご要望・フィードバック窓口
description: NipoPlusに関するご質問、ご要望、お問い合わせはこちらからお送りください。1営業日以内に返信いたします。自動返信メールにて受け付け完了のお知らせを送信しています
sidebar:
  label: 📩お問い合わせ
---

<div id="contactForm">

利用者の皆様に高い満足度を得ていただくことを目指しています‼️フィードバックは私達にとって非常に重要です。
使いにくい点・わかりにくい点・改善してほしい点があれば遠慮なく次のフォームからメッセージを送ってください。

- 1営業日以内に担当者より返信いたします（土日祝日は対応が遅れる場合があります）
- トラブルが発生した際は、お問い合わせの前に[トラブルシューティング](/nipoplus/system/fix)をお試しください
- 自動返信メールをお送りします。（届かない場合はメールアドレスに誤りがある可能性あり）
- Nipo【旧版】の解約手順がわからない方はお問い合わせ前に[解約ガイド](/legacy/manual/leave-account)を御覧ください
- Nipo【旧版】からNipoPlusへ乗り換えを検討の方はお問い合わせ前に[NipoPlusへの移行ガイド](/legacy/about/diff)を御覧ください

:::note[営業メールは送らないでください]
:::

<div class="contact-form">
<div class="mb-4">
<label for="mail" class="form-label custom-label">メールアドレス<span>必須</span></label>
<input type="email" class="form-control custom-input" id="mail" placeholder="example@mail.com" />
</div>

<div class="mb-4">
<label class="form-label custom-label">対象製品を選択してください</label>
<div class="radio-group">
<input type="radio" name="targetRadio" value="Nipo" id="nipo">
<label for="nipo" class="radio-card">Nipo<span>旧版</span></label>

<input type="radio" name="targetRadio" value="NipoPlus" id="nipo-plus">
<label for="nipo-plus" class="radio-card">NipoPlus</label>
</div>
</div>

<div class="mb-4">
<label for="content" class="form-label custom-label">お問い合わせ内容</label>
<textarea id="content" class="form-control custom-input" rows="8" placeholder="こちらにご記入ください"></textarea>
</div>

<div class="text-center">
<button onclick="submit()" class="btn btn-submit" id="sendButton">
メッセージを送信する
</button>
</div>
</div>

<div id="errormessage" style="color:red"></div>

<details>
  <summary>使用できない単語について</summary>
  迷惑メールの徹底排除に力を入れています。ご不便をおかけしますが以下の単語がメッセージ内に含まれている場合、送信に失敗します。あらかじめご了承ください

  <hr />

"ウェビナー",
"オンライン商談",
"お得な情報",
"コスト削減",
"ご案内です",
"ご検討",
"ご提案",
"ソリューション",
"パートナーシップ",
"メール広告",
"リスク0",
"求職",
"求人",
"経営・営業責任者様",
"広告費用",
"最新技術",
"資料ダウンロード",
"実績",
"受注率",
"掲載",
"人材派遣",
"成果保証型",
"成功事例",
"特別オファー",
"特別なキャンペーン",

</details>

</div>

<div id="thanks"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  // キーワードベースのフィルタリング処理を追加
const filterKeywords = [
  "ウェビナー",
  "オンライン商談",
  "お得な情報",
  "コスト削減",
  "ご案内です",
  "ご検討",
  "ご提案",
  "ソリューション",
  "パートナーシップ",
  "メール広告",
  "リスク0",
  "求職",
  "求人",
  "経営・営業責任者様",
  "広告費用",
  "最新技術",
  "資料ダウンロード",
  "実績",
  "受注率",
  "掲載",
  "人材派遣",
  "成果保証型",
  "成功事例",
  "特別オファー",
  "特別なキャンペーン",
];

// メッセージにキーワードが含まれているかチェックする関数
function containsKeyword(message) {
  return filterKeywords.some(keyword => message.includes(keyword));
}

  // let mail = document.getElementById("mail")
  const form = document.getElementById("contactForm");
  const thanks = document.getElementById("thanks");
  const sendButton = document.getElementById("sendButton");
  const errorMessage = document.getElementById("errormessage");
  const checkOption = document.getElementsByName("targetRadio");
  const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  // ラジオボタン（Nipo/NipoPLus)のクリックイベントを監視。選ばれた方のバナーをセットする
  checkOption.forEach(function(e) {
    e.addEventListener("click", function() {
      const selectNode = document.querySelector("input:checked[name=targetRadio]")
      if (selectNode === null) return
      let img = document.createElement("img")
      img.src = selectNode.value === "Nipo" ? "/images/nipologo.svg" : "/images/favicon.svg"
      img.id = "icon"
      img.width = 200
      const oldimg = document.getElementById("icon")
    });
  });
  // メール送信処理（更新版）
async function submit() {
  sendButton.disabled = true;
  const email = document.getElementById("mail");
  const content = document.getElementById("content");
  const target = document.querySelector("input:checked[name=targetRadio]");

  try {
    if (target === null) throw "問い合わせの製品をNipo/NipoPlusから選択してください";
    if (EMAIL_REG_EXP.test(email.value) === false) throw "メールアドレスが不正です";
    if (content.value.length === 0) throw "本文が空欄です";
    if (containsKeyword(content.value.toLowerCase())) throw "営業関連のメッセージはご遠慮ください。あなたのメッセージは営業に関するキーワードが含まれています。本当のお問い合わせの方へ。誤検知でご不便をおかけして申し訳ありません。ページ下部にある「使用できない単語」をご確認のうえ、該当ワードを削除して再送してください。営業の方へ。今すぐブラウザバックしてどうぞ"; // 小文字に変換してからチェック
  } catch (e) {
    errorMessage.innerHTML = e;
    sendButton.disabled = false;
    return;
  }

  const config = {
    method: "POST",
    url: "https://us-central1-nipo-plus.cloudfunctions.net/inqueryWebCommon",
    data: {
      email: email.value,
      text: `${content.value}\n【${target.value}】`,
      site: "nipoplus"  // ← ここを追加‼️
    }
  };

  // 完了を待つ必要はない
  axios(config);
  form.setAttribute("style", "display:none");
  const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`);
  thanks.appendChild(textNode);


  return;
}


</script>

<style>
  /* 全体のベース調整 */
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* ラベルのデザイン */
.custom-label {
  font-weight: 600;
  color: #444;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
}
.custom-label span {
  font-size: 0.7rem;
  background: #ff4d4f;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 10px;
}

/* 入力欄のカスタマイズ */
.custom-input {
  border: 2px solid #edf2f7;
  border-radius: 10px;
  padding: 12px 15px;
  transition: all 0.3s ease;
  width: 100%;
}
.custom-input:focus {
  border-color: #4facfe;
  box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.1);
  outline: none;
}

/* ラジオボタンをオシャレなチップ型に */
.radio-group {
  display: flex;
  gap: 12px;
}
.radio-group input[type="radio"] {
  display: none; /* デフォルトの丸を隠す */
}
.radio-card {
  flex: 1;
  padding: 15px;
  text-align: center;
  border: 2px solid #edf2f7;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  color: #666;
}
.radio-card span {
  font-size: 0.75rem;
  display: block;
  opacity: 0.6;
}
.radio-group input[type="radio"]:checked + .radio-card {
  border-color: #4facfe;
  background: rgba(79, 172, 254, 0.05);
  color: #4facfe;
}

/* 送信ボタン */
.btn-submit {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  color: white;
}
</style>
