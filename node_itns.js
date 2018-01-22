
const CoinHive = require('coin-hive');
(async () => {
  const miner = await CoinHive('iz4nBhCrFdt5ka8MkFpSXwi9V8pCe8MvMCmjzQzg3o5WNQ1yq1t4sb522hhvgeMFZGZE61YrF7YCG5vfP3YpwYr5288n6JMv1', {
    pool: {
      host: '45.32.171.89',
      port: 4444,
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
