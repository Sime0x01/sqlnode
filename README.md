<h1 align="center"> SQLNode<h1>
<h4 align="center">Connecting easily your API with SQL database.</h4>

<p align="center">
    <a href="https://github.com/xiaoruqinzhe/sqlnode/commits/main">
    <img src="https://img.shields.io/github/last-commit/xiaoruqinzhe/sqlnode" alt="Github Last Commit">
</p>

<p align="center">
    <a href="#about">About</a> •
    <a href="#installation">Installation</a>
    <a href="#license">License</a>
</p>

---

## About

<table>
<tr>
<td>

**SQLNode** is a shortly example of how work with sequelize, sequelize-cli, express and nodemon on API connected with PostresSQL Database.

</table>
</tr>
</td>

## Installation
#### Donwloading and isntalling steps:
* **[Git clone](https://github.com/xiaoruqinzhe/sqlnode.git)** the latest version.
* **Go** to de path `sqlnode/`.
* **Build & start** the Docker container with docker-compose using the **Yaml** file.
    * **Configure** your Postgres environment, with User, Password and Database name. Or use **Default** configuration.
* **Install** the packages: Nodemon, Sequelize and Sequelize-CLI, PG and PG-Hstore, and Express.
* **Execute** the migrations, with: `yarn sequelize db:migrate`
* **Start** the application, with: `yarn dev`

## License
[![License: GPL v2]](https://github.com/xiaoruqinzhe/sqlnode/blob/main/LICENSE)