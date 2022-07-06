export class NPC {
    private hp: number = 100;

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

    public getHurt(damage: number): number {
        if (damage > this.hp)
            this.hp = 0;
        else
            this.hp -= damage;

        console.log(`${this.name} took ${damage} damage`);

        return this.hp;
    }
}