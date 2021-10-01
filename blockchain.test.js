const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc;
  beforeEach(() => {
    bc = new Blockchain;
  })

  it('starts whith genesis block', () =>{
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('add new block', () => {
    const data = 'arquivo.pdf'
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
  })
})