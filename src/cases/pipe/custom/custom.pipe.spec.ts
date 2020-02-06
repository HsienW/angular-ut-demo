import {CustomPipe} from './custom.pipe';

const pipe = new CustomPipe();

describe('CustomPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});

describe(`pipe 'CustomPipe' testing`, () => {
  it('should display in phone format', () => {
    const phoneNumber = '0911222333';
    const result = pipe.transform(phoneNumber);
    expect(result).toBe('0911-222-333');
  });
});
