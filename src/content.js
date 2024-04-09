(() => {
  let unreadCount;

  function getUnreadCount() {
    const matched = document.title.match(/Inbox(?: \((\d+)\))? -/);
    const countText = matched ? matched[1] : "0";
    const count = parseInt(countText);
    return isNaN(count) ? 0 : count;
  }

  function updateBadgeIcon() {
    const newUnreadCount = getUnreadCount();
    if (newUnreadCount !== unreadCount) {
      unreadCount = newUnreadCount
      navigator.setAppBadge(unreadCount);
    }
  }

  setInterval(updateBadgeIcon, 500);
})();
