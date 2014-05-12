/*global defineSuite*/
defineSuite([
         'Widgets/Viewer/viewerPerformanceWatchdogMixin',
         'Widgets/PerformanceWatchdog/PerformanceWatchdog',
         'Core/defined',
         'Widgets/Viewer/Viewer'
     ], function(
         viewerPerformanceWatchdogMixin,
         PerformanceWatchdog,
         defined,
         Viewer) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    var container;
    var viewer;
    beforeEach(function() {
        container = document.createElement('div');
        container.id = 'container';
        container.style.display = 'none';
        document.body.appendChild(container);
    });

    afterEach(function() {
        if (viewer && !viewer.isDestroyed()) {
            viewer = viewer.destroy();
        }

        document.body.removeChild(container);
    });

    it('mixin sets default values', function() {
        viewer = new Viewer(container);
        viewer.extend(viewerPerformanceWatchdogMixin);
        expect(viewer.performanceWatchdog).toBeInstanceOf(PerformanceWatchdog);
    });

    it('mixin sets option values', function() {
        viewer = new Viewer(container);
        viewer.extend(viewerPerformanceWatchdogMixin, {
            lowFrameRateMessage : 'Foo'
        });
        expect(viewer.performanceWatchdog.viewModel.lowFrameRateMessage).toBe('Foo');
    });
}, 'WebGL');