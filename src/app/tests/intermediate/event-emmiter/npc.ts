import { EventEmitter } from "@angular/core";

export class NPC {
    private hp: number = 100;
    public hpChanged = new EventEmitter<number>();

    constructor(public name: string) {
        console.log(`NPC ${name} created`);
        this.hp = 100;
    }

    public setHP(value: number): void {
        this.hp = value;
    }

    public getHP(): number {
        return this.hp;
    }

    public getHurt(damage: number) {
        if (damage > this.hp)
            this.hp = 0;
        else
            this.hp -= damage;

        console.log(`${this.name} took ${damage} damage`);

        this.hpChanged.emit(this.hp);
    }
}