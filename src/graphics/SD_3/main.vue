<template>
  <game-layout :clipPaths="clipPaths">
    <div class="header">
      <event-logo style="width: 240px;" :url="logoUrl"/>
      <div class="hashImg">
        <img src="../images/hashtag.png" height="45px" style="margin-top:10px;">
      </div>
    </div>
    <twitter-notification :position="twitter" :line="8"/>
    <game-title :position="gameTitle" :text="currentRunData.game" />
    <run-information-one-line :position="category" :text="currentRunData.category"/>
    <estimate :position="estimate" :estimateS="currentRunData.estimateS"/>
    <nameplate-without-sns
      :position="player[0]"
      :name="currentRunnersRace[0].name || ''"
      :width="340"
    />
    <nameplate-without-sns
      :position="player[1]"
      :name="currentRunnersRace[1] ? currentRunnersRace[1].name : ''"
      :width="340"
    />
    <nameplate-without-sns
      :position="player[2]"
      :name="currentRunnersRace[2] ? currentRunnersRace[2].name : ''"
      :width="340"
    />
    <commentator :position="commentator" :commentators="currentCommentators"/>
    <timer :position="timer" :time="timerReplicant.time" :timerStatus="timerReplicant.state"/>
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ClipPath } from '@mysrtafes2022-layouts/types/ClipPath';
import { Getter } from 'vuex-class';
import { Runner } from '@mysrtafes2022-layouts/types/Runners';
import type { Commentators } from '@mysrtafes2022-layouts/types/Commentators';
import type { RunData, Timer as TimerInterface } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import GameLayout from '../views/GameLayout.vue';
import EventLogo from '../components/EventLogo.vue';
import GameTitle from '../components/GameTitle.vue';
import RunInformationOneLine from '../components/RunInformationOneLine.vue';
import Estimate from '../components/Estimate.vue';
import NameplateWithoutSns from '../components/NameplateWithoutSns.vue';
import Timer from '../components/Timer.vue';
import Commentator from '../components/Commentator.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';

@Component({
  components: {
    GameLayout,
    EventLogo,
    Estimate,
    GameTitle,
    RunInformationOneLine,
    NameplateWithoutSns,
    Timer,
    Commentator,
    TwitterNotification,
  },
})
export default class extends Vue {
  @Getter readonly currentRunData!: RunData;
  @Getter readonly timerReplicant!: TimerInterface;
  @Getter readonly currentRunnersRace!: Runner[];
  @Getter readonly currentCommentators!: Commentators;
  @Getter readonly currentSocial!: number;
  @Getter readonly logoAssets!: Assets;

  get logoUrl(): string {
    return this.logoAssets[0].url;
  }

  clipPaths: ClipPath[] = [
    {
      x: 240 + 370 + 30 + 5,
      y: 70 + 5,
      width: 650 - (5 * 2),
      height: 495 - (5 * 2),
    }, // SD-1
    {
      x: 50 + 5,
      y: 60 + 290 + 160 + 50 + 5 + 5,
      width: 650 - (5 * 2),
      height: 495 - (5 * 2),
    }, // SD-2
    {
      x: 50 + 650 + 60 + 400 + 60 + 5,
      y: 60 + 290 + 160 + 50 + 5 + 5,
      width: 650 - (5 * 2),
      height: 495 - (5 * 2),
    }, // SD-3
    {
      x: 240 + 370 + 30 + 5,
      y: 15 + 5,
      width: 190 - (5 * 2),
      height: 50 - (5 * 2),
    }, // Timer-1
    {
      x: 50 + 5,
      y: 60 + 290 + 160 + 5,
      width: 190 - (5 * 2),
      height: 50 - (5 * 2),
    }, // Timer-2
    {
      x: 1920 - 50 - 350 - 10 - 190 + 5,
      y: 60 + 290 + 160 + 5,
      width: 190 - (5 * 2),
      height: 50 - (5 * 2),
    }, // Timer-3
  ];

  gameTitle: ComponentPosition = {
    top: '70px',
    left: '1300px',
    width: '600px',
    height: '180px',
  };

  category: ComponentPosition = {
    top: '280px',
    left: '1300px',
    width: '290px',
    height: '70px',
  };

  estimate: ComponentPosition = {
    top: '280px',
    left: '1610px',
    width: '290px',
    height: '70px',
  };

  player: ComponentPosition[] = [
    {
      top: '15px',
      left: '840px',
      width: '340px',
      height: '40px',
    },
    {
      top: '510px',
      left: '250px',
      width: '340px',
      height: '40px',
    },
    {
      top: '510px',
      left: '1520px',
      width: '340px',
      height: '40px',
    },
  ];

  commentator: ComponentPosition = {
    top: '645px',
    left: '760px',
    width: '390px',
    height: '220px',
  };

  timer: ComponentPosition = {
    top: '380px',
    left: '1470px',
    width: '260px',
    height: '75px',
  };

  twitter: ComponentPosition = {
    top: '60px',
    left: '240px',
    width: '370px',
    height: '290px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:610px);
  z-index: 1;
  overflow: hidden;
}

.hashImg {
  display: flex;
  height: 55px;
  width: 370px;
}

</style>
