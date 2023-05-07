import Character from '../Character';
import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Character | Fighter, 
    private player2: Character | Fighter,
  ) {
    super(player1);
    super.fight();
  }

  fight(): number {
    while (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.validateFirstAttack();
    }
    console.log(this.player1.lifePoints, this.player2.lifePoints);
    if (this.player1.lifePoints > this.player2.lifePoints) {
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
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    } else {
      this.player2.attack(this.player1);
      this.player1.attack(this.player2);
    }
  }
}