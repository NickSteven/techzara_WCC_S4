#!/usr/bin/env node

/**
 * WCC_S4_COMMAND_LINE_APP
 * simple quiz commande line app
 *
 * @author team Collocs <https://github.com/NickSteven>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const rs = require('readline-sync');
const chalk = require('chalk');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();

(async () => {
	input.includes(`start`);

	console.log(chalk.green.bold('START THE GAME \n'));
	// naae input
	var playerName = rs.question('Enter your name : ');
	//greeting the user
	console.log(chalk.yellow(`Welcome ${playerName}\n`));

	// a function to check whether user answer is correct or not
	function gamePlay(questions, correctAnswer) {
		var answer = rs.question(chalk.cyanBright(questions));
		if (answer == correctAnswer) {
			console.log(chalk.green('\tcorrect'));
		} else {
			console.log(chalk.red('\twrong'));
			console.log(
				chalk.greenBright('Correct Answer is: ' + correctAnswer)
			);
		}

		console.log(chalk.blue('\n----------------\n'));
	}
	//Creating questions and answer
	var Q1 = {
		qus: 'Who is the current President of USA? ',
		ans: 'Joe Biden'
	};
	var Q2 = {
		qus: 'How many states are in the Commonwealth? ',
		ans: '56'
	};
	var Q3 = {
		qus: 'When did Martin Luther King died? ',
		ans: '4 april 1968'
	};
	var Q4 = {
		qus: 'Who is the scientific that discover the gravity? ',
		ans: 'Isaac Newton'
	};
	// listing all answer
	qusArray = [Q1, Q2, Q3, Q4];
	//calling function
	for (let i = 0; i < qusArray.length; i++) {
		gamePlay(qusArray[i].qus, qusArray[i].ans);
	}
})();
