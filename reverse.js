function reverseString(str) {
  array = str.split('');
  reversedArray = array.reverse();
  str = reversedArray.join('');
  return str;
}

reverseString("hello");
