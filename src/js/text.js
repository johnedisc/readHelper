export function Text(title,body) {
    this.title = title;
    this.body = body;
  }

Text.prototype.paraTeaser = function() {
	return this.body.match(/^\w+|(?<=\n)\w+\b/gi);
}

