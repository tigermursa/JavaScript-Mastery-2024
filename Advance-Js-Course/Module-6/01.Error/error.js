//creating class
class MyError extends Error {
  constructor(mesaage) {
    super(mesaage);
    this.name = "My Error";
  }
}

class DatabaseError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Database Error";
    this.message = " Database e ekta jhamila hoise ";
  }
}

