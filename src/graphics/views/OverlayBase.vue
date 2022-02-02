<template>
  <div
    id="container"
    class="setup"
    :style="style"
  >
    <header>
      <img id="logo" src="../images/logo/logo.png" alt="logo">
      <div id="twitter_head">
        <img id="twitter_head_icon" src="../images/icon/icon_twitter.svg" alt="twitter_head_icon">
        <span>#不思議RTAフェス</span>
      </div>
    </header>
    <slot/>
    <footer>
      <span>本イベントはRTA in Japanのチャンネル貸し出しシステムを利用した外部のRTAイベントです</span>
      <span id="JST_area">{{nowDate}}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class OverlayBase extends Vue {
  @Prop({ type: String, default: '' })
  readonly backgroundUri!: string;

  @Prop({ type: String, default: '' })
  readonly clipPath!: string;

  date = new Date();

  get style(): object {
    const uri = this.backgroundUri ? `url(${this.backgroundUri})` : '';
    const clip = this.clipPath ? `polygon(${this.clipPath})` : '';
    return {
      backgroundImage: uri,
      clipPath: clip,
    };
  }

  get nowDate(): string {
    const year = this.date.getFullYear().toString();
    const month = (this.date.getMonth() + 1).toString();
    const day = this.date.getDate().toString();
    const hour = this.date.getHours().toString().padStart(2, '0');
    const minute = this.date.getMinutes().toString().padStart(2, '0');
    return `${year}/${month}/${day} ${hour}:${minute}`;
  }

  created(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
</script>
