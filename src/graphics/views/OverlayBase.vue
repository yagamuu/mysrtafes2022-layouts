<template>
  <div
    id="container"
    class="setup"
    :style="style"
  >
    <header>
      <img id="logo" :src="logoUri" alt="logo">
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
import { Getter } from 'vuex-class';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import type { Configschema } from '@mysrtafes2022-layouts/types/schemas/configschema';

@Component
export default class OverlayBase extends Vue {
  @Getter readonly logoAssets!: Assets;

  @Prop({ type: Array, default: [] })
  readonly backgroundAssets!: Assets;

  @Prop({ type: String, default: 'setup' })
  readonly backgroundType!: 'game' | 'setup';

  @Prop({ type: String, default: '' })
  readonly clipPath!: string;

  config = nodecg.bundleConfig as Configschema;

  date = new Date();

  get logoUri(): string {
    return this.logoAssets[0]?.url || '';
  }

  get style(): object {
    const morning = this.backgroundAssets.find(
      (asset) => (
        asset.name === (this.backgroundType === 'game'
          ? this.config.gameLayoutBackgroundImage.morning
          : this.config.setupLayoutBackgroundImage.morning)),
    );
    const evening = this.backgroundAssets.find(
      (asset) => (
        asset.name === (this.backgroundType === 'game'
          ? this.config.gameLayoutBackgroundImage.evening
          : this.config.setupLayoutBackgroundImage.evening)),
    );
    const night = this.backgroundAssets.find(
      (asset) => (
        asset.name === (this.backgroundType === 'game'
          ? this.config.gameLayoutBackgroundImage.night
          : this.config.setupLayoutBackgroundImage.night)),
    );

    let backgroundUri = morning?.url || this.backgroundAssets[0]?.url || '';
    const hour = this.date.getHours();

    if ((hour >= 15 && hour < 19) && evening) {
      backgroundUri = evening?.url;
    } else if ((hour >= 19 || hour < 6) && night) {
      backgroundUri = night?.url;
    }

    const uri = backgroundUri ? `url(${backgroundUri})` : '';
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
