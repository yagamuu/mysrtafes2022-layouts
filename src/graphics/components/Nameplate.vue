<template>
  <div class="nameplate" :style="position">
    <div :class="nameElementClass">
      <img src="../images/icon/controller_white_a.png" height="44px" v-if="isPlayer">
      <img src="../images/icon/mic_white.png" height="44px" v-else>
      <one-line-text-block
        :fontSize="38"
        :text="name"
        :width="(width / 2 - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
    </div>

    <div>
    <transition name="social" mode="out-in">
      <div
        class="textParent social"
        v-if="displaySocial === socialOrder.twitter && social.twitter"
        key="twitter"
      >
        <img src="../images/icon/twitter_white.png" height="44px">
        <one-line-text-block
        :fontSize="24"
        :text="social.twitter"
        :width="(width / 2 - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.twitch && social.twitch"
        key="twitch"
      >
        <img src="../images/icon/twitch.png" height="44px">
        <one-line-text-block
        :fontSize="24"
        :text="social.twitch"
        :width="(width / 2 - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.youtube && social.youtube"
        key="youtube"
      >
        <img src="../images/icon/youtube.png" height="44px">
        <one-line-text-block
        :fontSize="24"
        :text="social.youtube"
        :width="(width / 2 - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.nico && social.nico"
        key="nico"
      >
        <img src="../images/icon/nico.png" height="44px">
        <one-line-text-block
        :fontSize="24"
        :text="social.nico"
        :width="(width / 2 - 40 - 44 - 10)"
        style="paddingLeft: 10px"/>
      </div>
      <div
        class="textParent social"
        v-else
        key="blank"
      >
        <one-line-text-block :width="(width / 2 - 40)"/>
      </div>
    </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import { Social } from '@mysrtafes2022-layouts/types/Social';
import * as util from '../util/social';
import OneLineTextBlock from './OneLineTextBlock.vue';

@Component({
  components: {
    OneLineTextBlock,
  },
})
export default class Nameplate extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Number, default: 930 })
  readonly width!: number;

  @Prop({ type: String, required: true })
  readonly name!: string;

  @Prop({ type: Object, required: true })
  readonly social!: Social;

  @Prop({ type: Boolean, default: true })
  readonly isPlayer!: boolean;

  @Prop({ type: Number, required: true })
  readonly displaySocial!: number;

  socialOrder = util.socialOrder;

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
  white-space: nowrap;
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
