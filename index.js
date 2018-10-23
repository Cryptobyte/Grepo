const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const logger = require('./Logger');
const grepoJson = require('./GrepoJson');

const server = 'en110';

logger.log('Reading All Data ..', 'Status');

grepoJson.towns(server).then((data) => { 
  logger.log(`${data.length} Towns`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.islands(server).then((data) => { 
  logger.log(`${data.length} Islands`, 'Success'); 
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.conquers(server).then((data) => { 
  logger.log(`${data.length} Conquers`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.players(server).then((data) => { 
  logger.log(`${data.length} Players`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.playersKills(server).then((data) => { 
  logger.log(`${data.length} Players Kills`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.playersKillsAttack(server).then((data) => { 
  logger.log(`${data.length} Players Kills (Attack)`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.playersKillsDefend(server).then((data) => {
  logger.log(`${data.length} Players Kills (Defense)`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.alliances(server).then((data) => { 
  logger.log(`${data.length} Alliances`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.alliancesKills(server).then((data) => { 
  logger.log(`${data.length} Alliances Kills`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.alliancesKillsAttack(server).then((data) => { 
  logger.log(`${data.length} Alliances Kills (Attack)`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });

grepoJson.alliancesKillsDefend(server).then((data) => { 
  logger.log(`${data.length} Alliances Kills (Defense)`, 'Success');
  
}).catch((err) => { logger.log(`Error Reading Data: ${err}`, 'Error') });