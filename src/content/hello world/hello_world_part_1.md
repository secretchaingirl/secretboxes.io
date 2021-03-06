---
title: Launch Developer Blockchain 
description: The first thing you’ll need to do to start developing secret contracts in your local environment is install and launch a Secret Network blockchain.
box: {
    createdAt: 2022-05-01,
    title: Hello World,
    description: "Use this tutorial to learn about launching a local Secret blockchain, modifying the secret contract, runing unit tests, and viewing debug messages in the node log.", 
    prelude: A fun way for developers to quickly learn about working with secret contracts.,
    difficulty: Beginner,
    image: /illustrations/hello_world_illustration.svg,
    gitpod: https://gitpod.io/#https://github.com/secretchaingirl/secret-hello-world-box-vuejs/tree/main,
    lottie: https://assets5.lottiefiles.com/private_files/lf30_0vbtxqrd.json
}
index: 1
versions: ['Linux', 'Windows', 'Mac OS']
---
### Table of Contents
1. [Setup Your Environment](#setup-your-environment)
2. [Query the latest block](#query-the-latest-block)
3. [Use the CLI to Interact with the Network](#query-the-latest-block)

<div id="content">

This tutorial is for developers to get started with development on the Secret Network. The local blockchain runs in a docker container and simulates the Intel SGX (TEE) that is a requirement for the Holodeck testnet and mainnet.

It's super easy and quick, once you have `docker` installed. Just a few commands!

## Setup Your Environment

- Install [Docker](https://docs.docker.com/get-docker/) for your environment (Mac, Windows, Linux).

<!-- <MarkdownVersionSelect client:visible versions={frontmatter.versions}></MarkdownVersionSelect> -->

<div id="linux" class="version">

In a terminal window start the Secret Network by running the docker container named secretdev:

<!-- <MarkdownCodeSnippet> -->
```
docker run -it --rm \
  -p 26657:26657 -p 26656:26656 -p 1337:1337 \
  --name secretdev enigmampc/secret-network-sw-dev
```
<!-- </MarkdownCodeSnippet> -->

<mark>Note: To stop the secretdev blockchain enter `ctrl + c`</mark>

Your local blockchain starts with a set of keys or accounts, named `a,` `b,` `c,` and `d.`

<!-- <MarkdownImage 
  client:visible
  alt="Image of Secret testnet startup"
  image="/boxes/hello world/secretdev-startup-1.jpg"></MarkdownImage> -->

After initializing and validating the genesis file you can see the network starting and blocks getting committed. Included in the startup is an HTTP REST server (also known as the LCD or Light Client Daemon) that can be accessed via `localhost` on port 1337

## Query the latest block

![Secret Blockchain Instance](/boxes/hello%20world/secretdev-startup-2.jpg)

Use the REST API to view the latest block information.

```
curl http://localhost:1337/blocks/latest
```

![Secret Blockchain Instance](/boxes/hello%20world/rest-blocks.jpg)

## Use the CLI to Interact with the Network

In a separate terminal window connect to the container in interactive mode, executing the Bash shell.

```sh
docker exec -it secretdev /bin/bash
```

Query the list of keys using secretcli:

```
secretcli keys list
```

<mark>__Note:__ secretcli is configured to use the test keyring backend which makes it easier for development and testing (e.g. no password required).</mark>

![Secret Blockchain Instance](/boxes/hello%20world/secretdev-keys.jpg)

Use exit to `quit` your interactive Docker session.

</div>
</div>