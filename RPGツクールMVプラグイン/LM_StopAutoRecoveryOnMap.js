// --------------------------------------------------------------------------

// LM_StopAutoRecoveryOnMap
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc マップ上での自動回復（～回復率X％）を止めます。
 * @author レジェメント
 *

 * @help

 * 
何もしなくて大丈夫です。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 
*/



(function() {



Game_Battler.prototype.regenerateAll = function() {
    if (this.isAlive() && $gameParty.inBattle()) {
        this.regenerateHp();
        this.regenerateMp();
        this.regenerateTp();
    }
};

})();