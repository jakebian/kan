import tippy from 'tippy.js';
import $ from 'jquery';
import 'simpler-sidebar';
import ScrollProgress from 'scrollprogress'
import ScrollSpy from './scrollspy'

$(document).ready(() => {


    $('body').append(`
      <div id="fuckingtemp" style="display: none;">
      ...
      </div>
    `)

    $('body').append(`
      <div id="toggle-sidebar">
        <svg version="1.1" width="100%" height="100%" viewBox='0 -1 180 198' xmlns='http://www.w3.org/2000/svg'>
          <path id="svg_logo_path" fill="rgba(0, 0, 0, 0.2)" d='
            M170,60c4,11-1,20-12,25c-9,4-25,3-20,15c5,5,15,0,24,1c11,1,21,11,14,21c-10,15-35,6-48-1c-5-3-27-23-32-10c-1,13,15,10,22,16
            c11,4,24,14,34,20c12,10,7,25-9,23c-11-1-22-9-30-16c-5-5-13-18-21-9c-2,6,2,11,5,14c9,9,22,14,22,31c-2,8-12,8-18,4c-4-3-9-8-11-13
            c-3-6-5-18-12-18c-14-1-5,28-18,30c-9,2-13-9-12-16c1-14,12-24,21-31c5-4,17-13,10-20c-9-10-19,12-23,16c-7,7-17,16-31,15
            c-9-1-18-9-11-17c5-7,14-4,23-6c6-1,15-8,8-15c-5-6-57,2-42-24c7-12,51,4,61,6c6,1,17,4,18-4c2-11-12-7-21-8c-21-2-49-14-49-34
            c0-5,3-11,8-11C31,42,34,65,42,67c6,1,9-3,8-9C49,49,38,40,40,25c1-5,4-15,13-14c10,2,11,18,13,29c1,8,0,24,7,28c15,0,5-22,4-30
            C74,23,78,7,87,1c8-4,14,1,16,9c2,11-8,21-2,30c8,2,11-6,14-12c9-14,36-18,30,5c-3,9-12,19-21,24c-6,4-22,10-23,19c-2,14,15,2,18-2
            c9-9,20-18,33-22C159,52,166,54,170,60' />
        </svg>
      </div>
    `)

    setTimeout(() => {

    window.$( ".rightHandSide" ).simplerSidebar( {
        selectors: {
            trigger: "#toggle-sidebar",
        }
    } );

    $('body').append(`
      <div class="progress-bar"></div>
    `)



    const progressElement = document.querySelector('.progress-bar');

    const progressObserver = new ScrollProgress((x, y) => {
      progressElement.style.width = y * 100 + '%';
    });

    $('<div id="side-toc"></div>').append(
      $('.maruku_toc').clone()
    ).appendTo('#Content')


    var spy = new ScrollSpy('#Content', {
      nav: '#side-toc > .maruku_toc > ul > li > a',
      className: 'is-inview'
    });

    var subspy = new ScrollSpy('#Content', {
      nav: '#side-toc > .maruku_toc > ul > li > ul > li > a',
      className: 'is-inview'
    });

    var subsubspy = new ScrollSpy('#Content', {
      nav: '#side-toc > .maruku_toc > ul > li > ul > li > ul > li > a',
      className: 'is-inview'
    });



    $('body').append(
      `<div id="toc-trigger">
        <svg enable-background="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="book_x5F_text_x5F_run"><path d="M32,23.001c0-3.917-2.506-7.24-5.998-8.477V4h-2V1.999h2V0h-23C2.918,0.004,2.294-0.008,1.556,0.354   C0.808,0.686-0.034,1.645,0.001,3c0,0.006,0.001,0.012,0.001,0.018V30c0,2,2,2,2,2h21.081l-0.007-0.004   C28.013,31.955,32,27.946,32,23.001z M2.853,3.981C2.675,3.955,2.418,3.869,2.274,3.743C2.136,3.609,2.017,3.5,2.002,3   c0.033-0.646,0.194-0.686,0.447-0.856c0.13-0.065,0.289-0.107,0.404-0.125C2.97,1.997,3,2.005,3.002,1.999h19V4h-19   C3,4,2.97,4.002,2.853,3.981z M4,30V6h20v8.06C23.671,14.023,23.337,14,22.998,14c-2.142,0-4.106,0.751-5.651,2H6v2h9.516   c-0.413,0.616-0.743,1.289-0.995,2H6v2h8.057c-0.036,0.329-0.059,0.662-0.059,1.001c0,2.829,1.307,5.35,3.348,6.999H4z M23,30   c-3.865-0.008-6.994-3.135-7-6.999c0.006-3.865,3.135-6.995,7-7c3.865,0.006,6.992,3.135,7,7C29.992,26.865,26.865,29.992,23,30z    M22,12H6v2h16V12z"/><polygon points="22,19 22,27 26,23  "/></g></svg>
      </div>`
    )

    $('#toc-trigger').click(() => {
      if ($('#side-toc').is(':hidden')) {
        $('#side-toc').fadeIn();
      }
      else {
        $('#side-toc').fadeOut();
      }
    })

    $('body').append(
      `<div id="topnav-trigger">
        <svg enable-background="new 0 0 30 30" height="30px" id="Capa_1" version="1.1" viewBox="0 0 30 30" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.9,0.2c-0.2-0.1-0.5-0.2-0.7-0.1l-9.9,4.3L10,0.8c-0.2-0.1-0.4-0.1-0.6,0L1.2,4.6C0.9,4.7,0.8,5,0.8,5.3  v23.9c0,0.3,0.1,0.5,0.4,0.6c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.3-0.1l7.9-3.9l8.2,3.8c0.2,0.1,0.4,0.1,0.6,0l0.1,0c0,0,0,0,0,0  l10.1-4.2c0.3-0.1,0.5-0.4,0.5-0.7V0.8C29.2,0.6,29.1,0.4,28.9,0.2z M8.8,24.7l-6.6,3.3V5.8l6.6-3V24.7z M17.6,27.9l-7.3-3.3V2.6  l7.3,3.2V27.9z M27.7,24.2l-8.6,3.6V5.7L27.7,2V24.2z" fill="#aaa"/></svg>
      </div>`
    )

    $('#topnav-trigger').click(() => {
      if ($('.navigation:not(.navfoot)').is(':hidden')) {
        $('.navigation:not(.navfoot)').fadeIn();
      }
      else {
        $('.navigation:not(.navfoot)').fadeOut();
      }
    })


  }, 0)


    setTimeout(() => {

    const template = document.getElementById('fuckingtemp')
    const initialText = template.textContent
    const tip = {
      loading: false
    }
    $('#Content a.existingWikiWord').each((idx, elem) => {
      if ($(elem).parents('.hide').length) {
        return;
      }
      tippy(elem,  {
        position: 'bottom',
        theme: 'light',
        interactive: true,
        arrow: true,
        html: '#fuckingtemp',
        onShow() {

          // `this` inside callbacks refers to the popper element
          const content = this.querySelector('.tippy-tooltip-content')
          if (tip.loading || content.innerHTML !== initialText) return

          tip.loading = true
          console.log('loading text')

          $.get(elem.href, htmlBody => {
            const parsedBody = $($.parseHTML(htmlBody))
            const fetchedDefn = getDefn(parsedBody);
            const defnElem = $('<div></div>').append(fetchedDefn);
            console.log('loaded defn', fetchedDefn)

            content.innerHTML = defnElem.html()
            tip.loading = false
          })

          // .catch(e => {
          //   console.log(e)
          //   content.innerHTML = 'Loading failed'
          //   tip.loading = false
          // })
        },
        onHidden() {
          const content = this.querySelector('.tippy-tooltip-content')
          content.innerHTML = initialText
        },
        // prevent tooltip from displaying over button
        popperOptions: {
          modifiers: {
            preventOverflow: {
              enabled: false
            },
            hide: {
              enabled: false
            }
          }
        }
      })
    })


}, 300)
})


const defnSelectors = [
  '#definition',
  '#definitions',
  '#idea',
  '#idea_and_definition',
  '#overview',
  '#scope',
  '#statement'
]

function getDefnSource() {

}

function truncateBody() {

}

function getDefn(parsedBody) {

  for (let i = 0; i < defnSelectors.length; i++) {
      const attempt = getDefnForSelector(parsedBody, defnSelectors[i]);
      if (attempt) { return attempt; }
  }

  return 'could not load definition'

}

function getDefnForSelector(parsedBody, selector) {
  const defnBody = parsedBody.find(selector).next('.num_defn')
  if (defnBody.length) {
    return defnBody;
  }
  const altResult = parsedBody.find(selector).nextUntil('h2').slice(0, 3)
  if (altResult.length) {
    return altResult;
  }
}