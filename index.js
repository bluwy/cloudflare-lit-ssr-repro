import { render } from '@lit-labs/ssr'
import { collectResult } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit'

export default {
  async fetch() {
    const result = render(html`<p>Hello world</p>`)
    const str = await collectResult(result)
    return new Response(str, {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    })
  }
}
