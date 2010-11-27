function Profiling() {
  this.queryString = new QueryString();

  this.on = function() {
    return true;
  };

  this.toggle = function() {
    var mode = this.on ? false : true;

    this.queryString.set('profiling', mode);
  };
}