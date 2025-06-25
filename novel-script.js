$(document).ready(function() {
    // Mock Data for all novels 
    const allNovelsData = [
        {
            id: 1,
            title: "Lord of the Mysteries",
            author: "Cuttlefish That Loves Diving",
            genres: ["Fantasy", "Mystery", "Steampunk", "Supernatural"],
            status: "Completed",
            synopsis: "Waking up to find himself in a Victorian era, but with added mystical powers, Zhou Mingrui (Klein Moretti) is drawn into a world of secret organizations, cults, and ancient gods. He must use his knowledge from a past life and the mysterious 'Sefirah Castle' to navigate the treacherous currents of this new reality, slowly uncovering its hidden truths and becoming a Lord of Mysteries.",
            coverUrl: "images/lord_of_mysteries_cover.jpg",
            chapters: [
                { id: 1, title: "The Whispering Woods" }, // Actual title in Chapter.html
                { id: 2, title: "The First Roar" },
                { id: 3, title: "Alliance of Shadows" },
                { id: 4, title: "Trials of Fire" },
                { id: 5, title: "The Oracle's Warning" }
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
            chapters: [
                { id: 1, title: "A Distant Signal" },
                { id: 2, title: "First Contact" },
                { id: 3, title: "The Crimson Desert" },
                { id: 4, title: "Whispers of Conflict" },
                { id: 5, title: "Shared Dreams" }
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
            chapters: [
                { id: 1, title: "Rebirth" },
                { id: 2, title: "Spring Autumn Cicada" },
                { id: 3, title: "The Path of Gu Cultivation" },
                { id: 4, title: "The Blood Sea" },
                { id: 5, title: "Shadow of the Demon" }
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
            chapters: [
                { id: 1, title: "The Boy Who Lived" },
                { id: 2, title: "The Vanishing Glass" },
                { id: 3, title: "The Letters from No One" },
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
            chapters: [
                { id: 1, title: "Three Souls, One Body" },
                { id: 2, title: "A New World, A New Problem" },
                { id: 3, title: "The Birth of Baltazar" },
                { id: 4, title: "First Steps into Society" },
                { id: 5, title: "The Royal Audience" }
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
            chapters: [
                { id: 1, title: "The Weakest Hunter" },
                { id: 2, title: "The Double Dungeon" },
                { id: 3, title: "System Activated" },
                { id: 4, title: "The First Hunt" },
                { id: 5, title: "Shadow Monarch" }
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
            chapters: [
                { id: 1, title: "Summoned to a New World" },
                { id: 2, title: "The Abyss" },
                { id: 3, title: "The Transformed Alchemist" },
                { id: 4, title: "Meeting the Vampire" },
                { id: 5, title: "Escaping the Dungeon" }
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
            chapters: [
                { id: 1, title: "Reborn" },
                { id: 2, title: "The Past's Shadow" },
                { id: 3, title: "Cultivation Begins Anew" },
                { id: 4, title: "Confronting the Bully" },
                { id: 5, title: "Demon Spirit Book" }
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
            chapters: [
                { id: 1, title: "The Impoverished Sect Leader" },
                { id: 2, title: "The Strongest Sect System" },
                { id: 3, title: "First Disciples" },
                { id: 4, title: "Building the Sect" },
                { id: 5, title: "The Divine Beast" }
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
            chapters: [
                { id: 1, title: "The Legendary Class" },
                { id: 2, title: "Satisfy" },
                { id: 3, title: "Crafting a Legend" },
                { id: 4, title: "First Production" },
                { id: 5, title: "The King's Request" }
            ]
        }
    ];

    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function displayNovelDetails(novelId) {
        const novel = allNovelsData.find(n => n.id === parseInt(novelId));

        if (novel) {
            document.title = novel.title + " - NovelVerse";

            $('#novelCover').attr('src', novel.coverUrl).attr('alt', novel.title);
            $('#novelTitle').text(novel.title);
            $('#novelAuthor').text('By ' + novel.author);
            $('#novelStatus').html('Status: <strong>' + novel.status + '</strong>');
            $('#novelSynopsis').text(novel.synopsis);

            const $novelTags = $('#novelTags');
            $novelTags.empty();
            novel.genres.forEach(genre => {
                const tagLink = `<a href="tags.html?genre=${genre.toLowerCase()}" class="tag">${genre}</a>`;
                $novelTags.append(tagLink);
            });

            const $chapterList = $('#chapterList');
            $chapterList.empty();
            novel.chapters.forEach(chapter => {
                const novelSlug = novel.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/(^_|_$)/g, '');
                const chapterLink = `<li><a href="chapter.html?novelId=${novel.id}&chapterId=${chapter.id}">${chapter.title}</a></li>`;
                $chapterList.append(chapterLink);
            });

        } else {
            document.title = "Novel Not Found - NovelVerse";
            $('#novelTitle').text("Novel Not Found");
            $('#novelAuthor').text("");
            $('#novelStatus').text("");
            $('#novelSynopsis').text("We could not find the novel you are looking for. It might have been removed or the ID is incorrect.");
            $('#novelCover').hide();
            $('#novelTags').hide();
            $('#chapterList').html('<li>No chapters available.</li>');
        }
    }

    const currentNovelId = getQueryParam('id');
    if (currentNovelId) {
        displayNovelDetails(currentNovelId);
    } else {
        displayNovelDetails(null);
    }

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