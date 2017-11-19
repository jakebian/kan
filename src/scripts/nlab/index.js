import tippy from 'tippy.js';
import $ from 'jquery';
// import 'mathjax';


$(document).ready(() => {
    console.log('asdsfucky fucaasdssdsdk');

    $('body').append(`
        <div id="fuckingtemp" style="display: none;">
          loading definition...
        </div>
    `)

    $('body').append(`
        <button class="btn btn-danger">Hover for a new image</button>
    `);

    setTimeout(() => {

    const template = document.getElementById('fuckingtemp')
    const initialText = template.textContent
    const tip = {
      loading: false
    }
    $('a.existingWikiWord').each((idx, elem) => (
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
            const defnElem = $('<div></div>').append(getDefn(parsedBody));
            console.log('loaded defn', defnElem)

            content.innerHTML = defnElem.html()
            tip.loading = false
          }).catch(e => {
            console.log(e)
            content.innerHTML = 'Loading failed'
            tip.loading = false
          })
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
    ))


}, 300)
})

function getDefn(parsedBody) {
  const defnBody = parsedBody.find('#definition').next('.num_defn')
  if (defnBody.length) {
    return defnBody;
  }
  console.log('parsing...')
  parsedBody.find('#definition').nextUntil('h2')
  console.log('end parsing')
  return parsedBody.find('#definition').nextUntil('h2').slice(0, 5)
}