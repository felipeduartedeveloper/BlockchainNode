const Block = require('./block.js')
const block = new Block('7657','5462384462348er6f4', '6523R46214ER641268D4', '100' );
console.log(block.toString());
console.log(Block.genesis().toString());

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')

console.log(primeiroBloco.toString())