# CardKit v2

## Version 2.0.0-alpha

### 2015 [Chris Hutchinson](http://www.github.com/chrishutchinson) for The [Times and Sunday Times](http://www.github.com/times)

CardKit (v2) is flexible, SVG image / card creation tool, with simple configuration options, which is easy to extend.

This is a rebuild of the current CardKit, available on [GitHub](http://www.github.com/times/cardkit) (forked from [voxmedia/meme](http://www.github.com/voxmedia/meme)), using Angular JS and SVG (rather than canvas).

## Run

- Clone this repo.
- Run `npm install` and `bower install`.
- Run `grunt serve` to run the application.
- See the `Themes` section below to set up themes

## Themes

- Rename `app/demo.themes.config.json` to `app/themes.config.json` to provide the demo themes
- You can edit `app/themes.config.json` to include your own theme configuration (@TODO: theme and config documentation)
- `app/themes.config.json` is not version controlled by default

## Build

- Run `grunt build` to build the application into the `/dist` directory.

## Push to `gh-pages`

Use this: https://gist.github.com/cobyism/4730490