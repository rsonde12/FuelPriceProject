// Requiring module
const assert = require('assert');
const Profile = require('../models/clientprofile.js');
const Registration = require('../models/registration.js');
const Fuel = require('../models/fuel.js'); 
const { response } = require('express');

  
// We can group similar tests inside a describe block
describe("Fuel Tests", () => {
  before(() => {
  });

  after(() => {
  });
      
  describe( "User Tests", () => {
      it("Check User username", async () => {
          Profile.create({username: 'johndoe', name: 'John Doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
              expect(response.username).equal('johndoe');
              done();
          })
      });

      it("Check User name", async () => {
          Profile.create({username: 'johndoe', name: 'John Doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
              expect(response.name).equal('John Doe');
              done();
          })
      });

      it("Check User address ", async () => {
          Profile.create({username: 'johndoe', name: 'john doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
              expect(response.address).equal('11234 windycity drive');
              done();
          })
      });

      it("Check User city", async () => {
          Profile.create({username: 'johndoe', name: 'john doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
              expect(response.city).equal('Houston');
              done();
          })
      });

      it("Check User state", async () => {
          Profile.create({username: 'johndoe', name: 'john doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
              expect(response.state).equal('Tx');
              done();
          })
      });

      it("Check User zipcode", async () => {
        Profile.create({username: 'johndoe', name: 'john doe', address: '11234 windycity drive', address2: '', city: 'Houston', state: 'Tx', zipcode: '77077'}).then((response) => {
            expect(response.zipcode).equal('77077');
            done();
        })
      });

  });

});




