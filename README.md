## EMMHack 2016 Website

This site is built using the [Middleman](https://middlemanapp.com/) static website generator

### Programming languages

Ruby, HTML5, CSS, Javascript

### Dev Requirements

- Operating system
  - Any unix-like system (Linux, or macOS) [Recommended]
  - If working on windows, a bit of googling will help you setup a ruby dev environment on your computer
- Ruby 2.3.3 (Install using a Ruby version Manager [RVM](https://rvm.io/) or [rbenv](https://github.com/rbenv/rbenv))
- [Bundler](http://bundler.io/) - Install this after installing Ruby

Once you have ruby installed, clone this repository then go into the directory

```shell
$ git clone <replace-with-repository-url>
$ cd Website
```

Once in the website directory, install all the project dependencies

```shell
$ bundle install
```

To run the site in while in development, execute the following command

```shell
$ bundle exec middleman serve
```

You should get an output similar to the following in your terminal:

```shell
== The Middleman is loading
== LiveReload accepting connections from ws://192.168.0.101:35729
== View your site at "http://localhost:4567", "http://127.0.0.1:4567"
== Inspect your site configuration at "http://localhost:4567/__middleman", "http://127.0.0.1:4567/__middleman"
```

Visit `http://localhost:4567` from your browser.


### Deployment

In order to deploy this site, you first need to build it

```shell
$ bundle exec middleman build
```

This will generate the site's content in a `build` directory. You can upload the content of that directory (i.e: via `FTP`, `rsync`) to any server.

Alternatively, This site can also be hosted on [Github Pages](https://pages.github.com/) or on [Surge.sh](https://surge.sh)

The site is currently hosted via surge.sh.

### Author

Built by [Raoul DIFFOUO](https://github.com/diraulo)
