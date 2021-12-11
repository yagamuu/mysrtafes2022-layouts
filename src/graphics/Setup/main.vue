<template>
  <overlay-base :backgroundUri="backgroundUri">
    <div id="container">
      <twitter-notification :position="twitter"/>
      <setup-schedule :position="schedule"/>
      <spotify-track :position="spotifyTrack" :track="spotifyPlayingTrackReplicant"/>
      <div class="footer">
        <div class="setupInformation">
          <setup-information/>
        </div>
        <span class="externalEventNotice">
          不思議のダンジョンRTAフェスはRTA in Japan チャンネル貸し出しシステムを利用した外部イベントです
        </span>
      </div>
    </div>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';
import type { RunData, RunDataArray } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import { storeModule } from '@mysrtafes2022-layouts/store/setupLayoutStore';
import OverlayBase from '../views/OverlayBase.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';
import SetupSchedule from '../components/SetupSchedule/SetupSchedule.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import SetupInformation from '../components/SetupInformation/SetupInformation.vue';

@Component({
  components: {
    OverlayBase,
    SpotifyTrack,
    SetupSchedule,
    TwitterNotification,
    SetupInformation,
  },
})
export default class extends Vue {
  @Getter readonly spotifyPlayingTrackReplicant!: SpotifyPlayingTrack;
  @Getter readonly upcomingRuns!: RunDataArray;
  @Getter readonly setupLayoutBgAssets!: Assets;

  get backgroundUri(): string {
    return this.setupLayoutBgAssets[0].url;
  }
  get upnextRun(): RunData {
    return this.upcomingRuns[0];
  }

  get ondeckRuns(): RunDataArray {
    return this.upcomingRuns.slice(1);
  }

  created(): void {
    setInterval(() => {
      storeModule.nextSetupInformation();
    }, 30000);
  }

  spotifyTrack: ComponentPosition = {
    top: '5px',
    left: '1370px',
    width: '525px',
    height: '90px',
  };

  schedule: ComponentPosition = {
    top: '140px',
    left: '1000px',
    width: '800px',
    height: '750px',
  };

  twitter: ComponentPosition = {
    top: '0px',
    left: '325px',
    width: '985px',
    height: '130px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.footer {
  @include baseCompornent(900px, 280px, 1640px, 180px);
  flex-direction: column;
}

.setupInformation {
  height: 130px;
  width: 1370px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
}

.externalEventNotice {
  color: #ff5800;
  font-size: 24px;
  text-shadow: rgb(255, 255, 255) 4px 0px 0px,
  rgb(255, 255, 255) 3.87565px 0.989616px 0px,
  rgb(255, 255, 255) 3.51033px 1.9177px 0px,
  rgb(255, 255, 255) 2.92676px 2.72656px 0px,
  rgb(255, 255, 255) 2.16121px 3.36588px 0px,
  rgb(255, 255, 255) 1.26129px 3.79594px 0px,
  rgb(255, 255, 255) 0.282949px 3.98998px 0px,
  rgb(255, 255, 255) -0.712984px 3.93594px 0px,
  rgb(255, 255, 255) -1.66459px 3.63719px 0px,
  rgb(255, 255, 255) -2.51269px 3.11229px 0px,
  rgb(255, 255, 255) -3.20457px 2.39389px 0px,
  rgb(255, 255, 255) -3.69721px 1.52664px 0px,
  rgb(255, 255, 255) -3.95997px 0.56448px 0px,
  rgb(255, 255, 255) -3.97652px -0.432781px 0px,
  rgb(255, 255, 255) -3.74583px -1.40313px 0px,
  rgb(255, 255, 255) -3.28224px -2.28625px 0px,
  rgb(255, 255, 255) -2.61457px -3.02721px 0px,
  rgb(255, 255, 255) -1.78435px -3.57996px 0px,
  rgb(255, 255, 255) -0.843183px -3.91012px 0px,
  rgb(255, 255, 255) 0.150409px -3.99717px 0px,
  rgb(255, 255, 255) 1.13465px -3.8357px 0px,
  rgb(255, 255, 255) 2.04834px -3.43574px 0px,
  rgb(255, 255, 255) 2.83468px -2.82216px 0px,
  rgb(255, 255, 255) 3.44477px -2.03312px 0px,
  rgb(255, 255, 255) 3.84068px -1.11766px 0px,
  rgb(255, 255, 255) 3.9978px -0.132717px 0px;
}

</style>
