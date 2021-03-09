import emojitest from "./emojitest"

export default emojitest
.split("\n")
.filter(l =>
	l.length &&
	l.charAt(0) != "#" &&
	l.includes("; fully-qualified") &&
	!l.includes("skin tone")
)
.map(l => String.fromCodePoint(...l
	.substring(0, l.indexOf(";"))
	.replace(/\s+/g, " ")
	.trim()
	.split(" ")
	.map(codePointStr => Number.parseInt(codePointStr, 16))
))