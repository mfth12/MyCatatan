const Input = (atribut) => {
  const changeHandler = (event) => {
    if (atribut.name === "title") {
      const currentText = event.target.value;
      atribut.onChange((oldText) =>
        currentText.length <= 50 ? currentText : oldText
      );
    } else {
      atribut.onChange(event.target.value);
    }
  };

  return (
    <>
      {atribut.type === "textarea" ? (
        <textarea
          {...atribut}
          className={"input textarea"}
          value={atribut.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      ) : (
        <input
          {...atribut}
          className={"input"}
          spellCheck={false}
          value={atribut.value}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default Input;
