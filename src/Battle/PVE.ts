import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Character | Fighter, 
    private _rivals: (Monster | SimpleFighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    const battle = this._rivals.map((enemy) => {
      while (this._player.lifePoints > -1 && enemy.lifePoints > -1) {
        this.validateFirstAttack();
      }
      console.log(this._player.lifePoints, enemy.lifePoints);
      if (this._player.lifePoints > enemy.lifePoints) {
        console.log('Player 1 wins!');
        return 1;
      } 
      console.log('Player 2 wins!');
      return -1;
    });
    const resultBattle = this.verifyPveWin(battle);
    return resultBattle;
  }

  private validateFirstAttack(): void {
    const firstAttackDicePlayer1 = getRandomInt(1, 20);
    const firstAttackDicePlayer2 = getRandomInt(1, 20);
    if (firstAttackDicePlayer1 > firstAttackDicePlayer2) {
      this._rivals.forEach((enemy) => {
        this._player.attack(enemy);
        enemy.attack(this._player);
      });
    } else {
      this._rivals.forEach((enemy) => {
        enemy.attack(this._player);
        this._player.attack(enemy);
      });
    }
  }

  private verifyPveWin(battle: number[]): number {
    if (battle.find((singleFight) => singleFight === -1)) {
      console.log('Enemy legion wins!');
      return -1;
    } 
    console.log(`${this._player} wins!`);
    return 1;
  }
}