import {CustomPipe} from './custom.pipe';

describe('CustomPipe', () => {
  const pipe = new CustomPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display in phone format', () => {
    const phoneNumber = '0911222333';
    const result = pipe.transform(phoneNumber);
    expect(result).toBe('0911-222-333');
  });

});
