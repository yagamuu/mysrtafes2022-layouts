/* eslint-disable max-len */
import type { RunDataArray, RunDataActiveRun, RunDataActiveRunSurrounding, Timer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import type { SpotifyPlayingTrack } from '@mysrtafes2022-layouts/types/schemas/nodecgSpotifyWidget';
import { SetupInformationArray } from '@mysrtafes2022-layouts/types/schemas/setupInformationArray';
import { DisplaySound } from '@mysrtafes2022-layouts/types/schemas/displaySound';
import { StartSoon } from '@mysrtafes2022-layouts/types/schemas/startSoon';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import type { Store } from 'vuex';
import { namespace } from 'vuex-class';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

// Declaring replicants.
export const reps: {
  runDataArrayReplicant: ReplicantBrowser<RunDataArray>;
  runDataActiveRunReplicant: ReplicantBrowser<RunDataActiveRun>;
  runDataActiveRunSurroundingReplicant: ReplicantBrowser<RunDataActiveRunSurrounding>;
  timerReplicant: ReplicantBrowser<Timer>;
  spotifyPlayingTrackReplicant: ReplicantBrowser<SpotifyPlayingTrack>;
  activeTweetReplicant: ReplicantBrowser<ActiveTweet>;
  setupInformationArrayReplicant: ReplicantBrowser<SetupInformationArray>;
  displaySoundReplicant: ReplicantBrowser<DisplaySound>;
  startSoonReplicant: ReplicantBrowser<StartSoon>;
  gameLayoutBgAssetsReplicant: ReplicantBrowser<Assets>;
  setupLayoutBgAssetsReplicant: ReplicantBrowser<Assets>;
  logoAssetsReplicant: ReplicantBrowser<Assets>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  runDataArrayReplicant: nodecg.Replicant('runDataArray', 'nodecg-speedcontrol'),
  runDataActiveRunReplicant: nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol'),
  runDataActiveRunSurroundingReplicant: nodecg.Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol'),
  timerReplicant: nodecg.Replicant('timer', 'nodecg-speedcontrol'),
  spotifyPlayingTrackReplicant: nodecg.Replicant('spotifyPlayingTrack', 'nodecg-spotify-widget'),
  activeTweetReplicant: nodecg.Replicant('activeTweet', 'nodecg-twitter-widget'),
  setupInformationArrayReplicant: nodecg.Replicant('setupInformationArray'),
  displaySoundReplicant: nodecg.Replicant('displaySound'),
  startSoonReplicant: nodecg.Replicant('startSoon'),
  gameLayoutBgAssetsReplicant: nodecg.Replicant('assets:gameLayoutBg'),
  setupLayoutBgAssetsReplicant: nodecg.Replicant('assets:setupLayoutBg'),
  logoAssetsReplicant: nodecg.Replicant('assets:logo'),
};

// All the replicant types.
export interface ReplicantTypes {
  runDataArrayReplicant: RunDataArray;
  runDataActiveRunReplicant: RunDataActiveRun;
  runDataActiveRunSurroundingReplicant: RunDataActiveRunSurrounding;
  timerReplicant: Timer;
  spotifyPlayingTrackReplicant: SpotifyPlayingTrack;
  activeTweetReplicant: ActiveTweet;
  setupInformationArrayReplicant: SetupInformationArray;
  displaySoundReplicant: DisplaySound;
  startSoonReplicant: StartSoon;
  gameLayoutBgAssetsReplicant: Assets;
  setupLayoutBgAssetsReplicant: Assets;
  logoAssetsReplicant: Assets;
}

@Module({ name: 'ReplicantModule', namespaced: true })
export class ReplicantModule extends VuexModule {
  // Replicant values are stored here.
  reps: { [k: string]: unknown } = {};

  // This sets the state object above when a replicant sends an update.
  @Mutation
  setState({ name, val }: { name: string, val: unknown }): void {
    Vue.set(this.reps, name, clone(val));
  }

  // This is a generic mutation to update a named replicant.
  @Mutation
  setReplicant<K>({ name, val }: { name: string, val: K }): void {
    Vue.set(this.reps, name, clone(val)); // Also update local copy, although no schema validation!
    reps[name].value = clone(val);
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let replicantModule!: ReplicantModule;
export const replicantNS = namespace('ReplicantModule');

export async function setUpReplicants(store: Store<unknown>): Promise<void> {
  // Listens for each declared replicants "change" event, and updates the state.
  Object.keys(reps).forEach((name) => {
    reps[name].on('change', (val) => {
      store.commit('ReplicantModule/setState', { name, val });
    });
  });
  // We should make sure the replicant are ready to be read, needs to be done in browser context.
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  replicantModule = getModule(ReplicantModule, store);
}
