new Vue({
    el: "#app",
    data: {
        monsterHealth: 100,
        playerHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.turns = [];
        },
        monsterAttacks() {
            var damageM = Math.max(Math.floor(Math.random() * 12) + 1, 5)
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damageM
            });
            this.playerHealth -= damageM;
            this.checkWin();
        },
        playerDamage(min, max) {
            var damageP = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damageP
            });
            this.monsterHealth -= damageP;
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm("You won ! New Game ?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                // return true to check in the function if the game continue or not
                return true;
            }  else  if (this.playerHealth <= 0) {
                if (confirm("You Loose ! New Game ?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                // return true to check in the function if the game continue or not
                return true;
            };
            return false
        },
        attack() {
            this.playerDamage(3,10);
            // check if continue with the return
            if (this.checkWin()) { return; }
            this.monsterAttacks();
        },
        specialAttack() {
            this.playerDamage(6,15);
            // check if continue with the return
            if (this.checkWin()) { return; }
            this.monsterAttacks();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals himself for 10',
            });
            this.monsterAttacks();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
    }
})