exports.myIp = () =>
  new Promise((resolve, reject) =>
    require("dns").lookup(require("os").hostname(), function (err, add) {
      if (err) throw reject(err);
      return resolve(add);
    })
  );
