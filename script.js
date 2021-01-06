//Films Data

const data = {
    filmArray: [
        {
            title: 'Fear and Desire',
            img: {
                src: './images/fear_and_desire.jpg',
                alt: 'Fear and Desire poster'
            },
            releaseDate: 'April 1, 1953 (USA)',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda deleniti voluptatum facere magnam repellendus et, eum inventore? Aliquid, magni id. Veniam amet voluptatibus iure quos cumque molestias eveniet veritatis.'
        },
    
        {
            title: 'Killer\'s Kiss',
            img: {
                src: './images/killers_kiss.jpg',
                alt: 'Killer\'s Kiss poster'
            },
            releaseDate: 'October 1, 1955 (USA)',
            summary: 'Ready to catch a train to his hometown, a washed-up boxer tells us about the strange and twisty events that happened to him the past couple of days.'
        },
    
        {
            title: 'The Killing',
            img: {
                src: './images/killing.jpg',
                alt: 'The Killing poster'
            },
            releaseDate: 'June 6, 1956 (USA)',
            summary: 'Crook Johnny Clay assembles a five man team to plan and execute a daring race-track robbery.'
        },
    
        {
            title: 'Paths of Glory',
            img: {
                src: './images/paths_of_glory.jpg',
                alt: 'Paths of Glory poster'
            },
            releaseDate: 'December 25, 1957',
            summary: 'After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.'
        },
    
        {
            title: 'Spartacus',
            img: {
                src: './images/spartacus.jpg',
                alt: 'Spartacus poster'
            },
            releaseDate: 'November 17, 1960 (Brazil)',
            summary: 'The slave Spartacus leads a violent revolt against the decadent Roman Republic.'
        },
    
        {
            title: 'Lolita',
            img: {
                src: './images/lolita.jpg',
                alt: 'Lolita poster'
            },
            releaseDate: 'June 21, 1962 (West Germany)',
            summary: 'A middle-aged college professor becomes infatuated with a fourteen-year-old nymphet.'
        },
    
        {
            title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
            img: {
                src: './images/dr_strangelove.jpg',
                alt: 'Dr. Strangelove poster'
            },
            releaseDate: 'January 29, 2964 (USA)',
            summary: 'An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.'
        },
    
        {
            title: '2001: A Space Odyssey',
            img: {
                src: './images/2001.jpg',
                alt: '2001: A Space Odyssey poster'
            },
            releaseDate: 'May 12, 1968 (UK)',
            summary: 'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.'
        },
    
        {
            title: 'A Clockwork Orange',
            img: {
                src: './images/clockwork_orange.jpg',
                alt: 'A Clockwork Orange poster'
            },
            releaseDate: 'February 2, 1972 (USA)',
            summary: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.'
        },
    
        {
            title: 'Barry Lyndon',
            img: {
                src: './images/barry_lyndon.jpg',
                alt: 'Barry Lyndon poster'
            },
            releaseDate: 'December 18, 1975 (USA)',
            summary: 'An Irish rogue wins the heart of a rich widow and assumes her dead husband\'s aristocratic position in 18th-century England.'
        },

        {
            title: 'The Shining',
            img: {
                src: './images/shining.jpg',
                alt: 'The Shining poster'
            },
            releaseDate: 'June 13, 1980 (USA)',
            summary: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.'
        },

        {
            title: 'Full Metal Jacket',
            img: {
                src: './images/full_metal_jacket.jpg',
                alt: 'Full Metal Jacket poster'
            },
            releaseDate: 'July 10, 1987 (USA)',
            summary: 'A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.'
        },

        {
            title: 'Eyes Wide Shut',
            img: {
                src: './images/eyes_wide_shut.jpg',
                alt: 'Eyes Wide Shut poster'
            },
            releaseDate: 'July 16, 1999 (USA)',
            summary: 'A New York City doctor embarks on a harrowing, night-long odyssey of sexual and moral discovery after his wife reveals a painful secret to him.'
        }
    ]
}


// Handlebars-related code

const source = document.getElementById('film-entries').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(data);
const filmsList = document.getElementById('films-list');
filmsList.innerHTML = compiledHtml;