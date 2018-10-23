/**
 * This module is responsible for turning 
 * data into BBCode to paste into any place 
 * in the game
 * 
 * @name BBCode
 */
module.exports = {
  /**
   * Returns a town BBCode
   * 
   * @name town
   * @param townId - The ID of the town to return as BBCode string
   */
  town: (townId) => {
    return `[town]${townId}[/town]`;
  },
  
  /**
   * Returns a player BBCode
   * 
   * @name player
   * @param playerName - The name of the player to return as BBCode string
   */
  player: (playerName) => {
    return `[player]${playerName}[/player]`;
  }
};