$(document).ready(function() {
    const allNovelsData = [
        // ... (existing novel data - keep this as is) ...
        {
            id: 1,
            title: "Lord of the Mysteries",
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
            // Do not use alert() as per instructions.
            // alert("Could not determine novel to return to."); // Removed alert
            // You might want to implement a custom modal or message display here if you need user feedback.
            window.location.href = 'index.html'; // Redirect to home as a last resort
        }
    });

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
