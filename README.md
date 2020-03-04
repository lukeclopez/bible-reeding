## About

Objectives:

1. Demonstrate usage of...
   - TypeScript
   - Redux
   - Unit and integration tests with `jest`
   - React Hooks
2. Count the verses between two given points in the Bible

All counts include the starting and ending verses, meaning that if you start at `Genesis 1:1` and end at `Genesis 1:1`, one verse would be counted.

The name is an extremely lame pun, as reeds were used to measure things in Bible times.

I didn't test components as just about all of them are composed from `rsuitejs` components.

## Setup Instructions

1. Clone the project.
2. From inside the project's directory, run `yarn` to install all dependencies.
3. Run `yarn start` and visit [http://localhost:3000](http://localhost:3000)

To test, run `yarn test`. To test unit tests specifically, run `yarn test -t="unit"` The same can be done for integration tests.
