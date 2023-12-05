import styled from "styled-components"
import { useState } from "react"

import Header from "../src/components/header/Header"
import Presentation from "../src/components/presentation/Presentation"
import Method from "../src/components/methods/Methods"
import CardPlatforms from "../src/components/platforms/CardPlatform"
import Menu from "../src/components/menu/Menu"
import Informations from "../src/components/informations/Informations"

const PlatformsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 1500px) {  
        flex-direction: column;
        align-items: center;
    }
`

function HomePage () {
  
  const [language, setLanguage] = useState(true)
  const handleLanguage = () => {
      setLanguage(!language)
  }

  return (
    <>
      <Header onClick={handleLanguage}/>
      <Presentation
        id="home"
        id2="serie"
        filme={language == true ? "Filmes e séries" : "Movies and serie"}
        musica={language == true ? "Músicas" : "Music"}
        livro={language == true ? "Livros" : "Book"}
        jogo={language == true ? "Jogos" : "Games"}
        curso={language == true ? "Minicursos" : "Mini-courses"}
        plata={language == true ? "Plataformas" : "Platforms"}
      />
      <Method 
        id="filme"
        title={language == true ? "1. Filmes e séries" : "1. Movies and serie"}
        text={language == true ? "Assistir a filmes e séries em inglês é uma maneira realmente divertida e eficaz de aprimorar suas habilidades linguísticas. Ao fazer isso, você se expõe a sotaques, vocabulário e diferentes entonações, o que o ajuda a melhorar sua compreensão auditiva e sua fala. Você também pode aprender gírias, expressões da língua e o idioma do dia a dia, que não são frequentemente ensinados em aulas tradicionais." : "Watching movies and TV series in English is a really fun and effective way to improve your language skills. As you do that, you expose yourself to accents, vocabulary and different intonations, helping you to get better at your listening and speaking. You can also learn slangs, language expressions and 'daily language' which are not frequently taught in tradicional classes."}
        text2={language == true ? "No entanto, para desfrutar desse método, é muito importante escolher o conteúdo adequado ao seu nível de aprendizado. Comece com legendas em inglês para entender o que está sendo dito, e quando se sentir mais confortável, tente assistir sem legendas. Lembre-se de que a constância é a chave, então reserve um tempo regular para praticar seu inglês com filmes e séries de TV" : "However, to enjoy this method, it's very important to choose the right content to your learning level. Start with subtitles in English to understand what has been said and when you feel more comfortable, try to watch without subtitles. Remember that constance is the key, so save some regular time to practice your English with movies e TV series."}
      />
      <Method
        id="musica"
        title={language == true ? "2. Músicas" : "2. Music"}
        text={language == true ? "Quando falamos em diferentes formas de aprender ingles, não podemos esquecer de um dos principais pilares dessa educação, a Música.  A música hoje é uma das maneiras mais utilizadas para começar a entender outra língua, pois auxilia na pronúncia, compreensão e no vocabulário, além de deixar o aprendizado mais divertido.": "When we talk about different ways of learning English, we can not forget about one of the main methods, the Music. These days, music is one of the most used forms to getting to learn another language."}
        text2={language == true ?  "auxilia na pronúncia, compreensão e no vocabulário, além de deixar o aprendizado mais divertido. O estudo a partir da música cresceu bastante devido à facilidade de acesso a músicas estrangeiras, onde muitas ficam famosas, gerando à curiosidade das pessoas em saberem a tradução/letra da música. As pessoas escutam a música com legendas em sua língua nativa para entender o contexto e, o principal, praticam a pronuncia, tentando cantá-la na sua versão original." : "It helps with the pronunciation, understanding and vocabulary, in addition to make the learning process more fun. The study over music has grown a lot due to how easy you can access famous foreign music, what develops curiosity at people in getting to know the translations or the lyrics to the song. People listen to a song with subtitles in their native language to understand the context, and specially, practice the pronunciation as they try to sing the song in the original version."}
      />
      <Method
        id="livro"
        title={language == true ? "3. Livros" : "3. Book"}
        text={language == true ? "Apesar de parecerem uma forma ultrapassada, os livros ainda são uma forma muito importante no aprendizado de qualquer língua, incluindo o inglês. Tradicionalmente temos os livros específicos para a explicação daquela língua e de suas estruturas, voltados realmente para a parte da gramática, onde o aluno pode aprender regras e tirar dúvidas mais específicas." : "Even though it look like an old school way, books are still a really important way of learning any new language, including English. Traditionaly we have specific books which are responsible to explain the language and its structures. This type of books are more focused on the grammar side, allowing the student to learn rules and clarify some doubts. "}
        text2={language == true ? "Adicionalmente temos os livros de literatura, onde o estudante escolhe o que mais lhe agrada. Se o método mais tradicional não funciona com você, tente achar algum assunto que você gosta e que te motive a continuar no processo de aprendizado. Ler um livro em inglês que você já leu antes na sua língua nativa pode ser uma dica muito valiosa." : " Additionally we have literature books, when it's up to the student chosing what they like the best. If the more traditional method does not work for you, try to find a topic that you are interested in and motivates you to continue the learning process. Reading a book in English that you have read before in your native language can be a very valuable tip."}
      />
      <Method
        id="jogo"
        title={language == true ? "4. Jogos" : "4. Games"}
        text= {language == true ? "A indústria dos games é a mais lucrativa de todas as indústrias de entretenimento. Os jogos são bastante significativos no aprendizado de outra língua, como por exemplo a comunicação entre os jogadores, incentivando o uso da língua estrangeira, a prática constante, aprimorando a fluência, a aprendizagem por meio dos jogos é mais descontraída e menos intimidante." : "The game industry is the most lucrative of all in the entertainment aspect. Games are significantly helpful when we talk about learning another language. The communication of games from different places, for example, is one of the good aspects about this method. It encourages using the language in the daily basis, improving the fluency level. "}
        text2={language == true ? " Expõem os gamers a uma variedade de palavras/frases, enriquecendo ainda mais o vocabulário, e são mais divertidos, motivando os alunos a praticar ainda mais a língua estrangeira." : "The learning process using games is more relaxed and less intimidating, exposing the gamers to many words and sentences, what makes the vocabulary even better. Games are always supposed to be fun, so it really motivates the students to practice the language even more."}
      />
      <Method
        id="curso"
        title={language == true ? "5. Minicursos" : "5. Mini-courses"}
        text={language == true ? "Os Minicursos desempenham um papel de extrema importância no estudo de línguas estrangeiras, como por exemplo um foco específico em algum determinado tópico/assunto, são curtos e diretos, sendo mais objetivo para as pessoas que tem uma rotina mais puxada, alguns são on-line. " : "The mini-courses perform an extremely important role in the process of learning a new language. You can focus on an specific topic that you want or like, in addition they are shorter e direct, what makes it really objective to people who have a more busy schedule."}
        text2={language == true ? "facilitando o acesso, são mais acessíveis que cursos de uma maior duração e também podem ser utilizados como complemento de outros métodos de aprendizado." : "Many of them are online, what makes it easier because you can watch the classes anywhere. They are more accessible than bigger courses and can be used as a complement from other learning methods."}
      />
      <Method
        id="plataforma"
        title={language == true ? "6. Plataformas" : "6. Platforms"}
        text={language == true ? "Aprender inglês é uma habilidade valiosa que abre portas para oportunidades globais. Se você está procurando recursos educacionais para aprimorar seu inglês, a internet oferece uma variedade de opções. Aqui estão alguns sites que podem ser seus aliados na jornada de aprendizado." : "Learning English is a valuable skill that opens doors to global opportunities. If you're looking for educational resources to improve your English, the internet offers a wealth of options. Here are some websites that can be your allies on the learning journey."}
      />
        <PlatformsContainer>
          <CardPlatforms href="https://chat.openai.com/auth/login?ref=upstract.com" src="GPT.png" text={language == true ? " O ChatGPT pode ser usado para praticar a conversação em inglês, receber correções gramaticais e obter respostas a perguntas sobre o idioma em um formato de bate-papo." : " ChatGPT can be used to practice English conversation, receive grammar corrections and get answers to questions about the language in a chat format."}/>
          <CardPlatforms href="https://www.cambly.com/english?lang=pt" src="cambly.png" text={language == true ? "O Cambly oferece a oportunidade de praticar o inglês com tutores ao vivo por meio de videochamadas. É uma opção excelente para melhorar a fluência e a pronúncia, além de receber orientação personalizada." : "Cambly offers the opportunity to practice English with live tutors through video calls. It is an excellent option for improving fluency and pronunciation, as well as receiving personalized guidance."}/>
          <CardPlatforms href="https://pt.duolingo.com/" src="duolingo.png" text={language == true ? " O Duolingo oferece lições interativas e exercícios para melhorar vocabulário, gramática e pronúncia em inglês. É ad autoestudo e é uma opção acessível para desenvolver habilidades básicas." :"Duolingo offers interactive lessons and exercises to improve English vocabulary, grammar and pronunciation. It is suitable for self-study and is an affordable option for developing basic skills."}/>
        </PlatformsContainer>
        <Informations
          id="info"
          title={language == true ? "Países falantes da língua inglesa" : "English speaking countries"}
          text1={language == true ? "A língua inglesa é conhecida como uma língua universal, que une povos e torna possível a comunicação em diversos lugares do mundo. É um idioma comumente usado em viagens, negócios e várias outras áreas. Mesmo que uma pessoa não fale inglês, ela usa muitas palavras no dia a dia, o que mostra quanta influência o idioma possui.  Uma pergunta comum é: quantos países falam inglês? A resposta parece simples de responder, basta checar as línguas oficiais de cada nação. Com essa lógica, encontramos 54 países que falam o inglês como língua nativa ou segundo idioma." : "The English language is known like a universal language, uniting people and making communication possible in many places in the world. It is commonly used in trips, business and many other areas. Even if a person does not speak English, they use a lot of words on a daily basis, which shows how much of an influence the language has. A common question is: how many countries speak English? The answer seems easy to respond to, you can just check the official languages of each nation. With this logic we have 54 countries who speak English as native language or second language."}
          text2={language == true ? "No entanto, a resposta pode ficar incompleta, porque existem muitos países que as pessoas usam muito o inglês, mesmo não sendo uma língua oficial. Segundo dados da plataforma Statista, em 2023, há 1,5 bilhão de falantes do inglês — o número exato é de 1,456 bilhão. Esse número inclui os nativos ou pessoas que adquiriram o inglês como segunda língua." : "However, the answer is not complete, because there’s a lot of countries where people use a lot of English, even though it is not an official language. According to data from a platform called Statista, in 2023 there is 1.5 billion people who speak English in the world - the exact number being 1.456 billion. This number includes the natives or people who have adopted English as a second language."}
          text3={language == true ? "Os Estados Unidos têm uma população de 333 milhões de pessoas, sendo o país que possui o maior número de falantes da língua. Os resultados são de 2022, compartilhados pelo Banco Mundial.No ranking de línguas mais faladas do mundo, após o mandarim e o hindi, vem o inglês, em terceiro lugar. Por causa disso, os 54 países que têm inglês como língua oficial possuem uma grande diversidade linguística." : "The United States of America has a population of 333 million people, being the country with the largest number of speakers of the language. The results are from 2022, shared from the World Bank. In the ranking of the most spoken languages in the world, after Mandarin and Hindi, comes the English language, at 3rd place. Because of that, the 54 countries who have English as an official language have a large linguistic diversity."}
          text4={language == true ? "Falando sobre o Brasil, dados do British Council mostram que apenas 1% da população é fluente. No geral, 5% da população possui algum conhecimento de inglês. A situação mostra que ser bilíngue ainda é uma possibilidade restrita a uma parte reduzida da população, no entanto o acesso para aprender uma segunda língua é muito melhor hoje em dia em comparação com décadas passadas.Um dos fatores que contribuíram para tanto foi o amplo acesso à internet e redes sociais por parte de toda a população. Nunca assistimos a tantos filmes e séries com o áudio original e legendas como atualmente, por exemplo." : "Talking about Brazil, data from the British Council shows that only 1% of the population is fluent. In general, 5% of the population has some knowledge in English. The situation shows that being bilingual still is a restricted possibility to a reduced part of the population, however the access to learn a second language is a lot better nowadays compared to decades ago. One of the factors that contributed to this was the broad internet access and social media in general. We have not watched this many movies and tv shows with the original audio and subtitles as nowadays, for example."}
          src={language == true ? "port.png" : "ing.png"}
        />
        <Menu language={language} setLanguage={setLanguage}/>
        </>
  )
}

export default HomePage