//we can switch async model of the the report testing


const assert = require('assert');
const Profile = require('../models/clientprofile.js');
const { response } = require('express');


describe("Fuel Tests", () => {
  beforeEach(async () => {
    //async()
    await Profile.create({username: 'johndoe', name: 'John Doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'});
  });

  describe( "User Tests", () => {
      it("Check User username", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.username).equal('RainWilson');
      });

      it("Check User name", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.name).equal('Rain Wilson');
      });

      it("Check User address ", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.address).equal('43 Apple Canyon Dr.');
      });

      it("Check User city", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.city).equal('Houston');
      });

      it("Check User state", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.state).equal('TX');
      });

      it("Check User zipcode", async () => {
          const profile = await Profile.findOne({username: 'RainWilson'});
          expect(profile.zipcode).equal('77124');
      });
  });
});
