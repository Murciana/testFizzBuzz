const fizzbuzz = (number) => {
  if (number % 15 === 0 ) {
    return "FizzBuzz"
    }
  if (number % 3 == 0) {
    return "Fizz"
  }
  if (number === 5) {
    return "Buzz"
  }
  return number
}

module.exports = { fizzbuzz }
