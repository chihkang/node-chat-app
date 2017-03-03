const expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    // store res in variable
    // assert from match
    // assert tet match
    // assert createdAt is number
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});
