import Bowman from "../Bowman";

test("creating new Bowman", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Bowman", attack: 25, defence: 25,
    };
    const result = new Bowman({ name: "Ivan" });
    expect(result).toEqual(expectings);
});
