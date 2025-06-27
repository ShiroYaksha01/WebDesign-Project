$(document).ready(function() {
    const allNovelsData = [
        // ... (existing novel data) ...
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

    let currentNovelId = null;
    let currentChapterId = null;
    let currentNovel = null;
    let currentChapterIndex = -1;

    const BASE_FONT_SIZE_PX = 18;
    let currentFontSize = BASE_FONT_SIZE_PX;
    const FONT_SIZE_INCREMENT = 2;
    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 30;

    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function loadChapter(novelId, chapterId) {
        currentNovelId = parseInt(novelId);
        currentChapterId = parseInt(chapterId);

        currentNovel = allNovelsData.find(n => n.id === currentNovelId);

        if (!currentNovel) {
            $('#chapterContent').html('<p>Error: Novel not found.</p>');
            document.title = "Novel Not Found - NovelVerse";
            $('#chapterTitleDisplay').text("Error");
            updateNavigationButtons();
            $('#returnToNovelBtn').prop('disabled', true);
            return;
        }

        currentChapterIndex = currentNovel.chapters.findIndex(c => c.id === currentChapterId);

        if (currentChapterIndex === -1) {
            $('#chapterContent').html('<p>Error: Chapter not found.</p>');
            document.title = "Chapter Not Found - NovelVerse";
            $('#chapterTitleDisplay').text("Error");
            updateNavigationButtons();
            $('#returnToNovelBtn').prop('disabled', true);
            return;
        }

        const chapter = currentNovel.chapters[currentChapterIndex];
        $('#chapterTitleDisplay').text(`Chapter ${chapter.id}: ${chapter.title}`);
        document.title = `Chapter ${chapter.id}: ${chapter.title} - ${currentNovel.title} - NovelVerse`;

        const novelSlug = currentNovel.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/(^_|_$)/g, '');
        const chapterFilePath = `chapters/novel_${currentNovelId}_${novelSlug}/chapter_${currentChapterId}.txt`;

        // Use $.get() for plain text content
        $.get(chapterFilePath)
            .done(function(data) {
                // --- MODIFIED CONTENT PARSING FOR PARAGRAPHS ---
                // Split the content by one or more newlines followed by another newline (effectively blank lines)
                // This correctly identifies paragraph breaks as entered in a text editor (hitting enter twice)
                const paragraphs = data.split(/\n\s*\n/);

                // Map each segment to a <p> tag, trimming whitespace from ends.
                // This ensures that each "paragraph" from the text file becomes a proper HTML <p> element,
                // allowing CSS to control the spacing between them effectively.
                const formattedContent = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');

                $('#chapterContent').html(formattedContent);
                // --- END MODIFIED CONTENT PARSING ---

                $('#returnToNovelBtn').prop('disabled', false);
            })
            .fail(function(xhr, status, error) {
                const msg = `Sorry, but the chapter content could not be loaded. Please ensure the file exists at: <code>${chapterFilePath}</code>`;
                $('#chapterContent').html(`<p style="color: red;">${msg}</p><p>Error: ${xhr.status} ${xhr.statusText}</p>`);
                $('#returnToNovelBtn').prop('disabled', true);
            })
            .always(function() {
                $('#chapterContent').scrollTop(0); // Scroll to top after loading
                updateNavigationButtons();
            });

        const newUrl = `chapter.html?novelId=${currentNovelId}&chapterId=${currentChapterId}`;
        history.pushState({ novelId: currentNovelId, chapterId: currentChapterId }, '', newUrl);

        applyReaderSettings();
    }

    function updateNavigationButtons() {
        if (!currentNovel) {
            $('#prevChapter, #nextChapter, #prevChapterBottom, #nextChapterBottom').prop('disabled', true);
            return;
        }

        $('#prevChapter, #prevChapterBottom').prop('disabled', currentChapterIndex <= 0);
        $('#nextChapter, #nextChapterBottom').prop('disabled', currentChapterIndex >= currentNovel.chapters.length - 1);
    }

    $('#prevChapter, #prevChapterBottom').on('click', function() {
        if (currentChapterIndex > 0) {
            const prevChapter = currentNovel.chapters[currentChapterIndex - 1];
            loadChapter(currentNovelId, prevChapter.id);
        }
    });

    $('#nextChapter, #nextChapterBottom').on('click', function() {
        if (currentChapterIndex < currentNovel.chapters.length - 1) {
            const nextChapter = currentNovel.chapters[currentChapterIndex + 1];
            loadChapter(currentNovelId, nextChapter.id);
        }
    });

    function applyReaderSettings() {
        const $content = $('#chapterContent');

        // Background
        const activeBg = $('.setting-button[data-bg].active').data('bg');
        $content.removeClass('bg-light bg-dark bg-sepia').addClass('bg-' + activeBg);
        localStorage.setItem('readerBg', activeBg);

        // Font Size (now directly applied)
        $content.css('font-size', currentFontSize + 'px');
        localStorage.setItem('readerFontSizePx', currentFontSize); // Store pixel value
        updateFontSizeDisplay(); // Update the displayed font size

        // Font Family
        const activeFontFamily = $('.setting-button[data-font-family].active').data('font-family');
        $content.removeClass('font-serif font-sans-serif font-monospace').addClass('font-' + activeFontFamily);
        localStorage.setItem('readerFontFamily', activeFontFamily);
    }

    function updateFontSizeDisplay() {
        $('#currentFontSizeDisplay').text(`${currentFontSize}px`);
    }

    function loadSavedSettings() {
        const savedBg = localStorage.getItem('readerBg') || 'light';
        const savedFontSizePx = localStorage.getItem('readerFontSizePx');
        const savedFontFamily = localStorage.getItem('readerFontFamily') || 'serif';

        // Apply saved background
        $('.setting-button[data-bg]').removeClass('active');
        $(`.setting-button[data-bg="${savedBg}"]`).addClass('active');

        // Apply saved font size or default
        if (savedFontSizePx) {
            currentFontSize = parseInt(savedFontSizePx);
        } else {
            currentFontSize = BASE_FONT_SIZE_PX;
        }
        updateFontSizeDisplay(); // Initialize the display with the loaded/default size

        // Apply saved font family
        $('.setting-button[data-font-family]').removeClass('active');
        $(`.setting-button[data-font-family="${savedFontFamily}"]`).addClass('active');

        applyReaderSettings();
    }

    // Event listeners for settings
    $('.setting-button[data-bg]').on('click', function() {
        $('.setting-button[data-bg]').removeClass('active');
        $(this).addClass('active');
        applyReaderSettings();
    });

    // Handle font size buttons
    $('.setting-button[data-font-size="increase"]').on('click', function() {
        if (currentFontSize < MAX_FONT_SIZE) {
            currentFontSize += FONT_SIZE_INCREMENT;
            applyReaderSettings();
        }
    });

    $('.setting-button[data-font-size="decrease"]').on('click', function() {
        if (currentFontSize > MIN_FONT_SIZE) {
            currentFontSize -= FONT_SIZE_INCREMENT;
            applyReaderSettings();
        }
    });

    $('.setting-button[data-font-family]').on('click', function() {
        $('.setting-button[data-font-family]').removeClass('active');
        $(this).addClass('active');
        applyReaderSettings();
    });

    // Event listener for the "Return to Novel Details" button (its logic is unchanged)
    $('#returnToNovelBtn').on('click', function() {
        if (currentNovelId) {
            window.location.href = `novel.html?id=${currentNovelId}`;
        } else {
            console.error("Cannot return to novel details: currentNovelId is not set.");
            window.location.href = 'index.html'; // Redirect to home as a last resort
        }
    });

    // --- NEW: Toggle Reader Settings functionality ---
    $('#toggleSettingsBtn').on('click', function() {
        $('.reader-settings').toggleClass('hidden-settings'); // Toggle the class to show/hide
        $(this).toggleClass('active'); // Toggle active class for icon rotation
    });
    // --- END NEW TOGGLE ---


    const initialNovelId = getQueryParam('novelId');
    const initialChapterId = getQueryParam('chapterId');

    if (initialNovelId && initialChapterId) {
        loadChapter(initialNovelId, initialChapterId);
    } else {
        // Automatically load the first chapter of "Lord of the Mysteries" if no parameters are provided
        loadChapter(1, 1); // novelId: 1, chapterId: 1 (for "The Perpetual Fog")
    }

    loadSavedSettings();
});