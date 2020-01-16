export const getMode = () => {
    const isReturningUser = "dark" in localStorage;
    const userPreference = getUserPreference()
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    
    
    // if user has a default system reading mode
    if(userPreference===true || userPreference===false ) {
      
      return userPreference;
    }
     // if mode was saved --> dark / light
     else if (isReturningUser ) {
      return savedMode;
    } 
    return false
  }

const getUserPreference = () => {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return
  }

// Get the correct weather icon to use based on the ID gotten from the API response
export const get_WeatherIcon = (icons, iconID)=> {
    switch (true) {
      case iconID >= 200 && iconID < 232:
        return icons.Thunderstorm
      case iconID >= 300 && iconID <= 321:
        return icons.Drizzle
      case iconID >= 500 && iconID <= 521:
        return icons.Rain
      case iconID >= 600 && iconID <= 622:
        return icons.Snow
      case iconID >= 701 && iconID <= 781:
        return icons.Atmosphere
      case iconID === 800:
        return icons.Clear
      case iconID >= 801 && iconID <= 804:
        return icons.Clouds
      default:
        return icons.Clouds
    }
  }

  // Different weather icons for the project
   export const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };
