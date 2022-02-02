<template>
  <div class="description">
    <setup-information-text
      v-for="(information, index) in setupInformationArray"
      :key="information.id"
      :information="information"
      :class="[index === displaySetupInformation && !startSoonReplicant ? 'active' : '']"/>
    <span class="description_part_alert" :class="[startSoonReplicant ? 'active' : '']">
      まもなく開始します
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SetupInformationArray } from '@mysrtafes2022-layouts/types/schemas/setupInformationArray';
import { StartSoon } from '@mysrtafes2022-layouts/types/schemas/startSoon';
import SetupInformationText from './SetupInformationText.vue';

@Component({
  components: {
    SetupInformationText,
  },
})
export default class SetupInformation extends Vue {
  @Getter readonly setupInformationArray!: SetupInformationArray;
  @Getter readonly displaySetupInformation!: number;
  @Getter readonly startSoonReplicant!: StartSoon;
}
</script>

<style lang="scss" scoped>
</style>
