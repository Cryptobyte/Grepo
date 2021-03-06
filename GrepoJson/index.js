const request = require('request');
const resources = require('../Resources/Values');

/**
 * Reader module for reading csv data from 
 * the Grepolis API into JSON objects that 
 * can be parsed easier within the rest of 
 * the program
 * 
 * @name GrepoJson
 */
module.exports = {
  /**
   * Gets town data in JSON array from API
   * @name towns
   * @param server Server to get data from (ex. en6)
   */
  towns: (server) => {
    return new Promise(function(resolve, reject) {
      const opts = {
        method: 'GET', 
        uri: `http://${server}.grepolis.com/data/${resources.world.data.towns}`
      };
      
      request(opts, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          var towns = [];
          
          body.split('\n').forEach(function(line) {
            const record = line.split(",");
            const town = {
              id: record[0],
              playerId: record[1],
              name: record[2],
              islandX: record[3],
              islandY: record[4],
              numberOnIsland: record[5],
              points: record[6]
            };
            
            towns.push(town);
          });
          
          resolve(towns);
          
        } else {
          if (error) {
            reject(error);
            
          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets island data in JSON array from API
   * @name islands
   * @param server Server to get data from (ex. en6)
   */
  islands: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.islands}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var islands = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const island = {
              id: record[0],
              x: record[1],
              y: record[2],
              islandType: record[3],
              availableTowns: record[4],
              resourcePlus: record[5],
              resourceMinus: record[6]
            };

            islands.push(island);
          });

          resolve(islands);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets conquer data in JSON array from API
   * @name conquers
   * @param server Server to get data from (ex. en6)
   */
  conquers: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.conquers}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var conquers = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const conquer = {
              townId: record[0],
              time: record[1],
              newPlayerId: record[2],
              oldPlayerId: record[3],
              newAllyId: record[4],
              oldAllyId: record[5],
              points: record[6]
            };

            conquers.push(conquer);
          });

          resolve(conquers);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets player data in JSON array from API
   * @name players
   * @param server Server to get data from (ex. en6)
   */
  players: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.players.details}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var players = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const player = {
              id: record[0],
              name: record[1],
              allianceId: record[2],
              points: record[3],
              rank: record[4],
              towns: record[5]
            };

            players.push(player);
          });

          resolve(players);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets player kill data in JSON array from API
   * @name playersKills
   * @param server Server to get data from (ex. en6)
   */
  playersKills: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.players.kills.all}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets player kill (attacking) data in JSON array from API
   * @name playersKillsAttack
   * @param server Server to get data from (ex. en6)
   */
  playersKillsAttack: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.players.kills.attack}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets player kill (defending) data in JSON array from API
   * @name playersKillsDefend
   * @param server Server to get data from (ex. en6)
   */
  playersKillsDefend: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.players.kills.defend}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets alliance data in JSON array from API
   * @name alliances
   * @param server Server to get data from (ex. en6)
   */
  alliances: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.alliances.details}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var alliances = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const alliance = {
              id: record[0],
              name: record[1],
              points: record[2],
              towns: record[3],
              members: record[4],
              rank: record[5]
            };

            alliances.push(alliance);
          });

          resolve(alliances);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets alliance kill data in JSON array from API
   * @name alliancesKills
   * @param server Server to get data from (ex. en6)
   */
  alliancesKills: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.alliances.kills.all}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets alliance kill (attacking) data in JSON array from API
   * @name alliancesKillsAttack
   * @param server Server to get data from (ex. en6)
   */
  alliancesKillsAttack: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.alliances.kills.attack}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  },
  
  /**
   * Gets alliance kill (defending) data in JSON array from API
   * @name alliancesKillsDefend
   * @param server Server to get data from (ex. en6)
   */
  alliancesKillsDefend: (server) => {
    return new Promise(function (resolve, reject) {
      const opts = {
        method: 'GET',
        uri: `http://${server}.grepolis.com/data/${resources.world.data.alliances.kills.defend}`
      };

      request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var kills = [];

          body.split('\n').forEach(function (line) {
            const record = line.split(",");
            const kill = {
              rank: record[0],
              id: record[1],
              points: record[2]
            };

            kills.push(kill);
          });

          resolve(kills);

        } else {
          if (error) {
            reject(error);

          } else {
            reject('Invalid statusCode')
          }
        }
      });
    });
  }
};