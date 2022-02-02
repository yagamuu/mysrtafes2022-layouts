<template>
  <v-app>
    <v-radio-group v-model="selected">
      <v-radio
        v-for="(player) in players"
        :label="player.name"
        :key="player.id"
        :value="player.id"
        @change="changeDisplaySound(player.id)"/>
      </v-radio-group>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RunDataActiveRun, RunDataPlayer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol/RunData';
import { DisplaySound } from '@mysrtafes2022-layouts/types/schemas/displaySound';
import { storeModule } from './store';

@Component({
  components: {},
})
export default class extends Vue {
  @Getter readonly runDataActiveRun!: RunDataActiveRun;
  @Getter readonly displaySound!: DisplaySound;

  selected = '';

  get players(): RunDataPlayer[] {
    if (!this.runDataActiveRun) {
      return [];
    }

    return this.runDataActiveRun.teams.flatMap((team) => team.players);
  }

  changeDisplaySound(id: string): void {
    storeModule.changeDisplaySound(id);
  }

  @Watch('players')
  onChangePlayers(): void {
    this.selected = this.players[0].id || '';
  }

  mounted(): void {
    this.selected = this.displaySound?.playerId || '';
  }
}
</script>

<style scoped>
</style>
