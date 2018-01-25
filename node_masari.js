
const CoinHive = require('coin-hive');
(async () => {
  const miner = await CoinHive('5mBqGkYv5BeDVAPfwxs1ai4wxWGHr4zEharN1VLBkbUFZVxhbxGJUeGKhh9XALfAzZWDCsf7QvpCoB87Vm2Hfg6nCn75hxn', {
    pool: {
      host: 'masari.superpools.net',
      port: 3333,
      pass: 'x' // default 'x' if not provided
    },
	// threads: 2,
	// throttle: 0.05, // The fraction of time that threads should be idle
	devFee: 0,
	interval: 5000
  });
  await miner.start();
  miner.on('found', () => {
    var date = new Date();
    console.log("[" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "] Found!");
  });
  miner.on('accepted', () => {
    var date = new Date();
    console.log("[" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "] Accepted!");
  });
  miner.on('job', () => {
    var date = new Date();
    console.log("[" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "] New Job");
  });
  miner.on('update', data => {
    var date = new Date();
    console.log(
      "[" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "]" +
      ` H/S: ${data.hashesPerSecond}, Acc: ${data.acceptedHashes}`);
  });
})();
