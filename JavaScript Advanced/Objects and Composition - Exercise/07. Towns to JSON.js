/*
function Json(towns)
{
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty,townName,lat,lng]=town.split(/\s*\|\s*);
        let townObj = {
            Town: townName,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}
*/
function towns(array = []) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
 
    let result = [];
 
    for (let i = 1; i < array.length; i++) {
        let arr = array[i].split("|");
        let name = arr[1].trim();
        let latitude = (+arr[2].trim()).toFixed(2);
        let longitude = (+arr[3].trim()).toFixed(2);
      
        let town = new Town(name, latitude, longitude);
 
        let townForJSON = {};
 
        townForJSON["Town"] = town.name;
        townForJSON["Latitude"] = town.latitude;
        townForJSON["Longitude"] = town.longitude;
 
        let objectToJSON = JSON.stringify(townForJSON, function (key, value) {
            if (key == "Latitude") {
                return Number(value);
            } else if (key == "Longitude") {
                return Number(value);
            } else {
                return value;
            }
        });
 
        result.push(objectToJSON);      
    }
 
    console.log("[" + result.join(",") + "]");
}