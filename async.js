

  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData()



 
  //Async/Await:

//async functions return a promise.
//await pauses the execution of the async function and waits for the promise to resolve or reject.
//Provides a cleaner and more readable way to work with promises.