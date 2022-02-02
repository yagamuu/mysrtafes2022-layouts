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
import { Vue, Component } from 'vue-property-decorator';
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

  get selected(): string {
    return this.displaySound?.playerId || '';
  }

  get players(): RunDataPlayer[] {
    if (!this.runDataActiveRun) {
      return [];
    }

    return this.runDataActiveRun.teams.flatMap((team) => team.players);
  }

  changeDisplaySound(id: string): void {
    storeModule.changeDisplaySound(id);
  }
}
</script>

<style scoped>
</style>
