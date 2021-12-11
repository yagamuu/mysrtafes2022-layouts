import { ReplicantModule } from '@mysrtafes2022-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import type { Runner } from '@mysrtafes2022-layouts/types/Runners';
import { Social } from '@mysrtafes2022-layouts/types/Social';
import type { Commentators } from '@mysrtafes2022-layouts/types/Commentators';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import type { RunData, RunDataArray, Timer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import type { SpeedcontrolCurrentRunIndex, SpeedcontrolUserAdditionArray, CommentatorArray } from '@mysrtafes2022-layouts/types/schemas/speedcontrolAdditions';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import * as util from '../util/social';

Vue.use(Vuex);

@Module({ name: 'GameLayoutModule' })
class GameLayoutModule extends VuexModule {
  displaySocialIndexState = 0;

  get displaySocialIndex() {
    return this.displaySocialIndexState;
  }

  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get runDataArrayReplicant(): RunDataArray {
    return this.reps.runDataArrayReplicant;
  }

  get timerReplicant(): Timer {
    return this.reps.timerReplicant;
  }

  get activeTweetReplicant(): ActiveTweet {
    return this.reps.activeTweetReplicant;
  }

  get speedcontrolCurrentRunIndexReplicant(): SpeedcontrolCurrentRunIndex {
    return this.reps.speedcontrolCurrentRunIndexReplicant;
  }

  get speedcontrolUserAdditionArrayReplicant(): SpeedcontrolUserAdditionArray {
    return this.reps.speedcontrolUserAdditionArrayReplicant;
  }

  get commentatorArrayReplicant(): CommentatorArray {
    return this.reps.commentatorArrayReplicant;
  }

  get currentRunData(): RunData {
    return this.runDataArrayReplicant[this.speedcontrolCurrentRunIndexReplicant];
  }

  get currentRunner(): Runner {
    if (!this.currentRunData) {
      return {
        name: '',
        social: {},
      };
    }

    const runner = this.currentRunData.teams[0].players[0];
    // eslint-disable-next-line max-len
    const runnerAdditions = this.speedcontrolUserAdditionArrayReplicant.find((addition) => addition.id === runner.customData.oengusId);

    return {
      name: runner.name,
      social: {
        twitch: runner.social.twitch,
        nico: runnerAdditions?.social.nico,
        youtube: runnerAdditions?.social.youtube,
        twitter: runnerAdditions?.social.twitter,
      },
    };
  }

  get currentRunnersRace(): Runner[] {
    if (!this.currentRunData) {
      return [{
        name: '',
        social: {},
      }];
    }

    const { teams } = this.currentRunData;
    if (!teams) {
      return [{
        name: '',
        social: {},
      }];
    }

    return teams.map((team) => {
      const runner = team.players[0];

      // eslint-disable-next-line max-len
      const runnerAdditions = this.speedcontrolUserAdditionArrayReplicant.find((addition) => addition.id === runner.customData.oengusId);

      return {
        name: runner.name,
        social: {
          twitch: runner.social.twitch,
          nico: runnerAdditions?.social.nico,
          youtube: runnerAdditions?.social.youtube,
          twitter: runnerAdditions?.social.twitter,
        },
      };
    });
  }

  get currentCommentators(): Commentators {
    if (!this.currentRunData) {
      return [{
        name: '',
        social: {},
      }];
    }

    // eslint-disable-next-line max-len
    return this.commentatorArrayReplicant.filter((commentator) => commentator.assignedRunIdArray.some(
      (runId) => runId === this.currentRunData.externalID,
    )).map((commentator) => ({
      name: commentator.name,
      social: {
        twitch: commentator.social.twitch,
        nico: commentator.social.nico,
        youtube: commentator.social.youtube,
        twitter: commentator.social.twitter,
      },
    }));
  }

  get commentatorsNameOneLine(): string {
    if (!this.currentCommentators) {
      return '';
    }

    return this.currentCommentators.map((commentator) => commentator.name).join(', ');
  }

  get commentatorsSocialOneLine(): Social {
    if (!this.currentCommentators) {
      return {};
    }
    const twitch: (string | null)[] = [];
    const nico: (string | null)[] = [];
    const youtube: (string | null)[] = [];
    const twitter: (string | null)[] = [];

    this.currentCommentators.forEach((commentator) => {
      twitch.push(commentator.social.twitch ? commentator.social.twitch : '-');
      nico.push(commentator.social.nico ? commentator.social.nico : '-');
      youtube.push(commentator.social.youtube ? commentator.social.youtube : '-');
      twitter.push(commentator.social.twitter ? commentator.social.twitter : '-');
    });

    return {
      twitch: twitch.filter((t) => t !== '-').length > 0 ? twitch.join(', ') : undefined,
      nico: nico.filter((n) => n !== '-').length > 0 ? nico.join(', ') : undefined,
      youtube: youtube.filter((y) => y !== '-').length > 0 ? youtube.join(', ') : undefined,
      twitter: twitter.filter((t) => t !== '-').length > 0 ? twitter.join(', ') : undefined,
    };
  }

  get existsSocials(): number[] {
    const exists: number[][] = [];

    this.currentRunData.teams.flatMap((team) => team.players).forEach((runner) => {
      // eslint-disable-next-line max-len
      const runnerAdditions = this.speedcontrolUserAdditionArrayReplicant.find((addition) => addition.id === runner.customData.oengusId);

      const social = {
        twitch: runner.social.twitch,
        nico: runnerAdditions?.social.nico,
        youtube: runnerAdditions?.social.youtube,
        twitter: runnerAdditions?.social.twitter,
      };
      exists.push(util.searchExistsSocial(social));
    });

    this.currentCommentators.forEach((commentator) => {
      exists.push(util.searchExistsSocial(commentator.social));
    });

    return Array.from(new Set(exists.flat())).sort();
  }

  get currentSocial(): number {
    return this.existsSocials[this.displaySocialIndex] || 0;
  }

  get gameLayoutBgAssets(): Assets {
    return this.reps.gameLayoutBgAssetsReplicant;
  }

  get logoAssets(): Assets {
    return this.reps.logoAssetsReplicant;
  }

  @Mutation
  NEXT_SOCIAL(exists: number[]): void {
    this.displaySocialIndexState = (this.displaySocialIndexState + 1) % exists.length;
  }

  @Action
  nextSocial(): void {
    this.NEXT_SOCIAL(this.existsSocials);
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, GameLayoutModule },
});
export default store;
export const storeModule = getModule(GameLayoutModule, store);
