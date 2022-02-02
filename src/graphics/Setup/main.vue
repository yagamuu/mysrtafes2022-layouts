<template>
  <overlay-base :backgroundAssets="setupLayoutBgAssets">
    <p id="next_is"><span id="next_is_text">このあとは…</span></p>
    <div id="main">
      <setup-schedule/>
      <twitter-notification/>
      <spotify-track/>
    </div>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
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
  @Getter readonly setupLayoutBgAssets!: Assets;

  created(): void {
    setInterval(() => {
      storeModule.nextSetupInformation();
    }, 30000);
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/reset.css');
  @import url('../styles/common.css');
  @import url('../styles/setup.css');
</style>
