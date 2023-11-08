import styled from "styled-components"

import Header from "../src/components/header/Header"
import Presentation from "../src/components/presentation/Presentation"
import Method from "../src/components/methods/Methods"

function HomePage () {
  
  return (
    <>
      <Header/>
      <Presentation/>
        <Method 
          title="1. Movies and series"
          text="Watching movies and TV series in English is a really fun and effective way to improve your language skills. As you do that, you expose yourself to accents, vocabulary and different intonations, helping you to get better at your listening and speaking. You can also learn slangs, language expressions and 'daily language' which are not frequently taught in tradicional classes."
          text2="However, to enjoy this method, it's very important to choose the right content to your learning level. Start with subtitles in English to understand what has been said and when you feel more comfortable, try to watch without subtitles. Remember that constance is the key, so save some regular time to practice your English with movies e TV series."
        />
        <Method
          title="2. Musics"
          text="When we talk about different ways of learning English, we can not forget about one of the main methods, the Music. These days, music is one of the most used forms to getting to learn another language. "
          text2="It helps with the pronunciation, understanding and vocabulary, in addition to make the learning process more fun. The study over music has grown a lot due to how easy you can access famous foreign music, what develops curiosity at people in getting to know the translations or the lyrics to the song. People listen to a song with subtitles in their native language to understand the context, and specially, practice the pronunciation as they try to sing the song in the original version."
        />
        <Method
          title="3. Books"
          text="Even though it look like an old school way, books are still a really important way of learning any new language, including English. Traditionaly we have specific books which are responsible to explain the language and its structures. This type of books are more focused on the grammar side, allowing the student to learn rules and clarify some doubts. "
          text2="Additionally we have literature books, when it's up to the student chosing what they like the best. If the more traditional method does not work for you, try to find a topic that you are interested in and motivates you to continue the learning process. Reading a book in English that you have read before in your native language can be a very valuable tip."
        />
        <Method
          title="4. Games"
          text="The game industry is the most lucrative of all in the entertainment aspect. Games are significantly helpful when we talk about learning another language. The communication of games from different places, for example, is one of the good aspects about this method. It encourages using the language in the daily basis, improving the fluency level. "
          text2="The learning process using games is more relaxed and less intimidating, exposing the gamers to many words and sentences, what makes the vocabulary even better. Games are always supposed to be fun, so it really motivates the students to practice the language even more."
        />
        <Method
          title="5. Mini-courses"
          text="The mini-courses perform an extremely important role in the process of learning a new language. You can focus on an specific topic that you want or like, in addition they are shorter e direct, what makes it really objective to people who have a more busy schedule."
          text2="Many of them are online, what makes it easier because you can watch the classes anywhere. They are more accessible than bigger courses and can be used as a complement from other learning methods."
        />
    </>
  )
}

export default HomePage