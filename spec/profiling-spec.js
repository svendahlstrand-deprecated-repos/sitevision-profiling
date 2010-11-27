describe('Profiling', function() {
  var profiling;

  beforeEach(function() {
    profiling = new Profiling();
  });

  it('should have a query string', function() {
    expect(profiling.queryString).toBeDefined();
  });

  it('should know if profiling is on', function() {
    profiling.queryString.raw = '?profiling=true';

    expect(profiling.on()).toBe(true);
  });

  it('should switch on when no query string exists', function() {
    spyOn(profiling.queryString, 'set');
    profiling.queryString.raw = '';

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalledWith('profiling', true);
  });

  it('should switch on when profiling is false', function() {
    spyOn(profiling.queryString, 'set');
    profiling.queryString.raw = '?profiling=false';

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalledWith('profiling', true);
  });

  it('should switch off when profiling is true', function() {
    spyOn(profiling.queryString, 'set');
    profiling.queryString.raw = '?profiling=true';

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalledWith('profiling', false);
  });
});