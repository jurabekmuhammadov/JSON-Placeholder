class ErrorResponse extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function getData(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.timeout = 10000;

    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let data = JSON.parse(xhr.response);
        resolve(data);
      } else if (xhr.readyState === 4) {
        let err = new ErrorResponse(xhr.status, "Invalid response");
        reject(err);
      }
    };

    xhr.open("GET", url);

    xhr.send();
  });
}
