export const appendClassForReact = (id: string, modifiers: string[]) => (code: string) => {
  let modifiedCode = code;
  const classNameRegex = /className/g;
  const foundClassName = modifiedCode.match(classNameRegex);
  if (foundClassName) {
    modifiedCode = modifiedCode.replace(/className: "/g, `className: "${id} `);
  }
  if (modifiers != null) {
    modifiers.forEach(modifier => {
      const regex = new RegExp(`className: ${modifier}\\(([^)]*)\\)`, 'g');
      const replacement = `className: "${id} " + ${modifier}($1)`;
      const found = modifiedCode.match(regex);
      if (found) {
        modifiedCode = modifiedCode.replace(regex, replacement);
      }
    });
  }
  return modifiedCode;
};

export const appendClass = (id: string) => (code: string) => {
  const regex = /class/g;
  const found = code.match(regex);
  if (found) {
    const c = code.replace(/class: "/g, `class: "${id} `);
    return c;
  } else {
    return code;
  }
};
