export class BowlingGame {
    private rolls: number[] = [];

    /**
     * Records the number of pins knocked down in a roll.
     * @param pins - The number of pins knocked down in the roll.
     */
    roll(pins: number) {
        this.rolls.push(pins);
    }

    /**
     * Calculates the total score for the game.
     * @returns The total score for the game.
     */
    score() {
        let score = 0;
        let frameIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                score += 10 + this.strikeBonus(frameIndex);
                frameIndex++;
            } else if (this.isSpare(frameIndex)) {
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                score += this.frameScore(frameIndex);
                frameIndex += 2;
            }
        }

        // return -1;
        return score;
    }

    private isStrike(frameIndex: number) {
        return this.rolls[frameIndex] === 10;
    }

    private isSpare(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }

    private strikeBonus(frameIndex: number) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    private spareBonus(frameIndex: number) {
        return this.rolls[frameIndex + 2];
    }

    private frameScore(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
}
