## Grepo
This is a Grepolis data framework written in Javascript for NodeJS. The idea behind this framework is to provide a useful starting point for handling Grepolis data from the provided data sheets as well as some example tools developed with the framework. This framework is under active development and really needs contributions to world data (see [Help Wanted](https://github.com/Cryptobyte/Grepo#help-wanted) section) since there are so many worlds and servers each with their own data that needs to be written by hand into this framework.

---

### Help Wanted
Grepolis is an ongoing game that provides little data on it's servers and worlds to API endpoints that can be consumed by a program like this one. The reality is that the easiest way to handle this limitation is to enter the data by hand into the nessicary parts of the program. Grepo is built to handle changes to [resource files](Resources/) without modification of the source code. This gives the ability for anyone (even without programming knowledge) to contribute to these files. Servers and their worlds have information such as world name, speed, etc. that is all kept inside [this file](Resources/Servers.json) to contribute to this, take a look at the data already there and match the layout of that data with the data you are entering. Keep in mind that this is **structured data** so the structure of the data in the file needs to stay the same. I will do my best to fix up any data that is improperly entered however I am still in the process of developing and documenting the toolkit itself so pull requests may not get answered right away.

An example of world data:
```
"110": {                         // world id number
  "name": "Leontini",            // world name
  "speed": 3,                    // world speed
  "unitspeed": 4,                // world unit speed
  "tradespeed": 4,               // world trade speed
  "modifiedspeed": false,        // if speed is modified by spy/trade
  "alliancecap": 60,             // cap of alliance members
  "beginnersprotection": 7,      // time of beginners protection (in days)
  "morale": true,                // if morale is active
  "system": "Revolt",            // Revolt or Conquest
  "foundationTime": 12,          // Amount of time it takes to found a city (should be the same across all worlds)
  "endgame": "Domination"        // Type of endgame, to win the world
}
```

You can get these values from the Grepolis forums. A good topic to look for in any world and language combination is the **Pre-World Discussion Thread** like [the one for en110](https://en.forum.grepolis.com/index.php?threads/pre-world-leontini-discussion-thread.61896/) because it lists all of these values.

---

### Project Structure
Grepo is designed to be highly modular so that anyone can use whatever parts they need without having to use the entire framework. This allows other developers to build off of the previous work much more easily. There are several submodules in the project (some depend on others).

- [Resources](Resources/) - Where static data is kept
- [GrepoJson](GrepoJson/index.js) - Submodule for reading Grepolis csv data into JSON objects
- [GrepoDB](GrepoDB/index.js) [Depends on `GrepoJson`] - Submodule for managing a [MariaDB](https://mariadb.com/) instance with Grepolis data (see [Why MariaDB?](https://github.com/Cryptobyte/Grepo#why-mariadb))

---

### Why MariaDB?
I chose MariaDB as the database application for Grepo because it has [really simple internal system versioning for tables](https://mariadb.com/kb/en/library/system-versioned-tables/) which is very important since Grepolis data evolves quickly over time. Instead of making an inneficient versioning system we can use MariaDB's internal versioning system for maximum performance, compatability and superior ease of use. You can adapt this information and create your own database adapter within GrepoDB if you are interested in using it another way, or simply don't use the `GrepoDB` submodule and write your own database adapter for the information.