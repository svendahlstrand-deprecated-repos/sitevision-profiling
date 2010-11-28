describe('Profiling', function() {
  var profiling;

  beforeEach(function() {
    profiling = new Profiling();
    loadFixtures("fixtures/table.html");
  });

  afterEach(function() {
    jasmine.getFixtures().cleanUp();
  });

  it('should have a query string', function() {
    expect(profiling.queryString).toBeDefined();
  });

  it('should switch on when profiling is off', function() {
    // The cleanup will remove the Profiling results table - simulates profiling off.
    jasmine.getFixtures().cleanUp();
    spyOn(profiling.queryString, 'set');

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalledWith('profiling', true);
  });

  it('should switch off when profiling is on', function() {
    spyOn(profiling.queryString, 'set');

    profiling.toggle();

    expect(profiling.queryString.set).toHaveBeenCalledWith('profiling', false);
  });
});