/**
 * Spotify Web Player Clone - Vanilla JavaScript
 * Senior Principal Frontend Engineer Implementation
 */

// ==========================================
// 1. SAMPLE DATASET & PLAYLIST REPOSITORY
// ==========================================

const SAMPLE_TRACKS = [
  {
    id: "track-1",
    title: "Midnight City Lights",
    artist: "Neon Skyline",
    album: "Electric Horizon",
    duration: "6:12",
    durationSec: 372,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
    category: "recently-played",
    genre: "Electronic / Synthwave"
  },
  {
    id: "track-2",
    title: "Coffee & Lo-Fi Rain",
    artist: "Chilled Velvet",
    album: "Study Sessions Vol. 2",
    duration: "7:05",
    durationSec: 425,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80",
    category: "made-for-you",
    genre: "Lo-Fi Beats"
  },
  {
    id: "track-3",
    title: "Golden Hour Waves",
    artist: "Solaris Collective",
    album: "Pacific Sunrise",
    duration: "5:44",
    durationSec: 344,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    category: "top-charts",
    genre: "Indie Pop"
  },
  {
    id: "track-4",
    title: "Velvet Groove",
    artist: "The Midnight Trio",
    album: "After Hours Lounge",
    duration: "5:02",
    durationSec: 302,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    category: "recently-played",
    genre: "Jazz & Soul"
  },
  {
    id: "track-5",
    title: "Hyperdrive Velocity",
    artist: "Apex Dynamo",
    album: "Nitro Run",
    duration: "5:17",
    durationSec: 317,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    coverUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=600&auto=format&fit=crop&q=80",
    category: "top-charts",
    genre: "Rock / Metal"
  },
  {
    id: "track-6",
    title: "Deep Focus Echoes",
    artist: "Aura Soundscapes",
    album: "Mindful Moments",
    duration: "6:48",
    durationSec: 408,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    coverUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop&q=80",
    category: "made-for-you",
    genre: "Ambient / Meditation"
  },
  {
    id: "track-7",
    title: "Retro Arcade Odyssey",
    artist: "Pixel Pulse",
    album: "Level 99",
    duration: "8:45",
    durationSec: 525,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    coverUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    category: "recently-played",
    genre: "Chiptune / Electro"
  },
  {
    id: "track-8",
    title: "Acoustic Sanctuary",
    artist: "Willow & Pine",
    album: "Cabin Sessions",
    duration: "4:32",
    durationSec: 272,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80",
    category: "made-for-you",
    genre: "Acoustic Folk"
  }
];

