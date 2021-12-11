import { v4 as uuid } from 'uuid';
import { SetupInformation } from '@mysrtafes2022-layouts/types/schemas';
import type { Configschema } from '@mysrtafes2022-layouts/types/schemas/configschema';
import { get as nodecg } from './util/nodecg';
import { informationArrayReplicant } from './util/replicants';

// Access the bundle configuration with types.
const config = nodecg().bundleConfig as Configschema;

const createInformation = (text: string): void => {
  if (!informationArrayReplicant.value) { return; }

  informationArrayReplicant.value.push({
    id: uuid(),
    text,
  });

  nodecg().log.info('Add information');
};

const updateInformation = (information: SetupInformation): void => {
  if (!informationArrayReplicant.value) { return; }

  const informationIndex = informationArrayReplicant.value.findIndex(
    (informationRep) => informationRep.id === information.id,
  );

  if (informationIndex < -1) { return; }

  informationArrayReplicant.value[informationIndex] = information;

  nodecg().log.info('Update information');
};

const deleteInformation = (id: string): void => {
  if (!informationArrayReplicant.value) { return; }

  informationArrayReplicant.value = informationArrayReplicant.value.filter(
    (information) => information.id !== id,
  );

  nodecg().log.info('Delete information');
};

const overwriteInformation = (): void => {
  if (!informationArrayReplicant.value) { return; }

  informationArrayReplicant.value = [{
    id: uuid(),
    text: config.overwriteInformationText,
  }];

  nodecg().log.info('Overwrite information');
};

nodecg().listenFor('createInformation', (data, ack) => {
  createInformation(data.text);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg().listenFor('updateInformation', (data, ack) => {
  updateInformation(data);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg().listenFor('deleteInformation', (data, ack) => {
  deleteInformation(data.id);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg().listenFor('overwriteInformation', (data, ack) => {
  overwriteInformation();

  if (ack && !ack.handled) {
    ack(null);
  }
});
