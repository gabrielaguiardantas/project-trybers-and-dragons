import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warriorInstancesCount = 0;
  constructor(name: string) {
    super(name);
    Warrior._warriorInstancesCount += 1;
  }

  get name() {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstancesCount;
  }
}