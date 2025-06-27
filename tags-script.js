$(document).ready(function() {
    // Mock Data for all novels (same as in novel-script.js, for consistency)
    const allNovelsData = [
        {
            id: 1,
            title: "Lord of the Mysteries",
            author: "Cuttlefish That Loves Diving",
            genres: ["Fantasy", "Mystery", "Steampunk", "Supernatural"],
            status: "Completed",
            synopsis: "Waking up to find himself in a Victorian era, but with added mystical powers, Zhou Mingrui (Klein Moretti) is drawn into a world of secret organizations, cults, and ancient gods. He must use his knowledge from a past life and the mysterious 'Sefirah Castle' to navigate the treacherous currents of this new reality, slowly uncovering its hidden truths and becoming a Lord of Mysteries.",
            coverUrl: "images/lord_of_mysteries_cover.jpg",
            releaseDate: "2020-01-01", popularity: 950,
            chapters: [
                { id: 1, title: "The Perpetual Fog" },
                { id: 2, title: "The Tarot Gathering" },
                { id: 3, title: "Unveiling the Fool" },
                { id: 4, title: "Pathway to Mystery" },
                { id: 5, title: "Secrets of Backlund" }
            ]
        },
        {
            id: 2,
            title: "Shadow Slave",
            author: "Forgotten Runes",
            genres: ["Fantasy", "Action", "Apocalyptic", "Dark Fantasy"],
            status: "Ongoing",
            synopsis: "In a world consumed by the Nightmare Spell, Sunny, a poor orphan, is chosen to participate in a deadly ritual that grants him a powerful, yet cursed, ability: to control shadows. Forced to fight monstrous creatures and contend with dangerous Awakened, he struggles for survival in a brutal world where every shadow holds a secret and every decision could be his last.",
            coverUrl: "images/shadow_slave_cover.jpg",
            releaseDate: "2021-03-15", popularity: 900,
            chapters: [
                { id: 1, title: "The Waking Nightmare" },
                { id: 2, title: "First Ascent" },
                { id: 3, title: "Echoes of the Past" },
                { id: 4, title: "Whispers of the Sun" },
                { id: 5, title: "The Hidden City" }
            ]
        },
        {
            id: 3,
            title: "Reverend Insanity",
            author: "Gu Zhen Ren",
            genres: ["Fantasy", "Action", "Dark Fantasy", "Xianxia"],
            status: "Hiatus",
            synopsis: "A tale of a ruthless protagonist, Fang Yuan, who, after 500 years of struggle and failure in a cultivation world, is reborn with the Spring Autumn Cicada. Using his vast knowledge of the future and Gu worms, he embarks on a dark path of manipulation, betrayal, and relentless pursuit of eternal life, disregarding morality for power. A unique and often controversial masterpiece in the cultivation genre.",
            coverUrl: "images/reverend_insanity_cover.jpg",
            releaseDate: "2019-05-01", popularity: 880,
            chapters: [
                { id: 1, title: "Spring Autumn Cicada" },
                { id: 2, title: "The Demonic Path" },
                { id: 3, title: "Gu Master's Aspirations" },
                { id: 4, title: "Inheritance of Three Kings" },
                { id: 5, title: "Cultivation and Schemes" }
            ]
        },
        {
            id: 4,
            title: "Harry Potter",
            author: "J.K. Rowling",
            genres: ["Fantasy", "Young Adult", "Magic", "Adventure"],
            status: "Completed",
            synopsis: "The iconic story of Harry Potter, an orphaned boy who discovers on his eleventh birthday that he is a wizard. He is whisked away to Hogwarts School of Witchcraft and Wizardry, where he makes lifelong friends, learns magic, and uncovers the truth about his parents' deaths and his destiny to confront the dark wizard Lord Voldemort.",
            coverUrl: "images/harry_potter_cover.jpg",
            releaseDate: "1997-06-26", popularity: 990,
            chapters: [
                { id: 1, title: "The Boy Who Lived" },
                { id: 2, title: "The Vanishing Glass" },
                { id: 3, title: "The Letters From No One" },
                { id: 4, title: "The Keeper of the Keys" },
                { id: 5, title: "Diagon Alley" }
            ]
        },
        {
            id: 5,
            title: "Isekai Tensei Soudouki",
            author: "Takami Ryousen",
            genres: ["Fantasy", "Isekai", "Reincarnation", "Comedy"],
            status: "Ongoing",
            synopsis: "A unique Isekai story where a Japanese salaryman, a high school student, and a history geek are all reincarnated into the body of one baby boy, Baltazar. With three distinct personalities sharing a single mind, Baltazar navigates a fantasy world, using their combined knowledge to create new technologies, manage his territory, and deal with absurd situations that arise from their internal conflicts.",
            coverUrl: "images/isekaitensei_soudouki_cover.jpg",
            releaseDate: "2018-08-01", popularity: 750,
            chapters: [
                { id: 1, title: "The Triple Reincarnation" },
                { id: 2, title: "A Noble's Son" },
                { id: 3, title: "Managing the Territory" },
                { id: 4, title: "New Technologies" },
                { id: 5, title: "Intrigue at Court" }
            ]
        },
        {
            id: 6,
            title: "Solo Leveling",
            author: "Chugong",
            genres: ["Fantasy", "Action", "System", "Gaming"],
            status: "Completed",
            synopsis: "In a world where gates connect to monster-filled dungeons and hunters fight for humanity, Sung Jinwoo, the 'Weakest Hunter of All Mankind', is granted a mysterious 'System' that allows him to level up without limit. He embarks on a journey to become the strongest, fighting formidable foes and uncovering the secrets behind the dungeons and the System itself, all while raising an army of shadows.",
            coverUrl: "images/solo_leveling_cover.jpg",
            releaseDate: "2018-03-04", popularity: 980,
            chapters: [
                { id: 1, title: "The Weakest Hunter" },
                { id: 2, title: "The Double Dungeon" },
                { id: 3, title: "The System" },
                { id: 4, title: "Level Up" },
                { id: 5, title: "Shadow Army" }
            ]
        },
        {
            id: 7,
            title: "Arifureta Shokugyou De Sekai Saikyou",
            author: "Ryo Shirakome",
            genres: ["Fantasy", "Isekai", "Harem", "Action", "Dark Fantasy"],
            status: "Ongoing",
            synopsis: "Hajime Nagumo and his classmates are summoned to a fantasy world to save humanity. However, Hajime is betrayed and falls into a dungeon, acquiring only the weakest alchemy skill. Through sheer determination, he transforms his weak skill into a powerful one, becoming a ruthless and pragmatic survivor who will do anything to return home, gathering a unique harem along the way.",
            coverUrl: "images/arifureta_cover.jpg",
            releaseDate: "2015-06-01", popularity: 820,
            chapters: [
                { id: 1, title: "Summoned to Tortus" },
                { id: 2, title: "Betrayal in the Abyss" },
                { id: 3, title: "The Vampire Princess" },
                { id: 4, title: "Hajime's Resolve" },
                { id: 5, title: "Breaking Through" }
            ]
        },
        {
            id: 8,
            title: "Tales of Demons and Gods",
            author: "Mad Snail",
            genres: ["Fantasy", "Action", "Reincarnation", "Xianxia"],
            status: "Ongoing",
            synopsis: "Nie Li, the strongest Demon Spiritist in his previous life, dies in the battle against the Sage Emperor. Reborn as a 13-year-old, he returns to his past, determined to save his family, friends, and city from destruction. With his vast knowledge of the future, cultivation techniques, and powerful demon spirits, he sets out to cultivate the strongest path and defy his tragic destiny.",
            coverUrl: "images/tales_of_demons_cover.jpg",
            releaseDate: "2014-07-01", popularity: 800,
            chapters: [
                { id: 1, title: "Rebirth to the Past" },
                { id: 2, title: "Glory City's Future" },
                { id: 3, title: "Cultivating Anew" },
                { id: 4, title: "The Sacred Family" },
                { id: 5, title: "Demon Spirit Mastery" }
            ]
        },
        {
            id: 9,
            title: "All Hail the Sect Leader",
            author: "Glorious Leader",
            genres: ["Fantasy", "Comedy", "System", "Xianxia"],
            status: "Ongoing",
            synopsis: "Jun Changxiao, a transmigrator from Earth, becomes the struggling leader of an impoverished sect. To revitalize his sect and achieve true strength, he relies on a mysterious 'Strongest Sect System'. Filled with humor and unexpected twists, the novel follows his journey as he recruits eccentric disciples, develops bizarre martial arts, and inadvertently becomes a formidable power in the cultivation world.",
            coverUrl: "images/all_hail_sect_leader_cover.jpg",
            releaseDate: "2020-11-01", popularity: 700,
            chapters: [
                { id: 1, title: "The Impoverished Sect" },
                { id: 2, title: "The System's Quests" },
                { id: 3, title: "Recruiting Disciples" },
                { id: 4, title: "Training Regimen" },
                { id: 5, title: "The Sect's Fame" }
            ]
        },
        {
            id: 10,
            title: "Overgeared",
            author: "Team Argo",
            genres: ["Fantasy", "Action", "Gaming", "Virtual Reality"],
            status: "Ongoing",
            synopsis: "Shin Youngwoo, a young man with bad luck and a penchant for gaming, is known as Grid in the popular VRMMORPG Satisfy. After stumbling upon a legendary class, 'Pagma's Descendant', he rapidly gains power and influence by crafting unique items. Follow Grid as he rises from a clumsy, self-centered player to a revered legend, overcoming challenges and forging his own destiny in the virtual world and beyond.",
            coverUrl: "images/overgeared_cover.jpg",
            releaseDate: "2018-05-01", popularity: 920,
            chapters: [
                { id: 1, title: "Pagma's Descendant" },
                { id: 2, title: "The Game Satisfy" },
                { id: 3, title: "First Legendary Item" },
                { id: 4, title: "Breaking the Norm" },
                { id: 5, title: "Kingdom Building" }
            ]
        }
    ];


    // Function to render novel cards into the grid
    function renderNovelCards(novels) {
        var $grid = $('#filteredNovelsGrid');
        $grid.empty(); // Clear existing content

        if (novels.length === 0) {
            $grid.append('<p style="text-align: center; color: #777; font-size: 1.1em;">No novels found for this genre or filter.</p>');
            return;
        }

        $.each(novels, function(index, novel) {
            var tagsHtml = novel.genres.map(genre => `<span class="tag">${genre}</span>`).join('');
            var novelCard = `
                <div class="novel-card" data-title="${novel.title.toLowerCase()}" data-release="${novel.releaseDate}" data-popularity="${novel.popularity}">
                    <a href="novel.html?id=${novel.id}">
                        <img src="${novel.coverUrl}" alt="${novel.title}" class="novel-cover">
                    </a>
                    <div class="novel-info">
                        <h3 class="novel-title"><a href="novel.html?id=${novel.id}">${novel.title}</a></h3>
                        <p class="novel-author">By ${novel.author}</p>
                        <div class="novel-tags">${tagsHtml}</div>
                        <p class="novel-status">Status: ${novel.status}</p>
                    </div>
                </div>
            `;
            $grid.append(novelCard);
        });
    }

    // Function to filter novels by genre
    let currentGenre = 'all'; // Keep track of the currently active genre
    function filterNovels(genre) {
        currentGenre = genre; // Update current genre
        $('.genre-button').removeClass('active');
        $(`.genre-button[data-genre="${genre}"]`).addClass('active');

        $('#currentGenre').text(genre === 'all' ? 'All Novels' : genre.charAt(0).toUpperCase() + genre.slice(1) + ' Novels');

        let filtered = [];
        if (genre === 'all') {
            filtered = allNovelsData;
        } else {
            filtered = allNovelsData.filter(novel => novel.genres.map(g => g.toLowerCase()).includes(genre));
        }
        
        // After filtering, re-sort and render
        sortNovels($('.sort-button.active').data('sort'), filtered);
    }

    // Function to sort novels
    function sortNovels(sortBy, novelsToSort = allNovelsData) {
        $('.sort-button').removeClass('active');
        $(`.sort-button[data-sort="${sortBy}"]`).addClass('active');

        let sortedNovels = [...novelsToSort]; // Create a copy to sort

        if (sortBy === 'name') {
            sortedNovels.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (sortBy === 'latest') {
            sortedNovels.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortBy === 'popularity') {
            sortedNovels.sort((a, b) => b.popularity - a.popularity); // Descending
        }
        
        renderNovelCards(sortedNovels); // Re-render the cards after sorting
    }

    // Attach click events to genre buttons
    $('.genre-button').on('click', function() {
        var genre = $(this).data('genre');
        filterNovels(genre);
    });

    // Attach click events to sort buttons
    $('.sort-button').on('click', function() {
        var sortBy = $(this).data('sort');
        // Filter first by current genre, then sort
        let novelsToDisplay = allNovelsData;
        if (currentGenre !== 'all') {
             novelsToDisplay = allNovelsData.filter(novel => novel.genres.map(g => g.toLowerCase()).includes(currentGenre));
        }
        sortNovels(sortBy, novelsToDisplay);
    });

    // Initial load: Filter by 'all' and sort by 'name'
    // Check URL for pre-selected genre (e.g., tags.html?genre=fantasy)
    var urlParams = new URLSearchParams(window.location.search);
    var initialGenre = urlParams.get('genre');
    if (initialGenre) {
        filterNovels(initialGenre);
    } else {
        filterNovels('all'); // Default to all
    }

    // This part is for the header search bar on this specific page
    $('#searchButton').on('click', function() {
        var searchTerm = $('#searchInput').val().trim();
        if (searchTerm) {
            window.location.href = 'search.html?q=' + encodeURIComponent(searchTerm);
        } else {
            $('#searchInput').focus();
        }
    });

    $('#searchInput').on('keypress', function(event) {
        if (event.which === 13) {
            var searchTerm = $('#searchInput').val().trim();
            if (searchTerm) {
                window.location.href = 'search.html?q=' + encodeURIComponent(searchTerm);
            }
            event.preventDefault();
        }
    });
});