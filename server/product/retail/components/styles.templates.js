function appendStyles(html, styles) {
    const headEnd = html.indexOf('</head>');
  
    if (headEnd !== -1) {
      const head = html.slice(0, headEnd);
      const tail = html.slice(headEnd);
  
      return `${head}<style>${styles}</style>${tail}`;
    } else {
      // If there is no </head> tag, we append the styles to the end of the HTML
      return `${html}<style>${styles}</style>`;
    }
  }
  
  module.exports = { appendStyles };