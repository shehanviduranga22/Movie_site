function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');

}

function changeBg(bg){
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = `url("${bg}")`;
    banner.style.backgroundSize='cover';
    banner.style.backgroundPosition='center';
    }

function changeTitle(title) {
  const contents = document.querySelectorAll('.content');   // <- fixed typo

  contents.forEach(content => {
    if (content.classList.contains(title)) {
      content.classList.add('active');      // show the clicked group
    } else {
      content.classList.remove('active');   // hide the rest
    }
  });
}