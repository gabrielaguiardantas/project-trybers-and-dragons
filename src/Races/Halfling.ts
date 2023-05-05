import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _halflingInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._halflingInstancesCount += 1;
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
    return Halfling._halflingInstancesCount;
  }
}