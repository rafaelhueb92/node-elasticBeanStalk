const service = require("../service");
const { expect } = require("chai");

describe("Testing services", () => {
  it("Testing Get Ip", async () => {
    const ip = await service.myIp();
    expect(ip).not.to.be.undefined;
  });
});
