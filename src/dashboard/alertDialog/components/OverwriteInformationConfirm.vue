<template>
  <div>
    <div>セットアップ画面のメッセージをゲーム開始通知用に上書きしても良いですか？</div>
    <br>
    <div :style="{ float: 'right' }">
      <v-btn @click="$emit('confirm')">
        はい
      </v-btn>
      <v-btn @click="$emit('dismiss')">
        いいえ
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>
