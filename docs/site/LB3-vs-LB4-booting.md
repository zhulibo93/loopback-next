---
lang: en
title: 'Differences in LoopBack 3 and LoopBack 4 booting process'
keywords: LoopBack 4.0, LoopBack 4, LoopBack 3.0, LoopBack 3
sidebar: lb4_sidebar
permalink: /doc/en/lb4/LB3-vs-LB4-booting.html
---

## Differences between LoopBack 3 and LoopBack 4 booting process

The booting process in LoopBack 3 is handled by
[loopback-boot](https://github.com/strongloop/loopback-boot),
which performs the following tasks:

### 1. Configuration of application settings

It determines the execution environment, the application host, the application
port, the application root directory and other artifact directories.

Then it configures the LoopBack Application object from the `config.json` file
in the application root directory.

### 2. Configuration of datasources

Datasources are determined from application options or datasource files. They
are then attached to the LoopBack Application object.

### 3. Definition of models

Models are determined from application options or model files,
[mixins](https://loopback.io/doc/en/lb3/Defining-mixins.html) are applied,
and they are attached to their respective datasources. They are then attached
to the LoopBack Application object.

### 4. Setting up middleware

Middleware from the middleware configuration file are resolved and added to the
LoopBack 3 middleware chain.

### 5. Setting up components

Components from the component configuration file are resolved and are added to
the LoopBack 3 middleware chain.

### 6. Running boot scripts

Boot scripts are resolved from the `server/boot` directory and run.

In LoopBack 4, the booting tasks are shared between the
[@loppback/boot/application](./apidocs/apidocs.core.application.html) class.
and the
[@loppback/boot](./apidocs/apidocs.boot.html) package.

- Explain how application configuration is applied in LB4
- Explain how datasources are added in LB4
- Explain how models are added in LB4
- Explain how middleware are added in LB4
- Explain how components are added in LB4
