document.addEventListener("DOMContentLoaded", function() {
  const counters = {theorem:0, lemma:0, corollary:0, remark:0};

  // Number theorem/lemma/corollary and store dataset
  document.querySelectorAll('.theorem, .lemma, .corollary, .remark').forEach(el => {
    let type;
    if(el.classList.contains('theorem')) type='theorem';
    else if(el.classList.contains('lemma')) type='lemma';
    else if(el.classList.contains('corollary')) type='corollary';
    else type='remark';

    counters[type] += 1;
    el.dataset.number = counters[type];
    el.dataset.type = type;
  });

  // Mark proofs
  document.querySelectorAll('.proof').forEach(el=>{
    el.dataset.type = 'proof';
  });

  // Automatic clickable references
  document.querySelectorAll('.autoref').forEach(el=>{
    const targetId = el.dataset.target;
    const target = document.getElementById(targetId);
    if(!target) return;

    const type = target.dataset.type || target.classList[0];
    const number = target.dataset.number || 0;
    const label = type.charAt(0).toUpperCase() + type.slice(1);

    const link = document.createElement('a');
    link.href = `#${targetId}`;
    link.textContent = `${label} ${number}`;
    link.className = 'autoref-link';

    el.replaceWith(link);
  });
});