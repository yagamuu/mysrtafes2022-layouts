/* eslint-disable max-len */

import type { SetupInformationArray, DisplaySound } from '@mysrtafes2022-layouts/types/schemas';
import type { RunDataActiveRun } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import { get as nodecg } from './nodecg';

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */

// YOU CAN REMOVE THIS RULE WHEN YOU GET MULTIPLE REPLICANTS!
// eslint-disable-next-line import/prefer-default-export
export const informationArrayReplicant = nodecg().Replicant<SetupInformationArray>('setupInformationArray', {
  defaultValue: [],
});

export const displaySoundReplicant = nodecg().Replicant<DisplaySound>('displaySound', {
  defaultValue: {
    playerId: '',
  },
});

export const runDataActiveRunReplicant = nodecg().Replicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');
