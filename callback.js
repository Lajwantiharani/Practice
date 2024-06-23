function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: 'Sample Data' };
      callback(null, data);
    }, 1000);
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error('Fetch error:', error);
    } else {
      console.log(data);
    }
  });
//CallBack
  //Functions passed as arguments and executed after some operation.
//Can lead to "callback hell" when dealing with multiple asynchronous operations.
//Traditional way of handling asynchronous operations before promises and async/await were introduced.