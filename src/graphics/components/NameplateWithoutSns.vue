<template>
  <div class="nameplate" :style="position">
    <div :class="nameElementClass">
      <img src="../images/icon/controller_white_a.png" height="44px" v-if="isPlayer">
      <img src="../images/icon/mic_white.png" height="44px" v-else>
      <one-line-text-block
        :fontSize="38"
        :text="name"
        :width="(width - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import OneLineTextBlock from './OneLineTextBlock.vue';

@Component({
  components: {
    OneLineTextBlock,
  },
})
export default class NameplateWithoutSns extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Number, default: 930 })
  readonly width!: number;

  @Prop({ type: String, required: true })
  readonly name!: string;

  @Prop({ type: Boolean, default: true })
  readonly isPlayer!: boolean;

  nameElementClass = [
    'textParent name',
    { player: this.isPlayer },
    { commentator: !this.isPlayer },
  ];
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.nameplate {
  @include runInformationCompornent();
  justify-content: left;
  align-items: center;
  color: #fff;
  font-family: 'mplus-1c-medium';
}

.textParent {
  padding: 0 20px;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
}

.social-enter-active {
  transition: all 1s 1s;
}

.social-leave-active {
  transition: all 1s;
}

.social-enter, .social-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
