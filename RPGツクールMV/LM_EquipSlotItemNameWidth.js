// --------------------------------------------------------------------------

// EquipSlotItemNameWidth
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc 装備スロットの用意幅を変更します。
 * @author レジェメント
 *

 * @help

 * 
パラメータにピクセル数を入力してください。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 * @param Length
 * @desc 装備スロットの長さです。
 * @default 
 
*/



(function() {



var parameters = PluginManager.parameters('LM_EquipSlotItemNameWidth'); 
var Length = Number(parameters['Length']);

Window_EquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
        this.drawItemName(this._actor.equips()[index], rect.x + 138, rect.y, Length);
        this.changePaintOpacity(true);
    }
};

})();