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

    describe("Registration Tests", () => {
        
        it("Check username", async () => {
                Registration.create({username: 'johndoe', password: 'apple123', email: 'ssanz@uh.edu'}).then((response) => {
                expect(response.username).equal('johndoe');
                done();
            })
        });
    
        it("Check password", async () => {
            Registration.create({username: 'johndoe', password: 'apple123', email: 'ssanz@uh.edu'}).then((response) => {
                expect(response.password).equal('apple123');
                done();
            })
        });

        it("Check email", async () => {
            Registration.create({username: 'johndoe', password: 'apple123', email: 'ssanz@uh.edu'}).then((response) => {
                expect(response.email).equal('ssanz@uh.edu');
                done();
            })
        });
    });

    describe("Fuel Tests", () => {
        
        it("Check username", async () => {
            var Ndate = Date.now();
                Fuel.create({username: 'johndoe', gallon: '5', date: Ndate, price: '10', total: '50'}).then((response) => {
                expect(response.username).equal('johndoe');
                done();
            })
        });
    
        it("Check gallon", async () => {
            var Ndate = Date.now();
                Fuel.create({username: 'johndoe', gallon: '5', date: Ndate, price: '10', total: '50'}).then((response) => {
                expect(response.gallon).equal('5');
                done();
            })
        });

        it("Check date", async () => {
            var Ndate = Date.now();
                Fuel.create({username: 'johndoe', gallon: '5', date: Ndate, price: '10', total: '50'}).then((response) => {
                expect(response.date).equal(Ndate);
                done();
            })
        });

        it("Check price", async () => {
            var Ndate = Date.now();
                Fuel.create({username: 'johndoe', gallon: '5', date: Ndate, price: '10', total: '50'}).then((response) => {
                expect(response.price).equal('10');
                done();
            })
        });

        it("Check total", async () => {
            var Ndate = Date.now();
                Fuel.create({username: 'johndoe', gallon: '5', date: Ndate, price: '10', total: '50'}).then((response) => {
                expect(response.total).equal('50');
                done();
            })
        });

    });

});
