import PalindromeList from './PalindromeList.tsx'
import './FunStuff.css';

const FunStuff = () => {
  return (
    <>
      <div className='container'>
        <h3>Aibohphobia</h3>
        <p>
        If you’re less than fond of this topic, you may need to add one more palindrome to your vocabulary. Aibohphobia is the word (unofficially) used to refer to an “irrational fear of palindromes.” It was created to be a palindrome itself, with the word phobia (“intense, persistent, irrational fear of a specific object”) humorously used—you guessed it—forward and back.
        </p>
      </div>
      <div className='container'>
        <h3>Examples - Try them out above!</h3>
        <PalindromeList/>
      </div>
    </>
  )
}

export default FunStuff;