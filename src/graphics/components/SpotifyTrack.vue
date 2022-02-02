<template>
  <div id="bgm">
    <span id="bgm_text">&#x266B; {{trackName}} / {{artists}} / {{albumName}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';

@Component({
})
export default class SpotifyTrack extends Vue {
  @Getter readonly spotifyPlayingTrackReplicant!: SpotifyPlayingTrack;

  get trackName(): string {
    if (!this.spotifyPlayingTrackReplicant) {
      return '';
    }
    return this.spotifyPlayingTrackReplicant?.name || '';
  }
  get artists(): string {
    return this.spotifyPlayingTrackReplicant?.artists.join(', ') || '';
  }

  get albumName(): string {
    if (!this.spotifyPlayingTrackReplicant) {
      return '';
    }
    return this.spotifyPlayingTrackReplicant?.albumName || '';
  }
}
</script>

<style lang="scss" scoped>
</style>
