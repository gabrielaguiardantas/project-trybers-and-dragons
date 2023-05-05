import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _rangerInstancesCount = 0;
  constructor(name: string) {
    super(name);
    Ranger._rangerInstancesCount += 1;
  }

  get name() {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstancesCount;
  }
}