/////////EVICTION VISUALIZATIONS
var queryUrl = "https://data.sfgov.org/resource/5cei-gny5.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(legendData) {
  //dictionary to hold all wanted data 
    neighborhoodEvictionRationale = {}
    //for the length of legendData.features, add neighborhood names to the list
    for(var i=0;i<legendData.features.length;i++) {
      neighborhoodEvictionRationale[legendData.features[i].properties.neighborhood] = {}
    }
      //looping through each neighborhood name in neighborhoodEvictionRationale for all data below
      for (const neighborhoodName in neighborhoodEvictionRationale) {
      //creating dictionary to hold inner arrays
      neighborhoodEvictionCauseDict = {}
      // neighborhoodEvictionCauseDict = {"breach":10, "nuisance": 2}
        // looping though legendData.features.length...
        for(var i=0; i<legendData.features.length; i++) {
          //if the neighborhood name is NOT undefined AND matched the name we are looking at, continue
          if(legendData.features[i].properties.neighborhood != undefined && legendData.features[i].properties.neighborhood == neighborhoodName) {
            //looping through each individual item in the properties section..
            for (const propertieskey in legendData.features[i].properties) {
              //pushing the current properties section value inth the is_eviction_cause function..
              if(is_eviction_cause(propertieskey)) {
                //if the current propertieskey returns from the is_eviction_cause function with TRUE..
                if((legendData.features[i].properties[propertieskey] == true)) {
                  //if it returns true and also isn't already in the dictionary..
                  if(neighborhoodEvictionCauseDict[propertieskey] == undefined) {
                    //add it to the dictionary and set its initial value to 1
                    neighborhoodEvictionCauseDict[propertieskey] = 1
                  } else {
                   //if it IS in the dictionary already, add 1 to the counter
                    neighborhoodEvictionCauseDict[propertieskey]++
                  }
                }
              }
            }
          }
        }
        //push the eviction counters for each completed neighborhood to the overall dictionary
        neighborhoodEvictionRationale[neighborhoodName] = neighborhoodEvictionCauseDict
      }
      //print the beezy and hope everything is accurate and spelled correctly
  console.log(neighborhoodEvictionRationale)


//////dropdown BEGIN  

      ///Populates the dropdown with the neighborhood names
      var select = document.getElementById("neighborhood-select");
      for(key in neighborhoodEvictionRationale) {
        // console.log(key)
        select.options[select.options.length] = new Option(key);
      }

//////dropdown END




});// end of d3

//where we can begin to use the item selected in the dropdown
function optionChanged(){
  var e = document.getElementById("neighborhood-select");
  var result = e.options[e.selectedIndex].text;
  console.log(result) 
}



function is_eviction_cause(key) {
  //list of all possible eviction reasons, the function returns true if the current legendData.features[i].properties matches something in this list. Used to exclude extra information such as "eviction id", "zip code", etc
  if(["breach", "capital_improvement", "condo_conversion", "demolition", "development", "ellis_act_withdrawal", "failure_to_sign_renewal", "good_samaritan_ends", "illegal_use", "late_payments", "lead_remediation", "non_payment", "nuisance", "other_cause", "owner_move_in", "roommate_same_unit", "substantial_rehab", "unapproved_subtenant"].includes(key)) {
    return true
  }
  //if the properties isn't in the above list, return false so we can skip to the next one
  return false
}








/////////END EVICTION VISUALIZATIONS
