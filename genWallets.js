let ethWallet = require('ethereumjs-wallet')

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

for (let i = 0; i < 25; i++) {
  console.log(
    '0x' +
      ethWallet
        .generate()
        .getAddress()
        .toString('hex') +
      ',' +
      getRandomInt(1000)
  )
}
