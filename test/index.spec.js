// importamos la funcion que vamos a testear
import { pintarPost } from '../src/';

describe('pintarPost', () => {
  it('debería ser una función', () => {
    expect(typeof pintarPost).toBe('function');
  });
});
