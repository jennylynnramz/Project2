var queryUrl = "https://data.sfgov.org/resource/5cei-gny5.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(legendData) {
    console.log(legendData);
  
    var propertyData = legendData.features
    // Once we get a response, send the data.features object to the createFeatures function

    var neighborhoodList = [];
   
    
    for (var i = 0; i < propertyData.length; i++){
        // console.log(propertyData[i].properties.neighborhood)
    
        var neighborhood = propertyData[i].properties.neighborhood;
    
          neighborhoodList.push(neighborhood)
    
    } //end neighborhood for loop
      // console.log(neighborhoodList)
    
    var distinctList = [...new Set(neighborhoodList)]
    
    // console.log(distinctList)

    var evictionNeighborhood = [];
    

    for (var i = 0; i < propertyData.length; i++){
        for (var i = 0; i < propertyData.length; i++){

            if (propertyData[i].properties.breach === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: breach`)
              // console.log("Eviction for breach");
            }
            else if (propertyData[i].properties.capital_improvement === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: capital_improvement`) 
             // console.log("Eviction for capital_improvement");
            }
            else if (propertyData[i].properties.condo_conversion === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: condo_conversion`)
              // console.log("Eviction for condo_conversion");
            }
            else if (propertyData[i].properties.demolition === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: demolition`)
              // console.log("Eviction for demolition");
            }
            else if (propertyData[i].properties.development === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: development`)
              // console.log("Eviction for development");
            }
            else if (propertyData[i].properties.ellis_act_withdrawal === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: ellis_act_withdrawal`)
              // console.log("Eviction for ellis_act_withdrawal");
            }
            else if (propertyData[i].properties.failure_to_sign_renewal === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: failure_to_sign_renewal`)
              // console.log("Eviction for failure_to_sign_renewal");
            }
            else if (propertyData[i].properties.good_samaritan_ends === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: good_samaritan_ends`)
              // console.log("Eviction for good_samaritan_ends");
            }
            else if (propertyData[i].properties.illegal_use === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: illegal_use`)
              // console.log("Eviction for illegal_use");
            }
            else if (propertyData[i].properties.late_payments === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: late_payments`)
              // console.log("Eviction for late_payments");
            }
            else if (propertyData[i].properties.lead_remediation === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: lead_remediation`)
              // console.log("Eviction for lead_remediation");
            }
            else if (propertyData[i].properties.non_payment === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: non_payment`)
              // console.log("Eviction for non_payment");
            }
            else if (propertyData[i].properties.nuisance === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: nuisance`)
              // console.log("Eviction for nuisance");
            }
            else if (propertyData[i].properties.other_cause === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: other_cause`)
              // console.log("Eviction for other_cause");
            }
            else if (propertyData[i].properties.owner_move_in === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: owner_move_in`)
              // console.log("Eviction for owner_move_in");
            }
            else if (propertyData[i].properties.roommate_same_unit === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: roommate_same_unit`)
              // console.log("Eviction for roommate_same_unit");
            }
            else if (propertyData[i].properties.substantial_rehab === true) {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: substantial_rehab`)
              // console.log("Eviction for substantial_rehab");
            }
            else {
                evictionNeighborhood.push(`${propertyData[i].properties.neighborhood}: unapproved_subtenant`)
              // console.log("Eviction for unapproved_subtenant");
            }
          }
        // console.log(evictionNeighborhood)
    }
    
    ///condense list to just neighborhood, rational, and count
    var a = evictionNeighborhood;
    var condensedEvictionNeighborhood = { };
    for(var i = 0; i < a.length; ++i) {
        if(!condensedEvictionNeighborhood[a[i]])
        condensedEvictionNeighborhood[a[i]] = 0;
        ++condensedEvictionNeighborhood[a[i]];
    }
    console.log(condensedEvictionNeighborhood)





});

