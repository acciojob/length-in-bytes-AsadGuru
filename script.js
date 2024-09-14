const byteSize = (str) => {
  // write your code here

	//create a blob object with the input string
	const blob = new Blob([str], { type: 'text/plain' });

	//return the size property of the Blob object which gives the size in bytes
	return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
