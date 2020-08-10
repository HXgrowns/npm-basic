import { transform } from '../src/romanizer'
import { iteratee } from 'lodash'

describe('romanizer', () => {
    fit('should get X when input 10', () => {
        const result = transform(10);
        expect(result).toEqual('X');
    })
})