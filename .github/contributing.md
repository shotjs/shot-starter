# Contributing

We would love for you to contribute to **Shot** and help us make this even better! Start reading this document to see it is not difficult as you might have imagined.


## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Getting Started](#getting-started)
- [Style Guide](#style-guide)
- [Test](#test)
- [Code of Conduct](#code-of-conduct)
- [License](#license)


## Open an Issue

[Open an Issue](https://github.com/shotjs/generator/issues/new) to report any problems or improvements. When necessary, use [Codepen](http://codepen.io/) to show the problem. Be sure to include some description to explain the problem.


## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests and attach the link [Codepen](http://codepen.io/) along with the description.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

1. Fork the Github repo: `git clone https://github.com/shotjs/generator.git`
1. Create a new branch: `git checkout -b issuenumber-feature-name`
1. Commit your changes: `git commit -m 'issuenumber-feature-name'`
1. Push to the branch: `git push origin my-feature-name`
1. Submit a pull request!

*Note: For issues relating to the site, please use the [shotjs.github.io](https://github.com/shotjs/shotjs.github.io)*


## Getting Started

First install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center). Now run MongoDB with the command `mongod`, then install all the dependencies, run `npm install` from the project directory. Once you have the dependencies installed, run `npm start`.


## Style Guide

**Shot** uses the new features of the ECMA Script to give superpowers to JavaScript. Look at how the code is being maintained, we must always be consistent. We try to follow best practices as much as possible. In addition, here are some tips you should follow:

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches tons of bugs!
- **No semicolons** – [It's](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) [fine.](http://inimino.org/~inimino/blog/javascript_semicolons) [Really!](https://www.youtube.com/watch?v=gsfbh17Ax9I)
- Never start a line with (, [, or `
- **This is the only gotcha with omitting semicolons** – automatically checked for you!
- [More details](http://standardjs.com/rules.html#semicolons)
- Space after keywords if (condition) { ... }
- Space after function name function name (arg) { ... }
- **Always use === instead of ==** – but obj == null is allowed to check null || undefined.
- Always handle the node.js err function parameter
- **Always prefix browser globals with window** – except document and navigator are okay
- Prevents accidental use of poorly-named browser globals like open, length, event, and name.
- **And [more goodness](http://standardjs.com/rules.html#javascript-standard-style)** – give standard a try today!

*Note: This style guide was inspired by [JavaScript Standard Style](http://standardjs.com/). **Shot** uses an `.editorconfig` file, which most editors support, to enforce these coding standards.*


## Test

To test run `npm test`.


## Code of Conduct

Help us keep **Shot** open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).


## License

By contributing your code, you agree to license your contribution under the [MIT license](https://github.com/shotjs/generator#license).
