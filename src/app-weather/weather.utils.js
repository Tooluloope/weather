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
        this.setState({ icon: icons.Thunderstorm });
        break;
      case iconID >= 300 && iconID <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case iconID >= 500 && iconID <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case iconID >= 600 && iconID <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case iconID >= 701 && iconID <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case iconID === 800:
        this.setState({ icon: icons.Clear });
        break;
      case iconID >= 801 && iconID <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  // Different weather icons for the project
  this.weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };
