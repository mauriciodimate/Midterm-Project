const words = {
    'Adjective': 'obedient',
    'Verb 1': 'cook',
    'Verb 2': 'strike',
    'Plural Noun 1': 'birds',
    'Plural Noun 2': 'winners',
    'Plural Noun 3': 'politics'
  } 
function addfirst() {
    document.getElementById('first-container').innerHTML = `
  <form>
  <input name='${stories[0].words[0]}' value='${stories[0].words[0]}'>
  <input name='${stories[0].words[1]}' value='${stories[0].words[1]}'>
  <input name='${stories[0].words[2]}' value='${stories[0].words[2]}'>
  <input name='${stories[0].words[3]}' value='${stories[0].words[3]}'>
  <input name='${stories[0].words[4]}' value='${stories[0].words[4]}'>
  <input name='${stories[0].words[5]}' value='${stories[0].words[5]}'>
  <button type= "submit"> display the content</buttonn>
  </form>
  `
  document.getElementById('first-container').addEventListener('submit',
    function (event) {event.preventDefault()
        document.getElementById('story-result').innerHTML = stories[0].output(words)
        
  })
  }
  function addwords() {
    document.getElementById('second-container').innerHTML = `<form id='second-form'>
    <input name='${stories[1].words[0]}' value='${stories[1].words[0]}'>
    <input name='${stories[1].words[1]}' value='${stories[1].words[1]}'>
    <input name='${stories[1].words[2]}' value='${stories[1].words[2]}'>
    <input name='${stories[1].words[3]}' value='${stories[1].words[3]}'>
    <input name='${stories[1].words[4]}' value='${stories[1].words[4]}'>
    <input name='${stories[1].words[5]}' value='${stories[1].words[5]}'>
    <button type= "submit"> display the content</buttonn>
    </form>
    `

const words = {
        'Adjective': 'obedient',
        'Verb 1': 'cook',
        'Verb 2': 'strike',
        'Plural Noun 1': 'birds',
        'Plural Noun 2': 'winners',
        'Plural Noun 3': 'politics'
      }
  

/*this is the function to submit event*/
  let $second = document.getElementById('second-form')
  $second.addEventListener('submit',
    function (event) {
  
      event.preventDefault()  
  
   


   /* 'Adjective': $second.elements[0].value,
    'Verb 1': $second.elements[1].value,
    'Verb 2': $second.elements[2].value,
    'Plural noun 1': $second.elements[3].value,
    'Plural noun 2': $second.elements[4].value,
    'Plural noun 3': $second.elements[5].value,
    document.getElementById('words').innerHTML = $second.elements[0].value
   */
  
   console.log($second.elements[0].value)
  
  
   document.getElementById('story-result').innerHTML = stories[1].output(words)
        
  })
  }
  function addfinal() {
    document.getElementById('last-container').innerHTML = `<form id='second-form'>
    <input name='${stories[2].words[0]}' value='${stories[2].words[0]}'>
    <input name='${stories[2].words[1]}' value='${stories[2].words[1]}'>
    <input name='${stories[2].words[2]}' value='${stories[2].words[2]}'>
    <input name='${stories[2].words[3]}' value='${stories[2].words[3]}'>
    <input name='${stories[2].words[4]}' value='${stories[2].words[4]}'>
    <input name='${stories[2].words[5]}' value='${stories[2].words[5]}'>
    <button type= "submit"> display the content</buttonn>
    </form>
    `
    document.getElementById('second-form').addEventListener('submit',
    function (event) {
        document.getElementById('story-result').innerHTML = stories[2].output(words)
        event.preventDefault() 
  })
  }
  document.getElementById("mission").addEventListener('click', addfirst) 
  document.getElementById("lunch").addEventListener('click', addwords)
  document.getElementById("weather").addEventListener('click', addfinal)
  
  

  
  
  /*this is the const*/
  const stories = [
    {  
      title: 'Mission Statement',
      words: [
        'Adjective',
        'Verb 1',
        'Verb 2',
        'Plural Noun 1',
        'Plural Noun 2',
        'Plural Noun 3'
      ],
      output: function (words) {
        return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
      }
    },
    {
      title: 'Lunch Room!',
      words: [
        'Animal',
        'Adjective 1',
        'Adjective 2',
        'Vegetable 1',
        'Vegetable 2',
        'Noun',
        'Container'
      ],
      output: function (words) {
        return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
      }
    },
  
    {
      title: 'Weather Report',
      words: [
        'Adjective 1',
        'Adjective 2',
        'Article of Clothing',
        'Number 1',
        'Number 2',
        'Plural Noun 1',
        'Plural Noun 2'
      ],
      output: function (words) {
        return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
      }
    }
  ];
  
  /*sorry, I tried all the week, I really do not know how to put the change the words and get typed*/