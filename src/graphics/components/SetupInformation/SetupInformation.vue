<template>
  <div class="description">
    <setup-information-text
      v-for="(information, index) in setupInformationArray"
      :key="information.id"
      :information="information"
      :class="[index === displaySetupInformation ? 'active' : '']"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SetupInformationArray } from '@mysrtafes2022-layouts/types/schemas/setupInformationArray';
import SetupInformationText from './SetupInformationText.vue';

@Component({
  components: {
    SetupInformationText,
  },
})
export default class SetupInformation extends Vue {
  @Getter readonly setupInformationArray!: SetupInformationArray;
  @Getter readonly displaySetupInformation!: number;
}
</script>

<style lang="scss" scoped>
</style>
