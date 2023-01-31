import { Text } from './../src/js/text.js';

describe('Text', () => {

  test('parameters should read into obj properties', () => {
    const entry = new Text('tuesday','when our building code');
    expect(entry.title).toEqual('tuesday');
    expect(entry.body).toEqual('when our building code');
  });
});
