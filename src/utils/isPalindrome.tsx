// check if a user input is a palindrome
export const isPalindrome = (userInput: string) => {
  return formatedInput(userInput).split('').reverse().join('') === formatedInput(userInput);
}

// remove non-alphanumeric characters and spaces and convert to lowercase
export const formatedInput = (userInput: string) => {
  const regex = /[^a-zA-Z0-9]/g;
  return userInput.replace(regex, '').toLowerCase();
}