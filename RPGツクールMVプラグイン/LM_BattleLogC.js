// --------------------------------------------------------------------------

// BattleLogCustom
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc バトルログの背景をカスタマイズします。
 * @author レジェメント
 *

 * @help

 * 
パラメータに入力してください。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 * @param LogBackColor
 * @desc ログの背景色です。（RGB）
 * @default #000000
 * 
 * @param LogOpacity
 * @desc ログの背景透明度です。（0～255）
 * @default 64
 
*/



(function() {



var parameters = PluginManager.parameters('LM_BattleLogC'); 
var LogBackColor = parameters['LogBackColor'];
var LogOpacity = Number(parameters['LogOpacity']);

Window_BattleLog.prototype.backColor = function() {
    return LogBackColor;
};

Window_BattleLog.prototype.backPaintOpacity = function() {
    return LogOpacity;
};

})();