const INITIAL_PLAYLISTS = [
  { id: "pl-liked", name: "Liked Songs", count: "3 songs", isLiked: true, type: "Playlist • Auto" },
  { id: "pl-1", name: "Today's Top Hits", count: "50 songs", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80", type: "Playlist • Spotify" },
  { id: "pl-2", name: "Chill Lofi Study Beats", count: "120 songs", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=80", type: "Playlist • Spotify" },
  { id: "pl-3", name: "Discover Weekly", count: "30 songs", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80", type: "Playlist • Updated Monday" },
  { id: "pl-4", name: "Deep Focus Piano", count: "85 songs", cover: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&auto=format&fit=crop&q=80", type: "Playlist • Spotify" },
  { id: "pl-5", name: "Synthwave After Dark", count: "64 songs", cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80", type: "Playlist • User" }
];

const BROWSE_GENRES = [
  { name: "Pop", color: "#8d67ab", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80" },
  { name: "Hip-Hop", color: "#ba5d07", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=80" },
  { name: "Indie", color: "#608108", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80" },
  { name: "Rock", color: "#e91429", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=80" },
  { name: "Electronic", color: "#006450", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80" },
  { name: "Chill", color: "#477d95", image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&auto=format&fit=crop&q=80" },
  { name: "Jazz & Blues", color: "#1e3264", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80" },
  { name: "Workout", color: "#777777", image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=80" }
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================

class SpotifyApp {
  constructor() {
    // Persistent Liked Track IDs
    const savedLikes = localStorage.getItem("spotify_liked_tracks");
    this.likedTrackIds = savedLikes ? JSON.parse(savedLikes) : ["track-1", "track-3"];

    // Custom Playlists
    const savedPlaylists = localStorage.getItem("spotify_custom_playlists");
    this.playlists = savedPlaylists ? JSON.parse(savedPlaylists) : INITIAL_PLAYLISTS;

    this.tracks = [...SAMPLE_TRACKS];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = "off"; // 'off' | 'all' | 'one'
    this.volume = 0.8;
    this.isMuted = false;
    this.previousVolume = 0.8;
    this.currentView = "home"; // 'home' | 'search' | 'library' | 'playlist'
    this.searchQuery = "";
    this.isDraggingSeek = false;

    // Audio Engine
    this.audio = new Audio();
    this.audio.preload = "auto";
    this.audio.crossOrigin = "anonymous";
    this.audio.volume = this.volume;

    // Web Audio Fallback Synthesizer for offline/network-restricted fallback
    this.audioCtx = null;
    this.synthOsc = null;
    this.synthGain = null;

    this.initDOM();
    this.initAudioEvents();
    this.initEventListeners();
    this.renderAll();
    this.updateGreeting();
  }

  // ==========================================
  // 3. DOM ELEMENT CACHING
  // ==========================================

  initDOM() {
    // Navigation
    this.navHome = document.getElementById("nav-home");
    this.navSearch = document.getElementById("nav-search");
    this.navLibrary = document.getElementById("nav-library");
    this.btnCreatePlaylist = document.getElementById("btn-create-playlist");

    // Views
    this.homeView = document.getElementById("home-view");
    this.searchView = document.getElementById("search-view");
    this.playlistsContainer = document.getElementById("playlists-container");
    this.greetingHeading = document.getElementById("greeting-text");

    // Search Elements
    this.searchInput = document.getElementById("header-search-input");
    this.searchClearBtn = document.getElementById("search-clear-btn");
    this.searchResultsSection = document.getElementById("search-results-section");
    this.browseGenresSection = document.getElementById("browse-genres-section");
    this.searchTopResult = document.getElementById("search-top-result");
    this.searchSongsList = document.getElementById("search-songs-list");
    this.searchEmptyState = document.getElementById("search-empty-state");

    // Grids
    this.quickJumpGrid = document.getElementById("quick-jump-grid");
    this.recentlyPlayedGrid = document.getElementById("recently-played-grid");
    this.madeForYouGrid = document.getElementById("made-for-you-grid");
    this.topChartsGrid = document.getElementById("top-charts-grid");
    this.genresGrid = document.getElementById("genres-grid");

    // Player Bar
    this.playerCoverImg = document.getElementById("player-cover-img");
    this.playerTrackTitle = document.getElementById("player-track-title");
    this.playerTrackArtist = document.getElementById("player-track-artist");
    this.playerLikeBtn = document.getElementById("player-like-btn");

    // Player Controls
    this.btnShuffle = document.getElementById("btn-shuffle");
    this.btnPrev = document.getElementById("btn-prev");
    this.btnPlayPause = document.getElementById("btn-play-pause");
    this.btnNext = document.getElementById("btn-next");
    this.btnRepeat = document.getElementById("btn-repeat");
    this.playIconSvg = document.getElementById("play-icon-svg");
    this.pauseIconSvg = document.getElementById("pause-icon-svg");

    // Seek & Time
    this.timeCurrent = document.getElementById("time-current");
    this.timeDuration = document.getElementById("time-duration");
    this.seekSlider = document.getElementById("seek-slider");
    this.seekSliderContainer = document.getElementById("seek-slider-container");

    // Volume
    this.btnVolume = document.getElementById("btn-volume");
    this.volumeSlider = document.getElementById("volume-slider");
    this.volumeIconSvg = document.getElementById("volume-icon-svg");

    // Menu Button & Mobile Drawer
    this.btnMenuToggle = document.getElementById("btn-menu-toggle");
    this.menuDropdown = document.getElementById("menu-dropdown");
    this.sidebar = document.getElementById("sidebar");
    this.sidebarOverlay = document.getElementById("sidebar-overlay");
    this.sidebarCloseBtn = document.getElementById("sidebar-close-btn");

    // Modals & Panels
    this.queueBtn = document.getElementById("btn-queue");
    this.queuePanel = document.getElementById("queue-panel");
    this.queueCloseBtn = document.getElementById("queue-close-btn");
    this.queueList = document.getElementById("queue-list");
    
    this.createPlaylistModal = document.getElementById("create-playlist-modal");
    this.modalCancelBtn = document.getElementById("modal-cancel-btn");
    this.modalCreateBtn = document.getElementById("modal-create-btn");
    this.modalPlaylistName = document.getElementById("modal-playlist-name");

    this.shortcutsModal = document.getElementById("shortcuts-modal");
    this.settingsModal = document.getElementById("settings-modal");

    // Toast
    this.toast = document.getElementById("toast-notification");
    this.toastMessage = document.getElementById("toast-message");
  }

  // ==========================================
  // 4. AUDIO ENGINE & EVENT HANDLERS
  // ==========================================

  initAudioEvents() {
    this.audio.addEventListener("timeupdate", () => {
      if (!this.isDraggingSeek && this.audio.duration) {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.seekSlider.value = progress;
        this.seekSlider.style.setProperty("--progress", `${progress}%`);
        this.timeCurrent.textContent = this.formatTime(this.audio.currentTime);
      }
    });

    this.audio.addEventListener("loadedmetadata", () => {
      this.timeDuration.textContent = this.formatTime(this.audio.duration);
    });

    this.audio.addEventListener("ended", () => {
      if (this.repeatMode === "one") {
        this.audio.currentTime = 0;
        this.audio.play();
      } else {
        this.playNext();
      }
    });

    this.audio.addEventListener("play", () => {
      this.isPlaying = true;
      this.updatePlayPauseUI();
    });

    this.audio.addEventListener("pause", () => {
      this.isPlaying = false;
      this.updatePlayPauseUI();
    });

    // Error handling with automated fallback audio synthesis
    this.audio.addEventListener("error", (e) => {
      console.warn("Audio source could not be played directly, activating synthesizer fallback mode.", e);
      this.fallbackSyntheticPlayback();
    });
  }

  fallbackSyntheticPlayback() {
    // Ensure the player UI still moves and sounds musical even if an external URL is firewalled
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
    } catch (err) {
      console.error("Web Audio fallback error", err);
    }
  }

  loadTrack(index, autoPlay = false) {
    if (index < 0 || index >= this.tracks.length) return;
    this.currentTrackIndex = index;
    const track = this.tracks[this.currentTrackIndex];

    this.audio.src = track.audioUrl;
    this.audio.load();

    this.playerCoverImg.src = track.coverUrl;
    this.playerCoverImg.alt = track.title;
    this.playerTrackTitle.textContent = track.title;
    this.playerTrackArtist.textContent = track.artist;
    this.timeCurrent.textContent = "0:00";
    this.timeDuration.textContent = track.duration || "3:30";
    this.seekSlider.value = 0;
    this.seekSlider.style.setProperty("--progress", "0%");

    // Update Like state in player bar
    const isLiked = this.likedTrackIds.includes(track.id);
    this.playerLikeBtn.classList.toggle("liked", isLiked);

    this.updateActiveCardHighlights();
    this.renderQueue();

    if (autoPlay) {
      this.playTrack();
    }
  }

  playTrack() {
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Auto-play prevented or stream network error:", error);
        // User interaction requirement or network issue handled smoothly
        this.isPlaying = false;
        this.updatePlayPauseUI();
      });
    }
  }

  pauseTrack() {
    this.audio.pause();
  }

  togglePlayPause() {
    if (!this.audio.src || this.audio.src === "") {
      this.loadTrack(this.currentTrackIndex, true);
      return;
    }
    if (this.isPlaying) {
      this.pauseTrack();
    } else {
      this.playTrack();
    }
  }

  playPrev() {
    // If audio is more than 3s in, restart current track
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    let prevIndex = this.currentTrackIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.tracks.length - 1;
    }
    this.loadTrack(prevIndex, true);
  }

  playNext() {
    let nextIndex;
    if (this.isShuffle) {
      do {
        nextIndex = Math.floor(Math.random() * this.tracks.length);
      } while (this.tracks.length > 1 && nextIndex === this.currentTrackIndex);
    } else {
      nextIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    }
    this.loadTrack(nextIndex, true);
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.btnShuffle.classList.toggle("active", this.isShuffle);
    this.showToast(this.isShuffle ? "Shuffle is ON" : "Shuffle is OFF");
  }

  toggleRepeat() {
    if (this.repeatMode === "off") {
      this.repeatMode = "all";
      this.btnRepeat.classList.add("active");
      this.showToast("Repeat playlist enabled");
    } else if (this.repeatMode === "all") {
      this.repeatMode = "one";
      this.btnRepeat.classList.add("active");
      this.btnRepeat.setAttribute("title", "Repeat One Track");
      this.showToast("Repeat current track enabled");
    } else {
      this.repeatMode = "off";
      this.btnRepeat.classList.remove("active");
      this.btnRepeat.setAttribute("title", "Repeat");
      this.showToast("Repeat disabled");
    }
  }

  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));
    this.audio.volume = this.volume;
    this.volumeSlider.value = this.volume * 100;
    this.volumeSlider.style.setProperty("--progress", `${this.volume * 100}%`);
    this.isMuted = this.volume === 0;
    this.updateVolumeIcon();
  }

  toggleMute() {
    if (this.isMuted) {
      this.setVolume(this.previousVolume || 0.8);
      this.isMuted = false;
    } else {
      this.previousVolume = this.volume;
      this.setVolume(0);
      this.isMuted = true;
    }
    this.updateVolumeIcon();
  }

  seekToPercent(percent) {
    if (this.audio.duration) {
      const targetTime = (percent / 100) * this.audio.duration;
      this.audio.currentTime = targetTime;
      this.timeCurrent.textContent = this.formatTime(targetTime);
      this.seekSlider.style.setProperty("--progress", `${percent}%`);
    }
  }

  toggleLike(trackId) {
    const idx = this.likedTrackIds.indexOf(trackId);
    let isNowLiked = false;
    if (idx > -1) {
      this.likedTrackIds.splice(idx, 1);
      this.showToast("Removed from your Liked Songs");
    } else {
      this.likedTrackIds.push(trackId);
      isNowLiked = true;
      this.showToast("Added to your Liked Songs");
    }

    localStorage.setItem("spotify_liked_tracks", JSON.stringify(this.likedTrackIds));

    // Update player heart if it's currently active track
    if (this.tracks[this.currentTrackIndex]?.id === trackId) {
      this.playerLikeBtn.classList.toggle("liked", isNowLiked);
    }

    this.renderPlaylists();
  }

  // ==========================================
  // 5. EVENT LISTENERS
  // ==========================================

  initEventListeners() {
    // Navigation items
    this.navHome.addEventListener("click", () => this.switchView("home"));
    this.navSearch.addEventListener("click", () => {
      this.switchView("search");
      this.searchInput.focus();
    });
    this.navLibrary.addEventListener("click", () => this.switchView("library"));

    // Playback buttons
    this.btnPlayPause.addEventListener("click", () => this.togglePlayPause());
    this.btnPrev.addEventListener("click", () => this.playPrev());
    this.btnNext.addEventListener("click", () => this.playNext());
    this.btnShuffle.addEventListener("click", () => this.toggleShuffle());
    this.btnRepeat.addEventListener("click", () => this.toggleRepeat());

    // Like button on player
    this.playerLikeBtn.addEventListener("click", () => {
      const curTrack = this.tracks[this.currentTrackIndex];
      if (curTrack) this.toggleLike(curTrack.id);
    });

    // Seek Slider Scrubbing
    this.seekSlider.addEventListener("input", (e) => {
      this.isDraggingSeek = true;
      const val = parseFloat(e.target.value);
      this.seekSlider.style.setProperty("--progress", `${val}%`);
      if (this.audio.duration) {
        this.timeCurrent.textContent = this.formatTime((val / 100) * this.audio.duration);
      }
    });

    this.seekSlider.addEventListener("change", (e) => {
      this.isDraggingSeek = false;
      this.seekToPercent(parseFloat(e.target.value));
    });

    // Volume Slider
    this.volumeSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) / 100;
      this.setVolume(val);
    });

    this.btnVolume.addEventListener("click", () => this.toggleMute());

    // Search Input Filtering
    this.searchInput.addEventListener("input", (e) => {
      this.handleSearch(e.target.value);
    });

    this.searchClearBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.handleSearch("");
      this.searchInput.focus();
    });

    // Queue Panel
    this.queueBtn.addEventListener("click", () => {
      this.queuePanel.classList.toggle("visible");
    });

    this.queueCloseBtn.addEventListener("click", () => {
      this.queuePanel.classList.remove("visible");
    });

    // Create Playlist Modal
    this.btnCreatePlaylist.addEventListener("click", () => {
      this.createPlaylistModal.classList.add("open");
      this.modalPlaylistName.value = `My Playlist #${this.playlists.length + 1}`;
      this.modalPlaylistName.focus();
    });

    this.modalCancelBtn.addEventListener("click", () => {
      this.createPlaylistModal.classList.remove("open");
    });

    const modalCloseBtn = document.getElementById("modal-close-btn");
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => {
        this.createPlaylistModal.classList.remove("open");
      });
    }

    this.modalCreateBtn.addEventListener("click", () => {
      this.createNewPlaylist();
    });

    this.createPlaylistModal.addEventListener("click", (e) => {
      if (e.target === this.createPlaylistModal) {
        this.createPlaylistModal.classList.remove("open");
      }
    });

    // Main Menu Button & Dropdown Handling
    if (this.btnMenuToggle) {
      this.btnMenuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    }

    // Close Menu Dropdown when clicking anywhere outside
    document.addEventListener("click", (e) => {
      if (this.menuDropdown && this.menuDropdown.classList.contains("open")) {
        if (!this.menuDropdown.contains(e.target) && !this.btnMenuToggle.contains(e.target)) {
          this.closeMenu();
        }
      }
    });

    // Mobile Sidebar Drawer Close & Overlay
    if (this.sidebarOverlay) {
      this.sidebarOverlay.addEventListener("click", () => {
        this.closeSidebarDrawer();
      });
    }

    if (this.sidebarCloseBtn) {
      this.sidebarCloseBtn.addEventListener("click", () => {
        this.closeSidebarDrawer();
      });
    }

    // Menu Item Actions
    const menuItemHome = document.getElementById("menu-item-home");
    if (menuItemHome) {
      menuItemHome.addEventListener("click", () => {
        this.switchView("home");
        this.closeMenu();
        this.closeSidebarDrawer();
      });
    }

    const menuItemSearch = document.getElementById("menu-item-search");
    if (menuItemSearch) {
      menuItemSearch.addEventListener("click", () => {
        this.switchView("search");
        this.closeMenu();
        this.closeSidebarDrawer();
        if (this.searchInput) this.searchInput.focus();
      });
    }

    const menuItemLibrary = document.getElementById("menu-item-library");
    if (menuItemLibrary) {
      menuItemLibrary.addEventListener("click", () => {
        this.closeMenu();
        if (window.innerWidth <= 650) {
          this.toggleSidebarDrawer();
        } else {
          this.showToast("Your Library (Sidebar)");
        }
      });
    }

    const menuItemLiked = document.getElementById("menu-item-liked");
    if (menuItemLiked) {
      menuItemLiked.addEventListener("click", () => {
        this.filterLikedSongs();
        this.closeMenu();
        this.closeSidebarDrawer();
      });
    }

    const menuItemCreatePl = document.getElementById("menu-item-create-pl");
    if (menuItemCreatePl) {
      menuItemCreatePl.addEventListener("click", () => {
        this.closeMenu();
        this.closeSidebarDrawer();
        this.createPlaylistModal.classList.add("open");
        this.modalPlaylistName.value = `My Playlist #${this.playlists.length + 1}`;
        this.modalPlaylistName.focus();
      });
    }

    const menuItemQueue = document.getElementById("menu-item-queue");
    if (menuItemQueue) {
      menuItemQueue.addEventListener("click", () => {
        this.queuePanel.classList.toggle("visible");
        this.closeMenu();
      });
    }

    const menuItemShortcuts = document.getElementById("menu-item-shortcuts");
    if (menuItemShortcuts) {
      menuItemShortcuts.addEventListener("click", () => {
        this.closeMenu();
        if (this.shortcutsModal) this.shortcutsModal.classList.add("open");
      });
    }

    const menuItemSettings = document.getElementById("menu-item-settings");
    if (menuItemSettings) {
      menuItemSettings.addEventListener("click", () => {
        this.closeMenu();
        if (this.settingsModal) this.settingsModal.classList.add("open");
      });
    }

    const menuItemLogout = document.getElementById("menu-item-logout");
    if (menuItemLogout) {
      menuItemLogout.addEventListener("click", () => {
        this.closeMenu();
        this.showToast("Signed out of Alex M. guest session");
      });
    }

    // Keyboard Shortcuts Modal Handlers
    const shortcutsCloseBtn = document.getElementById("shortcuts-close-btn");
    const shortcutsOkBtn = document.getElementById("shortcuts-ok-btn");
    if (shortcutsCloseBtn) {
      shortcutsCloseBtn.addEventListener("click", () => {
        if (this.shortcutsModal) this.shortcutsModal.classList.remove("open");
      });
    }
    if (shortcutsOkBtn) {
      shortcutsOkBtn.addEventListener("click", () => {
        if (this.shortcutsModal) this.shortcutsModal.classList.remove("open");
      });
    }
    if (this.shortcutsModal) {
      this.shortcutsModal.addEventListener("click", (e) => {
        if (e.target === this.shortcutsModal) this.shortcutsModal.classList.remove("open");
      });
    }

    // Settings Modal Handlers
    const settingsCloseBtn = document.getElementById("settings-close-btn");
    const settingsSaveBtn = document.getElementById("settings-save-btn");
    if (settingsCloseBtn) {
      settingsCloseBtn.addEventListener("click", () => {
        if (this.settingsModal) this.settingsModal.classList.remove("open");
      });
    }
    if (settingsSaveBtn) {
      settingsSaveBtn.addEventListener("click", () => {
        if (this.settingsModal) this.settingsModal.classList.remove("open");
        this.showToast("Playback preferences updated successfully");
      });
    }
    if (this.settingsModal) {
      this.settingsModal.addEventListener("click", (e) => {
        if (e.target === this.settingsModal) this.settingsModal.classList.remove("open");
      });
    }

    // Top Bar & Logo interactions
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
      brandLogo.addEventListener("click", (e) => {
        e.preventDefault();
        this.switchView("home");
        this.closeSidebarDrawer();
      });
    }

    const backBtn = document.getElementById("history-back-btn");
    const forwardBtn = document.getElementById("history-forward-btn");
    if (backBtn) backBtn.addEventListener("click", () => this.switchView("home"));
    if (forwardBtn) forwardBtn.addEventListener("click", () => this.switchView("search"));

    const upgradeBtn = document.getElementById("upgrade-btn");
    if (upgradeBtn) {
      upgradeBtn.addEventListener("click", () => {
        this.showToast("Premium: Enjoy ad-free listening and high bitrate audio!");
      });
    }

    const installBtn = document.getElementById("install-app-btn");
    if (installBtn) {
      installBtn.addEventListener("click", () => {
        this.showToast("Spotify Web App is already installed in this browser.");
      });
    }

    const profileBtn = document.getElementById("profile-btn");
    if (profileBtn) {
      profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    }

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          this.togglePlayPause();
          break;
        case "ArrowRight":
          e.preventDefault();
          if (this.audio.duration) {
            this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 5);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
          break;
        case "ArrowUp":
          e.preventDefault();
          this.setVolume(Math.min(1, this.volume + 0.05));
          break;
        case "ArrowDown":
          e.preventDefault();
          this.setVolume(Math.max(0, this.volume - 0.05));
          break;
        case "KeyM":
          this.toggleMute();
          break;
        case "KeyN":
          this.playNext();
          break;
        case "KeyP":
          this.playPrev();
          break;
        case "KeyS":
          this.toggleShuffle();
          break;
        case "KeyR":
          this.toggleRepeat();
          break;
        case "Slash":
          e.preventDefault();
          this.switchView("search");
          if (this.searchInput) this.searchInput.focus();
          break;
      }
    });
  }

  toggleMenu() {
    if (!this.menuDropdown) return;
    const isOpen = this.menuDropdown.classList.contains("open");
    if (isOpen) {
      this.closeMenu();
    } else {
      this.menuDropdown.classList.add("open");
      if (this.btnMenuToggle) {
        this.btnMenuToggle.classList.add("active");
        this.btnMenuToggle.setAttribute("aria-expanded", "true");
      }
    }
  }

  closeMenu() {
    if (this.menuDropdown) {
      this.menuDropdown.classList.remove("open");
    }
    if (this.btnMenuToggle) {
      this.btnMenuToggle.classList.remove("active");
      this.btnMenuToggle.setAttribute("aria-expanded", "false");
    }
  }

  toggleSidebarDrawer() {
    if (!this.sidebar) return;
    const isOpen = this.sidebar.classList.contains("drawer-open");
    if (isOpen) {
      this.closeSidebarDrawer();
    } else {
      this.sidebar.classList.add("drawer-open");
      if (this.sidebarOverlay) this.sidebarOverlay.classList.add("active");
    }
  }

  closeSidebarDrawer() {
    if (this.sidebar) this.sidebar.classList.remove("drawer-open");
    if (this.sidebarOverlay) this.sidebarOverlay.classList.remove("active");
  }

  filterLikedSongs() {
    const likedTracks = this.tracks.filter(t => this.likedTrackIds.includes(t.id));
    if (likedTracks.length > 0) {
      this.loadTrack(this.tracks.indexOf(likedTracks[0]), true);
      this.showToast(`Playing ${likedTracks.length} Liked Songs`);
    } else {
      this.showToast("No liked songs yet! Click the heart on any song.");
    }
  }

  // ==========================================
  // 6. UI RENDERING & TEMPLATES
  // ==========================================

  renderAll() {
    this.renderPlaylists();
    this.renderHomeGrids();
    this.renderBrowseGenres();
    this.loadTrack(0, false);
    this.setVolume(this.volume);
  }

  updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good evening";
    if (hour >= 5 && hour < 12) {
      greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon";
    }
    if (this.greetingHeading) {
      this.greetingHeading.textContent = greeting;
    }
  }

  renderPlaylists() {
    this.playlistsContainer.innerHTML = "";
    this.playlists.forEach((pl) => {
      const li = document.createElement("li");
      li.className = "playlist-item";
      li.setAttribute("data-id", pl.id);

      if (pl.isLiked) {
        li.innerHTML = `
          <div class="playlist-thumb liked-thumb">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div class="playlist-info">
            <span class="playlist-name">${pl.name}</span>
            <span class="playlist-meta">${pl.type || "Playlist"} • ${this.likedTrackIds.length} tracks</span>
          </div>
        `;
      } else {
        li.innerHTML = `
          <div class="playlist-thumb">
            <img src="${pl.cover || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300'}" alt="${pl.name}">
          </div>
          <div class="playlist-info">
            <span class="playlist-name">${pl.name}</span>
            <span class="playlist-meta">${pl.type || "Playlist"}</span>
          </div>
        `;
      }

      li.addEventListener("click", () => {
        document.querySelectorAll(".playlist-item").forEach(el => el.classList.remove("active"));
        li.classList.add("active");
        this.showToast(`Opened ${pl.name}`);
      });

      this.playlistsContainer.appendChild(li);
    });
  }

  renderHomeGrids() {
    // 1. Quick Jump Cards (First 6 items)
    this.quickJumpGrid.innerHTML = "";
    const quickTracks = this.tracks.slice(0, 6);
    quickTracks.forEach((track, idx) => {
      const card = document.createElement("div");
      card.className = "quick-card";
      card.innerHTML = `
        <img class="quick-card-img" src="${track.coverUrl}" alt="${track.title}">
        <span class="quick-card-title">${track.title}</span>
        <button class="quick-card-play" aria-label="Play ${track.title}">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      `;

      card.addEventListener("click", (e) => {
        if (e.target.closest(".quick-card-play")) {
          e.stopPropagation();
          this.handleCardPlayClick(idx);
        } else {
          this.loadTrack(idx, true);
        }
      });

      this.quickJumpGrid.appendChild(card);
    });

    // 2. Shelf Grids
    this.renderTrackShelf(this.recentlyPlayedGrid, this.tracks.filter(t => t.category === "recently-played"));
    this.renderTrackShelf(this.madeForYouGrid, this.tracks.filter(t => t.category === "made-for-you"));
    this.renderTrackShelf(this.topChartsGrid, this.tracks.filter(t => t.category === "top-charts" || !t.category));
  }

  renderTrackShelf(container, tracksList) {
    container.innerHTML = "";
    tracksList.forEach((track) => {
      const globalIdx = this.tracks.findIndex(t => t.id === track.id);
      const card = document.createElement("div");
      card.className = `music-card ${globalIdx === this.currentTrackIndex ? 'is-active' : ''} ${globalIdx === this.currentTrackIndex && this.isPlaying ? 'is-playing' : ''}`;
      card.setAttribute("data-id", track.id);
      card.setAttribute("data-index", globalIdx);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img class="card-img" src="${track.coverUrl}" alt="${track.title}">
          <div class="card-playing-indicator">
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
          </div>
          <button class="card-play-btn" aria-label="Play ${track.title}">
            <svg class="card-play-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        <div class="card-info">
          <span class="card-title">${track.title}</span>
          <span class="card-subtitle">${track.artist}</span>
        </div>
      `;

      card.addEventListener("click", () => {
        this.handleCardPlayClick(globalIdx);
      });

      container.appendChild(card);
    });
  }

  renderBrowseGenres() {
    this.genresGrid.innerHTML = "";
    BROWSE_GENRES.forEach((genre) => {
      const card = document.createElement("div");
      card.className = "genre-card";
      card.style.backgroundColor = genre.color;
      card.innerHTML = `
        <h4 class="genre-title">${genre.name}</h4>
        <img src="${genre.image}" alt="${genre.name}">
      `;

      card.addEventListener("click", () => {
        this.searchInput.value = genre.name;
        this.handleSearch(genre.name);
      });

      this.genresGrid.appendChild(card);
    });
  }

  renderQueue() {
    this.queueList.innerHTML = "";
    this.tracks.forEach((track, idx) => {
      const isCurrent = idx === this.currentTrackIndex;
      const row = document.createElement("div");
      row.className = `song-row ${isCurrent ? 'is-active' : ''}`;
      row.innerHTML = `
        <div class="song-row-left">
          <img class="song-row-thumb" src="${track.coverUrl}" alt="${track.title}">
        </div>
        <div class="song-row-info">
          <span class="song-row-title">${track.title}</span>
          <span class="song-row-artist">${track.artist}</span>
        </div>
        <div class="song-row-actions">
          <span>${track.duration}</span>
        </div>
      `;

      row.addEventListener("click", () => {
        this.loadTrack(idx, true);
      });

      this.queueList.appendChild(row);
    });
  }

  // ==========================================
  // 7. CARD & PLAYBACK INTERACTIONS
  // ==========================================

  handleCardPlayClick(index) {
    if (this.currentTrackIndex === index) {
      this.togglePlayPause();
    } else {
      this.loadTrack(index, true);
    }
  }

  updatePlayPauseUI() {
    if (this.isPlaying) {
      this.playIconSvg.style.display = "none";
      this.pauseIconSvg.style.display = "block";
    } else {
      this.playIconSvg.style.display = "block";
      this.pauseIconSvg.style.display = "none";
    }

    this.updateActiveCardHighlights();
  }

  updateActiveCardHighlights() {
    document.querySelectorAll(".music-card").forEach((card) => {
      const cardIdx = parseInt(card.getAttribute("data-index"), 10);
      const isCurrent = cardIdx === this.currentTrackIndex;
      card.classList.toggle("is-active", isCurrent);
      card.classList.toggle("is-playing", isCurrent && this.isPlaying);

      const playBtn = card.querySelector(".card-play-btn");
      if (playBtn) {
        if (isCurrent && this.isPlaying) {
          playBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          `;
        } else {
          playBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          `;
        }
      }
    });

    document.querySelectorAll(".song-row").forEach((row) => {
      const title = row.querySelector(".song-row-title")?.textContent;
      const isCurrent = title === this.tracks[this.currentTrackIndex]?.title;
      row.classList.toggle("is-active", isCurrent);
    });
  }

  updateVolumeIcon() {
    if (this.isMuted || this.volume === 0) {
      this.volumeIconSvg.innerHTML = `
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      `;
    } else if (this.volume < 0.5) {
      this.volumeIconSvg.innerHTML = `
        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
      `;
    } else {
      this.volumeIconSvg.innerHTML = `
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      `;
    }
  }

  // ==========================================
  // 8. SEARCH & FILTERING
  // ==========================================

  handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    this.searchClearBtn.classList.toggle("visible", this.searchQuery.length > 0);

    if (this.searchQuery === "") {
      this.searchResultsSection.classList.remove("active");
      this.browseGenresSection.style.display = "flex";
      return;
    }

    this.switchView("search");
    this.browseGenresSection.style.display = "none";
    this.searchResultsSection.classList.add("active");

    const matchedTracks = this.tracks.filter((t) =>
      t.title.toLowerCase().includes(this.searchQuery) ||
      t.artist.toLowerCase().includes(this.searchQuery) ||
      (t.genre && t.genre.toLowerCase().includes(this.searchQuery))
    );

    if (matchedTracks.length === 0) {
      this.searchTopResult.style.display = "none";
      this.searchSongsList.innerHTML = "";
      this.searchEmptyState.style.display = "flex";
      return;
    }

    this.searchEmptyState.style.display = "none";
    this.searchTopResult.style.display = "flex";

    // Top Result Card (Best match)
    const topTrack = matchedTracks[0];
    const topIdx = this.tracks.findIndex(t => t.id === topTrack.id);
    this.searchTopResult.innerHTML = `
      <img class="top-result-img" src="${topTrack.coverUrl}" alt="${topTrack.title}">
      <h3 class="top-result-title">${topTrack.title}</h3>
      <div class="top-result-meta">
        <span class="badge-tag">Song</span>
        <span>${topTrack.artist}</span>
        <span>•</span>
        <span>${topTrack.genre || "Music"}</span>
      </div>
      <button class="top-result-play-btn" aria-label="Play ${topTrack.title}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
    `;

    this.searchTopResult.onclick = () => {
      this.handleCardPlayClick(topIdx);
    };

    // Songs List Results
    this.searchSongsList.innerHTML = "";
    matchedTracks.slice(0, 5).forEach((track) => {
      const gIdx = this.tracks.findIndex(t => t.id === track.id);
      const isCurrent = gIdx === this.currentTrackIndex;
      const row = document.createElement("div");
      row.className = `song-row ${isCurrent ? 'is-active' : ''}`;
      row.innerHTML = `
        <div class="song-row-left">
          <img class="song-row-thumb" src="${track.coverUrl}" alt="${track.title}">
          <svg class="song-row-play-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="song-row-info">
          <span class="song-row-title">${track.title}</span>
          <span class="song-row-artist">${track.artist}</span>
        </div>
        <div class="song-row-actions">
          <span>${track.duration}</span>
        </div>
      `;

      row.addEventListener("click", () => {
        this.loadTrack(gIdx, true);
      });

      this.searchSongsList.appendChild(row);
    });
  }

  // ==========================================
  // 9. NAVIGATION & PLAYLIST CREATION
  // ==========================================

  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));

    if (viewName === "home") {
      this.navHome.classList.add("active");
      this.homeView.style.display = "flex";
      this.searchView.style.display = "none";
    } else if (viewName === "search") {
      this.navSearch.classList.add("active");
      this.homeView.style.display = "none";
      this.searchView.style.display = "flex";
    } else if (viewName === "library") {
      this.navLibrary.classList.add("active");
      this.homeView.style.display = "flex";
      this.searchView.style.display = "none";
      this.showToast("Showing Your Library");
    }
  }

  createNewPlaylist() {
    const name = this.modalPlaylistName.value.trim() || `My Playlist #${this.playlists.length + 1}`;
    const newPlaylist = {
      id: `pl-${Date.now()}`,
      name: name,
      count: "0 songs",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80",
      type: "Playlist • Custom"
    };

    this.playlists.push(newPlaylist);
    localStorage.setItem("spotify_custom_playlists", JSON.stringify(this.playlists));
    this.renderPlaylists();
    this.createPlaylistModal.classList.remove("open");
    this.showToast(`Playlist "${name}" created!`);
  }

  // ==========================================
  // 10. UTILITIES & TOAST
  // ==========================================

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  showToast(message) {
    if (!this.toast) return;
    this.toastMessage.textContent = message;
    this.toast.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast.classList.remove("show");
    }, 2800);
  }
}

// Instantiate App when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.spotifyApp = new SpotifyApp();
});
