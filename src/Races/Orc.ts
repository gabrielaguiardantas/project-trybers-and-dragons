import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _orcInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._orcInstancesCount += 1;
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
    return Orc._orcInstancesCount;
  }
}