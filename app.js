window.APP_CONFIG = {
  API_BASE: 'https://quiet-field-a529.xc2375.workers.dev',
  COURSE: 'humanities2',
  LESSON: '4-0',
  GOOGLE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScRVWIQ-cuCXpfgMUsA9VsmY7Ct5m2bDn2gDQAvFidjdndWgQ/viewform?usp=publish-editor'
};

window.postJson = async function(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error('Server returned an unreadable response.');
  }

  if (!res.ok) {
    throw new Error(data?.error || data?.details || 'Request failed.');
  }
  return data;
};

window.logLessonEvent = async function(_event) {
  return;
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }));

  document.querySelectorAll('[data-google-form]').forEach(btn => {
    btn.addEventListener('click', () => window.open(window.APP_CONFIG.GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer'));
  });
});
