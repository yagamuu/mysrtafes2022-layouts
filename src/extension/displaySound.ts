import { RunDataActiveRun } from '@mysrtafes2022-layouts/types/schemas/speedcontrol/RunData';
import { get as nodecg } from './util/nodecg';
import { displaySoundReplicant, runDataActiveRunReplicant } from './util/replicants';

if (runDataActiveRunReplicant.value?.teams) {
  displaySoundReplicant.value.playerId = runDataActiveRunReplicant.value.teams[0].players[0].id;
}

runDataActiveRunReplicant.on('change', (newVal: RunDataActiveRun) => {
  if (newVal?.teams) {
    displaySoundReplicant.value.playerId = newVal.teams[0].players[0].id;
  }
});

const changeDisplaySound = (playerId: string): void => {
  if (!displaySoundReplicant.value) { return; }

  displaySoundReplicant.value.playerId = playerId;

  nodecg().log.info('Change Display Sound');
};

nodecg().listenFor('changeDisplaySound', (data, ack) => {
  changeDisplaySound(data.id);

  if (ack && !ack.handled) {
    ack(null);
  }
});
