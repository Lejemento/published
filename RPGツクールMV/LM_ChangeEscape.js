// --------------------------------------------------------------------------

// ChangeEscape
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc 逃走成功確率の計算式を変更します。
 * @author レジェメント
 *

 * @help

 * 
メモ帳で開くなりして直接変更してください。
 * 
 * this._escapeRatio・・・逃走成功率計算式
 * this._escapeRatio（二回目）・・・逃走に失敗する度に加算される値
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 
*/



(function() {



BattleManager.makeEscapeRatio = function() { 
    this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};

BattleManager.processEscape = function() {
    $gameParty.performEscape();
    SoundManager.playEscape();
    var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
    if (success) {
        this.displayEscapeSuccessMessage();
        this._escaped = true;
        this.processAbort();
    } else {
        this.displayEscapeFailureMessage();
        this._escapeRatio += 0.1;
        $gameParty.clearActions();
        this.startTurn();
    }
    return success;
};

})();