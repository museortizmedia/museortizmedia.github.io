import React from 'react';

const MarkdownRenderer = ({ markdownText }) => {
  const renderMarkdown = (text) => {
    // Procesar títulos (niveles 1 y 2)
    text = text.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-4">$1</h1>');
    text = text.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-semibold mb-3">$1</h2>');

    // Procesar listas no numeradas
    text = text.replace(/^- (.*$)/gim, '<li class="list-disc ml-5 mb-1">$1</li>');

    // Procesar listas numeradas
    text = text.replace(/^\d+\. (.*$)/gim, '<li class="list-decimal ml-5 mb-1">$1</li>');

    // Procesar bloques de código
    text = text.replace(/```([\s\S]*?)```/gim, '<pre class="bg-gray-100 p-3 rounded-md overflow-x-auto mb-4"><code>$1</code></pre>');

    // Procesar negritas
    text = text.replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold">$1</strong>');

    // Procesar cursivas
    text = text.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>');

    // Procesar imágenes
    text = text.replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img class="max-w-full h-auto mb-4" alt="$1" src="$2" />');

    // Procesar enlaces
    text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a class="text-blue-500 underline" href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Procesar párrafos
    text = text.replace(/^\s*(\S.*)$/gim, '<p class="mb-4">$1</p>');

    // Procesar listas envolventes en <ul> o <ol>
    text = text.replace(/(<li.*<\/li>)/gim, '<ul>$1</ul>');
    text = text.replace(/(<ul>(<li.*<\/li>)+<\/ul>)/gim, '<ul>$1</ul>');
    text = text.replace(/(<ol>(<li.*<\/li>)+<\/ol>)/gim, '<ol>$1</ol>');

    return text;
  };

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownText) }}
    />
  );
};

export default MarkdownRenderer;
