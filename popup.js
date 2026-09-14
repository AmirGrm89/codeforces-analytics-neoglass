/*
 * Codeforces Analytics — Neo Glass Edition
 * Created and maintained by amir1389_gerami
 * Codeforces handle: amir1389_gerami
 * Contact: amirmohammad.grm.8998@gmail.com
 *
 * © amir1389_gerami. All rights reserved.
 * Unauthorized copying, redistribution, or republishing of this extension,
 * in whole or in part, is prohibited and may result in legal action.
 */

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const messageName = element.getAttribute('data-i18n');
    const message = chrome.i18n.getMessage(messageName);
    if (message) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = message;
      } else {
        element.textContent = message;
      }
    }
  });
});
