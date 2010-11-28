function Profiling() {
  this.queryString = new QueryString();

  this.on = function() {
    var elements = document.getElementsByTagName('table');

    if (elements.length < 1) { return false; }

    var index = elements[0].textContent.search(/Profiling results/i);

    return (index != -1);
  };

  this.toggle = function() {
    var mode = this.on() ? false : true;

    this.queryString.set('profiling', mode);
  };
}