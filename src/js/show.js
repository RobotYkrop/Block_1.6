const open1 = document.querySelector('.brands__list--expand');
const close1 = document.querySelector('.brands__list--hidden');
const open2 = document.querySelector('.tech__list--expand');
const close2 = document.querySelector('.tech__list--hidden');
const slider1 = [...document.querySelectorAll('.brands__list--slider:nth-child(n+7)')];
const slider2 = [...document.querySelectorAll('.tech__list--slider:nth-child(n+7)')];
const open3 = document.querySelector('.prices-services__list--expand');
const close3 = document.querySelector('.prices-services__list--hidden');
const slider3 = [...document.querySelectorAll('.prices-services__list--slider:nth-child(n+7)')];



// const expand = [...document.querySelectorAll('.expand')];
// const hidden = [...document.querySelectorAll('.hidden')];
// const slider = [...document.querySelectorAll('.slider:nth-child(n+7)')];
// const Swiper = [...document.querySelectorAll('.swiper')];

            toggleModalBrand = () => {
              slider1.forEach(slider1 => {
                  open1.addEventListener('click', () => {
                      slider1.style.display = 'flex';
                      open1.style.display = 'none';
                      close1.style.display='block';
                  })
                  close1.addEventListener('click', () => {
                      slider1.style.display = 'none';
                      open1.style.display = 'block';
                      close1.style.display = 'none';
                  })
              })
          }
          toggleModalTech = () => {
            slider2.forEach(slider2 => {
                open2.addEventListener('click', () => {
                    slider2.style.display = 'flex';
                    open2.style.display = 'none';
                    close2.style.display='block';
                })
                close2.addEventListener('click', () => {
                    slider2.style.display = 'none';
                    open2.style.display = 'block';
                    close2.style.display = 'none';
                })
            })
        }
        toggleModalServices = () => {
          slider3.forEach(slider3 => {
              open3.addEventListener('click', () => {
                  slider3.style.display = 'flex';
                  open3.style.display = 'none';
                  close3.style.display='block';
              })
              close3.addEventListener('click', () => {
                  slider3.style.display = 'none';
                  open3.style.display = 'block';
                  close3.style.display = 'none';
              })
          })
      }





        // Попытка сделать делегирование событий, но не особо удачная, запутался, сделаю пока через навешивание клика

        // handleClick = () => {
        //   slider.forEach(slider => {
        //             expand[1].addEventListener('click', () => {
        //                 slider.style.display = 'flex';
        //                 expand[1].style.display = 'none';
        //                 hidden[1].style.display='block';
        //             })
        //             hidden[1].addEventListener('click', () => {
        //                 slider.style.display = 'none';
        //                 expand[1].style.display = 'block';
        //                 hidden[1].style.display = 'none';
        //             })

        //         })
        // }



