import React from 'react';
import './PalindromeList.css'

const PalindromeList = () => {
  const list = [
    "A dog! A panic in a pagoda!",
    "Ah, Satan sees Natasha",
    "A man, a plan, a canal — Panama!",
    "Dennis and Edna sinned",
    "Do nine men Interpret? Nine men I nod",
    "Drab as a fool, aloof as a bard",
    "Draw, o coward!",
    "Go hang a salami, I'm a lasagna hog",
    "I, man, am Regal, a German am I",
    "If I had a hi-fi",
    "Lewd did I live, evil I did dwell",
    "Lived on decaf, faced no devil",
    "Lisa Bonet ate no basil",
    "Lonely Tylenol",
    "Madam, I'm Adam",
    "Ma is as selfless as I am",
    "May a moody baby doom a yam?",
    "Mr. Owl ate my metal worm",
    "Name no one man",
    "Never odd or even",
    "No lemons, no melon",
    "No one made killer apparel like Dame Noon",
    "Not a banana baton",
    "Now I see bees, I won",
    "Oozy rat in a sanitary zoo",
    "Pull up if I pull up.",
    "Race fast, safe car",
    "Rats live on no evil star",
    "Rise to vote, sir",
    "Senile felines",
    "Sir, I'm Iris",
    "Step on no pets",
    "Stop pots",
    "Too bad I hid a boot",
    "Too hot to hoot",
    "UFO tofu",
    "Was it a car or a cat I saw?",
    "We panic in a pew",
    "Won't lovers revolt now?",
    "Zeus sees Suez"
  ];

  const shuffleList = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const randomPalindrome = shuffleList(list).slice(0,10);

  return (
    <>
      <ul>
        {randomPalindrome.map((phrase, index) => (
          <li key={index}>{phrase}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(PalindromeList);