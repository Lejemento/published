// --------------------------------------------------------------------------

// HelpPlus
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc アイテム・装備・スキルの説明を3行に増やします。
 * @author レジェメント
 *

 * @help

 * 
パラメータに行数を入力してください。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 * @param Gyou
 * @desc ヘルプ欄の行数です。
 * @default 2
 
*/



(function() {



var parameters = PluginManager.parameters('LM_HelpPlus'); 
var Gyou = Number(parameters['Gyou']);

Window_Help.prototype.initialize = function(numLines) {
    var width = Graphics.boxWidth;
    var height = this.fittingHeight(numLines || Gyou);
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this._text = '';
};

})();