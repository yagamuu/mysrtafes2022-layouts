<template>
  <v-app>
    <v-switch
      label="開始前通知ON"
      :value="true"
      :input-value="startSoon"
      @change="toggleSwitch($event !== null)"
    />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { StartSoon } from '@mysrtafes2022-layouts/types/schemas/startSoon';
import { storeModule } from './store';

@Component({
  components: {},
})
export default class extends Vue {
  @Getter readonly startSoon!: StartSoon;

  selected = '';

  toggleSwitch(value: boolean): void {
    storeModule.changeStartSoon(value);
  }
}
</script>

<style scoped>
</style>
