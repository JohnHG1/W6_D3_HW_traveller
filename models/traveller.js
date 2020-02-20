const Traveller = function(journeys) {
  this.journeys = journeys;
};

  Traveller.prototype.getJourneyStartLocations = function(){
    return this.journeys.map((journey) => {
     return journey.startLocation;
    });
  };

// Traveller.prototype.getJourneyStartLocations = function(){
  //   const results = this.journeys.map((journey) => {
  //     return journey.startLocation
  //   })
  //   return results
  // };
  // ## optional feedback code


  Traveller.prototype.getJourneyEndLocations = function (){
    return this.journeys.map((journey) => {
      return journey.endLocation;
    });
  };

  Traveller.prototype.getJourneyByTransport = function (transport) {
    return this.journeys.filter((journey) => {
      return journey.transport === transport;
    })
  };
// Traveller.prototype.getJourneyByTransport = function (transport) {
    //   return this.journeys.filter((journey) => {
    //     return transport === journey.transport;
    //   });
    // };
    // ## optional feedback code

  Traveller.prototype.getJourneysByTransport = function (transport){
    return this.journeys.filter((journey) => {
      return journey.transport === transport;
    })
  };

  Traveller.prototype.getJourneysByMinDistance = function (minDistance){
    return this.journeys.filter((journey) => {
      return journey.distance > minDistance;
    })
  };
// Traveller.prototype.getJourneysByMinDistance = function (minDistance){
      // return this.journeys.filter((journey) => {
  //     return min.distance > minDistance;
  //   });
  // };
  // ## optional feedback code



  Traveller.prototype.calculateTotalDistanceTravelled = function (){
    return this.journeys.reduce((totalDistance, journey) => {
      return totalDistance += journey.distance;
    }, 0);
  };
  // Traveller.prototype.calculateTotalDistanceTravelled = function (){
      //return this.journeys.reduce((total, journey) => {
      //    return total + journey.distance;
      //  }, 0)
      //);
      // ## optional feedback code



  Traveller.prototype.getUniqueModesOfTransport = function (){
    const transports = this.journeys.map((journey) => {
        return journey.transport;
      });
        return transports.filter((transport, index) => {
          return transports.indexOf(transport) === index;
          });
        };

  // Traveller.prototype.getUniqueModesOfTransport = function () {
  //   return this.journeys.map((journey) => {
  //     return journey.transport;
  //   })
  //     .filter((transport, index, array) => {
  //       return array.indexOf(transport) === index;
  //     });
  // };
  // ## optional feedback code


module.exports = Traveller;
