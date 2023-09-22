import { BowlingGame } from '../src/bowling';

describe('BowlingGame', () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    /*it('Can create a newGame', () => {
        game = new BowlingGame();
        // game = undefined;
        expect(game).toBeDefined();
    });*/

    /*it('Can roll', () => {
        game.roll(0);
    });*/

    it('should score 0 for a gutter game', () => {
        rollMany(20, 0);
        expect(game.score()).toBe(0);
    });

    it('should score 20 for all ones', () => {
        rollMany(20, 1);
        expect(game.score()).toBe(20);
    });

    it('should correctly score a spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toBe(16);
    });

    it('should correctly score a strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toBe(24);
    });

    it('should score a perfect game (300)', () => {
        rollMany(12, 10);
        expect(game.score()).toBe(300);
    });

    const rollMany = (n: number, pins: number) => {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    }

    const rollStrike = () => {
        game.roll(10);
    }
});
