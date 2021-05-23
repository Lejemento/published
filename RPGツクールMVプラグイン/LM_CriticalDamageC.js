// --------------------------------------------------------------------------

// CriticalDamageCustom
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc クリティカルヒット時のダメージ計算を変更します。
 * @author レジェメント
 *

 * @help

 * 
パラメータに倍率を入力してください（実数。not %）。
 * また、ついでにダメージによるTPの増加を無効化します。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 * @param Bairitsu
 * @desc クリティカルヒット時のダメージ倍率です。
 * @default 2
 
*/



(function() {



var parameters = PluginManager.parameters('LM_CriticalDamageC'); 
var Bairitsu = Number(parameters['Bairitsu']);

Game_Action.prototype.applyCritical = function(damage) {
    return damage * Bairitsu;
};

Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(0 * damageRate * this.tcr);
    this.gainSilentTp(value);
};

})();