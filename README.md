# Minicart

A simple React app that allows you to choose and compare a few different items, with the goal being to help you make a decision between them.

Creating this comparison chart is the behavior we’d like to test.

## Testplan
- [x] Refreshing page resets data
- [x] Hovering over product displays Compare/Remove button
- [x] Clicking Compare buttons adds product to comparison chart
- [x] Clicking Remove buttons removes product from comparison chart
- [x] Comparison chart is only displayed when it contains 2+ products
- [x] Comparison chart has no max number of products
- [x] Should be able to add/remove products infinite times
- [x] Comparison chart should never contain dupes
- [x] data in chart is correct (matches product display)

## Bugs
1. Clementine product div disappears when clicked thus making removal from comparison chart impossible
2. Clementine product displays chart but should require a 2nd product to do so
3. Console Error: "Error while trying to use the following icon from the Manifest: https://sheltered-tor-18362.herokuapp.com/favicon.ico"

## Run E2E Tests
_requires node v8+_
1. `npm i`
2. `npm test`