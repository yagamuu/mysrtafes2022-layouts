<template>
  <div id="bgm">
    <span id="bgm_text">&#x266B; {{trackName}} / {{artists}} / {{albumName}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';

@Component({
})
export default class SpotifyTrack extends Vue {
  @Prop({ type: Object, required: true })
  readonly track!: SpotifyPlayingTrack;

  get trackName(): string {
    if (!this.track) {
      return '';
    }
    return this.track?.name || '';
  }
  get artists(): string {
    return this.track?.artists.join(', ') || '';
  }

  get albumName(): string {
    if (!this.track) {
      return '';
    }
    return this.track?.albumName || '';
  }
}
</script>

<style lang="scss" scoped>
</style>
