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

  it('should be able to toggle profiling', function() {
    spyOn(profiling.queryString, 'set');

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalled();
  });
});