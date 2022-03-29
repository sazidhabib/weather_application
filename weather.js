class Weather {
  constructor(city, state) {
    // this.apiKey = '99dfe35fcb7de1ee';
    this.apiKey = 'b1cd249b91a6402ab0e161033220803';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    // const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b1cd249b91a6402ab0e161033220803&q=${this.city}&aqi=no
    `);

    const responseData = await response.json();

    console.log("SKJDKASHDASD", responseData)

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}