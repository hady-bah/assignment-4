// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const randomizeButton = document.getElementById('randomize');
const img = document.getElementById('poster-image');
const title = document.getElementById('poster-title');
const quote = document.getElementById('poster-quote');


// Array of predefined poster objects
const posters = [
    {
      image: 'https://th.bing.com/th/id/R.00e2be11f47ddd20e467499a1763119b?rik=eF%2bGF3MeXsqvMw&pid=ImgRaw&r=0',
      title: 'Greek Proverb',
      quote: '"The divine gift does not come from a higher power, but from our own minds."',
    },
    {
      image: 'https://c1.staticflickr.com/1/196/465485642_6ffbf7e176.jpg',
      title: 'Greek Proverb',
      quote: '"Wait for the wisest of all counselors, time."',
    },
    {
      image: 'https://th.bing.com/th/id/R.64110e47489c308e4f5f4a4eeb2eaf75?rik=nef9%2fpPBIHX%2bXw&pid=ImgRaw&r=0',
      title: 'Greek Proverb',
      quote: 'All receive advice. Only the wise profit from it.',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button

  // TODO: Add an event listener to the randomizeButton that calls a function when clicked 
  // Add event listener to the randomizeButton
  randomizeButton.addEventListener('click', generateRandomPoster);

  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked

  
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    const randomIndex = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    img.src = posters[randomIndex].image;
    title.textContent = posters[randomIndex].title;
    quote.innerText = posters[randomIndex].quote;
    // TODO: Call the function to update the DOM with the values from the random poster object
    
  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
  
    // TODO: Retrieve the entered quote and author from the input fields
  
    // TODO: Create a custom poster object with the entered values
  
    // TODO: Call the function to update the DOM with the values from the custom poster object
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
  }