# Bowling Game in TypeScript

This is a simple implementation of a Bowling Game in TypeScript, along with unit tests, following the principles of
Test-Driven Development (TDD).

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installing

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bowling-game.git
   cd bowling-game

2. Install project dependencies:

   ```bash
   npm install
   ```

## Usage

To use the Bowling Game, you can create an instance of the BowlingGame class, roll the balls, and then calculate the
score. Here's an example of how to use it:

```bash
import { BowlingGame } from './src/bowling';

const game = new BowlingGame();

// Roll the balls
game.roll(3);
game.roll(5);
// ... continue rolling ...

// Calculate and display the score
const finalScore = game.score();
console.log(`Final Score: ${finalScore}`);
```

## Testing

Unit tests for the Bowling Game are written using Jest. You can run the tests with the following command:

   ```bash
   npm test
   ```

The test suite covers various game scenarios, including gutter games, strikes, spares, and a perfect game.
