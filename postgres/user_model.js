const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "orange",
  port: 5432
});

const getUsers = () => {
  return new Promise(function(resolve, reject) {
    pool.query(
      "SELECT * FROM users ORDER BY fullName ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(result.rows);
      }
    );
  });
};

const createUser = body => {
  return new Promise(function(resolve, reject) {
    const {
      fullName,
      email,
      password,
      country,
      mailingAddress,
      contactNumber,
      courses,
      paymentInfo
    } = body;
    pool.query(
      "INSERT INTO users (fullName, email, password, country, mailingAddress, contactNumber, courses, paymentInfo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        fullName,
        email,
        password,
        country,
        mailingAddress,
        contactNumber,
        courses,
        paymentInfo
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new user has been created: ${results.rows[0]}`);
      }
    );
  });
};

module.exports = {
  getUsers,
  createUser
};
