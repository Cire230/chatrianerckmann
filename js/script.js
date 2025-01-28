// Ajout dynamique des niveaux de compétence
document.querySelectorAll('.skill-bar').forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    bar.style.setProperty('--skill-level', skill);
});

document.querySelectorAll('.language-bar').forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    bar.style.setProperty('--skill-level', skill);
});
