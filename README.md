# CardKit v2

## Version 2.0.0-alpha

### 2015 [Chris Hutchinson](http://www.github.com/chrishutchinson) for The [Times and Sunday Times](http://www.github.com/times)

CardKit v2 is flexible, SVG image / card creation tool, with simple configuration options, which is easy to extend.

![CardKit Usage](http://fat.gfycat.com/FoolhardyGaseousCockroach.gif)

CardKit is aimed at newsrooms, however has many potential uses that extend beyond that:

- Coupon and offer images
- Templated asset generation
- Video preview images (e.g. 16:9)
- Marketing and promotion
- Personal branding

_This is a rebuild of the current CardKit, available on [GitHub](http://www.github.com/times/cardkit) (forked from [voxmedia/meme](http://www.github.com/voxmedia/meme)), using Angular JS and SVG (rather than canvas)._

## Project origins

You can find out more about the origins of CardKit [here](https://medium.com/digital-times/how-we-used-an-open-source-meme-generator-to-promote-our-journalism-a0f963aa7465).

## Roadmap

See `ROADMAP.md`.

## To setup and run locally

- Clone this repo.
- Run `npm install` and `bower install`.
- Run `grunt serve` to run the application.
- See the `To configure themes` section below to set up themes

## To configure themes

- Rename `app/demo.themes.config.json` to `app/themes.config.json` to provide the demo themes
- You can edit `app/themes.config.json` to include your own theme configuration (@TODO: theme and config documentation)
- `app/themes.config.json` is not version controlled by default

## To build and deploy

Run `grunt build` to build the application into the `/dist` directory.

#### Push to `gh-pages`

If you want to use [GitHub Pages](https://pages.github.com/) to host your build of CardKit, follow this to push your `/dist` folder: https://gist.github.com/cobyism/4730490