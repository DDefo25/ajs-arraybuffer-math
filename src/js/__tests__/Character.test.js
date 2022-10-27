import Character from '../Character'

test.each([
    ['too short name', { name: 'I' }, new Error('Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10')],
    ['too long name', { name: 'IvanMacGuffin' }, new Error('Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10')],
    ['wrong type', { name: 'Ivan', type: 'Tank' }, new Error('Тип персонажа не соответствует существующим')],
])(
    ('test %s with %s'),
    (_, params, error) => {
        function createCharacter() {
            new Character(params);
        }
        expect(createCharacter).toThrow(error);
    }
)