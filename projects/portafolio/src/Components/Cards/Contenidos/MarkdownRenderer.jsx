import React from 'react';
import TailwindComponents from '../../../TailwindComponents';

const MarkdownRenderer = ({ markdownText }) => {
  if (markdownText == null) {
    markdownText = `
    # Título Principal

    ## Subtítulo

    - Elemento no numerado
    - Otro elemento no numerado

    1. Elemento numerado
    2. Otro elemento numerado

    \`\`\`javascript
    console.log('Código de ejemplo');
    \`\`\`

    **Texto en negrita**

    *Texto en cursiva*

    ![Alt text](https://via.placeholder.com/150)

    [Enlace a Google](https://www.google.com)
    `;
  }
  const renderMarkdown = (text) => {
    // Eliminar espacios en blanco al inicio de cada línea
    text = text.replace(/^\s+/gm, '');

    // Procesar bloques de código primero para evitar que se confundan con otras transformaciones
    text = text.replace(/```([\s\S]*?)```/gim, (_, code) => {
      return `<pre class="${TailwindComponents.MarkDownStyle.Code}"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />')}</code></pre>`;
    });

    // Procesar títulos (niveles 1 y 2)
    text = text.replace(/^# (.*$)/gim, `<h1 class="${TailwindComponents.MarkDownStyle.H1}">$1</h1>`);
    text = text.replace(/^## (.*$)/gim, `<h2 class="${TailwindComponents.MarkDownStyle.H2}">$1</h2>`);

    // Procesar listas no numeradas
    text = text.replace(/^- (.*$)/gim, `<li class="${TailwindComponents.MarkDownStyle.ListDisc}">$1</li>`);

    // Procesar listas numeradas
    text = text.replace(/^\d+\. (.*$)/gim, `<li class="${TailwindComponents.MarkDownStyle.ListDecimal}">$1</li>`);

    // Procesar negritas
    text = text.replace(/\*\*(.*)\*\*/gim, `<strong class="${TailwindComponents.MarkDownStyle.Strong}">$1</strong>`);

    // Procesar cursivas
    text = text.replace(/\*(.*)\*/gim, `<em class="${TailwindComponents.MarkDownStyle.Em}">$1</em>`);

    // Procesar imágenes
    text = text.replace(/\!\[(.*?)\]\((.*?)\)/gim, `<img class="${TailwindComponents.MarkDownStyle.Img}" alt="$1" src="$2" />`);

    // Procesar enlaces
    text = text.replace(/\[(.*?)\]\((.*?)\)/gim, `<a class="${TailwindComponents.MarkDownStyle.A}" href="$2" target="_blank" rel="noopener noreferrer">$1</a>`);

    // Procesar párrafos (debe ir al final)
    text = text.replace(/^(?!<h1|<h2|<li|<pre|<strong|<em|<img|<a|<\/?(ul|ol|pre|code|strong|em|img|a|h1|h2|li)>)(.*\S.*)$/gim, `<p class="${TailwindComponents.MarkDownStyle.P}">$2</p>`);

    // Procesar listas envolventes en <ul> o <ol>
    text = text.replace(/(<li class="list-disc.*<\/li>)/gim, '<ul>$1</ul>');
    text = text.replace(/(<li class="list-decimal.*<\/li>)/gim, '<ol>$1</ol>');

    return text;
  }

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownText) }}
    />
  );
};

export default MarkdownRenderer;
