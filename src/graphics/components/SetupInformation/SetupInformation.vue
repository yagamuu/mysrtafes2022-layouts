<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div>
  <transition name="information" mode="out-in">
    <setup-information-text
      v-for="(information, index) in setupInformationArray"
      :key="information.id"
      :information="information"
      v-if="index === displaySetupInformation"/>
  </transition>
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

.information-enter-active {
  transition: all 1s 1s;
}

.information-leave-active {
  transition: all 1s;
}

.information-enter, .information-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>
