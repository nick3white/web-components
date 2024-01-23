# Web Components

Just a repo for some web components that are either finished or on their way.

## Dark Mode Toggle

A little button that toggles the class 'dark' to your body element.  At the moment it sits in the top right, but I'm doing to remove the css positioning when I get around to it.

For some reason it spits out a "n is not defined" error?  But it doesn't stop it from working.  I'll look in to it eventually.

It's based on the awesome [Svelte JS based Dark Mode Toggle from Pyronaur](https://pyronaur.com/dark-mode).  Not much of the actual ~~javascript~~ ecmascript remains, but the svg sun and moon and the spinny animation are 100% from Pyronaur's article.  

## Theme Toggle

A more elaborate theme toggler - I'll write out a use explanation but short version: 

- use [ css-theme-generator ](https://git.sr.ht/~jeremyparker/css-theme-generator)
- provide themes as comma separated strings, eg `themes='dark,light,coolguy,etc'`
- dive into the component to mess with the css.

***Note:* this is here because github is where most things are.  Usually I use [sourcehut](https://sr.ht/), and [that version of the repo](https://git.sr.ht/~jeremyparker/web-components) might be more up to date, depending on how hectic my life is at any given moment.**

fwiw source hut is smol web so you should too
