import { useState, useEffect } from 'react'
import { isPalindrome } from './utils/isPalindrome.tsx'
import FunStuff from './components/FunStuff.tsx';
import './App.css'

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  // reset the result once input is changed
  useEffect(() => {
    setResult('');
  }, [userInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent | React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(userInput) {
      const palindromeResult = isPalindrome(userInput);
      setResult(palindromeResult ? `${userInput} is a palindrome` : `${userInput} is not a palindrome`)
    }
  }

   // trigger palindrome check when Enter key is pressed
   const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
      }
    }

  return (
    <>
      <div>
      <h1>Palindrome Checker</h1>
      <p>
        Enter a word, number, or a phrase and hit Enter or click the Check button
      </p>

      <input
        type='text'
        placeholder='Enter a word, number, or a phrase'
        onChange={handleChange}
        onKeyDown={handleEnterPress}
        value={userInput}
      />
      <button onClick={handleSubmit}>Check</button>

      <div className='result'>
        {result && <p>{result}</p>}    
      </div>
      </div>
      <div className='fun'>
        <FunStuff/>
      </div>  
      <footer>Copyright &copy; Maria Aluko 2025</footer>
    </>
  )
}

export default App;