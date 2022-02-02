import { ReplicantModule } from '@mysrtafes2022-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';
import type { RunDataArray, RunDataActiveRunSurrounding } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import { SetupInformationArray } from '@mysrtafes2022-layouts/types/schemas/setupInformationArray';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';

Vue.use(Vuex);

@Module({ name: 'SetupLayoutModule' })
class SetupLayoutModule extends VuexModule {
  displaySetupInformationState = 0;

  get displaySetupInformation() {
    return this.displaySetupInformationState;
  }

  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get spotifyPlayingTrackReplicant(): SpotifyPlayingTrack {
    return this.reps.spotifyPlayingTrackReplicant;
  }

  get runDataArrayReplicant(): RunDataArray {
    return this.reps.runDataArrayReplicant;
  }

  get runDataActiveRunSurroundingReplicant(): RunDataActiveRunSurrounding {
    return this.reps.runDataActiveRunSurroundingReplicant;
  }

  get speedcontrolActiveRunIndex(): number {
    const activeRunIndex = this.runDataArrayReplicant.findIndex(
      (runData) => runData.id === this.runDataActiveRunSurroundingReplicant.current,
    );
    return activeRunIndex;
  }

  get upcomingRuns(): RunDataArray {
    const index = this.speedcontrolActiveRunIndex || 0;
    return this.runDataArrayReplicant.slice(index, index + 3);
  }

  get activeTweetReplicant(): ActiveTweet {
    return this.reps.activeTweetReplicant;
  }

  get setupInformationArray(): SetupInformationArray {
    return this.reps.setupInformationArrayReplicant;
  }

  get setupLayoutBgAssets(): Assets {
    return this.reps.setupLayoutBgAssetsReplicant;
  }

  get logoAssets(): Assets {
    return this.reps.logoAssetsReplicant;
  }

  @Mutation
  NEXT_SETUP_INFORMATION(length: number): void {
    this.displaySetupInformationState = (this.displaySetupInformationState + 1) % length;
  }

  @Action
  nextSetupInformation(): void {
    this.NEXT_SETUP_INFORMATION(this.setupInformationArray.length);
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, SetupLayoutModule },
});
export default store;
export const storeModule = getModule(SetupLayoutModule, store);
