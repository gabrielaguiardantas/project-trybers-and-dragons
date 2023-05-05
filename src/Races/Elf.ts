import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _elfInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._elfInstancesCount += 1;
  }

  get name() {
    return super.name;
  }

  get dexterity() {
    return super.dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._elfInstancesCount;
  }
}