type removeCharacterFromStringParam = {
  str: string;
  char: string;
  new_string?: string;
};

function removeCharacterFromString({
  str,
  char,
  new_string = "",
}: removeCharacterFromStringParam): string {
  if (str.length == 0) return new_string;
  if (str.startsWith(char)) {
    return removeCharacterFromString({ str: str.substring(char.length), char, new_string });
  } else {
    return removeCharacterFromString({ str: str.substring(1), char, new_string: new_string + str.charAt(0)});
  }
}

console.log(removeCharacterFromString({str:"baccappled",char:"apple"}))

type removeCharacterFromStringParamMethod2 = {
  str: string;
  char: string;
};

function removeCharacterFromStringMethod2({
  str,
  char,
}: removeCharacterFromStringParamMethod2): string {
  if (str.length == 0) return "";
  if (str.startsWith(char)) {
    return removeCharacterFromStringMethod2({ str: str.substring(char.length), char });
  } else {
    return (
      str.charAt(0) + removeCharacterFromStringMethod2({ str: str.substring(1), char })
    );
  }
}

console.log(removeCharacterFromStringMethod2({ str: "baccappled", char: "apple" }));
