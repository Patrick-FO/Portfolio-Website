
const dropdownContent = {
    'Birthplace and origin': "I was born in Stockholm, Sweden in the year of 2008. My dad is a Swede, while my mom is from Belarus. This combination has given me fantastic lingual flexibility in Swedish, Russian and English. I am flexible to work locations, as I'm available to work on-site, remote and hybrid.", 
    'My programming journey': "I initially programming when I was a little kid. My mom got me on a course for HTML, CSS and JavaScript, but my stupid 10 year old self didn't realise how useful programming was... Either way, I got back to it when a customer at a bar I worked at sparked the programming in me again at 16. Since then, I've developed a proper passion for programming, and specialise in Full Stack Development.",
    'My work ethic': "I also deliver, but what do I mean by that? I will never develop an unfinished or a substandard product. I always make sure that I'm able to stand by what I make. I've worked a bunch in service, and that's why I value UX, accessibility and quality so much.", 
    'Education': "I am currently studying in ProCivitas Privata Gymnasium Stockholm on the Natur/Natur program, which means that I'm STEM oriented. My number one subject in school has always been math, hence my passion for programming and problem solving.", 
    'Fast learning': "I'm a fast learner, and I know that. I wouldn't try becoming a self taught programmer if I wasn't. I always strive to be up to date in the community, and be ahead of the game by learning in demand technologies.", 
    'Problem solving': "My best subject in school has always been math. I am able to walk into a math test after having have missed an entire term worth of school, not knowing any of the terminology that's featured on the exam, and still get a full mark just by looking at the signs and using logical thinking. I take great pride in being a natural problem solver, which is why I decided that a career as a developer was the right choice for me.", 
    'Team work and communication': "I value communication like nothing else. I believe that it's the key to a productive team. If a team isn't programming like the Soviet hockey team, then they aren't producing maximum output. Therefore I am looking for a space with skilled and social coworkers, which will also make the work space a better and more fun place for everyone. It's an important factor for me too, as it means that I'm going to learn and get more skilled faster.", 
    'Version control and Git': "If not just as important as the programming itself - Git. I've spent a lot of time learning and getting to know this technology, as it's the foundation of a dev team. I am learning to work with others, not just to program as a hobby, which is why I've prioritised it so much.", 
    'Frontend development': "This is what I'm currently working on the most. I am solid at the basics like HTML, CSS and JavaScript. I am currently delving into the world of frontend frameworks, and first on the list is React. I also have Svelte, Angular and Vue on my bucket list after that, to be my most versatile self.", 
    'Backend development': "At the moment my weakest field, as I haven't gotten time to explore it yet. I am however going to learn framekworks like Ruby on Rails, Spring Boot, Ktor and Express.", 
}

const dropdownItems = document.querySelectorAll('.dropdown'); 

function createDropdownContentAboutMe(text) {

    const contentDiv = document.createElement('div'); 
    contentDiv.className = 'dropdown-content'; 
    contentDiv.textContent = dropdownContent[text]; 

    contentDiv.style.wordwrap = 'break-word'; 
    contentDiv.style.width = '24rem'; 
    contentDiv.style.transition = 'max-height 0.3s ease-out'; 
    contentDiv.style.padding = '0 1em'; 
    contentDiv.style.maxHeight = '0'; 
    contentDiv.style.overflow = 'hidden'; 

    return contentDiv; 
}

dropdownItems.forEach(item => {

    const content = createDropdownContentAboutMe(item.textContent); 
    item.parentElement.appendChild(content); 

    item.addEventListener('click', () => {

        item.classList.toggle('active'); 

        if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
            content.style.maxHeight = content.scrollHeight + 'px'; 
            content.style.padding = '0 1em'; 
        } else {
            content.style.maxHeight = '0'; 
            content.style.padding = '0 1em'; 
        }

    })

})

