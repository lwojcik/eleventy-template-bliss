const themeKey = 'theme';
const darkSetting = 'dark';
const lightSetting = 'light';

const htmlElement = document.querySelector('html');

const setTheme = (theme) => {
  const themeSwitcherBtn = document.querySelector('.theme-switcher');

  const themeSettings = [lightSetting, darkSetting];
  const [classToRemove, classToAdd] =
    theme === lightSetting
      ? [darkSetting, lightSetting]
      : [lightSetting, darkSetting];

  if (themeSettings.includes(theme)) {
    htmlElement.classList.remove(classToRemove);
    themeSwitcherBtn.classList.remove(classToRemove);
    htmlElement.classList.add(classToAdd);
    themeSwitcherBtn.classList.add(classToAdd);
  }
};

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: window.matchMedia('(prefers-reduced-motion)').matches
      ? 'auto'
      : 'smooth',
  });
};

const getScrollPercent = () => {
  const htmlElement = document.documentElement;
  const body = document.body;
  const scrollTop = htmlElement.scrollTop || body.scrollTop;
  const scrollHeight = htmlElement.scrollHeight || body.scrollHeight;
  const clientHeight = htmlElement.clientHeight;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

window.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.querySelector('html');

  // If that doesn't happen JS-based features won't work

  htmlElement.classList.remove('no-js');

  // Dark theme (base switch logic)

  const handleThemeSwitch = () => {
    const isDarkActive = htmlElement.classList.contains(darkSetting);
    const desiredSetting = isDarkActive ? lightSetting : darkSetting;
    setTheme(desiredSetting);

    try {
      localStorage.setItem(themeKey, desiredSetting);
    } catch {
      return false;
    }
  };

  const handleThemeSwitchFromKeyboard = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      handleThemeSwitch();
    }
  };

  // Dark theme - honor browser preference

  const systemWideDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  if (systemWideDarkMode.matches) {
    setTheme(darkSetting);
  }

  systemWideDarkMode.addEventListener('change', (e) => {
    const colorSchemePreference = e.matches ? darkSetting : lightSetting;
    setTheme(colorSchemePreference);
  });

  // Dark theme - honor local storage setting if present

  const currentSavedTheme = localStorage.getItem(themeKey) || null;

  if (currentSavedTheme) {
    setTheme(currentSavedTheme);
  }

  // Theme switcher button

  const themeSwitcherBtn = document.querySelector('.theme-switcher');

  themeSwitcherBtn.addEventListener('click', handleThemeSwitch);
  themeSwitcherBtn.addEventListener('keyup', handleThemeSwitchFromKeyboard);

  // Hamburger menu

  const menuBtnCheckbox = document.querySelector('.menu-btn');

  document.querySelector('.hamburger').addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const { checked } = menuBtnCheckbox;
      menuBtnCheckbox.checked = !checked;
    }
  });

  menuBtnCheckbox.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('no-scrollbar');
    const mainContainerStyle = document.getElementById('main').style;

    if (menuBtnCheckbox.checked) {
      mainContainerStyle.display = 'none';
    } else {
      mainContainerStyle.display = 'block';
    }
  });

  // Reading progress bar

  const progressBar = document.querySelector('.reading-progress-bar');

  if (progressBar) {
    const setProgress = () => {
      const width = getScrollPercent();
      progressBar.style.width = width + '%';
    };

    window.addEventListener('scroll', setProgress);

    setProgress();
  }

  // Jump to top arrow

  const scrollUpArrow = document.querySelector('.scroll-up-arrow');

  if (scrollUpArrow) {
    scrollUpArrow.addEventListener('click', scrollToTop);
    scrollUpArrow.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        scrollToTop();
      }
    });
  }

  document.addEventListener('scroll', () => {
    const scrollTop = htmlElement.scrollTop;

    if (scrollUpArrow) {
      const shouldDisplay = scrollTop * 3 >= window.innerHeight;

      if (shouldDisplay) {
        scrollUpArrow.classList.add('visible');
      } else {
        scrollUpArrow.classList.remove('visible');
      }
    }
  });

  // Expand / collapse post archives

  const yearHeadingSelector = '.year-heading';
  const postLists = document.querySelectorAll('.archive .list');

  const archiveYearHeadings = document.querySelectorAll(
    `.archive ${yearHeadingSelector}`
  );

  const handleArchiveToggle = (e) => {
    const clickedHeading = e.target.closest(yearHeadingSelector);
    const year = clickedHeading.getAttribute('id').split('-')[1];
    clickedHeading.classList.toggle('hidden');
    document
      .getElementsByClassName(`posts-${year}`)[0]
      .classList.toggle('hidden');
  };

  const handleArchiveToggleFromKeyboard = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      handleArchiveToggle(e);
    }
  };

  if (postLists && postLists.length > 0) {
    for (const listItem of postLists) {
      listItem.classList.add('hidden');
    }

    for (const heading of archiveYearHeadings) {
      heading.classList.add('clickable', 'hidden');
      heading.addEventListener('click', handleArchiveToggle);
      heading.addEventListener('keyup', handleArchiveToggleFromKeyboard);
    }

    postLists[0].classList.remove('hidden');
    archiveYearHeadings[0].classList.remove('hidden');
  }

  // Pagination - page number numerical input + jump button

  const pageNumberForm = document.querySelector('.jump-to-page-form');
  const pageNumberInput = document.querySelector('.page-number-input');
  const jumpButton = document.querySelector('.jump-button');

  const enableJumpButton = () => {
    jumpButton.removeAttribute('disabled');
  };

  const disableJumpButton = () => {
    jumpButton.setAttribute('disabled', '');
  };

  const handleRedirect = (pageNumber) => {
    const pageUrl = window.location.href
      .split(/\/[0-9]+\//)[0]
      .replace(/\/+$/, '');

    const newLocation = pageNumber === 1 ? pageUrl : `${pageUrl}/${pageNumber}`;

    window.location.href = newLocation;
  };

  if (pageNumberForm) {
    let cachedPageNumber;
    const currentPageNumber = parseInt(pageNumberInput.value);

    const totalPages = parseInt(
      document.querySelector('.total-pages').innerHTML
    );

    const isPageNumberAllowed = (pageNumber) => {
      const pageNumberInteger = parseInt(pageNumber) || pageNumber;

      return (
        pageNumberInteger > 0 &&
        pageNumberInteger <= totalPages &&
        pageNumberInteger.toString().length <= totalPages.toString().length
      );
    };
    const isPageNumberDifferent = (pageNumber) => {
      const pageNumberInteger = parseInt(pageNumber) || pageNumber;
      return pageNumberInteger !== currentPageNumber;
    };

    const handlePageChange = () => {
      const newPageNumber = parseInt(pageNumberInput.value);
      const canRedirect = isPageNumberAllowed(newPageNumber);

      if (canRedirect) {
        handleRedirect(newPageNumber);
      }
    };

    pageNumberInput.addEventListener('focus', (event) => {
      cachedPageNumber = parseInt(event.currentTarget.value);
      pageNumberInput.value = '';
    });

    pageNumberInput.addEventListener('blur', () => {
      if (!pageNumberInput.value) {
        pageNumberInput.value = cachedPageNumber;
      }
    });

    pageNumberInput.addEventListener('input', (event) => {
      const typedValue = event.currentTarget.value;

      const legitPageNumber = isPageNumberAllowed(typedValue);
      const differentPageNumber = isPageNumberDifferent(typedValue);

      if (legitPageNumber && differentPageNumber) {
        enableJumpButton();
      } else {
        disableJumpButton();

        if (differentPageNumber) {
          const truncatedPageNumber = typedValue.slice(0, -1);
          pageNumberInput.value = truncatedPageNumber;
          if (truncatedPageNumber) enableJumpButton();
        }
      }
    });

    pageNumberForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handlePageChange();
    });
  }

  // Mastodon share button

  const mastodonShareForm = htmlElement.querySelector(
    '.share-buttons .mastodon-share-form'
  );

  const mastodonShareButton = htmlElement.querySelector(
    '.share-buttons .mastodon'
  );
  const mastodonShareDialog = htmlElement.querySelector(
    '.share-buttons .mastodon-share-dialog'
  );

  const mastodonDialogCloseLink = htmlElement.querySelector(
    '.mastodon-share-dialog .close-link'
  );

  const instanceUrlInput = htmlElement.querySelector(
    '.mastodon-share-dialog .instance-url-input'
  );

  const shareSubmitButton = htmlElement.querySelector(
    '.mastodon-share-dialog .share-form-submit'
  );

  const isMastodonInstanceValid = (value) => {
    const urlRegex = /^[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    if (urlRegex.test(value)) {
      return true;
    }
    return false;
  };

  if (mastodonShareDialog) {
    const openMastodonPopup = () => {
      document.querySelector('body').classList.add('no-scrollbar');
      mastodonShareDialog.classList.add('visible');
      instanceUrlInput.focus();

      if (window.innerWidth >= 768) {
        document.querySelector('body').classList.remove('no-scrollbar');
      }
    };

    const closeMastodonPopup = () => {
      document.querySelector('body').classList.remove('no-scrollbar');
      mastodonShareDialog.classList.remove('visible');
      instanceUrlInput.blur();
    };

    instanceUrlInput.addEventListener('input', (event) => {
      const typedValue = event.currentTarget.value;
      const validInstance = isMastodonInstanceValid(typedValue);

      if (validInstance) {
        shareSubmitButton.removeAttribute('disabled');
      } else {
        shareSubmitButton.setAttribute('disabled', '');
      }
    });

    mastodonShareForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const href = window.location.href;
      const title = htmlElement.querySelector('article h1').innerHTML;
      const instance = instanceUrlInput.value;

      window.open(
        'https://' +
          instance +
          '/share?text=' +
          encodeURIComponent(title) +
          ' ' +
          encodeURIComponent(href),
        '_blank'
      );
    });

    mastodonDialogCloseLink.addEventListener('click', closeMastodonPopup);

    if (mastodonShareButton) {
      mastodonShareButton.addEventListener('click', openMastodonPopup);

      mastodonShareButton.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          openMastodonPopup();
        }
      });
    }
  }

  // Copy to clipboard button

  const copyToClipboardButton = htmlElement.querySelector(
    '.share-buttons .clipboard'
  );

  if (copyToClipboardButton) {
    const copyUrlToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        copyToClipboardButton.dataset.tooltip = 'Copied!';
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };

    copyToClipboardButton.addEventListener('click', copyUrlToClipboard);

    copyToClipboardButton.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        copyUrlToClipboard();
      }
    });
  }
});
