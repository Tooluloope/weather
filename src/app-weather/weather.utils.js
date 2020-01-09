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

