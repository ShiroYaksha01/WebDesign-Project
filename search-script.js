$(document).ready(function() {
    $(document).ready(function() {
    const allNovelsData = [
        // ... (existing novel data - keep this as is) ...
        {
            id: 1,
            title: "Lord of the Mysteries",
            chapters: [
                { id: 1, title: "The Perpetual Fog", content: "<p>This is the content for Chapter 1 of Lord of the Mysteries.</p><p>It delves into the mysterious world that Klein Moretti finds himself in, slowly adapting to the new reality and discovering the hidden rules.</p><p>More text to simulate a full chapter.</p><p>The fog seemed to stretch endlessly, obscuring everything beyond a few feet. Klein felt a chill that had nothing to do with the damp air, a premonition of the unknown.</p>" },
                { id: 2, title: "The Tarot Gathering", content: "<p>This is the content for Chapter 2 of Lord of the Mysteries.</p><p>The initial gathering of the Tarot Club, an assembly of mysterious figures with their own secrets and agendas.</p><p>More text to simulate a full chapter.</p><p>Under the silent gaze of 'The Fool', the figures around the long, mottled table introduced themselves, their voices echoing with an otherworldly quality.</p>" },
                { id: 3, title: "Unveiling the Fool", content: "<p>This is the content for Chapter 3 of Lord of the Mysteries.</p><p>Klein begins to understand the powers and responsibilities that come with being 'The Fool'.</p><p>More text to simulate a full chapter.</p><p>The true nature of the Sefirah Castle and the weight of his new identity slowly dawned on Klein, a burden both daunting and exhilarating.</p>" },
                { id: 4, title: "Pathway to Mystery", content: "<p>This is the content for Chapter 4 of Lord of the Mysteries.</p><p>Exploration of the Beyonder pathways and the intricacies of the supernatural world.</p><p>More text to simulate a full chapter.</p><p>Each pathway represented a unique journey, a distinct set of abilities, and an inherent danger. Klein knew his choice would define his destiny.</p>" },
                { id: 5, title: "Secrets of Backlund", content: "<p>This is the content for Chapter 5 of Lord of the Mysteries.</p><p>Hidden secrets and conspiracies within the bustling city of Backlund.</p><p>More text to simulate a full chapter.</p><p>Beneath the veneer of Victorian prosperity, Backlund harbored a dark underbelly, where cults and secret organizations vied for power and ancient evils stirred.</p>" }
            ]
        },
        {
            id: 2,
            title: "Shadow Slave",
            chapters: [
                { id: 1, title: "The Waking Nightmare", content: "<p>This is the content for Chapter 1 of Shadow Slave.</p><p>Sunny's harsh reality and the beginning of his journey into the Nightmare Spell.</p>" },
                { id: 2, title: "First Ascent", content: "<p>This is the content for Chapter 2 of Shadow Slave.</p><p>His initial experiences and struggles within the terrifying world of the Dreamscape.</p>" },
                { id: 3, title: "Echoes of the Past", content: "<p>This is the content for Chapter 3 of Shadow Slave.</p><p>Uncovering fragments of forgotten history and their impact on the present.</p>" },
                { id: 4, title: "Whispers of the Sun", content: "<p>This is the content for Chapter 4 of Shadow Slave.</p><p>Encounters with powerful beings and the mysteries surrounding the sun.</p>" },
                { id: 5, title: "The Hidden City", content: "<p>This is the content for Chapter 5 of Shadow Slave.</p><p>Sunny discovers a concealed settlement, bringing new challenges and alliances.</p>" }
            ]
        },
        {
            id: 3,
            title: "Reverend Insanity",
            chapters: [
                { id: 1, title: "Spring Autumn Cicada", content: "<p>This is the content for Chapter 1 of Reverend Insanity.</p><p>Fang Yuan's rebirth and the activation of his legendary Gu.</p>" },
                { id: 2, title: "The Demonic Path", content: "<p>This is the content for Chapter 2 of Reverend Insanity.</p><p>His ruthless pursuit of power and disregard for conventional morality.</p>" },
                { id: 3, title: "Gu Master's Aspirations", content: "<p>This is the content for Chapter 3 of Reverend Insanity.</p><p>Fang Yuan's grand ambitions and his schemes to achieve them.</p>" },
                { id: 4, title: "Inheritance of Three Kings", content: "<p>This is the content for Chapter 4 of Reverend Insanity.</p><p>His exploration of ancient inheritances and their profound secrets.</p>" },
                { id: 5, title: "Cultivation and Schemes", content: "<p>This is the content for Chapter 5 of Reverend Insanity.</p><p>The intricate balance of cultivation and cunning plots in his journey.</p>" }
            ]
        },
        {
            id: 4,
            title: "Harry Potter",
            chapters: [
                { id: 1, title: "The Boy Who Lived", content: "<p>This is the content for Chapter 1 of Harry Potter.</p><p>The initial discovery of Harry's magical heritage and the tragic past.</p>" },
                { id: 2, title: "The Vanishing Glass", content: "<p>This is the content for Chapter 2 of Harry Potter.</p><p>Harry's accidental magic manifesting in unusual ways.</p>" },
                { id: 3, title: "The Letters From No One", content: "<p>This is the content for Chapter 3 of Harry Potter.</p><p>The influx of mysterious letters and the Dursleys' attempts to hide them.</p>" },
                { id: 4, title: "The Keeper of the Keys", content: "<p>This is the content for Chapter 4 of Harry Potter.</p><p>Hagrid's arrival and his revelation about Harry's true identity.</p>" },
                { id: 5, title: "Diagon Alley", content: "<p>This is the content for Chapter 5 of Harry Potter.</p><p>Harry's first visit to the magical shopping street, Diagon Alley.</p>" }
            ]
        },
        {
            id: 5,
            title: "Isekai Tensei Soudouki",
            chapters: [
                { id: 1, title: "The Triple Reincarnation", content: "<p>This is the content for Chapter 1 of Isekai Tensei Soudouki.</p><p>Three souls merging into one body in a new world.</p>" },
                { id: 2, title: "A Noble's Son", content: "<p>This is the content for Chapter 2 of Isekai Tensei Soudouki.</p><p>Adjusting to life as Baltazar, a son of a noble family.</p>" },
                { id: 3, title: "Managing the Territory", content: "<p>This is the content for Chapter 3 of Isekai Tensei Soudouki.</p><p>Using their combined knowledge to improve their family's domain.</p>" },
                { id: 4, title: "New Technologies", content: "<p>This is the content for Chapter 4 of Isekai Tensei Soudouki.</p><p>Introducing modern concepts and inventions to a fantasy setting.</p>" },
                { id: 5, title: "Intrigue at Court", content: "<p>This is the content for Chapter 5 of Isekai Tensei Soudouki.</p><p>Navigating political challenges and rivalries within the kingdom.</p>" }
            ]
        },
        {
            id: 6,
            title: "Solo Leveling",
            chapters: [
                { id: 1, title: "The Weakest Hunter", content: "<p>This is the content for Chapter 1 of Solo Leveling.</p><p>Sung Jinwoo's humble beginnings as the weakest E-rank hunter.</p>" },
                { id: 2, title: "The Double Dungeon", content: "<p>This is the content for Chapter 2 of Solo Leveling.</p><p>The fateful discovery of a hidden, deadly dungeon.</p>" },
                { id: 3, title: "The System", content: "<p>This is the content for Chapter 3 of Solo Leveling.</p><p>Jinwoo's encounter with the mysterious System that grants him unique abilities.</p>" },
                { id: 4, title: "Level Up", content: "<p>This is the content for Chapter 4 of Solo Leveling.</p><p>His rapid growth and transformation from weak to strong.</p>" },
                { id: 5, title: "Shadow Army", content: "<p>This is the content for Chapter 5 of Solo Leveling.</p><p>The emergence of his iconic shadow soldiers and their loyalty.</p>" }
            ]
        },
        {
            id: 7,
            title: "Arifureta Shokugyou De Sekai Saikyou",
            chapters: [
                { id: 1, title: "Summoned to Tortus", content: "<p>This is the content for Chapter 1 of Arifureta Shokugyou De Sekai Saikyou.</p><p>Hajime and his classmates are transported to another world.</p>" },
                { id: 2, title: "Betrayal in the Abyss", content: "<p>This is the content for Chapter 2 of Arifureta Shokugyou De Sekai Saikyou.</p><p>Hajime's fall into the dungeon and his subsequent transformation.</p>" },
                { id: 3, title: "The Vampire Princess", content: "<p>This is the content for Chapter 3 of Arifureta Shokugyou De Sekai Saikyou.</p><p>His encounter with Yue, the imprisoned vampire.</p>" },
                { id: 4, title: "Hajime's Resolve", content: "<p>This is the content for Chapter 4 of Arifureta Shokugyou De Sekai Saikyou.</p><p>His determination to survive and find a way back home.</p>" },
                { id: 5, title: "Breaking Through", content: "<p>This is the content for Chapter 5 of Arifureta Shokugyou De Sekai Saikyou.</p><p>Overcoming obstacles and growing stronger with each challenge.</p>" }
            ]
        },
        {
            id: 8,
            title: "Tales of Demons and Gods",
            chapters: [
                { id: 1, title: "Rebirth to the Past", content: "<p>This is the content for Chapter 1 of Tales of Demons and Gods.</p><p>Nie Li's rebirth and his second chance at life.</p>" },
                { id: 2, title: "Glory City's Future", content: "<p>This is the content for Chapter 2 of Tales of Demons and Gods.</p><p>His efforts to protect his home city from future destruction.</p>" },
                { id: 3, title: "Cultivating Anew", content: "<p>This is the content for Chapter 3 of Tales of Demons and Gods.</p><p>His accelerated cultivation using his past knowledge.</p>" }
            ]
        }
    ];

    let currentNovelId = null;
    let currentChapterIndex = 0;
    const $chapterContent = $('#chapterContent');
    const $chapterTitleDisplay = $('#chapterTitleDisplay');
    const $currentFontSizeDisplay = $('#currentFontSizeDisplay');
    const $body = $('body'); // Get the body element

    // Load saved settings or set defaults
    let currentFontSize = parseFloat(localStorage.getItem('chapterFontSize')) || 18; // Default 18px
    let currentBackground = localStorage.getItem('chapterBackground') || 'light';
    let currentFontFamily = localStorage.getItem('chapterFontFamily') || 'serif';

    // Apply initial settings
    applySettings();

    function getNovelById(id) {
        return allNovelsData.find(novel => novel.id === id);
    }

    function loadChapter(novelId, chapterIndex) {
        const novel = getNovelById(novelId);
        if (!novel || !novel.chapters || chapterIndex < 0 || chapterIndex >= novel.chapters.length) {
            $chapterContent.html('<p>Chapter not found.</p>');
            $chapterTitleDisplay.text('Chapter Not Found');
            $('#prevChapter, #nextChapter, #prevChapterBottom, #nextChapterBottom').prop('disabled', true);
            return;
        }

        currentNovelId = novelId;
        currentChapterIndex = chapterIndex;
        const chapter = novel.chapters[chapterIndex];

        $chapterTitleDisplay.text(`${novel.title} - Chapter ${chapter.id}: ${chapter.title}`);
        $chapterContent.html(chapter.content);
        document.title = `${chapter.title} - NovelVerse`; // Update page title

        // Update navigation buttons
        $('#prevChapter, #prevChapterBottom').prop('disabled', chapterIndex === 0);
        $('#nextChapter, #nextChapterBottom').prop('disabled', chapterIndex === novel.chapters.length - 1);

        // Save current chapter and novel to session storage
        sessionStorage.setItem('currentNovelId', novelId);
        sessionStorage.setItem('currentChapterIndex', chapterIndex);
    }

    // Function to apply current settings
    function applySettings() {
        // Apply background to the body
        $body.removeClass('bg-light bg-dark bg-sepia').addClass('bg-' + currentBackground);
        // Ensure header/footer/main content container background is adjusted if needed
        // For example, if header/footer also change color based on body background,
        // you might need to adjust their text color or background-color here if they are hardcoded.
        // As per current style.css, their backgrounds are fixed, so only text color would be affected
        // by inherited 'color' from body.

        // Apply background button active state (in the dropdown)
        $('.setting-button[data-bg]').removeClass('active');
        $('.setting-button[data-bg="' + currentBackground + '"]').addClass('active');
        
        // Apply font size ONLY to chapter content
        $chapterContent.css('font-size', currentFontSize + 'px');
        $currentFontSizeDisplay.text(currentFontSize + 'px');

        // Apply font family ONLY to chapter content
        $chapterContent.removeClass('font-serif font-sans-serif font-monospace').addClass('font-' + currentFontFamily);
        // Apply font family button active state (in the dropdown)
        $('.setting-button[data-font-family]').removeClass('active');
        $('.setting-button[data-font-family="' + currentFontFamily + '"]').addClass('active');

        // Save settings to local storage
        localStorage.setItem('chapterFontSize', currentFontSize);
        localStorage.setItem('chapterBackground', currentBackground);
        localStorage.setItem('chapterFontFamily', currentFontFamily);
    }

    // Get novelId and chapterIndex from URL or session storage
    const urlParams = new URLSearchParams(window.location.search);
    const novelIdFromUrl = parseInt(urlParams.get('novelId'));
    const chapterIdFromUrl = parseInt(urlParams.get('chapterId')); // Assuming chapterId is also passed

    let initialNovelId = parseInt(sessionStorage.getItem('currentNovelId'));
    let initialChapterIndex = parseInt(sessionStorage.getItem('currentChapterIndex'));

    if (novelIdFromUrl && chapterIdFromUrl) {
        // If coming from novel details page, find chapter index by chapterId
        const novel = getNovelById(novelIdFromUrl);
        if (novel) {
            const foundIndex = novel.chapters.findIndex(c => c.id === chapterIdFromUrl);
            if (foundIndex !== -1) {
                loadChapter(novelIdFromUrl, foundIndex);
            } else {
                // Fallback to first chapter if specific chapterId not found
                loadChapter(novelIdFromUrl, 0);
            }
        } else {
            // Handle case where novel ID from URL is invalid
            $chapterContent.html('<p>Novel not found.</p>');
            $chapterTitleDisplay.text('Error');
        }
    } else if (!isNaN(initialNovelId) && !isNaN(initialChapterIndex)) {
        loadChapter(initialNovelId, initialChapterIndex);
    } else {
        // Default load or error message if no ID is found
        $chapterContent.html('<p>Please select a novel and chapter to read.</p>');
        $chapterTitleDisplay.text('Welcome to the Reader');
    }

    // Event Listeners for chapter navigation
    $('#prevChapter, #prevChapterBottom').on('click', function() {
        if (currentChapterIndex > 0) {
            loadChapter(currentNovelId, currentChapterIndex - 1);
        }
    });

    $('#nextChapter, #nextChapterBottom').on('click', function() {
        const novel = getNovelById(currentNovelId);
        if (novel && currentChapterIndex < novel.chapters.length - 1) {
            loadChapter(currentNovelId, currentChapterIndex + 1);
        }
    });

    // Event Listener for return to novel button
    $('#returnToNovelBtn').on('click', function() {
        if (currentNovelId) {
            window.location.href = `novel.html?id=${currentNovelId}`;
        } else {
            window.location.href = `index.html`; // Fallback to home if no novel ID
        }
    });

    // --- Reader Settings (now handled via dropdown) ---
    const $settingsMenuBtn = $('#settingsMenuBtn');
    const $readerSettingsMenu = $('#readerSettingsMenu');

    // Toggle settings menu visibility
    $settingsMenuBtn.on('click', function(event) {
        event.stopPropagation(); // Prevent document click from closing immediately
        $readerSettingsMenu.toggleClass('active');
    });

    // Close settings menu when clicking outside
    $(document).on('click', function(event) {
        if (!$readerSettingsMenu.is(event.target) && $readerSettingsMenu.has(event.target).length === 0 && !$settingsMenuBtn.is(event.target)) {
            $readerSettingsMenu.removeClass('active');
        }
    });


    // Background settings (affects entire body)
    $readerSettingsMenu.on('click', '.setting-button[data-bg]', function() {
        currentBackground = $(this).data('bg');
        applySettings();
    });

    // Font size settings (affects only chapter content)
    $readerSettingsMenu.on('click', '.setting-button[data-font-size="increase"]', function() {
        if (currentFontSize < 30) { // Max font size
            currentFontSize += 2;
            applySettings();
        }
    });

    $readerSettingsMenu.on('click', '.setting-button[data-font-size="decrease"]', function() {
        if (currentFontSize > 12) { // Min font size
            currentFontSize -= 2;
            applySettings();
        }
    });

    // Font family settings (affects only chapter content)
    $readerSettingsMenu.on('click', '.setting-button[data-font-family]', function() {
        currentFontFamily = $(this).data('font-family');
        applySettings();
    });

    // Apply global settings when any page loads, not just chapter.html
    // This ensures background preference persists across the entire site.
    function applyGlobalSettings() {
        const savedBackground = localStorage.getItem('chapterBackground') || 'light';
        $('body').removeClass('bg-light bg-dark bg-sepia').addClass('bg-' + savedBackground);
    }

    // Call applyGlobalSettings on document ready for all pages that include script.js
    // Since script.js is included in index.html, novel.html, and chapter.html, this will work.
    applyGlobalSettings();

});

    // Function to get query parameter from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Function to render novel cards into the grid
    function renderNovelCards(novels) {
        var $grid = $('#searchResultsGrid');
        $grid.empty(); // Clear existing content

        if (novels.length === 0) {
            $('#noResultsMessage').show();
            return;
        } else {
            $('#noResultsMessage').hide();
        }

        $.each(novels, function(index, novel) {
            var tagsHtml = novel.genres.map(genre => `<span class="tag">${genre}</span>`).join('');
            var novelCard = `
                <div class="novel-card">
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

    // Function to display novels based on search term
    let currentSearchTerm = '';
    let currentSort = 'name'; // Default sort
    function displayNovels(searchTerm, sortBy = 'name') {
        currentSearchTerm = searchTerm;
        currentSort = sortBy;

        let filteredNovels = allNovelsData.filter(function(novel) {
            return novel.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        
        // Sort the filtered novels
        if (sortBy === 'name') {
            filteredNovels.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (sortBy === 'latest') {
            filteredNovels.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortBy === 'popularity') {
            filteredNovels.sort((a, b) => b.popularity - a.popularity);
        }
        renderNovelCards(filteredNovels);
    }

    // Get search term from URL
    var searchTerm = getQueryParam('q') || '';
    $('#searchResultsHeading').text('Search Results for "' + searchTerm + '"');
    $('#searchInput').val(searchTerm); // Pre-fill header search box

    // Initial display of novels
    displayNovels(searchTerm, currentSort);

    // Attach click events to sort buttons
    $('.sort-button').on('click', function() {
        $('.sort-button').removeClass('active');
        $(this).addClass('active');
        currentSort = $(this).data('sort');
        displayNovels(currentSearchTerm, currentSort);
    });

    // Make header search responsive to this page as well
    $('#searchButton').on('click', function() {
        var newSearchTerm = $('#searchInput').val().trim();
        if (newSearchTerm) {
            window.location.href = 'search.html?q=' + encodeURIComponent(newSearchTerm);
        }
    });

    $('#searchInput').on('keypress', function(event) {
        if (event.which === 13) {
            var newSearchTerm = $('#searchInput').val().trim();
            if (newSearchTerm) {
                window.location.href = 'search.html?q=' + encodeURIComponent(newSearchTerm);
            }
            event.preventDefault();
        }
    });
});