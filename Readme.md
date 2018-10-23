## Grepo
This is a Grepolis data framework written in Javascript for NodeJS. The idea behind this framework is to provide a useful starting point for handling Grepolis data from the provided data sheets as well as some example tools developed with the framework. This framework is under active development and really needs contributions to world data (see Help Wanted section) since there are so many worlds and servers each with their own data that needs to be written by hand into this framework.

### Help Wanted
Grepolis is an ongoing game that provides little data on it's servers and worlds to API endpoints that can be consumed by a program like this one. The reality is that the easiest way to handle this limitation is to enter the data by hand into the nessicary parts of the program. Grepo is built to handle changes to [resource files](Resources/) without modification of the source code. This gives the ability for anyone (even without programming knowledge) to contribute to these files. Servers and their worlds have information such as world name, speed, etc. that is all kept inside [this file](Resources/Servers.json) to contribute to this, take a look at the data already there and match the layout of that data with the data you are entering. Keep in mind that this is **structured data** so the structure of the data in the file needs to stay the same. I will do my best to fix up any data that is improperly entered however I am still in the process of developing and documenting the toolkit itself so pull requests may not get answered right away.

### Project Structure
Grepo is designed to be highly modular so that anyone can use whatever parts they need without having to use the entire framework. This allows other developers to build off of the previous work much more easily. There are several submodules in the project (some depend on others).

- [Resources](Resources/) - Where static data is kept
- [GrepoJson](GrepoJson/index.js) - Submodule for reading Grepolis csv data into JSON objects
- [GrepoDB](GrepoDB/index.js) [Depends on `GrepoJson`] - Submodule for managing a [MariaDB](https://mariadb.com/) instance with Grepolis data (see Why MariaDB?)


### Why MariaDB?
I chose MariaDB as the database application for Grepo because it has [really simple internal system versioning for tables](https://mariadb.com/kb/en/library/system-versioned-tables/) which is very important since Grepolis data evolves quickly over time. Instead of making an inneficient versioning system we can use MariaDB's internal versioning system for maximum performance, compatability and superior ease of use. You can adapt this information and create your own database adapter within GrepoDB if you are interested in using it another way, or simply don't use the `GrepoDB` submodule and write your own database adapter for the information.