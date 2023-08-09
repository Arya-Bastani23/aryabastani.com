## `gatsby-plugin-image`

Biggest one is moving to the non-deprecated image package, you should read more about it [here](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/). This is only used for images that are not written in the markdown body link on cards, homepages, etc.

## `gatsby-node`

Updated gatsby node to have the reading time field generated and createPages actually works now.

## `wrapPageElement` and `wrapRootElement`

Two really helpful APIs where basically whatever you wrap in them will wrpa a page element or the root element. I moved all your layouts into one wrapPageElement.

`gatsby-ssr` and `gatsby-browser` both use these APIs so I wrote these as separate files so they update together.

## `src/fragments.js`

Started some example fragments for you to use, `...SiteMetada` and `...PostElements` are both available now.

## `package.json` and `gatsby-config.js`

You had some weird mixups so this is clean now. Try not to add packages from that older series of videos as many of them are deprecated now.

## `gitignore` and `.prettierc`

Code formatting setup on save with vs code settings as well as prettier (make sure to install in VS code extensions, it's already been recommended for this project). git ignore now won't move all your node modules and some other random folders so push/pull should be nice and fast again.

## `yarn`

Changed you to yarn instead of npm, just `brew install yarn` and use `yarn add` instead of `npm install` but they're quite similar otherwise but yarn is faster and it's dependency resolving is smarter.

Enjoy!
