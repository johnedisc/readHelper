export function Text(title,body) {
    this.title = title;
    this.body = body;
  }

Text.prototype.paraTeaser = () => {
	return this.body.match(/\r/gi);
}
