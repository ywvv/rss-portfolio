const portfolioBtn = document.querySelectorAll('.portfolio__seasons-btn');
const portfolioImages = document.querySelectorAll('.portfolio__images-img');

function changeImages(el){
    portfolioImages.forEach((img, index) => img.src = `./img/photo/${el.target.dataset.season}/${index + 1}.jpg`);
    portfolioBtn.forEach(target => target.classList.remove('active-btn'));
    el.target.classList.add('active-btn');
}

export {portfolioBtn, changeImages};