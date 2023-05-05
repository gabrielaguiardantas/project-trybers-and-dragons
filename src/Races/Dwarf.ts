import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _dwarfInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._dwarfInstancesCount += 1;
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
    return Dwarf._dwarfInstancesCount;
  }
}