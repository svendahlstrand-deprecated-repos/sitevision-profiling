function Profiling() {
  this.queryString = new QueryString();

  this.on = function() {
    var mode = this.queryString.get('profiling');

    return (mode == 'true') ? true : false;
  };

  this.toggle = function() {
    var mode = this.on() ? false : true;

    this.queryString.set('profiling', mode);
  };
}