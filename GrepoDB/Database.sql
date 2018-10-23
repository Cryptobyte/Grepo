/*
 * MariaDB was specifically chosen for this project because it provides simple 
 * and easy to use versioning that is automatically handled in the database itself.
 * This one feature alone saves us a lot of time and effort during the development 
 * of this library.
 *
 * - Cryptobyte
 */

/* Create Database */
CREATE DATABASE Grepolis;

/* Towns Table */
CREATE TABLE Towns (
  id int(15) NOT NULL,
  playerId int(15) NOT NULL,
  name varchar(25) NOT NULL,
  islandX int(3) NOT NULL,
  islandY int(3) NOT NULL,
  numberOnIsland int(1) NOT NULL,
  points int(10) NOT NULL,
  PRIMARY KEY (id),
WITH SYSTEM VERSIONING;

/* Islands Table */
CREATE TABLE Islands (
  id int(15) NOT NULL,
  x int(3) NOT NULL,
  y int(3) NOT NULL,
  islandType int(3) NOT NULL,
  availableTowns int(2) NOT NULL,
  resourcePlus varchar(15) NOT NULL,
  resourceMinus varchar(15) NOT NULL,
  PRIMARY KEY (id),
WITH SYSTEM VERSIONING;

/* Conquers Table */
CREATE TABLE Conquers (
  townId int(15) NOT NULL,
  time TIMESTAMP NOT NULL,
  newPlayerId int(15) NOT NULL,
  oldPlayerId int(15) NOT NULL,
  newAllyId int(15) NOT NULL,
  oldAllyId int(15) NOT NULL,
  points int(5) NOT NULL,
  PRIMARY KEY (townId),
WITH SYSTEM VERSIONING;

/* Players Table */
CREATE TABLE Players (
  id int(15) NOT NULL,
  name varchar(50) NOT NULL,
  allianceId int(15) NOT NULL,
  points int(5) NOT NULL,
  rank int(10) NOT NULL,
  towns int(10) NOT NULL,
  PRIMARY KEY (id),
WITH SYSTEM VERSIONING;

/* PlayersKills Table */
CREATE TABLE PlayersKills (
  
WITH SYSTEM VERSIONING;

/* PlayersKillsAttack Table */
CREATE TABLE PlayersKillsAttack (
  
WITH SYSTEM VERSIONING;

/* PlayersKillsDefend Table */
CREATE TABLE PlayersKillsDefend (
  
WITH SYSTEM VERSIONING;

/* Alliances Table */
CREATE TABLE Alliances (
  
WITH SYSTEM VERSIONING;

/* AlliancesKills Table */
CREATE TABLE AlliancesKills (
  
WITH SYSTEM VERSIONING;

/* AlliancesKillsAttack Table */
CREATE TABLE AlliancesKillsAttack (
  
WITH SYSTEM VERSIONING;

/* AlliancesKillsDefend Table */
CREATE TABLE AlliancesKillsDefend (
  
WITH SYSTEM VERSIONING;