"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var TileGridComponent = (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        this.instance = openlayers_1.tilegrid.createXYZ(this);
    };
    TileGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-tilegrid',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    TileGridComponent.ctorParameters = function () { return []; };
    TileGridComponent.propDecorators = {
        'extent': [{ type: core_1.Input },],
        'maxZoom': [{ type: core_1.Input },],
        'minZoom': [{ type: core_1.Input },],
        'tileSize': [{ type: core_1.Input },],
    };
    return TileGridComponent;
}());
exports.TileGridComponent = TileGridComponent;
//# sourceMappingURL=tilegrid.component.js.map