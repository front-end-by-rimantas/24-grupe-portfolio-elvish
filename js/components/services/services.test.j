import { services } from './services.js';
// import { Services } from './ServicesOop.js'

describe('data stuktura yra objektas', () => {
    test('data negali buti array', () => {
        expect(services([])).toBe('netinkamas data objektas');
    })
    test('objektas negali buti tuscias', () => {
        expect(services({})).toBe('netinkamas data objektas');
    })
})

describe('data.list duomenu validacija', () => {
    test('data.list turi but array', () => {
        expect(services({})).toBe('list turi buti array');
    })
})


