<template>
  <span class="description_part">{{information.text}}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SetupInformation } from '@mysrtafes2022-layouts/types/schemas/setupInformation';

@Component({
  components: {
  },
})
export default class SetupInformationText extends Vue {
  @Getter readonly displaySetupInformation!: number;

  @Prop({ type: Object, required: true })
  readonly information!: SetupInformation;
}
</script>

<style lang="scss" scoped>
</style>
