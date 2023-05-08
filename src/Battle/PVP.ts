import Character from '../Character';
import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter, 
    private _player2: Character | Fighter,
  ) {
    super(_player1);
    super.fight();
  }

  fight(): number {
    while (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
      this.validateFirstAttack();
    }
    console.log(this._player1.lifePoints, this._player2.lifePoints);
    if (this._player1.lifePoints > this._player2.lifePoints) {
      console.log('Player 1 wins!');
      return 1;
    } 
    console.log('Player 2 wins!');
    return -1;
  }

  private validateFirstAttack(): void {
    const firstAttackDicePlayer1 = getRandomInt(1, 20);
    const firstAttackDicePlayer2 = getRandomInt(1, 20);
    if (firstAttackDicePlayer1 > firstAttackDicePlayer2) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    } else {
      this._player2.attack(this._player1);
      this._player1.attack(this._player2);
    }
  }
}