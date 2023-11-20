// Using this function to communicate with the Star Wars API.
export function getAllStarships() {
    // Fetch' function to make a network request.
    // Here, asking for data from the Star Wars API, specifically the starships data.
    // The URL 'https://swapi.dev/api/starships/' is the address of the API where the starships data is stored.
    return fetch('https://swapi.dev/api/starships/')
      .then(res => res.json()) // The fetch request returns a promise. We use '.then' to handle the promise.
      
}