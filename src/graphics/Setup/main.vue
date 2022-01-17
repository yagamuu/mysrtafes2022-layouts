<template>
  <overlay-base :backgroundUri="backgroundUri">
    <div id="container" class="setup">
      <header>
        <img id="logo" src="../images/logo/logo.png" alt="logo">
        <div id="twitter_head">
          <img id="twitter_head_icon" src="../images/icon/icon_twitter.svg" alt="twitter_head_icon">
          <span>#不思議RTAフェス</span>
        </div>
      </header>
      <p id="next_is"><span id="next_is_text">このあとは…</span></p>
      <div id="main">
        <setup-schedule/>
        <twitter-notification/>
        <spotify-track :track="spotifyPlayingTrackReplicant"/>
      </div>
      <div id="illust_wrapper">
        <div id="illust" alt="illust"/>
      </div>
      <footer>
        <span>本イベントはRTA in Japanのチャンネル貸し出しシステムを利用した外部のRTAイベントです</span>
        <span id="JST_area">{{nowDate}}</span>
      </footer>
    </div>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';
import type { RunData, RunDataArray } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import { storeModule } from '@mysrtafes2022-layouts/store/setupLayoutStore';
import OverlayBase from '../views/OverlayBase.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';
import SetupSchedule from '../components/SetupSchedule/SetupSchedule.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';

@Component({
  components: {
    OverlayBase,
    SpotifyTrack,
    SetupSchedule,
    TwitterNotification,
  },
})
export default class extends Vue {
  @Getter readonly spotifyPlayingTrackReplicant!: SpotifyPlayingTrack;
  @Getter readonly upcomingRuns!: RunDataArray;
  @Getter readonly setupLayoutBgAssets!: Assets;

  date = new Date();

  get backgroundUri(): string {
    return this.setupLayoutBgAssets[0]?.url ?? '';
  }
  get upnextRun(): RunData {
    return this.upcomingRuns[0];
  }

  get ondeckRuns(): RunDataArray {
    return this.upcomingRuns.slice(1);
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
      // storeModule.nextSetupInformation();
    }, 3000);
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/reset.css');
  @import url('../styles/common.css');
  @import url('../styles/setup.css');
</style>
