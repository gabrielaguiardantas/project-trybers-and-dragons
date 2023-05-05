import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromance extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromanceInstancesCount = 0;
  constructor(name: string) {
    super(name);
    Necromance._necromanceInstancesCount += 1;
  }

  get name() {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromance._necromanceInstancesCount;
  }
}