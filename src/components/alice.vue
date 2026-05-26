<template>
  {/* 🐧 キャラクター＆吹き出し（横並びインライン版） */}
  <div class="flex items-center justify-center gap-3 mb-6 w-full animate-bounce [animation-duration:4s]">
    {/* 💬 吹き出し（左側） */}
    <div class="relative px-4 py-2 rounded-2xl text-xs font-black shadow-sm border text-center max-w-[220px] bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900/50">
      {{ message }}

      {/* 吹き出しのトゲ */}
      <div class="absolute top-1/2 right-[-5px] -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-amber-100 border-t border-r border-amber-200 dark:bg-amber-950 dark:border-amber-900/50"></div>
    </div>

    {/* 👩‍🦰 キャラクター画像（右側） */}
    <div class="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full overflow-hidden">
      <img src="/images/ok.png" alt="マスコットキャラクター" class="w-full h-auto object-contain" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('ここで待ってるよ！')

onMounted(() => {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 11) {
    message.value = 'おはよう！今日もがんばろう！'
  } else if (hour >= 11 && hour < 17) {
    message.value = 'こんにちは！お昼は食べた？'
  } else if (hour >= 17 && hour < 22) {
    message.value = 'こんばんは！今日もお疲れ様。'
  } else {
    message.value = '夜遅くまで偉いね！夜更かしはほどほどに。'
  }
})
</script>
