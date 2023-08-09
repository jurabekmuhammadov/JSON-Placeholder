let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data");
  } else {
    reject("Error");
  }
});
