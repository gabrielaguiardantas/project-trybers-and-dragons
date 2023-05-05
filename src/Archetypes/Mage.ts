import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _mageInstancesCount = 0;
  constructor(name: string) {
    super(name);
    Mage._mageInstancesCount += 1;
  }

  get name() {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstancesCount;
  }
}